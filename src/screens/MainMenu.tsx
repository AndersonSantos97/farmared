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
        navigate("/login");
    };

    return(
        <>
            <div>
            <button type="button" onClick={handleLout} className="bg-indigo-500 text-white m-1 px-2 py-1 rounded-md hover:bg-indigo-600">Cerrar Sesion</button>

            </div>
            <section className="w-full h-screen flex items-center justify-center p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center max-w-md">
                        <div>
                            <p className="p-6">Venta de productos</p>
                            <p>Seccion destinada a la venta de productos disponibles en la formacion. 
                                Requiere usuario de caja</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center max-w-md">
                        <div>
                            <p className="p-6">Gestion de usuario</p>
                            <p>Seccion destinada a la gestion de los usuarios del sistema.
                                Para el uso de esta seccion se requiere usuario de administracion
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center max-w-md">
                        <div>
                            <p className="p-6">Ingreso de clientes</p>
                            <p>Seccion destinada para el ingreso formal de clientes de la farmacia.
                                Se ingresaran aquellos clientes que al llegar a ventanilla asi lo deseen.
                                Para el uso de esta seccion puede ser usuario de administracion como de caja
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center max-w-md">
                        <div>
                            <p className="p-6">devoluciones</p>
                            <p>Seccion destinada para la gestion de reclamos del cliente por algun medicamento,
                                siempre y cuando este este dentro de las politicas de devoluciones.
                                Seccion habilitada paea usuarios de administracion y de caja
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}