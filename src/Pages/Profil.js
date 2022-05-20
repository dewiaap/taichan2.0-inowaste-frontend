const Profil = () => {
    return (
        <>
        <div className="grid grid-cols-4 items mt-16 mb-28 mx-28 font-poppins">
            <div className="box-border bg-white w-52 h-60 drop-shadow-md rounded-xl">
                <div className="box-border bg-white border-b h-10"><p className="font-extrabold ml-6 mt-6 text-md">Hi, Arum!</p></div>
                <ul className="mx-6 my-4 justify-between text-sm">
                    <li className="mb-3"><a href="">Akun Saya</a></li>
                    <li className="mb-3"><a href="#">Poin Saya</a></li>
                    <li className="mb-3 font-semibold"><a href="#">Riwayat Transaksi</a></li>
                    <li className="mb-3"><a href="#">Log Out</a></li>
                </ul>
            </div>
            <div className="container col-start-2 col-span-4 box-border bg-white w-110 h-auto border border-2 rounded-lg justify-between py-8 px-12 shadow-md">
                <div className="text-primary text-2xl font-extrabold">
                    <p>Data Diri</p>
                </div>
                
                <div className="grid grid-cols-4"> 
                    <div className="mt-8">
                        <img src="gambar_profil.png" className="rounded-full w-28 h-28"></img>
                        <div className="mt-2 ml-6">
                        <input type="file" encType="multipart/form-data" className="font-poppins hidden text-primary font-normal text-sm" placeholder="Ganti Foto" />
                        <button className="font-poppins text-primary font-normal text-sm">Ganti Foto</button>
                        </div>
                    </div>
                        
                    <div className="col-start-2 col-span-3 mt-12">
                            <input type="text" className="block border  rounded-lg border-black w-11/12 p-3 mb-4 font-poppins text-xs" name="nama" placeholder="Nama" defaultValue=""/>
                            <input type="text" className="block border  rounded-lg border-gray-500 w-11/12 bg-gray-200 text-gray-500 mb-4 p-3 font-poppins text-xs" name="username" placeholder="" defaultValue="" readOnly/>
                            <input type="email" className="block border  rounded-lg border-black w-11/12  p-3 mb-4 font-poppins text-xs" name="email" placeholder="E-mail" defaultValue=""/>
                            <input type="text" className="block border  rounded-lg  border-black w-11/12  p-3 mb-4 font-poppins text-xs" name="noHp" placeholder="Nomor Handphone" defaultValue=""/>
                            <textarea className="block border rounded-lg border-black w-11/12 h-auto mb-4 font-poppins text-xs align-center" name="alamat" placeholder="Alamat" defaultValue=""></textarea>
                            <input type="password" className="block border  rounded-lg border-black w-11/12 p-3 mb-4 font-poppins text-xs" name="password" placeholder="Kata Sandi"/>
                            <input type="password" className="block border  rounded-lg border-black w-11/12 p-3 mb-4 font-poppins text-xs" name="password" placeholder="Ulangi Kata Sandi"/>
                        </div>
                </div>
                    <div className="text-right mr-10 mt-6">
                            <button className="py-2 px-6 rounded-full bg-secondary text-white font-poppins text-md font-bold text-center ">Simpan</button>
                        </div>
            </div>
        </div>
        </>
    );
}

export default Profil;