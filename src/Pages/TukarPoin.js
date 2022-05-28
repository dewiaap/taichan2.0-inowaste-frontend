import { useEffect, useState } from "react";
import SidebarUser from "../Components/SidebarUser";
import { dataLogin, CheckNotLogin } from "../Helpers/Session";
import swal from "@sweetalert/with-react";
const Poin = () => {
    const [voucher, setVoucher] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isLoading) return;
        fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/voucher`)
            .then(response => response.json())
            .then(response => {
                setTimeout(() => {
                    setVoucher(response?.data)
                    setIsLoading(false);
                }, 2000)
            })
            .catch(err => {
                console.log(err)
            })
    }, [isLoading])

    const showModal = (item) => {
        swal({
            buttons: {
                cancel: "Gak Jadi",
                confirm: "Tukar",
            },
            content: (
                <div className="font-poppins">
                    <h1 className="text-2xl font-bold mb-6">Yakin Tukar?</h1>
                    <div className="grid grid-cols-3">
                        <div>
                            <img src={item.gambar_voucher} alt="voucher" className="object-cover h-28 w-46 rounded"></img>
                        </div>

                        <div className="col-start-2 col-span-2">
                            <div><p className="font-bold text-lg">{item.nama_voucher}</p></div>
                            <div className="grid grid-cols-3 divide-x text-xs border-b mt-4">
                                <div><p className="text-gray-500 mb-2">Poin</p><p className="font-bold">{item.poin} Poin</p></div>
                                <div className="pl-6 col-start-2 col-span-2"><p className="text-gray-500 pb-2">Masa berlaku</p><p className="font-bold pb-4">{item.masa_berlaku}</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-bold mb-2">Syarat dan Ketentuan</p>
                        <p className="text-xs">
                            {item.syarat_ketentuan}
                        </p>
                    </div>
                </div>
            )
        })
            .then((value) => {
                if (value) {
                    fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/penukaran`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            id_voucher: item.id_voucher,
                            id_user: dataLogin.id_user
                        })
                    })
                        .then(response => response.json())
                        .then(response => {
                            console.log(response)
                            if (response.status === "success") {
                                swal("Berhasil", "Penukaran berhasil", "success");
                            } else {
                                swal("Gagal", "Penukaran gagal", "error");
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        })

                }
            })
    }

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
                            <div className="border-b text-center focus-within:text-primary focus-within:font-bold focus-within:border-primary focus-within:border-b-2"><a href="#/riwayatPoin">Riwayat</a></div>
                            <div className="border-b text-center py-1 border-primary"><a href="#" className="text-primary font-bold">Tukar Poin</a></div>
                        </div>

                        {isLoading ? (
                            <div>
                                <div className="px-14 animate-pulse">
                                    <div className="container box-border grid grid-cols-4 bg-white p-4 shadow-md my-6 rounded-md">
                                        <div className="col-span-2 md:col-span-1 h-28 w-46 rounded bg-gray-400 mr-6"></div>
                                        <div className="col-span-2 md:col-span-3">
                                            <p className="h-6 w-1/3 bg-gray-400 rounded-full mt-2"></p>
                                            <p className="h-4 w-full bg-gray-400 rounded-full mt-2"></p>
                                            <p className="h-4 w-1/4 bg-gray-400 rounded-full mt-8"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-14 animate-pulse">
                                    <div className="container box-border grid grid-cols-4 bg-white p-4 shadow-md my-6 rounded-md">
                                        <div className="col-span-2 md:col-span-1 h-28 w-46 rounded bg-gray-400 mr-6"></div>
                                        <div className="col-span-2 md:col-span-3">
                                            <p className="h-6 w-1/3 bg-gray-400 rounded-full mt-2"></p>
                                            <p className="h-4 w-full bg-gray-400 rounded-full mt-2"></p>
                                            <p className="h-4 w-1/4 bg-gray-400 rounded-full mt-8"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            voucher?.map((item, index) => {
                                return (
                                    <div key={index} className="cursor-pointer" onClick={(e) => { showModal(item) }}>
                                        <div className="box-border bg-white flex p-4 shadow-md mx-14 my-6 rounded-md gap-x-8">
                                            <img src="assets/foto_voucher.png" alt="voucher" className="object-cover h-28 w-46 rounded">
                                            </img>

                                            <div className="">
                                                <p className="font-bold text-lg">{item.nama_voucher}</p>
                                                <p>{item.deskripsi_voucher}</p>
                                                <p className="text-secondary font-bold mt-8">{item.poin} Poin</p>
                                            </div>
                                        </div>
                                    </div>
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