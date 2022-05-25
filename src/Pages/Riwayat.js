const Riwayat = () => {
    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-4 items mt-16 mb-28 mx-12 lg:mx-28 font-poppins">
                <div className="box-border bg-white w-full h-auto mb-8 lg:mb-0 lg:w-52 lg:h-60 drop-shadow-md rounded-xl">
                    <div className="box-border bg-white border-b h-10"><p className="font-extrabold ml-6 mt-6 text-md">Hi, Arum!</p></div>
                    <ul className="mx-6 my-4 justify-between text-sm">
                        <li className="mb-3"><a href="">Akun Saya</a></li>
                        <li className="mb-3"><a href="#">Poin Saya</a></li>
                        <li className="mb-3 font-semibold"><a href="#">Riwayat Transaksi</a></li>
                        <li className="mb-3"><a href="#">Log Out</a></li>
                    </ul>
                </div>

            <div className="container lg:col-start-2 lg:col-span-4 box-border bg-white w-110 h-auto border border-2 rounded-xl justify-between pt-8 pb-24 px-12 shadow-md">
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

                <div className="container box-border w-full h-auto border-2 border-gray-100 p-4 mt-8 mr-12 rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 devide-x"> 
                    <div className="box-content ml-2 md:ml-6 mt-3 text-xs md:text-sm"> 
                        <span className="text-gray-500">28 Februari 2022</span>
                        <div className="my-3 font-bold text-sm md:text-md">
                            <p>PT Green Energi Utama (GEU)</p>
                        </div>
                        <div className="container flex justify-center items-center box-border border-2 w-32 h-16 rounded-md font-extrabold text-lg md:text-2xl text-primary shadow-md">
                            <p className="">1.5 Liter</p>
                        </div>
                    </div>
                    <div className="box-content mt-3 mr-6 text-sm md:text-sm text-left md:text-right">
                            <div className="md:block md:flex-row flex flex-col">
                            <span className="mx-2 text-gray-500">01238HH79J0</span>
                            <span className="text-primary font-s md:mx-auto mx-2">MENUNGGU PENJEMPUTAN</span>
                            </div>
                            <p className="box-content mx-2 mt-4 md:mx-4 md:mt-16 text-primary font-bold text-md md:text-lg">+309 Poin</p>

                            <div className="box-border grid grid-cols-1 md:grid-cols-2 divide-y-2">
                                <div className="container flex justify-center items-center mt-8 text-md mr-3 h-10 font-bold rounded-full text-black border-2 border-secondary">
                                <button className="">Lihat detail transaksi</button>
                                </div>
                                <div className="container flex justify-center items-center mt-8 text-md ml-3 h-10 font-bold rounded-full bg-secondary text-white">
                                    <a href="#">
                                        Tukar Kembali
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