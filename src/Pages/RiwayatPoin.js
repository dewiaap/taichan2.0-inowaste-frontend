import { useState, useEffect } from "react";
import SidebarUser from "../Components/SidebarUser";
import { dataLogin, CheckNotLogin } from "../Helpers/Session";
const RiwayatPoin = () => {
    const [penukaran, setPenukaran] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [transaksi, setTransaksi] = useState([]);
    useEffect(() => {
        if (!isLoading) return;
        fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/penukaran/id_user/${dataLogin.id_user}`)
            .then(response => response.json())
            .then(response => {
                setPenukaran(response.data);
            })
            .catch((err) => {
                console.log(err);
            })

        fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/transaksi/id_user/${dataLogin.id_user}`)
            .then(response => response.json())
            .then(response => {
                let data = response.data.filter(item => item.detail_transaksi[item.detail_transaksi.length-1].status === "minyak diterima");
                setTransaksi(data);
            })
            .catch((err) => {
                console.log(err);
            })

        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [isLoading])
    return (
        <>
            <CheckNotLogin>
                <div className="grid grid-cols-1 lg:grid-cols-4 items mt-16 mb-28 mx-12 lg:mx-28 font-poppins">
                    <SidebarUser active="poin" />

                    <div className="container lg:col-start-2 lg:col-span-4 box-border bg-white w-110 h-auto border border-2 rounded-xl justify-between pt-8 pb-24 shadow-md">
                        <div className="text-primary text-2xl font-extrabold mx-12">
                            <p>Poin Saya</p>
                        </div>
                        <div className="max-w-sm mx-auto mt-4 mb-4 text-center">
                            <p className="text-secondary font-bold text-xl">{dataLogin.poin} Poin</p>
                            <a href="#" className="text-xs text-primary font-semibold">Dapatkan Poin {'>'}</a>
                        </div>

                        <div className="grid grid-cols-2 text-md">
                            <div className="border-b text-center py-1 border-primary border-b-2"><a href="#" className="text-primary font-bold">Riwayat</a></div>
                            <div className="border-b text-center focus-within:border-primary focus-within:border-b-2 focus-within:text-primary focus-within:font-bold "><a href="#/tukarpoin">Tukar Poin</a></div>
                        </div>
                        {isLoading ? (
                            <div className="animate-pulse">
                                <div className="border-b border-gray-200">
                                    <div className="px-8 pt-2 pb-3 flex justify-between mt-2 mr-6">
                                        <div className="w-1/3">
                                            <p className="w-full h-4 rounded-full bg-gray-400 mb-1"></p>
                                            <p className="w-full h-3 rounded-full bg-gray-400 mb-1"></p>
                                        </div>
                                        <div className="py-2 w-1/6"><p className="w-full h-4 rounded-full bg-gray-400"></p></div>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200">
                                    <div className="px-8 pt-2 pb-3 flex justify-between mt-2 mr-6">
                                        <div className="w-1/3">
                                            <p className="w-full h-4 rounded-full bg-gray-400 mb-1"></p>
                                            <p className="w-full h-3 rounded-full bg-gray-400 mb-1"></p>
                                        </div>
                                        <div className="py-2 w-1/6"><p className="w-full h-4 rounded-full bg-gray-400"></p></div>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200">
                                    <div className="px-8 pt-2 pb-3 flex justify-between mt-2 mr-6">
                                        <div className="w-1/3">
                                            <p className="w-full h-4 rounded-full bg-gray-400 mb-1"></p>
                                            <p className="w-full h-3 rounded-full bg-gray-400 mb-1"></p>
                                        </div>
                                        <div className="py-2 w-1/6"><p className="w-full h-4 rounded-full bg-gray-400"></p></div>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200">
                                    <div className="px-8 pt-2 pb-3 flex justify-between mt-2 mr-6">
                                        <div className="w-1/3">
                                            <p className="w-full h-4 rounded-full bg-gray-400 mb-1"></p>
                                            <p className="w-full h-3 rounded-full bg-gray-400 mb-1"></p>
                                        </div>
                                        <div className="py-2 w-1/6"><p className="w-full h-4 rounded-full bg-gray-400"></p></div>
                                    </div>
                                </div>
                            </div>
                        )
                            :
                            (
                                <>
                                    {penukaran.map((item, index) => {
                                        return (
                                            <div key={index} className="border-b border-gray-200">
                                                <div className="px-8 pt-2 pb-3 flex justify-between mt-2 mr-6">
                                                    <div><p className="text-sm font-bold mb-1">Penukaran Voucher</p>
                                                        <p className="text-xs text-gray-400">{item.voucher.nama_voucher}</p></div>
                                                    <div className="py-2"><p className="text-sm text-red-400">-{item.voucher.poin} Poin</p></div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {transaksi.map((item, index) => {
                                        return (
                                            <div className="border-b border-gray-200">
                                                <div className="px-8 pt-2 pb-3 flex justify-between mt-2 mr-6">
                                                    <div><p className="text-sm font-bold mb-1">Penukaran Minyak</p>
                                                        <p className="text-xs text-gray-400">{item.mitra.nama_lengkap}</p></div>
                                                    <div className="py-2"><p className="text-sm text-secondary">+{item.liter * item.mitra.poin} Poin</p></div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </>)}
                    </div>
                </div>
            </CheckNotLogin>
        </>
    );
}

export default RiwayatPoin;