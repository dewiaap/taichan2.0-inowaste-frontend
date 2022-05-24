const Home = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 h-fit bg-primary pt-12 md:pt-12">
                <div className="flex flex-col self-center font-poppins pl-12 pr-12 md:pr-0 order-last md:order-first">
                    <h1 className="font-bold text-5xl text-white">Be Hero to Zero Waste</h1>
                    <p className="font-medium text-xl md:text-2xl text-white mt-8 text-justify md:text-left"><strong>inowaste</strong> merupakan platform berbasis website yang dapat
                        mempertemukan pengepul dengan penghasil minyak jelantah dengan mudah.</p>
                    <div className="flex justify-center md:justify-start">
                        <button className="rounded-full px-12 py-2 w-full md:w-56 mt-8 text-center p-3 bg-secondary text-white font-bold hover:bg-tertiary text-lg focus:outline-none my-1">Tukar Minyak
                        </button>
                    </div>
                </div>
                <div className="flex justify-center mb-6 md:mb-0">
                    <img src="home_img.png" className="w-9/12"></img>
                </div>
            </div>
            <div className="">
                <img src="vector_wave.png"></img>
            </div>
            <div className="grid grid-cols-1">
                <div className="font-bold font-poppins text-primary text-3xl md:text-5xl mt-16 mb-8 text-center px-12 md:px-0">
                    <h1>Langkah Penukaran Minyak</h1>
                </div>
                <div className="flex justify-center mb-28">
                    <img src="line_home.png"></img>
                </div>
                <div className="flex w-5/6 justify-center mx-auto mb-32">
                    <img src="langkah_img.png"></img>
                </div>
            </div>
            <div className="grid grid-cols-2 font-poppins text-white">
                <div className=" bg-primary py-10 px-10">
                    <h1 className="font-bold text-3xl">VISI KAMI</h1>
                    <p className="mt-8 text-md md:text-xl">Menjaga kelestarian lingkungan dengan cara membantu menyalurkan minyak jelantah</p>
                </div>
                <div className=" bg-secondary py-10 px-10 text-right">
                    <h1 className="font-bold text-3xl">MISI KAMI</h1>
                    <p className="mt-8 text-md md:text-xl">1. Mempertemukan pengepul dengan penghasil minyak jelantah <br></br>
                        2. Mengajak dan mengedukasi masyarakat menyalurkan minyak jelantah</p>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <div className="font-bold font-poppins text-primary text-3xl md:text-5xl mt-16 mb-8 text-center">
                    <h1>Daftar Mitra</h1>
                </div>
                <div className="flex justify-center mb-6 md:mb-20">
                    <img src="line_home.png"></img>
                </div>
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
                <div className="flex justify-center">
                    <button className="rounded-full w-full md:w-3/6 text-center p-3 bg-secondary text-white hover:bg-tertiary text-xl font-bold focus:outline-none my-16"><a href="#/mitra">Lihat Semua</a></button>
                </div>
            </div>
        </>
    );
}

export default Home;