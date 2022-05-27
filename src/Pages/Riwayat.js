import { useEffect, useState } from "react";
import SidebarUser from "../Components/SidebarUser";
import { dataLogin, CheckNotLogin } from "../Helpers/Session";
import moment from "moment";
import swal from "@sweetalert/with-react";
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

    const showModal = (item) => {
        const status1 = item.detail_transaksi.length > 0
        const status2 = item.detail_transaksi.length > 1
        const status3 = item.detail_transaksi.length > 2
        const status4 = item.detail_transaksi.length > 3
        swal({
            buttons: {
                cancel: "Tutup"
            },
            content: (
                <div className="font-poppins">
                    <div className="box-border bg-white h-16 flex justify-between px-8 mb-6 place-items-center">
                        <div className="text-2xl font-bold pt-2">Detail Transaksi</div>
                    </div>

                    <div className="px-8 pb-6 flex">
                        <div className="text-xs text-gray-500 mr-6">
                            <ol className="w-max">
                                <li className="mb-8 mt-1.5 ">
                                    <p className={!status1 ? "invisible" : ""}>{status1 ? moment(item.detail_transaksi[0].created_at).format('DD MMMM YYYY, hh:mm') + " WIB" : ""} </p>
                                </li>
                                <li className="mb-20 mt-1.5 ">
                                    <p className={!status2 ? "invisible" : ""}>{status2 ? moment(item.detail_transaksi[1].created_at).format('DD MMMM YYYY, hh:mm') + " WIB" : ""}</p>
                                </li>
                                <li className="mb-14 mt-4">
                                    <p className={!status3 ? "invisible" : ""}>{status3 ? moment(item.detail_transaksi[2].created_at).format('DD MMMM YYYY, hh:mm') + " WIB" : ""}</p>
                                </li>
                                <li className="mb-10">
                                    <p className={!status4 ? "invisible" : ""}>{status4 ? moment(item.detail_transaksi[3].created_at).format('DD MMMM YYYY, hh:mm') + " WIB" : ""}</p>
                                </li>
                            </ol>
                        </div>
                        <ol className="relative border-l border-gray-200 dark:border-gray-300 space-y-4">
                            <li className="ml-4">
                                <div className="absolute w-4 h-4 rounded-full mt-0.5 -left-2 border border-secondarylight border-2">
                                    <div className={`mb-10 ml-4 absolute w-3 h-3 border border-white rounded-full -mt-0.25 -left-4 ${status1 ? 'bg-secondary' : 'bg-gray-300'}`}></div>
                                </div>
                                <div className="text-sm text-secondary">Permintaan dibuat</div>
                                <p className={`${!status1 ? "invisible" : ""} " mb-4 text-xs font-normal text-gray-500"`}>Permintaan sedang diproses</p>
                            </li>

                            <li className="ml-4">
                                <div className="absolute w-4 h-4 rounded-full mt-0.5 -left-2 border border-gray-200 border-2">
                                    <div className={`mb-10 ml-4 absolute w-3 h-3 border border-white rounded-full -mt-0.25 -left-4 ${status2 ? 'bg-secondary' : 'bg-gray-300'}`}></div>
                                </div>
                                <div className="text-sm text-gray-400">Permintaan dikonfirmasi</div>
                                <p className={`${!status2 ? "invisible" : ""} " mb-4 text-xs font-normal text-gray-500"`}>Permintaan telah dikonfirmasi oleh mitra. Minyak akan diambil sesuai tanggal penjemputan yang telah Anda pilih.</p>
                            </li>
                            <li className="ml-4">
                                <div className="absolute w-4 h-4 rounded-full mt-0.5 -left-2 border border-gray-200  border-2">
                                    <div className={`mb-10 ml-4 absolute w-3 h-3 border border-white rounded-full -mt-0.25 -left-4 ${status3 ? 'bg-secondary' : 'bg-gray-300'}`}></div>
                                </div>
                                <div className="text-sm text-secondary text-gray-400">Pengambilan minyak</div>
                                <p className={`${!status3 ? "invisible" : ""} " mb-4 text-xs font-normal text-gray-500"`}>Driver sedang menuju tempatmu untuk mengambil minyak</p>
                            </li>
                            <li className="ml-4">
                                <div className="absolute w-4 h-4 rounded-full mt-0.5 -left-2 border border-gray-200  border-2">
                                    <div className={`mb-10 ml-4 absolute w-3 h-3 border border-white rounded-full -mt-0.25 -left-4 ${status4 ? 'bg-secondary' : 'bg-gray-300'}`}></div>
                                </div>
                                <div className="text-sm text-secondary text-gray-400">Minyak diterima</div>
                                <p className={`${!status4 ? "invisible" : ""} " mb-4 text-xs font-normal text-gray-500"`}>Minyak telah diterima oleh Mitra </p>
                            </li>
                        </ol>
                    </div>
                </div>
            )
        })
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
                                                        <button onClick={(e) => { showModal(item) }}>Lihat detail transaksi</button>
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