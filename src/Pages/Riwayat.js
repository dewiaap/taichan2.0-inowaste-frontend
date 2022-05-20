const Riwayat = () => {
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

            <div className="container col-start-2 col-span-4 box-border bg-white w-110 h-auto border border-2 rounded-xl justify-between pt-8 pb-24 px-12 shadow-md">
                <div className="text-primary text-2xl font-extrabold">
                        <p>Riwayat Transaksi</p>
                </div>

                <div className="flex gap-x-6 mt-6">
                    <p className="font-bold mt-3">Pilih Status</p>
                    <select className="rounded-3xl shadow-md border-white">
                        <option>Dalam Proses</option>
                        <option>Selesai</option>
                    </select>
                </div>

                <div className="container box-border w-full h-56 border-2 border-gray-100 p-2 mt-8 mr-12 rounded-md shadow-md grid grid-cols-2 devide-x"> 
                    <div className="box-content ml-6 mt-3 text-sm"> 
                        <span className="text-gray-500">28 Februari 2022</span>
                        <div className="my-3 font-bold text-md">
                            <p>PT Green Energi Utama (GEU)</p>
                        </div>
                        <div className="container box-border border-2 w-32 h-16 rounded-md py-4 pl-4 font-extrabold text-2xl text-primary shadow-md">
                            <p className="">1.5 Liter</p>
                        </div>
                    </div>
                    <div className="box-content mt-3 mr-6 text-sm text-right">
                            
                            <span className="mx-2 text-gray-500">01238HH79J0</span>
                            <span className="text-primary font-s">MENUNGGU PENJEMPUTAN</span>
                            
                            <p className="box-content mx-4 mt-16 text-primary font-bold text-lg">+309 Poin</p>

                            <div className="box-border grid grid-cols-2 divide-y-2">
                                <button className=" text-sm font-medium text-secondary mt-9">Lihat detail transaksi</button>
                                <div className="container flex mt-8 text-md ml-3 w- h-10 font-bold rounded-full bg-secondary text-white t ">
                                    <a href="#">
                                        <button className="py-2 px-5">Tukar Kembali</button>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    );
}

export default Riwayat;