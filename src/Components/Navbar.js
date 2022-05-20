const Navbar = () => {
    return (
        <>
        <div className="flex h-20 w-full bg-primary">
        <div className=""><a href="#/"><img src="inowaste2.png" className="object-cover h-20 mt-1 ml-8"></img></a></div>
            <div className="font-poppins text-white mt-5">
                <span className="mx-7 ml-96 font-medium text-xl hover:text-tertiary"><a href="#/#beranda">Beranda</a></span>
                <span className="mx-7 font-medium text-xl hover:text-tertiary"><a href="#/mitra">Daftar Mitra</a></span>
                <span className="mx-7 font-medium text-xl hover:text-tertiary"><a href="#/berita">Berita</a></span>
                <button className="mx-5 ml-32 bg-secondary hover:bg-tertiary px-8 py-2 rounded-full font-bold text-xl"><a href="#/masuk">Masuk</a></button>
            </div>
        </div>
        </>
    );
}

export default Navbar;