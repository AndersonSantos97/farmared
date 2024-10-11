import { useState } from "react";
import { useNavigate } from "react-router-dom"



export default function ClientScreen(){

    const navigate = useNavigate();
    const [clientName, setClientName] = useState('');
    const [clientDNI, setClientDNI] = useState('');
    const [clientDirect, setClientDirect] = useState('')
    const [clientFechaNac, setClientFechaNac] = useState('')

    const mainScreen = () => {
        navigate("/MainMenu");
    };

    const logout = () => {
        localStorage.removeItem("token");

        navigate("/");
    }

    const handleSubmit = async() => {
        const clientData = {
            nombre: clientName,
            dni: clientDNI,
            direccion: clientDirect,
            fecha_nac: clientFechaNac
        };

        try{
            const response = await fetch("http://127.0.0.1:8000/client/",{
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(clientData),
            });

            if(!response.ok){
                throw new Error("Error al crear el cliente");
            }

            const result = await response.json();
            alert(`Cliente creado con exito, ID: ${result.cliente_id}`)


        }catch(error){
            console.error("Error al ingresar el cliente: ",error)
            alert("Hubo un problema al crear el cliente");
        }
    }


    return(
        <>
            <header className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FARMARED</span>

                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ingreso de Cliente</span>
                    <div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a onClick={mainScreen} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Regresar</a>
                            </li>
                            <li>
                                <a onClick={logout} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Salir</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </header>

            <section className="my-10 mx-52 px-40">

                <form onSubmit={(e) => {e.preventDefault(); handleSubmit(); }} action="" className="bg-white border-gray-200 dark:bg-gray-900 rounded-md p-2">

                    <div className="pb-12">
                        <div>
                            <label htmlFor="client_name" className="block mb-2 text-sm font-medium text-black dark:text-blue-600">Nombre del cliente</label>
                            <input type="text" id="client_name"
                            value={clientName}
                            onChange={(e)=>setClientName(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre Completo" required />
                        </div>
                    </div>

                    <div className="pb-12">
                        <div>
                            <label htmlFor="client_dni" className="block mb-2 text-sm font-medium text-black dark:text-blue-600">DNI del cliente</label>
                            <input type="text" id="client_dni"
                            onChange={(e)=>setClientDNI(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DNI con guiones" required />
                        </div>
                    </div>

                    <div className="pb-12">
                        <div>
                            <label htmlFor="client_address" className="block mb-2 text-sm font-medium text-black dark:text-blue-600">Direccion del cliente</label>
                            <input type="text" id="client_address"
                            onChange={(e)=>setClientDirect(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Direccion completa" required />
                        </div>
                    </div>

                    <div className="pb-12">
                        <div>
                            <label htmlFor="client_birth" className="block mb-2 text-sm font-medium text-black dark:text-blue-600">Nacimiento del cliente</label>
                            <input id="client_birth" type="date" 
                            onChange={(e)=>setClientFechaNac(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seleccione Fecha"/>
                        </div>
                    </div>


                    <div className="my-2 flex">
                        <div>
                            <button  type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )

}