import { useState, useEffect } from "react";
import moment from 'moment';
moment().locale('id');

const Berita = () => {
    const [berita, setBerita] = useState([]);
    const [dummy, setDummy] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isLoading) return;
        fetch('https://taichan2-0-inowaste-backend-dewiaap.vercel.app/berita', {
            method: "GET"
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setTimeout(() => {
                    setBerita(response.data);
                    setDummy(response.data);
                    setIsLoading(false);
                }, 2000)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [isLoading])

    const search = (params) =>{
        if (params === "") {
			setBerita(dummy);
		} else {
			let result = dummy.filter(
				(item) =>
					item.nama_berita.toLowerCase().includes(params.toLowerCase())
			);
			setBerita(result);
		}
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-fit bg-primary py-12">
                <div className="flex flex-col self-center font-poppins order-last md:order-first pl-12 pr-12 md:pr-0">
                    <h1 className="font-bold text-3xl md:text-4xl text-white leading-relaxed">Baca Artikel Tentang Minyak Jelantah Disini</h1>
                    <p className="font-medium text-xl md:text-2xl text-white mt-5">Temukan hal yang ingin kamu ketahui tentang minyak jelantah dan program menarik dari kami!</p>
                </div>
                <div className="flex self-center justify-center mb-8 md:mb-0">
                    <img src="assets/img_berita.png" className="w-fit"></img>
                </div>
            </div>
            <div className="font-poppins flex md:flex-row mx-auto mt-14 mb-10 max-w-md md:max-w-4xl">
                <div className="container relative block">
                    <span className="absolute inset-y-0 right-4 flex items-center pl-2"><button type="submit" className="focus:outline-none"><img src="assets/vectorSearch.png" alt="search" className="object-cover h-4"></img></button></span>
                    <input className="placeholder:text-primary placeholder:font-bold block bg-gray-300 w-full border border-slate-300 rounded-full py-2 pl-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Cari Artikel Disini..." type="text" onChange={(e)=>{search(e.target.value)}}/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16 mx-10 font-poppins">
                {isLoading ? (
                    <>
                        <div className="p-6 shadow-lg rounded-lg border border-gray-100 animate-pulse">
                            <div className="rounded-lg bg-gray-400 w-full h-40"></div>
                            <h1 className="w-full h-5 bg-gray-400 rounded-full mt-3"></h1>
                            <h1 className="w-full h-5 bg-gray-400 rounded-full mt-3"></h1>
                            <h1 className="w-full h-5 bg-gray-400 rounded-full mt-3"></h1>
                            <div className="flex justify-end">
                                <h6 className="w-1/2 h-4 bg-gray-400 rounded-full mt-3"></h6>
                            </div>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg border border-gray-100 animate-pulse">
                            <div className="rounded-lg bg-gray-400 w-full h-40"></div>
                            <h1 className="w-full h-5 bg-gray-400 rounded-full mt-3"></h1>
                            <h1 className="w-full h-5 bg-gray-400 rounded-full mt-3"></h1>
                            <h1 className="w-full h-5 bg-gray-400 rounded-full mt-3"></h1>
                            <div className="flex justify-end">
                                <h6 className="w-1/2 h-4 bg-gray-400 rounded-full mt-3"></h6>
                            </div>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg border border-gray-100 animate-pulse">
                            <div className="rounded-lg bg-gray-400 w-full h-40"></div>
                            <h1 className="w-full h-5 bg-gray-400 rounded-full mt-3"></h1>
                            <h1 className="w-full h-5 bg-gray-400 rounded-full mt-3"></h1>
                            <h1 className="w-full h-5 bg-gray-400 rounded-full mt-3"></h1>
                            <div className="flex justify-end">
                                <h6 className="w-1/2 h-4 bg-gray-400 rounded-full mt-3"></h6>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {berita.map((item, index) => {
                            return (
                                <a key={index} href={"#/berita/"+item.id_berita}>
                                    <div className="p-6 shadow-lg rounded-lg border border-gray-100">
                                        <img src={item.gambar_berita} className="rounded-lg object-cover w-full h-40"></img>
                                        <h1 className="font-bold text-xl md:text-2xl mt-4">{item.nama_berita}</h1>
                                        <h6 className="text-secondary text-right mt-2 font-bold">Artikel | {moment(item.created_at).format('DD MMMM YYYY')}</h6>
                                    </div>
                                </a>
                            );
                        })}
                    </>
                )}
            </div>
        </>
    );
}

export default Berita;