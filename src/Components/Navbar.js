import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { isAdmin, isLogin, dataLogin } from "../Helpers/Session";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {isAdmin
                ?
                (
                    <></>
                )
                :
                (
                    <div className="sticky top-0 z-50">
                        <nav className="bg-tertiary md:bg-primary">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between items-center h-20 w-full font-poppins text-white">
                                    <div className=""><a href="#/"><img src="inowaste2.png" className="object-cover h-20"></img></a></div>
                                    <div className="hidden md:flex">
                                        <span className="ml-6 font-bold text-xl hover:text-tertiary"><a href="#/#beranda">Beranda</a></span>
                                        <span className="ml-6 font-bold text-xl hover:text-tertiary"><a href="#/mitra">Daftar Mitra</a></span>
                                        <span className="ml-6 font-bold text-xl hover:text-tertiary"><a href="#/berita">Berita</a></span>
                                    </div>
                                    {isLogin ?
                                        (
                                            <div className="hidden md:flex items-center cursor-pointer">
                                                <img src={dataLogin.gambar_profil} className="rounded-full w-10 h-10 object-cover"/>
                                                <span className="ml-3 font-bold text-xl">{dataLogin.username}</span>
                                                <i className="ml-3 fa-solid fa-sort-down"></i>
                                            </div>
                                        )
                                        :
                                        (
                                            <div className="hidden md:flex">
                                                <a href="#/masuk"><button className="bg-secondary hover:bg-tertiary px-8 py-2 rounded-full font-bold text-xl">Masuk</button></a>
                                            </div>
                                        )}

                                    <div className="-mr-2 flex md:hidden">
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            type="button"
                                            className="bg-tertiary inline-flex items-center justify-center p-2 text-white focus:outline-none"
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
                                    <div className="md:hidden" id="mobile-menu">
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
