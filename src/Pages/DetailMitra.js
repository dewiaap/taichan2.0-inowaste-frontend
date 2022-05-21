const DetailMitra = () => {
    return (
        <>
        <div className="grid grid-cols-4 gap-4 mt-20">
                <div className="flex justify-center">
                    <img src="logoGEU.png" className="w-48 h-48" />
                </div>
                <div className="flex col-span-3 flex-col justify-center">
                    <h1 className="text-6xl font-bold font-poppins text-primary mt-6">PT Green Energi Utama (GEU)</h1>
                    <h6 className="text-2xl w-3/4 mt-10 font-poppins">📍 Karanglo, Banjararum, Singosari, Malang Regency, East Java 65153</h6>
                    <div className="flex justify-between mt-4 w-1/2">
                        <h3 className="text-secondary text-2xl font-bold font-halant">309 Poin</h3>
                        <h3 className="text-xl opacity-50">|</h3>
                        <h3 className="text-secondary text-2xl font-bold font-halant">500 Liters contributed</h3>
                    </div>
                </div>
        </div>
        <div className="mt-12 mb-12">
                <p className="text-justify font-poppins font-bold mx-12">PT.Green Energi Utama (GEU) berlokasi di Malang Jawa Timur merupakan anak perusahaan dari 
                PT.Garuda Sinar Perkasa Grup (GSP) Samarinda. Saat ini GEU telah berhasil menjalin kerjasama dengan lebih dari 1000 Mitra. GEU merupakan 
                perusahaan yang bergerak dalam bidang penampungan dan distributor minyak goreng bekas atau Used Cooking Oil (UCO) yang di olah menjadi 
                bahan baku pembuatan biodiesel. Dengan menerapkan dan mengedepankan prinsip “Green World for Better Future”, GEU berkomitmen untuk terus 
                melakukan inovasi dan menjalin kerjasama dengan berbagai mitra yang tersebar di berbagai daerah secara profesional dan terpercaya terutama 
                dalam bidang energi terbarukan.</p>
        </div>
        <div className="grid grid-cols-3 mt-12 mx-6 font-poppins">
            <div className="box-border border-2 rounded-lg mx-6 shadow-md">
                <img src="img_detailMitra.png" className="rounded-t-lg"></img>
                <h1 className="pl-6 my-4 text-xl font-bold">Forum Silaturahmi IKM seluruh malang</h1>
            </div>
            <div className="box-border border-2 rounded-lg mx-6 shadow-md">
                <img src="img_detailMitra.png" className="rounded-t-lg"></img>
                <h1 className="pl-6 my-4 text-xl font-bold">Forum Silaturahmi IKM seluruh malang</h1>
            </div>
            <div className="box-border border-2 rounded-lg mx-6 shadow-md">
                <img src="img_detailMitra.png" className="rounded-t-lg"></img>
                <h1 className="pl-6 my-4 text-xl font-bold">Forum Silaturahmi IKM seluruh malang</h1>
            </div>
        </div>
        <hr className="mt-8 border-1 border-black opacity-50 mb-8 ml-12 mr-12" />
        <div className="grid grid-cols-1 gap-4 mt-8 font-poppins ml-12 mr-96">
                <div className="flex flex-col mt-12">
                    <h3 className="text-5xl font-bold text-primary">Mau Tukar Minyak?</h3>
                    <form>
                        <div className="form-control mt-8">
                            <h6 className="text-xl font-bold mt-20">Mitra Tujuan</h6>
                            <div className="w-11/12 bg-gray-100 p-4 text-gray-500 mt-2">
                            PT Green Energi Utama (GEU) | Karanglo, Banjararum, Singosari, Malang Regency, East Java 65153
                                <br/>
                            </div>
                        </div>
                        <div className="form-control mt-8">
                            <h6 className="text-xl font-bold ">Nomor Handphone (WhatsApp)</h6>
                            <input type="text" className="block border border-gray-300 shadow-md w-11/12 p-3 mt-2 font-poppins placeholder:text-center text-xs" name="no_telp" />
                        </div>
                        <div className="form-control mt-8">
                            <h6 className="text-xl font-bold ">Alamat Penjemputan</h6>
                            <textarea type="text" className="block border border-gray-300 shadow-md border-black w-11/12 p-3 mt-2 font-poppins placeholder:text-center text-xs" name="alamat"></textarea>
                        </div>
                        <div className="form-control mt-8">
                            <h6 className="text-xl font-bold ">Tanggal Penjemputan</h6>
                            <div className="flex">
                                <input type="date" className="block border border-gray-300 shadow-md border-black w-6/12 p-3 mt-2 mr-2 placeholder:text-center text-xs" name="tanggal" />
                                <input type="time" className="block border border-gray-300 shadow-md border-black w-5/12 p-3 mt-2 placeholder:text-center text-xs" name="waktu" />
                            </div>
                        </div>
                        <div className="form-control mt-8">
                            <h6 className="text-xl font-bold ">Perkiraan Jumlah Minyak (Liter)</h6>
                            <input type="number" className="block border border-gray-300 shadow-md border-black w-11/12 p-3 mt-2 placeholder:text-center text-xs" name="liter" />
                        </div>
                        <button className=" rounded-full px-16 py-3 mt-12 text-center p-3 bg-secondary text-white font-bold hover:bg-tertiary text-lg focus:outline-none mb-16">Kirim
                        </button>
                    </form>
                </div>
        </div>
        </>
    );
}

export default DetailMitra;