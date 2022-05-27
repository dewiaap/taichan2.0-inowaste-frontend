import React, { useState } from "react";
import { Transition } from "@headlessui/react";
const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        
        <>
        <div className="flex">
        
        <aside className="bg-primary w-72 md:w-72 h-screen sticky top-0 bottom-0 shadow-right hidden md:block">
            <div className="px-6 md:px-10">
                <img src="inowaste2.png" alt="inowaste" className="h-20 object-cover md:object-cover md:h-24"></img>
            </div>

            <div className="text-white text-lg mt-12 ml-6 space-y-8">
                <div className="hover:bg-secondary hover:rounded-l-full py-2 px-6 focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold"><a href="#/dashboard" className="flex place-items-center gap-x-3 pr-8 "><img src="dashboard.png" className="object-cover h-4"></img><p>Dashboard</p></a></div>
                <div className="hover:bg-secondary hover:rounded-l-full py-2 px-6 focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold"><a href="#/permintaan" className="flex place-items-center gap-x-3"><img src="permintaan.png" className="object-cover h-4"></img><p>Permintaan</p></a></div>
                <div className="hover:bg-secondary hover:rounded-l-full py-2 px-6  focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold"><a href="#/galeri" className="flex place-items-center gap-x-3"><img src="galeri.png" className="object-cover h-4"></img><p>Galeri</p></a></div>
                <div className="hover:bg-secondary hover:rounded-l-full py-2 px-6  focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold"><a href="#/penjemputan" className="flex place-items-center gap-x-3 pr-8"><img src="penjemputan.png" className="object-cover h-4"></img><p>Penjemputan</p></a></div>
            </div>
            {/* mt-36 */}
            <div className="text-white   ml-8 mt-28">
                <div className="bg-gray-900 rounded-l-full py-2 px-6 focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold hover:bg-black">
                <a href="#" className="flex place-items-center gap-x-3"><img src="keluar.png" className="object-cover h-4"></img><p>Keluar</p></a>
                </div>
            </div>
        </aside>

        <div className="w-screen bg-gray-100">
            <div className="box-border bg-white h-20 shadow-md py-5 flex justify-between items-center px-8 sticky top-0 z-10">
            
            <div className="md:hidden">
            {showSidebar ? (
                <svg onClick={() => setShowSidebar(!showSidebar)} className="bloc h-8 w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
                <svg
                onClick={() => setShowSidebar(!showSidebar)}
                className="bloc h-8 w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                {/* <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect> */}
                </svg>
            )}

            </div>
            
                {/* <div className="flex md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-white inline-flex items-center justify-center p-2 text-primary focus:outline" aria-controls="mobile-menu" aria-expanded="false" ></button>
                        <span className="sr-only"></span>
                        {!isOpen ?(
                            <svg className="bloc h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                        ):(<svg className="bloc h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>)}
                    </button>
                </div> */}
                

                <div className="container relative block w-2/6">
                            <span className="absolute inset-y-0 right-4 flex items-center pl-2"><button type="submit" className="focus:outline-none"><img src="vectorSearch.png" alt="search" className="object-cover h-5"></img></button></span>
                            <input className="placeholder:text-primary placeholder:font-md block bg-gray-300 w-full border border-slate-300 rounded-full py-2 pl-6 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md" placeholder="Search..." type="text" name="search">
                            </input>
                </div>
                <div className="flex items-center gap-x-12">
                    <div className="mt-2">
                        <button>
                            <img src="notif.png" className="h-7"></img>
                        </button>
                    </div>

                    <div className="flex md:flex hidden">
                    <img src="logoGEU.png" className="h-14"></img>
                    <select className="border-0 font-bold text-primary">
                        <option className="">PT Green Energi Utama</option>
                        <option>Profile</option>
                    </select>
                    </div>

                    <div className="flex md:hidden">
                        <img src="logoGEU.png" className="h-14"></img> 
                        {/* ini mau dibuat dropdown tp aku gatau caranya */}
                    </div>
                </div>
                
            </div>

            <div className="flex flex-col">
            <Transition 
            show={showSidebar}
            enter="ease-in-out duration-500 translate-x-0">
            
            {()=>(
                <aside className="bg-white md:hidden h-fit sticky top-0 bottom-0 shadow-right sticky top-0 md:hidden">
                    
    
                <div className="text-primary text-lg space-y-2 pt-3">
                    <div className="hover:bg-secondary py-2 px-6 focus-within:bg-secondary hover:font-semibold focus-within:font-semibold"><a href="#/dashboard" className=" "><p>Dashboard</p></a></div>
                    <div className="hover:bg-secondary py-2 px-6 focus-within:bg-secondary hover:font-semibold focus-within:font-semibold"><a href="#/permintaan" className=""><p>Permintaan</p></a></div>
                    <div className="hover:bg-secondary py-2 px-6 focus-within:bg-secondary hover:font-semibold focus-within:font-semibold"><a href="#/galeri" className=""><p>Galeri</p></a></div>
                    <div className="hover:bg-secondary py-2 px-6 focus-within:bg-secondary hover:font-semibold focus-within:font-semibold"><a href="#/penjemputan" className=""><p>Penjemputan</p></a></div>
                </div>
                {/* mt-36 */}
                <div className="text-white mt-8 pb-8">
                    <div className="bg-gray-700 py-2 px-6 focus-within:font-semibold hover:bg-black">
                    <a href="#" className=""><p>Keluar</p></a>
                    </div>
                </div>
            </aside>
            )
            }
            </Transition>
            <div>
                {children}
            </div>
            </div>   
            

          
            
        </div>

       
        </div>
        </>
    );
}

export default Sidebar;