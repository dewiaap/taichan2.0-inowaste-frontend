import Sidebar from "../Components/Sidebar";

const DashboardDriver = () => {
    return (
        <>
        <Sidebar>
        <div className="font-poppins mx-12 mt-6 pb-12">
            <div className="flex justify-between place-items-center mb-8">
                    <p className="font-bold text-lg">Dashboard</p>

                    <div className="flex gap-x-6 mt-6">
                    <p className="font-bold mt-3">Pilih Periode</p>
                    <select className="rounded-3xl shadow-md border-white">
                        <option className="selected">--Pilih Bulan--</option>
                        <option>Januari</option>
                        <option>Februari</option>
                        <option>Maret</option>
                        <option>April</option>
                        <option>Mei</option>
                        <option>Juni</option>
                        <option>Juli</option>
                        <option>Agustus</option>
                        <option>September</option>
                        <option>Oktober</option>
                        <option>November</option>
                        <option>Desember</option>
                    </select>
                    </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="border-2 border-gray-300 rounded-lg shadow-md bg-white">
                    <div className="ml-12 mt-8">
                    <p className="text-2xl font-bold">Jumlah Penjemputan</p>
                    <div className="flex mt-8 mb-8">
                        <p className="text-6xl font-bold text-tertiary">32</p>
                        <p className="mt-6 ml-4 text-2xl font-bold"> Transaksi</p>
                    </div>
                </div>
                </div>
                <div className="border-2 border-gray-300 rounded-lg shadow-md bg-white">
                    <div className="ml-12 mt-8">
                    <p className="text-2xl font-bold">Jumlah Minyak Dijemput</p>
                    <div className="flex mt-8 mb-8">
                        <p className="text-6xl font-bold text-tertiary">160</p>
                        <p className="mt-6 ml-4 text-2xl font-bold">Liter</p>
                    </div>
                </div>
                </div>
                <div className="border-2 border-gray-300 rounded-lg shadow-md bg-white">
                    <div className="ml-12 mt-8">
                    <p className="text-2xl font-bold">Jumlah Pengantaran</p>
                    <div className="flex mt-8 mb-8">
                        <p className="text-6xl font-bold text-tertiary">30</p>
                        <p className="mt-6 ml-4 text-2xl font-bold">Transaksi</p>
                    </div>
                </div>
                </div>
                <div className="border-2 border-gray-300 rounded-lg shadow-md bg-white">
                    <div className="ml-12 mt-8">
                    <p className="text-2xl font-bold">Jumlah Minyak Diantar</p>
                    <div className="flex mt-8 mb-8">
                        <p className="text-6xl font-bold text-tertiary">150</p>
                        <p className="mt-6 ml-4 text-2xl font-bold">Liter</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </Sidebar>
        </>
    );
}

export default DashboardDriver;