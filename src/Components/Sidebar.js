const Sidebar = ({children}) => {
    return (
        <>
        <div className="flex sticky top-0">
        <aside className="bg-primary w-72 max-h shadow-right">
            <div className="px-12 pt-1">
                <img src="inowaste2.png" alt="inowaste" className="object-cover h-20"></img>
            </div>

            <div className="text-white text-lg mt-12 ml-8 space-y-8">
                <div className="hover:bg-secondary hover:rounded-l-full py-2 px-6 focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold"><a href="#/profilmitra/:id_mitra" className="flex place-items-center gap-x-3"><img src="dashboard.png" className="object-cover h-4"></img><p>Dashboard</p></a></div>
                <div className="hover:bg-secondary hover:rounded-l-full py-2 px-6 focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold"><a href="#" className="flex place-items-center gap-x-3"><img src="permintaan.png" className="object-cover h-4"></img><p>Permintaan</p></a></div>
                <div className="hover:bg-secondary hover:rounded-l-full py-2 px-6 focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold"><a href="#" className="flex place-items-center gap-x-3"><img src="galeri.png" className="object-cover h-4"></img><p>Galeri</p></a></div>
            </div>
            {/* mt-36 */}
            <div className="text-white   ml-8 mt-36">
                <div className="bg-gray-900 rounded-l-full py-2 px-6 focus-within:bg-secondary focus-within:rounded-l-full focus-within:font-semibold">
                <a href="#" className="flex place-items-center gap-x-3"><img src="keluar.png" className="object-cover h-4"></img><p>Keluar</p></a>
                </div>
            </div>
        </aside>

        <div className="w-screen bg-gray-100 sticky top-0">
            <div className="box-border bg-white h-20 shadow-md py-5 flex justify-between items-center px-8">
                <div className="container relative block w-2/6">
                            <span className="absolute inset-y-0 right-4 flex items-center pl-2"><button type="submit" className="focus:outline-none"><img src="vectorSearch.png" alt="search" className="object-cover h-5"></img></button></span>
                            <input className="placeholder:text-primary placeholder:font-md block bg-gray-300 w-full border border-slate-300 rounded-full py-2 pl-6 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md" placeholder="Search..." type="text" name="search">
                            </input>
                </div>
                <div className="flex items-center gap-x-12">
                    <div>
                        <button>
                            <img src="notif.png" className="h-7"></img>
                        </button>
                    </div>

                    <div className="flex">
                    <img src="logoGEU.png" className="h-14"></img>
                    <select className="border-0 font-bold text-primary">
                        <option>PT Green Energi Utama</option>
                        <option>Profile</option>
                    </select>
                    </div>
                </div>
            </div>

            <div>
                {children}
            </div>
        </div>
        </div>
        </>
    );
}

export default Sidebar;