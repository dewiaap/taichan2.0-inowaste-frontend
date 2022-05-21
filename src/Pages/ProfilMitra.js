import Sidebar from '../Components/Sidebar';

const ProfilMitra = () => {
    return (
        <>
        <Sidebar>
            <div className="font-poppins mx-12 mt-6 pb-12">
                <div className="flex justify-between place-items-center mb-8">
                    <p className="font-bold text-lg">Profil Perusahaan</p>
                    <button className="bg-tertiary text-white rounded-full font-bold px-6 py-2">Edit Profil</button>
                </div>

                <div className="grid grid-cols-5 bg-white shadow-md max-h-full p-12 font-poppins rounded-xl">
                    <div>
                        <img src="logoGEU.png" alt="photo" className='object-cover h-28'></img>
                    </div>

                    <div className="col-start-2 col-span-4 text-xs space-y-4 mr-8 ">
                        <div className='flex justify-between'>
                            <div><p className='font-bold'>Nama</p><input type="text" className="border rounded-lg border-black mt-2 text-xs w-72 text-gray-500" name="nama" defaultValue='PT Green Energi Utama'></input></div>
                            <div><p className='font-bold'>Username</p><input type="text" className="border rounded-lg border-black mt-2 text-xs w-72 text-gray-500" name="usernam" defaultValue="greenenergiutama"></input></div>
                        </div>

                        <div className='flex justify-between'>
                            <div><p className='font-bold'>Email</p><input type="email" className="border rounded-lg border-black mt-2 text-xs w-72 text-gray-500" name="email" defaultValue="cs@greenenergiutama.com"></input></div>
                            <div><p className='font-bold'>No Telpon</p><input type="text" className="border rounded-lg border-black mt-2 text-xs w-72 text-gray-500" name="nohp" defaultValue="08113322222"></input></div>
                        </div>

                        <div className='flex justify-between'>
                            <div><p className='font-bold'>Kata Sandi</p><input type="password" className="border rounded-lg border-black mt-2 text-xs w-72" name="password" placeholder='kata sandi'></input></div>
                            <div><p className='font-bold'>Harga Minyak Per Liter</p><input type="text" className="border rounded-lg border-black mt-2 text-xs w-72 text-gray-500" name="hargaminyak" defaultValue='5,600'></input></div>
                        </div> 

                        <div className=''><p className='font-bold'>Alamat Perusahaan</p><textarea className='block botder rounded-lg border-black min-w-full h-auto text-xs mt-2 text-gray-500' name='alamat' defaultValue=" Karanglo, Banjararum, Singosari, Malang Regency, East Java"></textarea></div> 

                        <div><p className='font-bold'>Deskripsi Perusahaan</p><textarea className='block botder rounded-lg border-black min-w-full h-24 text-xs mt-2 text-gray-500' name='deskripsi' defaultValue="PT.Green Energi Utama (GEU) berlokasi di Malang Jawa Timur merupakan anak perusahaan dari PT.Garuda Sinar Perkasa Grup (GSP) Samarinda. Saat ini GEU telah berhasil menjalin kerjasama dengan lebih dari 1000 Mitra. GEU merupakan perusahaan yang bergerak dalam bidang penampungan dan distributor minyak goreng bekas..."></textarea></div> 
                    </div>
                </div>
            </div>
        </Sidebar>
        </>
    );
}

export default ProfilMitra;