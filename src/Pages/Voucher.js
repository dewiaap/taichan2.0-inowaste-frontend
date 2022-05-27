const Voucher = () => {
    return (
        <>
        <div className="box-border bg-white shadow-md pt-4 px-8 pb-4 rounded-lg mt-16 mb-14 mx-auto max-w-xl font-poppins">

            <div className="text-right">
                <button>
                    <img src="assets/close.png" alt="close" className="object-cover h-5"></img>
                </button>
            </div>
            
            <div className="grid grid-cols-3">
                <div>
                    <img src="assets/foto_voucher.png" alt="voucher" className="object-cover h-28 w-46 rounded"></img>
                </div>

                <div className="col-start-2 col-span-2">
                    <div><p className="font-bold text-lg">Voucher langganan SPOTIFY 1 Bulan </p></div>
                    <div className="grid grid-cols-3 divide-x text-xs border-b mt-4">
                            <div><p className="text-gray-500 mb-2">Poin</p><p className="font-bold">5,000 Poin</p></div>
                            <div className="pl-6 col-start-2 col-span-2"><p className="text-gray-500 pb-2">Masa berlaku</p><p className="font-bold pb-4">1 minggu setelah voucher di redeem</p></div>
                        </div>
                </div>
            </div>

            <div className="mt-6">
                <p className="text-sm font-bold mb-2">Syarat dan Ketentuan</p>
                <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
                </p>
            </div>

            <div className="text-right mt-4">
                <button className="py-2 px-6 text-white bg-secondary hover:bg-secondarydark font-bold rounded-full w-28">Tukar</button>
            </div>
        </div>
        </>
    );
}

export default Voucher;