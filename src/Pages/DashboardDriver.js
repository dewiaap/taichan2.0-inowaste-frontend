import Sidebar from "../Components/Sidebar";

const DashboardDriver = () => {
    return (
        <>
        <Sidebar>
        <div className="font-poppins mx-12 mt-6 pb-12">
        <div className="flex flex-col justify-between mt-8 mb-6 space-y-1">
                    <p className="font-bold text-xl text-gray-700">Dashboard</p>

                    <div className="flex gap-x-6 mt-6  md:text-base self-end">
                    <p className="font-bold mt-3 md:text-base text-sm">Pilih Periode</p>
                    <select className="rounded-3xl shadow-md border-white text-sm md:text-base">
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
                <div className="border-2 border-gray-300 rounded-lg shadow-md bg-white px-4 pt-4 md:px-8 md:pt-8">
                    <div className="text-center lg:text-left">
                    <p className="text-lg md:text-2xl font-bold">Jumlah Penjemputan</p>
                    <div className="flex flex-col lg:flex-row mt-8 mb-8">
                        <p className="text-5xl md:text-6xl font-bold text-tertiary">32</p>
                        <p className="mt-6 lg:ml-4 text-lg md:text-2xl font-bold"> Transaksi</p>
                    </div>
                </div>
                </div>
                <div className="border-2 border-gray-300 rounded-lg shadow-md bg-white px-4 pt-4 md:px-8 md:pt-8">
                    <div className="text-center lg:text-left">
                    <p className="text-lg md:text-2xl font-bold">Jumlah Minyak Dijemput</p>
                    <div className="flex flex-col lg:flex-row mt-8 mb-8">
                        <p className="text-5xl md:text-6xl font-bold text-tertiary">160</p>
                        <p className="mt-6 lg:ml-4 text-lg  md:text-2xl font-bold">Liter</p>
                    </div>
                </div>
                </div>
                <div className="border-2 border-gray-300 rounded-lg shadow-md bg-white px-4 pt-4 md:px-8 md:pt-8">
                    <div className="text-center lg:text-left">
                    <p className="text-lg md:text-2xl font-bold">Jumlah Pengantaran</p>
                    <div className="flex flex-col lg:flex-row mt-8 mb-8">
                        <p className="text-5xl md:text-6xl font-bold text-tertiary">30</p>
                        <p className="mt-6 lg:ml-4 text-lg md:text-2xl font-bold">Transaksi</p>
                    </div>
                </div>
                </div>
                <div className="border-2 border-gray-300 rounded-lg shadow-md bg-white px-4 pt-4 md:px-8 md:pt-8">
                    <div className="text-center lg:text-left">
                    <p className="text-lg md:text-2xl font-bold">Jumlah Minyak Diantar</p>
                    <div className="flex flex-col lg:flex-row mt-8 mb-8">
                        <p className="text-5xl md:text-6xl font-bold text-tertiary">150</p>
                        <p className="mt-6 lg:ml-4 text-lg md:text-2xl font-bold">Liter</p>
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