import Sidebar from "../Components/Sidebar";

const Penjemputan = () => {
    return (
        <>
        <Sidebar>
        <div className="font-poppins mx-12 mt-6 pb-12">
            <div className="flex justify-between place-items-center mb-8">
                    <p className="font-bold text-lg">Penjemputan</p>

                    <div className="flex gap-x-6 mt-6">
                    <p className="font-bold mt-3">Pilih Status</p>
                    <select className="rounded-3xl shadow-md border-white">
                        <option>Belum Dijemput</option>
                        <option>Selesai</option>
                    </select>
                    </div>
            </div>

            <div className="grid grid-cols-3 gap-x-8">
                <div className="box-border bg-white p-6 rounded-lg shadow-lg ">
                    <div className="space-y-4 mb-6">
                    <div className="flex">
                    <p className="text-sm">Sabtu, 09-09-2021</p>
                    <p className="text-sm font-bold text-secondary ml-12">11.30 WIB</p>
                    </div>


                    <div>
                    <p className="text-xl">5 Liter</p>
                    </div>

                    <div>
                    <p className="font-bold text-sm">Dewi Ayu Alamanda P.</p>
                    <p className="text-sm">Jalan Danau Kerinci IV G 6 B No.15, Sawojajar, Malang </p>
                    </div> 

                    <div>
                        <img src="assets/nextDown.png"></img>
                    </div>
                    <div>
                    <p className="font-bold text-sm">PT Green Energi Utama</p>
                    <p className="text-sm">Karanglo, Banjararum, Singosari, Malang </p>
                    </div> 
                    </div>
                   
                    <button className="text-white bg-tertiary rounded-full px-6 py-2 w-full font-bold">Jemput</button>
                </div> 

                <div className="box-border bg-white p-6 rounded-lg shadow-lg ">
                    <div className="space-y-4 mb-6">
                    <div className="flex">
                    <p className="text-sm">Sabtu, 09-09-2021</p>
                    <p className="text-sm font-bold text-secondary ml-12">11.30 WIB</p>
                    </div>


                    <div>
                    <p className="text-xl">5 Liter</p>
                    </div>

                    <div>
                    <p className="font-bold text-sm">Dewi Ayu Alamanda P.</p>
                    <p className="text-sm">Jalan Danau Kerinci IV G 6 B No.15, Sawojajar, Malang </p>
                    </div> 

                    <div>
                        <img src="assets/nextDown.png"></img>
                    </div>
                    <div>
                    <p className="font-bold text-sm">PT Green Energi Utama</p>
                    <p className="text-sm">Karanglo, Banjararum, Singosari, Malang </p>
                    </div> 
                    </div>
                   
                    <button className="text-white bg-tertiary rounded-full px-6 py-2 w-full font-bold">Jemput</button>
                </div> 

                <div className="box-border bg-white p-6 rounded-lg shadow-lg ">
                    <div className="space-y-4 mb-6">
                    <div className="flex">
                    <p className="text-sm">Sabtu, 09-09-2021</p>
                    <p className="text-sm font-bold text-secondary ml-12">11.30 WIB</p>
                    </div>


                    <div>
                    <p className="text-xl">5 Liter</p>
                    </div>

                    <div>
                    <p className="font-bold text-sm">Dewi Ayu Alamanda P.</p>
                    <p className="text-sm">Jalan Danau Kerinci IV G 6 B No.15, Sawojajar, Malang </p>
                    </div> 

                    <div>
                        <img src="assets/nextDown.png"></img>
                    </div>
                    <div>
                    <p className="font-bold text-sm">PT Green Energi Utama</p>
                    <p className="text-sm">Karanglo, Banjararum, Singosari, Malang </p>
                    </div> 
                    </div>
                   
                    <button className="text-white bg-tertiary rounded-full px-6 py-2 w-full font-bold">Jemput</button>
                </div> 
            </div>

            <div className="flex font-poppins justify-center mt-14">
            <button className="hover:bg-secondary border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                <div className="py-2 px-2">
                <img src="assets/nextLeft.png" className="w-2 h-3"></img>
                </div>
            </button>
            <button className="hover:bg-secondary hover:text-white active:bg-secondary active:text-white border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                <div className="py-0.5 px-2 text-center font-bold">1
                </div>
            </button>
            <button className="hover:bg-secondary hover:text-white active:bg-secondary active:text-white border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                <div className="py-0.5 px-2 text-center font-bold">2
                </div>
            </button>
            <button className="hover:bg-secondary hover:text-white active:bg-secondary active:text-white border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                <div className="py-0.5 px-2 text-center font-bold">3
                </div>
            </button>
            <button className="hover:bg-secondary border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                <div className="py-2 px-2">
                <img src="assets/nextRight.png" className="w-2 h-3"></img>
                </div>
            </button>
            </div>
        </div>
        </Sidebar>
        </>
    );
}

export default Penjemputan;