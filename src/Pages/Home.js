const Home = () => {
    return (
        <>
        <div className="grid grid-cols-2 w-full h-fit bg-primary ">
            <div className="font-poppins ml-16">
                <h1 className="font-bold text-5xl text-white mt-52">Be Hero to Zero Waste</h1>
                <p className="font-medium text-2xl text-white mt-11"><strong>inowaste</strong> merupakan platform berbasis website yang dapat 
                    mempertemukan pengepul dengan penghasil minyak jelantah dengan mudah.</p>
                <button className=" rounded-full px-12 py-2 w-56 mt-8 text-center p-3 bg-secondary text-white font-bold hover:bg-tertiary mt-6 text-lg focus:outline-none my-1">Tukar Minyak
                </button>
            </div>
            <div className="mt-28 ml-8">
                <img src="home_img.png"></img>
            </div>
        </div>
        <div>
            <img src="vector_wave.png"></img>
        </div>
        <div className="font-bold font-poppins text-primary text-5xl mt-16 mb-8 text-center">
            <h1>Langkah Penukaran Minyak</h1>
        </div>
        <div className="flex justify-center mb-28">
            <img src="line_home.png"></img>
        </div>
        <div className="w-5/6 mx-24 mb-32">
            <img src="langkah_img.png"></img>
        </div>
        <div className="grid grid-cols-2 border border-2 font-poppins text-white h-72 drop-shadow-xl mb-20">
            <div className=" bg-primary py-10 px-10">
                <h1 className="font-bold text-3xl">VISI KAMI</h1>
                <p className="mt-8 text-xl">Menjaga kelestarian lingkungan dengan cara membantu menyalurkan minyak jelantah</p>
            </div>
            <div className=" bg-secondary py-10 px-10 text-right">
                <h1 className="font-bold text-3xl">MISI KAMI</h1>
                <p className="mt-8 text-xl">1. Mempertemukan pengepul dengan penghasil minyak jelantah <br></br>
                    2. Mengajak dan mengedukasi masyarakat menyalurkan minyak jelantah</p>
            </div>
        </div>
        <div className="font-bold font-poppins text-primary text-5xl mt-16 mb-8 text-center">
            <h1>Daftar Mitra</h1>
        </div>
        <div className="flex justify-center mb-20">
            <img src="line_home.png"></img>
        </div>
        <div className="px-11 mb-10">
            <div className="flex space-x-14 place-content-center mt-8">
                    <a href="" className="container flex box-border border w-48 h-64 p-2  shadow-lg rounded-md grid grid-cols-1 devide-y">
                        <div className="box-content w-16 h-4 py-1 rounded-lg bg-secondary text-xs text-center font-bold text-primary font-poppins justify-self-end">
                        <p>309 poin</p>
                        </div>
                        <img src="logoGEU.png" alt="pict" className="px-4 mt-4 object-cover h-28 w-44"></img>
                        <div>
                            <p className="font-halant text-sm font-bold mt-2">PT Green Energi Utama (GEU)</p>
                            <p className="pt-4 font-poppins text-xs text-gray-500 pb-2 text-right">| Malang</p>
                        </div>
                    </a>

                    <a href="" className="container flex box-border border w-48 h-64 p-2  shadow-lg rounded-md grid grid-cols-1 devide-y">
                        <div className="box-content w-16 h-4 py-1 rounded-lg bg-secondary text-xs text-center font-bold text-primary font-poppins justify-self-end">
                        <p>309 poin</p>
                        </div>
                        <img src="logoGEU.png" alt="pict" className="px-4 mt-4 object-cover h-28 w-44"></img>
                        <div>
                            <p className="font-halant text-sm font-bold mt-2">PT Green Energi Utama (GEU)</p>
                            <p className="pt-4 font-poppins text-xs text-gray-500 pb-2 text-right">| Malang</p>
                        </div>
                    </a>

                    <a href="" className="container flex box-border border w-48 h-64 p-2  shadow-lg rounded-md grid grid-cols-1 devide-y">
                        <div className="box-content w-16 h-4 py-1 rounded-lg bg-secondary text-xs text-center font-bold text-primary font-poppins justify-self-end">
                        <p>309 poin</p>
                        </div>
                        <img src="logoGEU.png" alt="pict" className="px-4 mt-4 object-cover h-28 w-44"></img>
                        <div>
                            <p className="font-halant text-sm font-bold mt-2">PT Green Energi Utama (GEU)</p>
                            <p className="pt-4 font-poppins text-xs text-gray-500 pb-2 text-right">| Malang</p>
                        </div>
                    </a>

                    <a href="" className="container flex box-border border w-48 h-64 p-2  shadow-lg rounded-md grid grid-cols-1 devide-y">
                        <div className="box-content w-16 h-4 py-1 rounded-lg bg-secondary text-xs text-center font-bold text-primary font-poppins justify-self-end">
                        <p>309 poin</p>
                        </div>
                        <img src="logoGEU.png" alt="pict" className="px-4 mt-4 object-cover h-28 w-44"></img>
                        <div>
                            <p className="font-halant text-sm font-bold mt-2">PT Green Energi Utama (GEU)</p>
                            <p className="pt-4 font-poppins text-xs text-gray-500 pb-2 text-right">| Malang</p>
                        </div>
                    </a>
            </div>
        </div>
        <div>
        <button className=" rounded-full w-3/6 mx-72 text-center p-3 bg-secondary text-white hover:bg-tertiary text-xl font-bold focus:outline-none my-16"><a href="#/mitra">Lihat Semua</a></button>
        </div>

        </>
    );
}

export default Home;