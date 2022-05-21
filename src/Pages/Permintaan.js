import Sidebar from "../Components/Sidebar";

const Permintaan = () => {
    return (
        <>
        <Sidebar>
        <div className="font-poppins mx-12 mt-6 pb-12">
        <div className="flex justify-between place-items-center">
                    <p className="font-bold text-lg">Permintaan</p>

                    <div className="flex gap-x-6 mt-6">
                    <p className="font-bold mt-3">Pilih Status</p>
                    <select className="rounded-3xl shadow-md border-white">
                        <option>Dalam Proses</option>
                        <option>Selesai</option>
                    </select>
                </div>
            </div>
        </div>
        </Sidebar>
        </>
    );
}

export default Permintaan;