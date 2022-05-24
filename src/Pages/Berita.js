const Berita = () => {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-fit bg-primary py-12">
            <div className="flex flex-col self-center font-poppins order-last md:order-first pl-12 pr-12 md:pr-0">
                <h1 className="font-bold text-3xl md:text-4xl text-white leading-relaxed">Baca Artikel Tentang Minyak Jelantah Disini</h1>
                <p className="font-medium text-xl md:text-2xl text-white mt-5">Temukan hal yang ingin kamu ketahui tentang minyak jelantah dan program menarik dari kami!</p>
            </div>
            <div className="flex self-center justify-center mb-8 md:mb-0">
                <img src="img_berita.png" className="w-fit"></img>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16 mx-10 font-poppins">
            <div className="p-6 shadow-lg rounded-lg border border-gray-100">
                <img src="img_berita1.png" className="rounded-lg"></img>
                <h1 className="font-bold text-4xl mt-4"><a href="#/berita/:id_berita">Minyak Jelantah Jadi Cuan</a></h1>
                <h6 className="text-secondary text-right mt-2 font-bold">Artikel | 29 Apr 2022</h6>
            </div>
            <div className="p-6 shadow-lg rounded-lg border border-gray-100">
                <img src="img_berita1.png" className="rounded-lg"></img>
                <h1 className="font-bold text-4xl mt-4"><a href="#/berita/:id_berita">Minyak Jelantah Jadi Cuan</a></h1>
                <h6 className="text-secondary text-right mt-2 font-bold">Artikel | 29 Apr 2022</h6>
            </div>
            <div className="p-6 shadow-lg rounded-lg border border-gray-100">
                <img src="img_berita1.png" className="rounded-lg"></img>
                <h1 className="font-bold text-4xl mt-4"><a href="#/berita/:id_berita">Minyak Jelantah Jadi Cuan</a></h1>
                <h6 className="text-secondary text-right mt-2 font-bold">Artikel | 29 Apr 2022</h6>
            </div>
        </div>
        </>
    );
}

export default Berita;