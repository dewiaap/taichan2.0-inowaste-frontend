const Mitra = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-fit bg-primary">
                <div className="flex flex-col self-center font-poppins pl-12 pr-12 md:pr-0 order-last md:order-first md:mt-10">
                    <h1 className="font-bold text-3xl md:text-4xl text-white leading-relaxed">Mengumpulkan dan Mengolah Kembali Minyak Jelantah</h1>
                    <p className="font-medium text-xl md:text-2xl text-white mt-5">Bergabunglah bersama kami menjadi mitra Inowaste dan dapatkan minyak jelantah dengan mudah!</p>
                    <div className="flex justify-center md:justify-start">
                        <button className=" rounded-full w-full md:w-56 mt-12 text-center p-3 bg-secondary text-white font-bold hover:bg-tertiary text-lg focus:outline-none mb-16">Daftar Disini
                        </button>
                    </div>
                </div>
                <div className="flex justify-center self-center">
                    <img src="img_mitra.png" className="w-5/6"></img>
                </div>
            </div>
            <div className="font-poppins flex md:flex-row mx-auto mt-14 mb-10 max-w-md md:max-w-4xl">

                <div className="container relative block">
                    <span className="absolute inset-y-0 right-4 flex items-center pl-2"><button type="submit" className="focus:outline-none"><img src="vectorSearch.png" alt="search" className="object-cover h-4"></img></button></span>
                    <input className="placeholder:text-primary placeholder:font-bold block bg-gray-300 w-full border border-slate-300 rounded-full py-2 pl-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search">
                    </input>
                </div>

                <select name="pilihDaerah" className="pl-9 border-0">
                    <option selected>Pilih Daerah</option>
                    <option value="Malang">Malang</option>
                    <option value="Surabaya">Surabaya</option>
                    <option value="Sidoarjo">Sidoarjo</option>
                    <option value="Batu">Batu</option>
                    <option value="None">None</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:mb-12">
                <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 mx-auto">
                    <a href="" className="container box-border border w-48 h-64 p-2 shadow-lg rounded-md mb-6 md:mb-0">
                        <div className="box-content w-16 h-4 py-1 rounded-lg bg-secondary text-xs text-center font-bold text-primary font-poppins justify-self-end">
                            <p>309 poin</p>
                        </div>
                        <div className="flex justify-center">
                            <img src="logoGEU.png" alt="pict" className="object-contain h-28 w-44"></img>
                        </div>
                        <div>
                            <p className="font-halant text-sm font-bold mt-2">PT Green Energi Utama (GEU)</p>
                            <p className="pt-4 font-poppins text-xs text-gray-500 pb-2 text-right">| Malang</p>
                        </div>
                    </a>

                    <a href="" className="container box-border border w-48 h-64 p-2 shadow-lg rounded-md mb-6 md:mb-0">
                        <div className="box-content w-16 h-4 py-1 rounded-lg bg-secondary text-xs text-center font-bold text-primary font-poppins justify-self-end">
                            <p>309 poin</p>
                        </div>
                        <div className="flex justify-center">
                            <img src="logoGEU.png" alt="pict" className="object-contain h-28 w-44"></img>
                        </div>
                        <div>
                            <p className="font-halant text-sm font-bold mt-2">PT Green Energi Utama (GEU)</p>
                            <p className="pt-4 font-poppins text-xs text-gray-500 pb-2 text-right">| Malang</p>
                        </div>
                    </a>

                    <a href="" className="container box-border border w-48 h-64 p-2 shadow-lg rounded-md mb-6 md:mb-0">
                        <div className="box-content w-16 h-4 py-1 rounded-lg bg-secondary text-xs text-center font-bold text-primary font-poppins justify-self-end">
                            <p>309 poin</p>
                        </div>
                        <div className="flex justify-center">
                            <img src="logoGEU.png" alt="pict" className="object-contain h-28 w-44"></img>
                        </div>
                        <div>
                            <p className="font-halant text-sm font-bold mt-2">PT Green Energi Utama (GEU)</p>
                            <p className="pt-4 font-poppins text-xs text-gray-500 pb-2 text-right">| Malang</p>
                        </div>
                    </a>

                    <a href="" className="container box-border border w-48 h-64 p-2 shadow-lg rounded-md mb-6 md:mb-0">
                        <div className="box-content w-16 h-4 py-1 rounded-lg bg-secondary text-xs text-center font-bold text-primary font-poppins justify-self-end">
                            <p>309 poin</p>
                        </div>
                        <div className="flex justify-center">
                            <img src="logoGEU.png" alt="pict" className="object-contain h-28 w-44"></img>
                        </div>
                        <div>
                            <p className="font-halant text-sm font-bold mt-2">PT Green Energi Utama (GEU)</p>
                            <p className="pt-4 font-poppins text-xs text-gray-500 pb-2 text-right">| Malang</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex font-poppins justify-center mb-6">
                <button className="hover:bg-secondary border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                    <div className="py-2 px-2">
                        <img src="nextLeft.png" className="w-2 h-3"></img>
                    </div>
                </button>
                <button className="hover:bg-secondary hover:text-white active:bg-secondary active:text-white border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                    <div className="py-0.5 px-2 text-center font-bold">1
                    </div>
                </button>
                <button className="hover:bg-secondary hover:text-white active:bg-secondary active:text-white border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                    <div className="py-0.5 px-2 text-center font-bold">2
                    </div>
                </button>
                <button className="hover:bg-secondary hover:text-white active:bg-secondary active:text-white border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                    <div className="py-0.5 px-2 text-center font-bold">3
                    </div>
                </button>
                <button className="hover:bg-secondary border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                    <div className="py-2 px-2">
                        <img src="nextRight.png" className="w-2 h-3"></img>
                    </div>
                </button>
            </div>
        </>
    );
}

export default Mitra;