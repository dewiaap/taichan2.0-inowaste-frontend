const Berita = () => {
    return (
        <>
        <div className="grid grid-cols-2 w-full h-fit bg-primary ">
            <div className="font-poppins ml-16">
                <h1 className="font-bold text-5xl text-white mt-16 leading-relaxed">Baca Artikel Tentang Minyak Jelantah Disini</h1>
                <p className="font-medium text-2xl text-white mt-5">Temukan hal yang ingin kamu ketahui tentang minyak jelantah dan program menarik dari kami!</p>
            </div>
            <div className="mt-20 ml-40 mb-10">
                <img src="img_berita.png"></img>
            </div>
        </div>
        <div className="flex grid grid-cols-3 mt-12 mb-16 mx-10 font-poppins">
            <div className="mx-4">
                <img src="img_berita1.png" className="rounded-lg"></img>
                <h1 className="font-bold text-4xl mt-4"><a href="#/berita/:id_berita">Minyak Jelantah Jadi Cuan</a></h1>
                <h6 className="text-secondary text-right mt-2 font-bold">Artikel | 29 Apr 2022</h6>
            </div>
            <div className="mx-4">
                <img src="img_berita1.png" className="rounded-lg"></img>
                <h1 className="font-bold text-4xl mt-4"><a href="#/berita/:id_berita">Minyak Jelantah Jadi Cuan</a></h1>
                <h6 className="text-secondary text-right mt-2 font-bold">Artikel | 29 Apr 2022</h6>
            </div>
            <div className="mx-4">
                <img src="img_berita1.png" className="rounded-lg"></img>
                <h1 className="font-bold text-4xl mt-4"><a href="#/berita/:id_berita">Minyak Jelantah Jadi Cuan</a></h1>
                <h6 className="text-secondary text-right mt-2 font-bold">Artikel | 29 Apr 2022</h6>
            </div>
        </div>
        <div className="flex grid grid-cols-3 mt-12 mb-16 mx-10 font-poppins">
            <div className="mx-4">
                <img src="img_berita1.png" className="rounded-lg"></img>
                <h1 className="font-bold text-4xl mt-4"><a href="#/berita/:id_berita">Minyak Jelantah Jadi Cuan</a></h1>
                <h6 className="text-secondary text-right mt-2 font-bold">Artikel | 29 Apr 2022</h6>
            </div>
            <div className="mx-4">
                <img src="img_berita1.png" className="rounded-lg"></img>
                <h1 className="font-bold text-4xl mt-4"><a href="#/berita/:id_berita">Minyak Jelantah Jadi Cuan</a></h1>
                <h6 className="text-secondary text-right mt-2 font-bold">Artikel | 29 Apr 2022</h6>
            </div>
            <div className="mx-4">
                <img src="img_berita1.png" className="rounded-lg"></img>
                <h1 className="font-bold text-4xl mt-4"><a href="#/berita/:id_berita">Minyak Jelantah Jadi Cuan</a></h1>
                <h6 className="text-secondary text-right mt-2 font-bold">Artikel | 29 Apr 2022</h6>
            </div>
        </div>
        </>
    );
}

export default Berita;