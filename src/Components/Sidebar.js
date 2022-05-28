import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { dataLogin, isAdmin, isDriver, invalidateSession, CheckNotLogin } from "../Helpers/Session";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button
} from "@material-tailwind/react";
const Sidebar = ({ children, active }) => {
    const navigate = useNavigate();
    const [showSidebar, setShowSidebar] = useState(false);

    const logout = () => {
        swal({
            title: "Yakin Mau Keluar?",
            text: "Tekan OK jika yakin",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((value) => {
            if (value) {
                invalidateSession();
                window.location.reload();
            }
        });
    };
    return (

        <>
            <CheckNotLogin>
                <div className="flex">

                    <aside className="bg-primary w-72 md:w-72 h-screen sticky top-0 bottom-0 shadow-right hidden md:block">
                        <div className="px-6 md:px-10">
                            <img src="assets/inowaste2.png" alt="inowaste" className="h-20 object-cover md:object-cover md:h-24"></img>
                        </div>

                        <div className="text-white text-lg mt-12 ml-6 space-y-8">
                            <div className={`${active === "dashboard" ? "bg-secondary rounded-l-full " : ""}hover:bg-secondary hover:rounded-l-full py-2 px-6 focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold`}><a href="#/dashboard" className="flex place-items-center gap-x-3 pr-8 "><img src="assets/dashboard.png" className="object-cover h-4"></img><p>Dashboard</p></a></div>
                            {isAdmin ? (
                                <>
                                    <div className={`${active === "permintaan" ? "bg-secondary rounded-l-full " : ""}hover:bg-secondary hover:rounded-l-full py-2 px-6 focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold`}><a href="#/permintaan" className="flex place-items-center gap-x-3"><img src="assets/permintaan.png" className="object-cover h-4"></img><p>Permintaan</p></a></div>
                                    <div className={`${active === "galeri" ? "bg-secondary rounded-l-full " : ""}hover:bg-secondary hover:rounded-l-full py-2 px-6 focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold`}><a href="#/galeri" className="flex place-items-center gap-x-3"><img src="assets/galeri.png" className="object-cover h-4"></img><p>Galeri</p></a></div>

                                </>
                            ) : (
                                <>
                                    <div className={`${active === "penjemputan" ? "bg-secondary rounded-l-full " : ""}hover:bg-secondary hover:rounded-l-full py-2 px-6 focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold`}><a href="#/penjemputan" className="flex place-items-center gap-x-3 pr-8"><img src="assets/penjemputan.png" className="object-cover h-4"></img><p>Penjemputan</p></a></div>

                                </>
                            )}
                        </div>
                        {/* mt-36 */}
                        <div className="text-white  ml-8 mt-28">
                            <div className="bg-gray-900 rounded-l-full py-2 px-6 focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold hover:bg-black cursor-pointer" onClick={(e) => { logout() }}>
                                <a className="flex place-items-center gap-x-3"><img src="assets/keluar.png" className="object-cover h-4"></img><p>Keluar</p></a>
                            </div>
                        </div>
                    </aside>

                    <div className="w-screen bg-gray-100">
                        <div className="box-border bg-white h-20 shadow-md py-5 flex justify-between items-center px-8 sticky top-0 z-10">

                            <div className="md:hidden">
                                {showSidebar ? (
                                    <svg onClick={() => setShowSidebar(!showSidebar)} className="bloc h-8 w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                ) : (
                                    <svg
                                        onClick={() => setShowSidebar(!showSidebar)}
                                        className="bloc h-8 w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}

                            </div>
                            <div className="container relative block w-2/6">
                                <span className="absolute inset-y-0 right-4 flex items-center pl-2"><button type="submit" className="focus:outline-none"><img src="assets/vectorSearch.png" alt="search" className="object-cover h-5"></img></button></span>
                                <input className="placeholder:text-primary placeholder:font-md block bg-gray-300 w-full border border-slate-300 rounded-full py-2 pl-6 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md" placeholder="Search..." type="text" name="search">
                                </input>
                            </div>
                            <div className="flex items-center gap-x-12">
                                <div className="mt-2">
                                    <button>
                                        <img src="assets/notif.png" className="h-7"></img>
                                    </button>
                                </div>

                                <div className="md:flex hidden">
                                    <Menu>
                                        <MenuHandler>
                                            <div className="flex items-center cursor-pointer">
                                                <img src={dataLogin.gambar_profil} className="rounded-full w-10 h-10 object-cover" />
                                                <span className="ml-3 font-bold text-xl text-primary">{dataLogin.username}</span>
                                                <i className="ml-3 fa-solid fa-sort-down fa-2xs"></i>
                                            </div>
                                        </MenuHandler>
                                        <MenuList className="z-50">
                                            <MenuItem className="text-lg" onClick={(e) => { navigate("/profilmitra") }}>Profile</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>

                                <div className="flex md:hidden">
                                    <Menu>
                                        <MenuHandler>
                                            <div className="flex items-center cursor-pointer">
                                                <img src={dataLogin.gambar_profil} className="rounded-full w-10 h-10 object-cover" />
                                                <i className="ml-3 fa-solid fa-sort-down fa-2xs"></i>
                                            </div>
                                        </MenuHandler>
                                        <MenuList className="z-50">
                                            <MenuItem className="text-lg" onClick={(e) => { navigate("/profilmitra") }}>Profile</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col">
                            <Transition
                                show={showSidebar}
                                enter="ease-in-out duration-500 translate-x-0">

                                {() => (
                                    <aside className="bg-white md:hidden h-fit sticky top-20 shadow-right">


                                        <div className="text-primary text-lg space-y-2 pt-3">
                                            <div className="hover:bg-secondary py-2 px-6 focus-within:bg-secondary hover:font-semibold focus-within:font-semibold"><a href="#/dashboard" className=" "><p>Dashboard</p></a></div>

                                            {isAdmin ? (
                                                <>
                                                    <div className="hover:bg-secondary py-2 px-6 focus-within:bg-secondary hover:font-semibold focus-within:font-semibold"><a href="#/permintaan" className=""><p>Permintaan</p></a></div>
                                                    <div className="hover:bg-secondary py-2 px-6 focus-within:bg-secondary hover:font-semibold focus-within:font-semibold"><a href="#/galeri" className=""><p>Galeri</p></a></div>
                                                </>
                                            )
                                                :
                                                (
                                                    <>
                                                        <div className="hover:bg-secondary py-2 px-6 focus-within:bg-secondary hover:font-semibold focus-within:font-semibold"><a href="#/penjemputan" className=""><p>Penjemputan</p></a></div>

                                                    </>
                                                )}
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
            </CheckNotLogin>
        </>
    );
}

export default Sidebar;