import { useEffect, useState } from "react";
import SidebarUser from "../Components/SidebarUser";
import { dataLogin, CheckNotLogin } from "../Helpers/Session";
import moment from "moment";
const Riwayat = () => {
    const [riwayat, setRiwayat] = useState([]);
    const [dummy, setDummy] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!isLoading) return;
        fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/transaksi/id_user/${dataLogin.id_user}`)
            .then(response => response.json())
            .then(response => {
                setTimeout(() => {
                    let proses = response.data.filter((item) => item.detail_transaksi[item.detail_transaksi.length - 1].status !== "minyak diterima");
                    setRiwayat(proses);
                    setDummy(response.data);
                    setIsLoading(false);
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }, [isLoading])

    const changeType = (type) => {
        let data;
        console.log(type)
        if (type === "proses") data = dummy.filter((item) => item.detail_transaksi[item.detail_transaksi.length - 1].status !== "minyak diterima");
        else data = dummy.filter((item) => item.detail_transaksi[item.detail_transaksi.length - 1].status === "minyak diterima");
        setRiwayat(data);
    }

    return (
        <>
            <CheckNotLogin>
                <div className="grid grid-cols-1 lg:grid-cols-4 items mt-16 mb-28 mx-12 lg:mx-28 font-poppins">
                    <SidebarUser active="riwayat" />

                    <div className="container lg:col-start-2 lg:col-span-4 box-border bg-white w-110 h-auto border border-2 rounded-xl justify-between pt-8 pb-24 px-12 shadow-md">
                        <div className="text-primary text-2xl font-extrabold">
                            <p>Riwayat Transaksi</p>
                        </div>

                        <div className="flex gap-x-6 mt-6">
                            <p className="font-bold mt-3">Pilih Status</p>
                            <select className="rounded-3xl shadow-md border-white" onChange={(e) => { changeType(e.target.value) }}>
                                <option selected value="proses">Dalam Proses</option>
                                <option value="selesai">Selesai</option>
                            </select>
                        </div>
                        {isLoading ? (
                            <>
                            </>
                        ) : (
                            riwayat.map((item, index) => {
                                return (
                                    <div>
                                        <div className="container box-border w-full h-auto border-2 border-gray-100 p-4 mt-8 mr-12 rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 devide-x">
                                            <div className="box-content ml-2 md:ml-6 mt-3 text-xs md:text-sm">
                                                <span className="text-gray-500">{moment(item.created_at).format('DD MMMM YYYY')}</span>
                                                <div className="my-3 font-bold text-sm md:text-md">
                                                    <p>{item.nama_lengkap}</p>
                                                </div>
                                                <div className="container flex justify-center items-center box-border border-2 w-32 h-16 rounded-md font-extrabold text-lg md:text-2xl text-primary shadow-md">
                                                    <p className="">{item.liter} Liter</p>
                                                </div>
                                            </div>
                                            <div className="box-content mt-3 mr-6 text-sm md:text-sm text-left md:text-right">
                                                <div className="md:block md:flex-row flex flex-col">
                                                    <span className="text-primary font-s md:mx-auto mx-2 capitalize">{item.detail_transaksi[item.detail_transaksi.length - 1].status === "minyak diterima" ? "selesai" : item.detail_transaksi[item.detail_transaksi.length - 1].status}</span>
                                                </div>
                                                <p className="box-content mx-2 mt-4 md:mx-4 md:mt-16 text-primary font-bold text-md md:text-lg">+{item.liter * item.mitra.poin} Poin</p>

                                                <div className="box-border grid grid-cols-1 md:grid-cols-2 divide-y-2">
                                                    <div className="container flex justify-center items-center mt-8 text-md mr-3 h-10 font-bold rounded-full text-black border-2 border-secondary">
                                                        <button className="">Lihat detail transaksi</button>
                                                    </div>
                                                    <div className="container flex justify-center items-center mt-8 text-md ml-3 h-10 font-bold rounded-full bg-secondary text-white">
                                                        <a href={"#/mitra/" + item.id_mitra}>
                                                            Tukar Kembali
                                                        </a>
                                                    </div>
                                                </div>
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

export default Riwayat;