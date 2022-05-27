import Sidebar from "../Components/Sidebar";

const Permintaan = () => {
    return (
        <>
        <Sidebar>
        <div className="font-poppins mx-12 mt-4 md:mt-6 pb-12">
            <div className="flex flex-col justify-between mt-8 mb-6 space-y-1">
                    <p className="font-bold text-xl text-gray-700">Permintaan</p>
                    <div className="flex gap-x-6 mt-6 self-end">
                    <p className="font-bold mt-3 text-sm md:text-base">Pilih Status</p>
                    <select className="rounded-3xl text-sm md:text-base shadow-md border-white">
                        <option>Belum Diverifikasi</option>
                        <option>Selesai</option>
                    </select>
                    </div>
            </div>

            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                <div className="box-border bg-white p-6 rounded-lg shadow-lg mb-8">
                    <div className="space-y-4 mb-6">
                    <p className="text-sm">Kamis, 07-09-2021</p>

                    <div>
                    <p className="text-xl">5 Liter</p>
                    <p className="text-secondary font-bold">Rp28.000</p>
                    </div>

                    <div>
                    <p className="font-bold text-sm">Dewi Ayu Alamanda P.</p>
                    <p className="text-sm">Jalan Danau Kerinci IV G 6 B No.15, Sawojajar, Malang </p>
                    </div> 
                    </div>
                   
                    <button className="text-white bg-tertiary hover:bg-tertiarydark rounded-full px-6 py-2 w-fit font-bold">Verifikasi</button>
                </div> 

                <div className="box-border bg-white p-6 rounded-lg shadow-lg mb-8">
                    <div className="space-y-4 mb-6">
                    <p className="text-sm">Kamis, 07-09-2021</p>

                    <div>
                    <p className="text-xl">5 Liter</p>
                    <p className="text-secondary font-bold">Rp28.000</p>
                    </div>

                    <div>
                    <p className="font-bold text-sm">Dewi Ayu Alamanda P.</p>
                    <p className="text-sm">Jalan Danau Kerinci IV G 6 B No.15, Sawojajar, Malang </p>
                    </div> 

                    </div>
                   
                    

                    <button className="text-white bg-tertiary hover:bg-tertiarydark rounded-full px-6 py-2 w-fit font-bold">Verifikasi</button>
                </div> 

                <div className="box-border bg-white p-6 rounded-lg shadow-lg mb-8">
                    <div className="space-y-4 mb-6">
                    <p className="text-sm">Kamis, 07-09-2021</p>

                    <div>
                    <p className="text-xl">5 Liter</p>
                    <p className="text-secondary font-bold">Rp28.000</p>
                    </div>

                    <div>
                    <p className="font-bold text-sm">Dewi Ayu Alamanda P.</p>
                    <p className="text-sm">Jalan Danau Kerinci IV G 6 B No.15, Sawojajar, Malang </p>
                    </div> 

                    </div>
                   
                    

                    <button className="text-white bg-tertiary hover:bg-tertiarydark rounded-full px-6 py-2 w-fit font-bold">Verifikasi</button>
                </div> 
            </div>

            <div className="flex font-poppins justify-center mt-10">
            <button className="hover:bg-secondary border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                <div className="py-2 px-2">
                <img src="nextLeft.png" className="w-2 h-3"></img>
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
                <img src="nextRight.png" className="w-2 h-3"></img>
                </div>
            </button>
            </div>
        </div>
        </Sidebar>
        </>
    );
}

import Sidebar from "../Components/Sidebar";

const Permintaan = () => {
    return (
        <>
        <Sidebar>
        <div className="font-poppins mx-12 mt-6 pb-12">
            <div className="flex flex-col space-y-2 justify-between mb-8">
                    <p className="font-bold text-lg">Permintaan</p>
                    <div className="flex gap-x-6 mt-6 self-end">
                    <p className="font-bold mt-3 text-sm md:text-base">Pilih Status</p>
                    <select className="rounded-3xl text-sm md:text-base shadow-md border-white">
                        <option>Belum Diverifikasi</option>
                        <option>Selesai</option>
                    </select>
                    </div>
                    
            </div>

            <div className="grid grid-cols-3 gap-x-8">
                <div className="box-border bg-white p-6 rounded-lg shadow-lg ">
                    <div className="space-y-4 mb-6">
                    <p className="text-sm">Kamis, 07-09-2021</p>

                    <div>
                    <p className="text-xl">5 Liter</p>
                    <p className="text-secondary font-bold">Rp28.000</p>
                    </div>

                    <div>
                    <p className="font-bold text-sm">Dewi Ayu Alamanda P.</p>
                    <p className="text-sm">Jalan Danau Kerinci IV G 6 B No.15, Sawojajar, Malang </p>
                    </div> 
                    </div>
                   
                    <button className="text-white bg-tertiary rounded-full px-6 py-2 w-fit font-bold">Verifikasi</button>
                </div> 

                <div className="box-border bg-white p-6 rounded-lg shadow-lg">
                    <div className="space-y-4 mb-6">
                    <p className="text-sm">Kamis, 07-09-2021</p>

                    <div>
                    <p className="text-xl">5 Liter</p>
                    <p className="text-secondary font-bold">Rp28.000</p>
                    </div>

                    <div>
                    <p className="font-bold text-sm">Dewi Ayu Alamanda P.</p>
                    <p className="text-sm">Jalan Danau Kerinci IV G 6 B No.15, Sawojajar, Malang </p>
                    </div> 

                    </div>
                   
                    

                    <button className="text-white bg-tertiary rounded-full px-6 py-2 w-fit font-bold">Verifikasi</button>
                </div> 

                <div className="box-border bg-white p-6 rounded-lg shadow-lg">
                    <div className="space-y-4 mb-6">
                    <p className="text-sm">Kamis, 07-09-2021</p>

                    <div>
                    <p className="text-xl">5 Liter</p>
                    <p className="text-secondary font-bold">Rp28.000</p>
                    </div>

                    <div>
                    <p className="font-bold text-sm">Dewi Ayu Alamanda P.</p>
                    <p className="text-sm">Jalan Danau Kerinci IV G 6 B No.15, Sawojajar, Malang </p>
                    </div> 

                    </div>
                   
                    

                    <button className="text-white bg-tertiary rounded-full px-6 py-2 w-fit font-bold">Verifikasi</button>
                </div> 
            </div>

            <div className="flex font-poppins justify-center mt-14">
            <button className="hover:bg-secondary border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                <div className="py-2 px-2">
                <img src="nextLeft.png" className="w-2 h-3"></img>
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
                <img src="nextRight.png" className="w-2 h-3"></img>
                </div>
            </button>
            </div>
        </div>
        </Sidebar>
        </>
    );
}

export default Permintaan;