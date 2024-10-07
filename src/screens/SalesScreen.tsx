import React,{useState} from "react"


    export default function SalesScreen(){

        const [searchQuery, setSearchQuery] = useState(''); 
        const [productName, setProductName] = useState('');
        const [unitaryPrice, setUnitaryPrice] = useState('');
        const [productImg, setProductImg] = useState('');
        const [searchCli, setSearchCli] = useState('');
        const [clieName, setClieName] = useState('');
        const [clieDni, setClieDni] = useState('');

        const handleSearch = async() => {
            try{
                const response = await fetch(`http://127.0.0.1:8000/productname/${searchQuery}`);

                if(!response.ok){
                    throw new Error('Producto no encontrado')
                }
                const product = await response.json();
                setProductName(product.description);
                setUnitaryPrice(product.precio);
                setProductImg(product.img);
            }catch(error){
                console.error('Error fetching product: ', error)
                alert('Producto no encontrado');
            }
        };

        const hanldeCliente = async() =>{
            try{
                const responseCli = await fetch(`http://127.0.0.1:8000/findDni/${searchCli}`);

                if(!responseCli.ok){
                    throw new Error('Cliente no encontrado')
                }

                const client = await responseCli.json();
                setClieName(client.nombre);
                setClieDni(client.dni);
            }catch(error){
                console.error('Error fetching client: ', error);
                alert('No se encontro el cliente');
            }
        };
        
        return(
            <>
                <header>
                    <nav className="bg-white border-gray-200 dark:bg-gray-900">
                        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FARMARED</span>

                            <div className="flex md:order-1">
                                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search</span>
                                </button>
                                <div className="relative hidden md:block">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input type="text" value={searchQuery} 
                                        onChange={(e)=> setSearchQuery(e.target.value)} id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                                </div>
                                <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
                                    Buscar
                                </button>
                                <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-search">
                                <div className="relative mt-3 md:hidden">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    </div>
                                    <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                                </div>
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Regresar</a>
                                    </li>
                                    <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Salir</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <section className="m-10">
                    <div className="grid grid-cols-3">
                        <div>
                            {productImg ? (
                                <img src={productImg} alt="Imagen el producto" className="max-w-full h-auto"/>
                            ):(
                                <span>No hay imagen disponible</span>
                            )}
                        </div>
                        <div className="">
                            <div>
                                    <div>
                                        <label htmlFor="client-dni" className="block mb-2 text-sm font-medium text-black dark:text-blue-600">DNI del Cliente</label>
                                        <input type="text" id="client-dni" 
                                        value={searchCli}
                                        onChange = {(e) => setSearchCli(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DNI del Cliente" required />
                                        <button onClick={hanldeCliente} className="ml-2 p-2 bg-blue-500 text-white rounded">
                                            Buscar
                                        </button>
                                    </div>
                            </div>
                            <form action="">
                                <div>
                                    <div>
                                        <label htmlFor="client-name" className="block mb-2 text-sm font-medium text-black dark:text-blue-600">Nombre del Cliente</label>
                                        <input type="text" id="client-name" 
                                        value={clieName}
                                        readOnly
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del Cliente" required />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="product-name" className="block mb-2 text-sm font-medium text-black dark:text-blue-600">Nombre del Producto</label>
                                        <input type="text" id="product-name" 
                                        value={productName}
                                        readOnly
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Producto" required />
  
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <label htmlFor="unitary-price" className="block mb-2 text-sm font-medium text-black dark:text-blue-600">Precio Unitario</label>
                                        <input type="text" id="unitary-price" 
                                        value={unitaryPrice}
                                        readOnly
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Precio" required />
                                    </div>
                                </div>

                                <div>
                                    <div>
                                    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-600">Cantidad</label>
                                    <input type="number" id="quantity" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>
            </>
        )
    }