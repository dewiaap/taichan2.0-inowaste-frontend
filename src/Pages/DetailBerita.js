import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
moment().locale('id');

const DetailBerita = () => {
    const { id_berita } = useParams();
    const [berita, setBerita] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isLoading) return;
        fetch(`https://taichan2-0-inowaste-backend-dewiaap.vercel.app/berita/id_berita/${id_berita}`)
            .then(response => response.json())
            .then(response => {
                setTimeout(() => {
                    setBerita(response.data[0]);
                    setIsLoading(false);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [isLoading])
    return (
        <>
            {isLoading ? (
                <>
                    <div className="font-poppins mx-12 md:mx-28 mt-12 md:mt-20 mb-20 animate-pulse">
                        <h1 className="w-full bg-gray-400 rounded-full h-8 md:h-12"></h1>
                        <h1 className="w-full bg-gray-400 rounded-full h-8 md:h-12 mt-2 md:mt-1"></h1>
                        <h1 className="block md:hidden w-full bg-gray-400 rounded-full h-8 md:h-12 mt-2 md:mt-1"></h1>
                        <h6 className="w-1/2 md:w-1/4 h-8 bg-gray-400 rounded-full mt-6 md:mt-16"></h6>
                        <div className="w-full rounded-lg h-64 md:h-96 bg-gray-400 mt-6 md:mt-16"></div>
                        <p className="mt-10 md:mt-20 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>

                        <p className="mt-5 md:mt-10 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                        <p className="mt-1 w-full rounded-full h-4 md:h-6 bg-gray-400"></p>
                    </div>
                </>
            )
                :
                (
                    <>
                        <div className="font-poppins mx-12 md:mx-28 mt-12 md:mt-20">
                            <h1 className="font-bold text-3xl md:text-5xl leading-relaxed">{berita.nama_berita}</h1>
                            <h6 className="font-bold text-xl md:text-2xl text-secondary mt-6 md:mt-16">Artikel | {moment(berita.created_at).format('DD MMMM YYYY')}</h6>
                            <img src={berita.gambar_berita} className="w-full rounded-lg mt-6 md:mt-16 object-cover h-64 md:h-96"></img>
                            <p className="mt-10 md:mt-20 font-medium text-md md:text-xl text-justify mb-10">
                                {berita.isi_berita?.split("\n").map((item, index) => {
                                    return (
                                        <span key={index}>
                                            {item.includes("\n") ? `${item} <br />` : item}
                                            <br />
                                        </span>
                                    )
                                })}
                            </p>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default DetailBerita;