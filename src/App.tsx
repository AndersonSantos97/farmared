import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import MainMenu from "./screens/MainMenu";
import SalesScreen from "./screens/SalesScreen";
import ClientScreen from "./screens/ClientScreen";

function App() {

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //funcion para el envio del formulario
  const handleSubmit = async (e: { preventDefault: () => void; })=>{

    e.preventDefault();
    try{
      const formData = new FormData();
      formData.append('username',username);
      formData.append('password',password)

      //peticion al servidor
      const response = await fetch('http://127.0.0.1:8000/login',{
        method: 'POST',
        body: formData,
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({username, password}),
      });
      console.log(response);
      if(!response.ok){
        throw new Error('Error en la autenticacion');
      }

      const data = await response.json();
      console.log('Inicio de sesion exitoso',data);

      //guardar el token en localstorage o sessionstorage
      localStorage.setItem('token', data.access_token);

      //redirigir
      navigate('/MainMenu')

    }catch(error){
      console.error('Error en el inicio de sesion: ',error);
    }
  }


  return (
    <>
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <div className="flex justify-center">
              <div className="w-80">
                  <div className="text-center py-8">
                      <div className="flex justify-center">
                          <img width="64" height="64" src="https://img.icons8.com/dusk/64/pills.png" alt="pills"/>
                      </div>
                      
                      <h2 className="text-2xl font-bold">Inicio de sesion</h2>
                  </div>
                  
                  <div>
                      <form onSubmit={handleSubmit} action="" className="space-y-4">
                          <div className="py-4 grid grid-cols-1 gap-4">
                              <label htmlFor="username">Ingrese Usuario</label>
                              <input type="text" name="" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="usuario" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"/>
                          </div>
                          <div className="py-4 grid grid-cols-1 gap-4">
                              <label htmlFor="password">Ingrese Clave</label>
                              <input type="password" name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="clave" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"/>
                          </div>
          
                          <div className="text-center flex justify-between">
                              <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Entrar</button>
                              <button type="button" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Cancelar</button>
                          </div>
                      </form>
                  </div>
      
              </div>

          </div>

        </div>
          
      </section>
    </>
  )
}

function MainApp(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/mainmenu" element={<MainMenu/>}/>
        <Route path="/sale" element={<SalesScreen/>}/>
        <Route path="/client" element={<ClientScreen/>}/>
      </Routes>
    </Router>
  )
}

export default MainApp
