const Daftar = () => {
    return (
        <>
        <div className="flex w-full h-full bg-primary md:bg-gradient-to-r md:from-zinc-400 md:via-primary md:to-primary py-10 ">
           <div className="items-center justify-center bg-white border border-light-grey w-5/6 md:w-3/6 h-fit rounded mx-auto py-10 px-6 mb-6 font-poppins mt-10">
                <h1 className="font-bold mb-2 text-3xl text-center">Daftar</h1>
                <p className="mt-1 text-center">Sudah punya akun? <a href="#/masuk" className="text-secondary font-bold underline underline-offset-1">Log In</a></p>

                <select className="form-select block border rounded-lg border-black w-11/12 mt-10 mx-auto p-3 mb-4 text-xs">
                    <option selected>Daftar sebagai</option>
                    <option>User</option>
                    <option>Mitra</option>
                    <option>Driver</option>
                </select>
                <input type="text" className="block border rounded-lg border-black w-11/12 mx-auto p-3 mb-4 text-xs" name="nama" placeholder="Nama"></input>
                <input type="text" className="block border rounded-lg border-black w-11/12 mx-auto mb-4 p-3 text-xs" name="username" placeholder="Username"></input>
                <input type="email" className="block border rounded-lg border-black w-11/12 mx-auto p-3 mb-4 text-xs" name="email" placeholder="E-mail"></input>
                <input type="text" className="block border rounded-lg  border-black w-11/12 mx-auto p-3 mb-4 text-xs" name="noHp" placeholder="Nomor Handphone"></input>
                <textarea className="block border rounded-lg border-black w-11/12 h-auto mx-auto mb-4 text-xs align-center" name="alamat" placeholder="Alamat"></textarea>
                <input type="password" className="block border rounded-lg border-black w-11/12 mx-auto p-3 mb-4 text-xs" name="password" placeholder="Kata Sandi"></input>
                <button type="submit" className=" rounded-full w-11/12 mx-4 text-center p-3 bg-secondary text-white hover:bg-tertiary mt-5 text-xl font-bold focus:outline-none mt-16">Daftar</button>
           </div>
        </div>
        </>
    );
}

export default Daftar;