import Sidebar from "../Components/Sidebar";
import { useEffect, useState } from "react";
import { dataLogin, CheckNotLogin } from "../Helpers/Session";
import moment from "moment";
import "moment/locale/id";
import swal from "sweetalert";
moment().locale('id');
const Permintaan = () => {
    const [permintaan, setPermintaan] = useState([]);
    const [dummy, setDummy] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(!isLoading) return;
        fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/transaksi/id_mitra/${dataLogin.id_user}`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setTimeout(() => {
                    let proses = response.data.filter((item) => item.detail_transaksi.length === 1);
                    setPermintaan(proses);
                    setDummy(response.data);
                    setIsLoading(false);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [isLoading])

    const changeType = (type) => {
        let data;
        if (type === "verifikasi") data = dummy.filter((item) => item.detail_transaksi.length === 1);
        else if (type === "menunggu") data = dummy.filter((item) => item.detail_transaksi.length === 2);
        else if (type === "diantar") data = dummy.filter((item) => item.detail_transaksi.length === 3);
        else if (type === "selesai") data = dummy.filter((item) => item.detail_transaksi.length === 4);
        setPermintaan(data);
    }

    const verifikasi = (id_transaksi) => {
        fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/transaksi/status`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_transaksi: id_transaksi,
                status: "verifikasi"
            }),
        })
            .then(response => response.json())
            .then(response => {
                if (response.status === "success") {
                    swal("Berhasil", "Transaksi berhasil diverifikasi", "success");
                } else {
                    swal("Gagal", "Transaksi gagal diverifikasi", "error");
                }
                setIsLoading(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const diterima = (id_transaksi) => {
        fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/transaksi/status`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_transaksi: id_transaksi,
                status: "minyak diterima"
            }),
        })
            .then(response => response.json())
            .then(response => {
                if (response.status === "success") {
                    swal("Berhasil", "Penukaran Minyak Selesai", "success");
                } else {
                    swal("Gagal", "Penukaran Minyak Gagal", "error");
                }
                setIsLoading(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <CheckNotLogin>
                <Sidebar active="permintaan">
                    <div className="font-poppins mx-12 mt-6 pb-12">
                        <div className="flex flex-col space-y-2 justify-between mb-8">
                            <p className="font-bold text-lg">Permintaan</p>
                            <div className="flex gap-x-6 mt-6 self-end">
                                <p className="font-bold mt-3 text-sm md:text-base">Pilih Status</p>
                                <select className="rounded-3xl text-sm md:text-base shadow-md border-white" onChange={(e) => { changeType(e.target.value) }}>
                                    <option selected value="verifikasi">Belum Diverifikasi</option>
                                    <option value="menunggu">Menunggu Diantar</option>
                                    <option value="diantar">Proses Diantar</option>
                                    <option value="selesai">Selesai</option>
                                </select>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
                            {isLoading ?
                                (
                                    <>
                                    </>
                                )
                                :
                                (
                                    <>
                                        {permintaan.map((item, index) => {
                                            return (
                                                <div key={index} className="box-border bg-white p-6 rounded-lg shadow-lg mb-3">
                                                    <div className="space-y-4 mb-6">
                                                        <p className="text-sm">{moment(item.waktu_permintaan).format('dddd, DD MMMM YYYY')} WIB</p>

                                                        <div>
                                                            <p className="text-xl">{item.liter} Liter</p>
                                                            <p className="text-secondary font-bold">Rp{item.liter * item.mitra.detail_user[0].harga}</p>
                                                        </div>

                                                        <div>
                                                            <p className="font-bold text-sm">{item.user.nama_lengkap}</p>
                                                            <p className="text-sm break-words">{item.user.alamat}</p>
                                                        </div>
                                                    </div>
                                                    {item.detail_transaksi.length == 1 ?
                                                        (
                                                            <button className="text-white bg-tertiary rounded-full px-6 py-2 w-fit font-bold" onClick={(e) => { verifikasi(item.id_transaksi) }}>Verifikasi</button>
                                                        )
                                                        :
                                                        (
                                                            item.detail_transaksi.length == 2 ?
                                                                (
                                                                    <button className="text-white bg-gray-500 rounded-full px-6 py-2 w-fit font-bold" disabled>Menunggu Diantar</button>
                                                                )
                                                                :
                                                                (
                                                                    item.detail_transaksi.length == 3 ?
                                                                        (
                                                                            <button className="text-white bg-tertiary rounded-full px-6 py-2 w-fit font-bold" onClick={(e) => { diterima(item.id_transaksi) }}>Diterima</button>

                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                )
                                                        )
                                                    }
                                                </div>
                                            );
                                        })}

                                    </>
                                )
                            }
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
            </CheckNotLogin>
        </>
    );
}

export default Permintaan;