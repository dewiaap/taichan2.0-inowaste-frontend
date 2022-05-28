import Sidebar from "../Components/Sidebar";
import { dataLogin, CheckNotLogin } from "../Helpers/Session";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/id";
moment().locale('id');
const Penjemputan = () => {
    const [penjemputan, setPenjemputan] = useState([]);
    const [dummy, setDummy] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [onProgress, setOnProgress] = useState(false);

    useEffect(() => {
        if(!isLoading) return;
        fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/transaksi/`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setTimeout(() => {
                    let proses = response.data.filter((item) => item.detail_transaksi.length === 2 || item.detail_transaksi.length === 3);
                    setPenjemputan(proses);
                    setDummy(response.data);
                    setIsLoading(false);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            })
    },[isLoading])

    const changeType = (type) => {
        let data;
        if (type === "proses") data = dummy.filter((item) => item.detail_transaksi.length === 2 || item.detail_transaksi.length === 3);
        else if (type === "selesai") data = dummy.filter((item) => item.detail_transaksi.length === 4);
        setPenjemputan(data);
    }

    const jemput = (id_transaksi) => {
        setOnProgress(true);
        fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/transaksi/status`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_transaksi: id_transaksi,
                status: "pengambilan minyak"
            }),
        })
            .then(response => response.json())
            .then(response => {
                setOnProgress(false);
                setIsLoading(true);
            })
            .catch((err) => {
                console.log(err);
                setOnProgress(false);
            })
    }

    return (
        <>
            <CheckNotLogin>
                <Sidebar active="penjemputan">
                    <div className="font-poppins mx-12 mt-6 pb-12">
                        <div className="flex justify-between place-items-center mb-8">
                            <p className="font-bold text-lg">Penjemputan</p>

                            <div className="flex gap-x-6 mt-6">
                                <p className="font-bold mt-3">Pilih Status</p>
                                <select className="rounded-3xl shadow-md border-white" onChange={(e) => { changeType(e.target.value) }}>
                                    <option selected value="proses">Belum Dijemput</option>
                                    <option value="selesai">Selesai</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
                            {penjemputan.map((item, index) => {
                                return (
                                    <div className="box-border bg-white p-6 rounded-lg shadow-lg ">
                                        <div className="space-y-4 mb-6">
                                            <div className="flex">
                                                <p className="text-sm">{moment(item.waktu_permintaan).format('dddd, DD MMMM YYYY')}</p>
                                                <p className="text-sm font-bold text-secondary ml-12">{moment(item.waktu_permintaan).format('hh:mm')} WIB</p>
                                            </div>


                                            <div>
                                                <p className="text-xl">{item.liter} Liter</p>
                                            </div>

                                            <div>
                                                <p className="font-bold text-sm">{item.user.nama_lengkap}</p>
                                                <p className="text-sm">{item.user.alamat}</p>
                                            </div>

                                            <div>
                                                <img src="assets/nextDown.png"></img>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">{item.mitra.nama_lengkap}</p>
                                                <p className="text-sm">{item.mitra.alamat}</p>
                                            </div>
                                        </div>
                                        {
                                            item.detail_transaksi.length === 2 ? (
                                                <button className="text-white bg-tertiary rounded-full px-6 py-2 w-full font-bold" onClick={(e) => { jemput(item.id_transaksi) }}>
                                                    {onProgress ? (<span className="animate-pulse">Memproses...</span>) : (<>Jemput</>)}
                                                </button>
                                            )
                                                :
                                                (item.detail_transaksi.length === 3 ? (
                                                    <button className="text-white bg-gray-500 rounded-full px-6 py-2 w-full font-bold" disabled>Proses Jemput</button>
                                                ) : (<></>))
                                        }
                                    </div>
                                )
                            })}
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

export default Penjemputan;