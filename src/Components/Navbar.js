const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center h-20 w-full bg-primary px-12 font-poppins text-white sticky top-0">
                <div className=""><a href="#/"><img src="inowaste2.png" className="object-cover h-20"></img></a></div>
                <div className="">
                    <span className="ml-6 font-bold text-xl hover:text-tertiary"><a href="#/#beranda">Beranda</a></span>
                    <span className="ml-6 font-bold text-xl hover:text-tertiary"><a href="#/mitra">Daftar Mitra</a></span>
                    <span className="ml-6 font-bold text-xl hover:text-tertiary"><a href="#/berita">Berita</a></span>
                </div>
                <div className="">
                    <button className="bg-secondary hover:bg-tertiary px-8 py-2 rounded-full font-bold text-xl"><a href="#/masuk">Masuk</a></button>
                </div>
            </div>
        </>
    );
}

export default Navbar;