import { useState, useEffect } from "react";
const Mitra = () => {
    const [mitra, setMitra] = useState([]);
    const [dummy, setDummy] = useState([]);
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
                    setMitra(response.data);
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
			setMitra(dummy);
		} else {
			let result = dummy.filter(
				(item) =>
					item.nama_lengkap.toLowerCase().includes(params.toLowerCase())
			);
			setMitra(result);
		}
    }
    const filter = (kota) =>{
        console.log(kota)
        if(kota.toLowerCase() === "pilih daerah"){
            setMitra(dummy);
        }else{
            console.log(kota)
            let result = dummy.filter((item)=>item.alamat.toLowerCase().includes(kota.toLowerCase()));
            setMitra(result);
        }
    }
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-fit bg-primary">
                <div className="flex flex-col self-center font-poppins pl-12 pr-12 md:pr-0 order-last md:order-first md:mt-10">
                    <h1 className="font-bold text-3xl md:text-4xl text-white leading-relaxed">Mengumpulkan dan Mengolah Kembali Minyak Jelantah</h1>
                    <p className="font-medium text-xl md:text-2xl text-white mt-5">Bergabunglah bersama kami menjadi mitra Inowaste dan dapatkan minyak jelantah dengan mudah!</p>
                    <div className="flex justify-center md:justify-start">
                        <button className=" rounded-full w-full md:w-56 mt-12 text-center p-3 bg-secondary text-white font-bold hover:bg-tertiary text-lg focus:outline-none mb-16">Daftar Disini
                        </button>
                    </div>
                </div>
                <div className="flex justify-center self-center">
                    <img src="img_mitra.png" className="w-5/6"></img>
                </div>
            </div>
            <div className="font-poppins flex md:flex-row mx-auto mt-14 mb-10 max-w-md md:max-w-4xl">

                <div className="container relative block">
                    <span className="absolute inset-y-0 right-4 flex items-center pl-2"><button type="submit" className="focus:outline-none"><img src="vectorSearch.png" alt="search" className="object-cover h-4"></img></button></span>
                    <input className="placeholder:text-primary placeholder:font-bold block bg-gray-300 w-full border border-slate-300 rounded-full py-2 pl-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Cari Mitra Disini..." type="text" onChange={(e)=>{search(e.target.value)}}/>
                </div>

                <select name="pilihDaerah" className="pl-9 border-0 focus:outline-none active:outline-none" onChange={(e)=>{filter(e.target.value)}}>
                    <option selected defaultValue="-">Pilih Daerah</option>
                    <option defaultValue="Malang">Malang</option>
                    <option defaultValue="Surabaya">Surabaya</option>
                    <option defaultValue="Sidoarjo">Sidoarjo</option>
                    <option defaultValue="Batu">Batu</option>
                    <option defaultValue="None">None</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:mb-12">
                <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 mx-auto">
                    {isLoading
                        ?
                        (
                            <>
                                <a className="container box-border border w-48 h-64 p-2 shadow-lg rounded-md mb-6 md:mb-0 animate-pulse">
                                    <div className="box-content w-16 h-4 py-1 rounded-lg bg-gray-400 text-xs text-center font-bold text-primary font-poppins justify-self-end">
                                        <p></p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="object-contain h-28 w-28 bg-gray-400 rounded-full"></div>
                                    </div>
                                    <div>
                                        <p className="font-halant text-sm font-bold mt-2 w-full h-3 bg-gray-400 rounded-full"></p>
                                        <p className="font-halant text-sm font-bold mt-2 w-full h-3 bg-gray-400 rounded-full"></p>
                                        <p className="font-poppins text-xs bg-gray-400 mt-6 w-28 h-3 float-right rounded-full"></p>
                                    </div>
                                </a>
                                <a className="container box-border border w-48 h-64 p-2 shadow-lg rounded-md mb-6 md:mb-0 animate-pulse">
                                    <div className="box-content w-16 h-4 py-1 rounded-lg bg-gray-400 text-xs text-center font-bold text-primary font-poppins justify-self-end">
                                        <p></p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="object-contain h-28 w-28 bg-gray-400 rounded-full"></div>
                                    </div>
                                    <div>
                                        <p className="font-halant text-sm font-bold mt-2 w-full h-3 bg-gray-400 rounded-full"></p>
                                        <p className="font-halant text-sm font-bold mt-2 w-full h-3 bg-gray-400 rounded-full"></p>
                                        <p className="font-poppins text-xs bg-gray-400 mt-6 w-28 h-3 float-right rounded-full"></p>
                                    </div>
                                </a>
                                <a className="container box-border border w-48 h-64 p-2 shadow-lg rounded-md mb-6 md:mb-0 animate-pulse">
                                    <div className="box-content w-16 h-4 py-1 rounded-lg bg-gray-400 text-xs text-center font-bold text-primary font-poppins justify-self-end">
                                        <p></p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="object-contain h-28 w-28 bg-gray-400 rounded-full"></div>
                                    </div>
                                    <div>
                                        <p className="font-halant text-sm font-bold mt-2 w-full h-3 bg-gray-400 rounded-full"></p>
                                        <p className="font-halant text-sm font-bold mt-2 w-full h-3 bg-gray-400 rounded-full"></p>
                                        <p className="font-poppins text-xs bg-gray-400 mt-6 w-28 h-3 float-right rounded-full"></p>
                                    </div>
                                </a>
                                <a className="container box-border border w-48 h-64 p-2 shadow-lg rounded-md mb-6 md:mb-0 animate-pulse">
                                    <div className="box-content w-16 h-4 py-1 rounded-lg bg-gray-400 text-xs text-center font-bold text-primary font-poppins justify-self-end">
                                        <p></p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="object-contain h-28 w-28 bg-gray-400 rounded-full"></div>
                                    </div>
                                    <div>
                                        <p className="font-halant text-sm font-bold mt-2 w-full h-3 bg-gray-400 rounded-full"></p>
                                        <p className="font-halant text-sm font-bold mt-2 w-full h-3 bg-gray-400 rounded-full"></p>
                                        <p className="font-poppins text-xs bg-gray-400 mt-6 w-28 h-3 float-right rounded-full"></p>
                                    </div>
                                </a>
                            </>
                        )
                        :
                        (
                            <>
                                {mitra.map((item, index) => {
                                    return (
                                        <a key={index} href={"#/mitra/"+item.id_user} className="container box-border border w-48 h-64 p-2 shadow-lg rounded-md mb-6 md:mb-0">
                                            <div className="box-content w-16 h-4 py-1 rounded-lg bg-secondary text-xs text-center font-bold text-primary font-poppins justify-self-end">
                                                <p>{item.poin} poin</p>
                                            </div>
                                            <div className="flex justify-center">
                                                <img src={item.gambar_profil} alt="pict" className="object-contain h-28 w-44"></img>
                                            </div>
                                            <div>
                                                <p className="font-halant text-sm font-bold mt-2">{item.nama_lengkap}</p>
                                                <p className="pt-4 font-poppins text-xs text-gray-500 pb-2 text-right">| {item.alamat.split(",")[3]}</p>
                                            </div>
                                        </a>
                                    )
                                })}
                            </>
                        )}
                </div>
            </div>
            {/* <div className="flex font-poppins justify-center mb-6">
                <button className="hover:bg-secondary border border-secondary w-8 h-8 rounded-lg mx-1">
                    <div className="py-2 px-2">
                        <img src="nextLeft.png" className="w-2 h-3"></img>
                    </div>
                </button>
                <button className="hover:bg-secondary hover:text-white active:bg-secondary active:text-white border border-secondary w-8 h-8 rounded-lg mx-1">
                    <div className="py-0.5 px-2 text-center font-bold">1
                    </div>
                </button>
                <button className="hover:bg-secondary hover:text-white active:bg-secondary active:text-white border border-secondary w-8 h-8 rounded-lg mx-1">
                    <div className="py-0.5 px-2 text-center font-bold">2
                    </div>
                </button>
                <button className="hover:bg-secondary hover:text-white active:bg-secondary active:text-white border border-secondary w-8 h-8 rounded-lg mx-1">
                    <div className="py-0.5 px-2 text-center font-bold">3
                    </div>
                </button>
                <button className="hover:bg-secondary border border-secondary w-8 h-8 rounded-lg mx-1">
                    <div className="py-2 px-2">
                        <img src="nextRight.png" className="w-2 h-3"></img>
                    </div>
                </button>
            </div> */}
        </>
    );
}

export default Mitra;