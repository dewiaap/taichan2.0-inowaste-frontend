const RiwayatPoin = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-4 items mt-16 mb-28 mx-12 lg:mx-28 font-poppins">
                <div className="box-border bg-white w-full h-auto mb-8 lg:mb-0 lg:w-52 lg:h-60 drop-shadow-md rounded-xl">
                    <div className="box-border bg-white border-b h-10"><p className="font-extrabold ml-6 mt-6 text-md">Hi, Arum!</p></div>
                    <ul className="mx-6 my-4 justify-between text-sm">
                        <li className="mb-3"><a href="">Akun Saya</a></li>
                        <li className="mb-3 font-semibold"><a href="#">Poin Saya</a></li>
                        <li className="mb-3"><a href="#">Riwayat Transaksi</a></li>
                        <li className="mb-3"><a href="#">Log Out</a></li>
                    </ul>
                </div>

                <div className="container lg:col-start-2 lg:col-span-4 box-border bg-white w-110 h-auto border border-2 rounded-xl justify-between pt-8 pb-24 shadow-md">
                    <div className="text-primary text-2xl font-extrabold mx-12">
                        <p>Poin Saya</p>
                    </div>

                    <div className="max-w-sm mx-auto mt-4 mb-4 text-center">
                        <p className="text-secondary font-bold text-xl">309 Poin</p>
                        <a href="#" className="text-xs text-primary font-semibold">Dapatkan Poin {'>'}</a>
                    </div>

                    <div className="grid grid-cols-2 text-md">
                        <div className="border-b text-center py-1 border-primary border-b-2"><a href="#" className="text-primary font-bold">Riwayat</a></div>
                        <div className="border-b text-center focus-within:border-primary focus-within:border-b-2 focus-within:text-primary focus-within:font-bold "><a href="#/tukarpoin">Tukar Poin</a></div>
                    </div>

                    <div className="border-b border-gray-200">
                        <div className="px-8 pt-2 pb-3 flex justify-between mt-2 mr-6">
                            <div><p className="text-sm font-bold mb-1">Penukaran Voucher</p>
                                <p className="text-xs text-gray-400">Nama Voucher</p></div>
                            <div className="py-2"><p className="text-sm text-red-400">-500 Poin</p></div>
                        </div>
                    </div>

                    <div className="border-b border-gray-200">
                        <div className="px-8 pt-2 pb-3 flex justify-between mt-2 mr-6">
                            <div><p className="text-sm font-bold mb-1">Penukaran Minyak</p>
                                <p className="text-xs text-gray-400">PT Green Energi Utama (GEU)</p></div>
                            <div className="py-2"><p className="text-sm text-secondary">+200 Poin</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RiwayatPoin;