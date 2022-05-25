import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const DetailMitra = () => {
    const { id_mitra } = useParams();
    const [mitra, setMitra] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isLoading) return;
        fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/user/id_user/${id_mitra}`)
            .then(response => response.json())
            .then(response => {
                setTimeout(() => {
                    setMitra(response.data[0]);
                    setIsLoading(false);
                }, 2000);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [isLoading])
    return (
        <>
            {isLoading ? (
                <>
                    <div className="animate-pulse">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20 ">
                            <div className="flex justify-center">
                                <div className="w-48 h-48 bg-gray-400 rounded-full"></div>
                            </div>
                            <div className="flex col-span-3 flex-col justify-center mx-12 md:mx-0">
                                <h1 className="w-full md:w-11/12 h-12 rounded-full bg-gray-400 mt-6"></h1>
                                <h6 className="w-full md:w-9/12 h-6 rounded-full bg-gray-400 mt-6"></h6>
                                <h6 className="w-full md:w-9/12 h-6 rounded-full bg-gray-400 mt-2"></h6>
                                <div className="flex justify-between mt-4 md:w-1/2">
                                    <h3 className="w-full rounded-full bg-gray-400 h-6 mr-3"></h3>
                                    <h3 className="w-full rounded-full bg-gray-400 h-6"></h3>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 mb-12 ">
                            <p className="h-4 bg-gray-400 rounded-full mx-12"></p>
                            <p className="h-4 bg-gray-400 rounded-full mx-12 mt-3"></p>
                            <p className="h-4 bg-gray-400 rounded-full mx-12 mt-3"></p>
                            <p className="h-4 bg-gray-400 rounded-full mx-12 mt-3"></p>
                            <p className="h-4 bg-gray-400 rounded-full mx-12 mt-3"></p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 mx-6 font-poppins ">
                            <div className="box-border border-2 rounded-lg mx-6 shadow-md mb-6 md:mb-0">
                                <div className="rounded-t-lg w-full h-56 bg-gray-400"></div>
                                <div className="py-4">
                                    <h1 className="mb-3 h-5 rounded-full bg-gray-400 mx-4"></h1>
                                    <h1 className="h-5 rounded-full bg-gray-400 mx-4"></h1>
                                </div>
                            </div>
                            <div className="box-border border-2 rounded-lg mx-6 shadow-md mb-6 md:mb-0">
                                <div className="rounded-t-lg w-full h-56 bg-gray-400"></div>
                                <div className="py-4">
                                    <h1 className="mb-3 h-5 rounded-full bg-gray-400 mx-4"></h1>
                                    <h1 className="h-5 rounded-full bg-gray-400 mx-4"></h1>
                                </div>
                            </div>
                            <div className="box-border border-2 rounded-lg mx-6 shadow-md mb-6 md:mb-0">
                                <div className="rounded-t-lg w-full h-56 bg-gray-400"></div>
                                <div className="py-4">
                                    <h1 className="mb-3 h-5 rounded-full bg-gray-400 mx-4"></h1>
                                    <h1 className="h-5 rounded-full bg-gray-400 mx-4"></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-8 border-1 border-black opacity-50 mb-8 ml-12 mr-12" />
                    <div className="grid grid-cols-1 gap-4 mt-8 font-poppins mx-auto md:ml-12 w-11/12 md:w-8/12">
                        <div className="flex flex-col mt-12">
                            <h3 className="text-3xl md:text-5xl font-bold text-primary">Mau Tukar Minyak?</h3>
                            <form>
                                <div className="form-control mt-8">
                                    <h6 className="text-md md:text-xl font-bold mt-20">Mitra Tujuan</h6>
                                    <div className="w-11/12 bg-gray-400 rounded-lg p-4 h-16 mt-2 animate-pulse">
                                    </div>
                                </div>
                                <div className="form-control mt-8">
                                    <h6 className="text-md md:text-xl font-bold ">Nomor Handphone (WhatsApp)</h6>
                                    <input type="text" className="block border border-gray-300 rounded-lg shadow-md w-11/12 p-3 mt-2 font-poppins placeholder:text-center text-xs" name="no_telp" />
                                </div>
                                <div className="form-control mt-8">
                                    <h6 className="text-md md:text-xl font-bold ">Alamat Penjemputan</h6>
                                    <textarea type="text" className="block border border-gray-300 rounded-lg shadow-md w-11/12 p-3 mt-2 font-poppins placeholder:text-center text-xs" name="alamat"></textarea>
                                </div>
                                <div className="form-control mt-8">
                                    <h6 className="text-md md:text-xl font-bold ">Tanggal Penjemputan</h6>
                                    <div className="flex">
                                        <input type="date" className="block border border-gray-300 rounded-lg shadow-md w-6/12 p-3 mt-2 mr-2 placeholder:text-center text-xs" name="tanggal" />
                                        <input type="time" className="block border border-gray-300 rounded-lg shadow-md w-5/12 p-3 mt-2 placeholder:text-center text-xs" name="waktu" />
                                    </div>
                                </div>
                                <div className="form-control mt-8">
                                    <h6 className="text-md md:text-xl font-bold ">Perkiraan Jumlah Minyak (Liter)</h6>
                                    <input type="number" className="block border border-gray-300 rounded-lg shadow-md w-11/12 p-3 mt-2 placeholder:text-center text-xs" name="liter" />
                                </div>
                                <div className="flex mx-auto md:justify-start">
                                    <button className="rounded-full w-11/12 md:w-auto md:px-16 md:py-3 mt-12 text-center p-3 bg-secondary text-white font-bold hover:bg-tertiary text-lg focus:outline-none mb-16">Kirim</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )
                :
                (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20">
                            <div className="flex justify-center">
                                <img src={mitra.gambar_profil} className="w-48 h-48" />
                            </div>
                            <div className="flex col-span-3 flex-col justify-center mx-12 md:mx-0">
                                <h1 className="text-3xl md:text-6xl font-bold font-poppins text-primary mt-6">{mitra.nama_lengkap}</h1>
                                <h6 className="text-xl md:text-2xl md:w-3/4 mt-10 font-poppins">📍 {mitra.alamat}</h6>
                                <div className="flex justify-between mt-4 md:w-1/2">
                                    <h3 className="text-secondary text-xl md:text-2xl font-bold font-halant">{mitra.poin} Poin</h3>
                                    <h3 className="text-xl opacity-50">|</h3>
                                    <h3 className="text-secondary text-xl md:text-2xl font-bold font-halant">{mitra.detail_user[0].liter} Liters contributed</h3>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 mb-12">
                            <p className="text-justify font-poppins font-bold mx-12">{mitra.detail_user[0].deskripsi}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 mx-6 font-poppins">
                            {mitra.galeri.map((item, index) => {
                                return (
                                    <div className="box-border border-2 rounded-lg mx-6 shadow-md mb-6 md:mb-0">
                                        <img src={item.gambar} className="rounded-t-lg"></img>
                                        <h1 className="pl-6 my-4 text-xl font-bold">{item.keterangan}</h1>
                                    </div>
                                );
                            })}
                        </div>
                        <hr className="mt-8 border-1 border-black opacity-50 mb-8 ml-12 mr-12" />
                        <div className="grid grid-cols-1 gap-4 mt-8 font-poppins mx-auto md:ml-12 w-11/12 md:w-8/12">
                            <div className="flex flex-col mt-12">
                                <h3 className="text-3xl md:text-5xl font-bold text-primary">Mau Tukar Minyak?</h3>
                                <form>
                                    <div className="form-control mt-8">
                                        <h6 className="text-md md:text-xl font-bold mt-20">Mitra Tujuan</h6>
                                        <div className="w-11/12 bg-gray-100 rounded-lg p-4 text-gray-500 mt-2">
                                            {mitra.nama_lengkap} | {mitra.alamat}
                                            <br />
                                        </div>
                                    </div>
                                    <div className="form-control mt-8">
                                        <h6 className="text-md md:text-xl font-bold ">Nomor Handphone (WhatsApp)</h6>
                                        <input type="text" className="block border border-gray-300 rounded-lg shadow-md w-11/12 p-3 mt-2 font-poppins placeholder:text-center text-xs" name="no_telp" />
                                    </div>
                                    <div className="form-control mt-8">
                                        <h6 className="text-md md:text-xl font-bold ">Alamat Penjemputan</h6>
                                        <textarea type="text" className="block border border-gray-300 rounded-lg shadow-md w-11/12 p-3 mt-2 font-poppins placeholder:text-center text-xs" name="alamat"></textarea>
                                    </div>
                                    <div className="form-control mt-8">
                                        <h6 className="text-md md:text-xl font-bold ">Tanggal Penjemputan</h6>
                                        <div className="flex">
                                            <input type="date" className="block border border-gray-300 rounded-lg shadow-md w-6/12 p-3 mt-2 mr-2 placeholder:text-center text-xs" name="tanggal" />
                                            <input type="time" className="block border border-gray-300 rounded-lg shadow-md w-5/12 p-3 mt-2 placeholder:text-center text-xs" name="waktu" />
                                        </div>
                                    </div>
                                    <div className="form-control mt-8">
                                        <h6 className="text-md md:text-xl font-bold ">Perkiraan Jumlah Minyak (Liter)</h6>
                                        <input type="number" className="block border border-gray-300 rounded-lg shadow-md w-11/12 p-3 mt-2 placeholder:text-center text-xs" name="liter" />
                                    </div>
                                    <div className="flex mx-auto md:justify-start">
                                        <button className="rounded-full w-11/12 md:w-auto md:px-16 md:py-3 mt-12 text-center p-3 bg-secondary text-white font-bold hover:bg-tertiary text-lg focus:outline-none mb-16">Kirim</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                )}
        </>
    );
}

export default DetailMitra;