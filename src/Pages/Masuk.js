const Masuk = () => {
    return (
        <>
            <div className="w-full h-screen md:bg-gradient-to-r bg-primary md:from-gray-400 md:via-primary md:to-primary">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="hidden md:flex justify-center self-center">
                        <span className="font-poppins font-medium text-5xl text-white">Be Hero to Zero Waste</span>
                    </div>
                        <div className="mx-auto bg-white border border-light-grey max-w-md rounded py-10 px-6 mt-16">
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