import { useEffect, useState } from "react";
import SidebarUser from "../Components/SidebarUser";
import { dataLogin, CheckNotLogin } from "../Helpers/Session";
const Poin = () => {
    const [voucher, setVoucher] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isLoading) return;
        fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/voucher`)
            .then(response => response.json())
            .then(response => {
                setTimeout(() => {
                    setVoucher(response.data)
                    setIsLoading(false);
                }, 2000)
            })
            .catch(err => {
                console.log(err)
            })
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
                            <p className="text-secondary font-bold text-xl">309 Poin</p>
                            <a href="#" className="text-xs text-primary font-semibold">Dapatkan Poin {'>'}</a>
                        </div>

                        <div className="grid grid-cols-2 text-md">
                            <div className="border-b text-center focus-within:text-primary focus-within:font-bold focus-within:border-primary focus-within:border-b-2"><a href="#/riwayatPoin">Riwayat</a></div>
                            <div className="border-b text-center py-1 border-primary border-b-2"><a href="#" className="text-primary font-bold">Tukar Poin</a></div>
                        </div>

                        {isLoading ? (<></>) : (
                            voucher.map((item, index) => {
                                return (
                                    <a key={index} href="#" className="cursor-pointer">
                                        <div className="box-border bg-white flex p-4 shadow-md mx-14 my-6 rounded-md gap-x-8">
                                            <img src="foto_voucher.png" alt="voucher" className="object-cover h-28 w-46 rounded">
                                            </img>

                                            <div className="">
                                                <p className="font-bold text-lg">{item.nama_voucher}</p>
                                                <p>{item.deskripsi_voucher}</p>
                                                <p className="text-secondary font-bold mt-8">{item.poin} Poin</p>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        )}
                    </div>
                </div>
            </CheckNotLogin>
        </>
    );
}

export default Poin;