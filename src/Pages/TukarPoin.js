const Poin = () => {
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
                    <div className="border-b text-center focus-within:text-primary focus-within:font-bold focus-within:border-primary focus-within:border-b-2"><a href="#/riwayatPoin">Riwayat</a></div>
                    <div className="border-b text-center py-1 border-primary border-b-2"><a href="#" className="text-primary font-bold">Tukar Poin</a></div>
                </div>

                <a href="#" className="cursor-pointer">
                    <div className="box-border bg-white flex p-4 shadow-md mx-14 my-6 rounded-md gap-x-8">
                        <img src="foto_voucher.png" alt="voucher" className="object-cover h-28 w-46 rounded">
                        </img>

                        <div className="">
                            <p className="font-bold text-lg">SPOTIFY 1 BULAN</p>
                            <p>Voucher langganan SPOTIFY 1 Bulan</p>
                            <p className="text-secondary font-bold mt-8">5000 Poin</p>
                        </div>
                    </div>
                </a>


            </div>
        </div>
        </>
    );
}

export default Poin;