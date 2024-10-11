import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



export default function MainMenu(){
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/');
        }
    }, [navigate]);

    const handleLout =()=>{
        //eliminar el token del almacenamiento
        localStorage.removeItem("token");

        //redirigir al login
        navigate("/");
    };

    const salesScreen =()=>{

        navigate("/sale");
    };

    const clientScreen = () =>{
        navigate("/client")
    }

    return(
        <>
            <div>
                <div className="text-center py-8">

                    <div className="flex justify-center">
                        <img width="64" height="64" src="https://img.icons8.com/dusk/64/pills.png" alt="pills"/>
                    </div>
                      
                      <h2 className="text-2xl font-bold">Menu Principal</h2>
                </div>
            </div>

            <section className="w-full h-screen flex items-center justify-center p-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                    <div className="bg-white border-gray-200 dark:bg-gray-900 p-6 rounded-lg flex items-center justify-center max-w-md">
                        <button type="button" onClick={salesScreen}>
                            <div>
                                <p className="p-6 font-semibold text-sky-400">Venta de productos</p>
                                <p className="text-slate-200">Seccion destinada a la venta de productos disponibles en la formacion. 
                                    Requiere usuario de caja</p>
                            </div>
                        </button>

                    </div>
                    <div className="bg-white border-gray-200 dark:bg-gray-900 p-6 rounded-lg flex items-center justify-center max-w-md">
                        <button>
                            <div>
                                <p className="p-6 font-semibold text-sky-400">Gestion de usuario</p>
                                <p className="text-slate-200">Seccion destinada a la gestion de los usuarios del sistema.
                                    Para el uso de esta seccion se requiere usuario de administracion
                                </p>
                            </div>
                        </button>

                    </div>
                    <div className="bg-white border-gray-200 dark:bg-gray-900 p-6 rounded-lg flex items-center justify-center max-w-md">
                        <button type="button" onClick={clientScreen}>
                            <div>
                                <p className="p-6 font-semibold text-sky-400">Ingreso de clientes</p>
                                <p className="text-slate-200">Seccion destinada para el ingreso formal de clientes de la farmacia.
                                    Se ingresaran aquellos clientes que al llegar a ventanilla asi lo deseen.
                                    Para el uso de esta seccion puede ser usuario de administracion como de caja
                                </p>
                            </div>
                        </button>

                    </div>
                    <div className="bg-white border-gray-200 dark:bg-gray-900 p-6 rounded-lg flex items-center justify-center max-w-md">
                        <button>
                            <div>
                                <p className="p-6 font-semibold text-sky-400">devoluciones</p>
                                <p className="text-slate-200">Seccion destinada para la gestion de reclamos del cliente por algun medicamento,
                                    siempre y cuando este este dentro de las politicas de devoluciones.
                                    Seccion habilitada paea usuarios de administracion y de caja
                                </p>
                            </div>
                        </button>
                    </div>

                    <div className="col-span-2 p-6 flex items-center justify-center max-w-md">
                        <div >
                        <button type="button" onClick={handleLout} className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Cerrar Sesion</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}