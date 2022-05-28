import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { isAdmin, isLogin, dataLogin, invalidateSession, isDriver } from "../Helpers/Session";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button
} from "@material-tailwind/react";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation().pathname.split("/")[1];
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenAkun, setIsOpenAkun] = useState(false);

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
            {["dashboardDriver", "penjemputan", "galeri", "permintaan", "profilmitra", "dashboard"].includes(location)
                ?
                (
                    <></>
                )
                :
                (
                    <div className="sticky top-0 z-10">
                        <nav className="bg-primary">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between items-center h-20 w-full font-poppins text-white">
                                    <div className=""><a href="#/"><img src="assets/inowaste2.png" className="object-cover h-20"></img></a></div>
                                    <div className="hidden lg:flex">
                                        <span className="ml-6 font-bold text-xl hover:text-secondary"><a href="#/#beranda">Beranda</a></span>
                                        <span className="ml-6 font-bold text-xl hover:text-secondary"><a href="#/mitra">Daftar Mitra</a></span>
                                        <span className="ml-6 font-bold text-xl hover:text-secondary"><a href="#/berita">Berita</a></span>
                                    </div>
                                    {isLogin ?
                                        (
                                            <div className="hidden md:flex">
                                                <div>
                                                    <Menu>
                                                        <MenuHandler>
                                                            <div className="flex items-center cursor-pointer">
                                                                <img src={dataLogin.gambar_profil} className="rounded-full w-10 h-10 object-cover" />
                                                                <span className="ml-3 font-bold text-xl">{dataLogin.username}</span>
                                                                <i className="ml-3 fa-solid fa-sort-down fa-2xs"></i>
                                                            </div>
                                                        </MenuHandler>
                                                        <MenuList className="z-50">
                                                            {isDriver ? (
                                                                <>
                                                                    <MenuItem className="text-lg" onClick={(e) => { navigate("/dashboard") }}>Dashboard</MenuItem>
                                                                    <MenuItem className="text-lg" onClick={(e) => { navigate("/penjemputan") }}>Penjemputan</MenuItem>
                                                                </>
                                                            ) : (
                                                                isAdmin ?
                                                                    (<>
                                                                        <MenuItem className="text-lg" onClick={(e) => { navigate("/dashboard") }}>Dashboard</MenuItem>
                                                                        <MenuItem className="text-lg" onClick={(e) => { navigate("/profil") }}>Permintaan</MenuItem>
                                                                        <MenuItem className="text-lg" onClick={(e) => { navigate("/riwayat") }}>Galeri</MenuItem>
                                                                    </>)
                                                                    :
                                                                    (<>
                                                                        <MenuItem className="text-lg" onClick={(e) => { navigate("/profil") }}>Profil</MenuItem>
                                                                        <MenuItem className="text-lg" onClick={(e) => { navigate("/riwayat") }}>Riwayat</MenuItem>
                                                                        <MenuItem className="text-lg" onClick={(e) => { navigate("/riwayatPoin") }}>Poin</MenuItem>
                                                                    </>)
                                                            )}
                                                            <MenuItem className="text-lg" onClick={(e) => { logout() }}>Keluar</MenuItem>
                                                        </MenuList>
                                                    </Menu>
                                                </div>
                                            </div>
                                        )
                                        :
                                        (
                                            <div className="hidden md:flex">
                                                <a href="#/masuk"><button className="bg-secondary hover:bg-secondarydark px-8 py-2 rounded-full font-bold text-xl">Masuk</button></a>
                                            </div>
                                        )}

                                    <div className="-mr-2 flex md:hidden">
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            type="button"
                                            className="bg-primary inline-flex items-center justify-center p-2 text-white focus:outline-none"
                                            aria-controls="mobile-menu"
                                            aria-expanded="false"
                                        >
                                            <span className="sr-only"></span>
                                            {!isOpen ? (
                                                <svg
                                                    className="block h-8 w-8"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 6h16M4 12h16M4 18h16"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    className="block h-8 w-8"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div >

                            <Transition
                                show={isOpen}
                                enter="transition ease-out duration-100 transform"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="transition ease-in duration-75 transform"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                {() => (
                                    <div className="md:hidden bg-primarydark" id="mobile-menu">
                                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                            <a
                                                href="#/#beranda"
                                                className="text-white hover:text-secondary block px-3 py-2 rounded-md text-xl font-medium"
                                            >
                                                Beranda
                                            </a>

                                            <a
                                                href="#/mitra"
                                                className="text-white hover:text-secondary block px-3 py-2 rounded-md text-xl font-medium"
                                            >
                                                Daftar Mitra
                                            </a>

                                            <a
                                                href="#/berita"
                                                className="text-white hover:text-secondary block px-3 py-2 rounded-md text-xl font-medium"
                                            >
                                                Berita
                                            </a>
                                            <a className="text-white hover:text-secondary block px-3 py-2 rounded-md text-xl font-medium" onClick={(e) => { setIsOpenAkun(!isOpenAkun) }}>
                                                <div className="flex items-center">
                                                    <span>Akun</span>
                                                    <i className={`ml-3 fa-solid fa-2xs ${isOpenAkun ? "fa-caret-right" : "fa-sort-down"}`}></i>
                                                </div>
                                            </a>
                                            <a className={`ml-4 text-white block px-3 py-2 rounded-md text-lg font-medium cursor-pointer ${isOpenAkun ? "block" : "hidden"}`}>
                                                <div className="flex flex-col">
                                                    {isDriver ? (
                                                        <>
                                                            <a className="hover:text-secondary" href="#/dashboard">Dashboard</a>
                                                            <a className="hover:text-secondary" href="#/penjemputan">Penjemputan</a>
                                                        </>
                                                    ) : (
                                                        isAdmin ?
                                                            (<>
                                                                <a className="hover:text-secondary" href="#/dashboard">Dashboard</a>
                                                                <a className="hover:text-secondary" href="#/profil">Permintaan</a>
                                                                <a className="hover:text-secondary" href="#/riwayat">Galeri</a>
                                                            </>)
                                                            :
                                                            (<>
                                                                <a className="hover:text-secondary" href="#/profil">Profil</a>
                                                                <a className="hover:text-secondary" href="#/riwayat">Riwayat</a>
                                                                <a className="hover:text-secondary" href="#/riwayatPoin">Poin</a>
                                                            </>)
                                                    )}
                                                    <a className="hover:text-secondary" onClick={(e) => { logout() }}>Keluar</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </Transition>
                        </nav >
                    </div >)}
        </>
    );
}

export default Navbar;
