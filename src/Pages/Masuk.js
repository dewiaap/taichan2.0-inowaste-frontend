const Masuk = () => {
    return (
        <>
        <div className="w-full h-screen bg-gradient-to-r from-gray-400 via-primary to-primary">
            <div className="grid grid-cols-2">
                <span className="font-poppins font-medium text-5xl text-white ml-20 mt-72">Be Hero to Zero Waste</span>
                <div className="bg-white border border-light-grey w-4/6 h-fit rounded mt-24 ml-28 py-10 px-6">
                    <h1 className="font-poppins font-black mb-2 text-3xl text-center">Log In</h1>
                    <div className="font-poppins text-xs mt-12">
                            <input type="text" className="block border rounded-lg border-black w-11/12 mx-auto p-3 mb-4 mt-8 font-poppins placeholder:text-center text-xs" name="nama" placeholder="Email atau Username" ></input>
                            <input type="password" className="block border rounded-lg border-black w-11/12 mx-auto p-3 mb-4 font-poppins placeholder:text-center text-xs" name="password" placeholder="Kata Sandi"></input>
                            <a href="" className="underline ml-60 font-semibold underline-offset-1">Lupa kata sandi?</a>
                            <button type="submit" className=" rounded-full px-12 py-2 w-11/12 mx-4  text-center p-3 bg-secondary text-white font-bold hover:bg-tertiary mt-6 text-lg focus:outline-none my-1">Masuk
                            </button>
                            <p className="mt-8 text-center">Belum memiliki akun? <a href="#/daftar" className="text-secondary font-bold underline underline-offset-1">Daftar Disini</a></p>
                    </div>
                </div>

            </div>

        </div>
        </>
    );
}

export default Masuk;