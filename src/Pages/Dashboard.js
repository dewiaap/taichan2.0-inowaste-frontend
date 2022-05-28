import { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
const Dashboard = () => {
    const [mitra, setMitra] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isLoading) return;
        fetch('https://taichan2-0-inowaste-backend-dewiaap.vercel.app/user/id_level/1', {
            method: "GET"
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setTimeout(() => {
                    setMitra(response.data.slice(-4));
                    setIsLoading(false);
                }, 2000)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [isLoading])
    return (
        <>
        <Sidebar active={"dashboard"}>
        <div className="font-poppins mx-12 mt-4 md:mt-6 pb-12">
            <div className="flex flex-col justify-between mt-8 mb-6 space-y-1">
                    <p className="font-bold text-xl text-gray-700">Dashboard</p>

                    <div className="flex gap-x-6 mt-6  md:text-base self-end">
                    <p className="font-bold mt-3 md:text-base text-sm">Pilih Periode</p>
                    <select className="rounded-3xl shadow-md border-white text-sm md:text-base">
                        <option className="selected">--Pilih Bulan--</option>
                        <option>Januari</option>
                        <option>Februari</option>
                        <option>Maret</option>
                        <option>April</option>
                        <option>Mei</option>
                        <option>Juni</option>
                        <option>Juli</option>
                        <option>Agustus</option>
                        <option>September</option>
                        <option>Oktober</option>
                        <option>November</option>
                        <option>Desember</option>
                    </select>
                    </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="grid grid-cols-2 col-span-2 border-2 border-gray-300 rounded-lg shadow-md bg-white">
                    <div className="col-span-2 lg:col-span-1">
                        <div className="ml-8 md:ml-12 mt-8">
                            <p className="text-lg md:text-2xl font-bold">Total Tagihan Akan Dibayarkan</p>
                            <div className="flex mt-4 md:mt-8 mb-8">
                                <p className="mt-2 md:mt-6 md:ml-4 text-lg md:text-2xl font-bold">Rp</p>
                                <p className="text-5xl md:text-6xl font-bold text-tertiary ml-4">2,318,400</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:hidden ml-8 mb-8 ">
                        <a href=""><button className="text-white text-base  bg-primary hover:bg-primarydark rounded-full px-6 py-2 font-bold">Lihat Detail</button></a>
                    </div>
                    
                    <div className="hidden md:block">
                    <a href=""><button className="text-white text-lg md:text-xl bg-primary hover:bg-primarydark rounded-full px-6 py-2 md:ml-12 md:mb-8 md:w-48  lg:mx-28 lg:mt-20 lg:w-60 font-bold">Lihat Detail</button></a>
                    </div>

                </div>
                <div className="border-2 border-gray-300 rounded-lg shadow-md bg-white px-8">
                    <div className="mt-8">
                        <p className="text-lg md:text-2xl font-bold text-center md:flex">Jumlah Transaksi Penukaran</p>
                        <div className="flex mt-4 mb-4 md:mt-8 md:mb-8  place-content-center md:flex md:place-content-start md:gap-x-2">
                            <p className="text-5xl md:text-6xl font-bold text-tertiary">37</p>
                            <p className="hidden md:flex md:mt-6  text-lg md:text-2xl font-bold">Transaksi</p>
                        </div>
                        <div className="md:hidden text-lg font-bold text-center mb-8"><p>Transaksi</p></div>
                    </div>
                </div>
                <div className="border-2 border-gray-300 rounded-lg shadow-md bg-white px-8">
                    <div className="mt-8">
                    <p className="text-lg md:text-2xl font-bold text-center md:flex">Jumlah Minyak Terkumpul</p>
                    <div className="flex mt-4 mb-4 md:mt-8 md:mb-8 place-content-center md:flex md:place-content-start md:gap-x-2">
                        <p className="text-5xl md:text-6xl font-bold text-tertiary">360</p>
                        <p className="hidden md:flex  md:mt-6 md:text-2xl font-bold">Liter</p>
                    </div>
                    <div className="md:hidden text-lg font-bold text-center mb-8"><p className="">Liter</p></div>
                </div>
                </div>
            </div>
        </div>
        </Sidebar>
        </>
    );
}

export default Dashboard;