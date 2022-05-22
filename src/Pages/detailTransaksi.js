const DetailTransaksi = () => {
    return (
        <> 
        {/* pt-4 px-8 pb-4  */}
        <div className="box-border bg-white shadow-md rounded-lg mt-16 mb-14 mx-auto max-w-xl  font-poppins">
            <div className="box-border bg-white border-b h-16 flex justify-between px-8 mb-6 place-items-center">
                <div className="text-md font-bold pt-2">Detail Transaksi</div>

                <div className=""><button type="button"><img src="close.png" alt="tutup" className="object-cover h-5"></img></button></div>
            </div>

            <div className="px-8 pb-6 flex">
                <div className="text-xs text-gray-500 mr-6">
                    <ol className="w-max">
                        <li className="mb-10 mt-1.5 ">
                            <p className="">3 Mar 2022, 13:00 WIB </p>
                        </li>
                    </ol>
                </div>
                <ol class="relative border-l border-gray-200 dark:border-gray-300 space-y-4">                 
                    <li class="ml-4">
                        <div class="absolute w-4 h-4 rounded-full mt-0.5 -left-2 border border-secondarylight border-2">
                            <div className="mb-10 ml-4 absolute w-3 h-3 border border-white rounded-full -mt-0.25 -left-4 bg-secondary"></div>
                        </div>
                        <div class="text-sm text-secondary">Permintaan dibuat</div>
                        <p class="mb-4 text-xs font-normal text-gray-500 ">Permintaan sedang diproses</p>
                    </li>

                    <li class="ml-4">
                        <div class="absolute w-4 h-4 rounded-full mt-0.5 -left-2 border border-gray-200 border-2">
                            <div className="mb-10 ml-4 absolute w-3 h-3 border border-white rounded-full -mt-0.25 -left-4 bg-gray-300"></div>
                        </div>
                        <div class="text-sm text-gray-400">Permintaan dikonfirmasi</div>
                        <p class="mb-4 text-xs font-normal text-gray-500 invisible">Permintaan telah dikonfirmasi oleh mitra. Minyak akan diambil sesuai tanggal penjemputan yang telah Anda pilih.</p>
                    </li>
                    <li class="ml-4">
                        <div class="absolute w-4 h-4 rounded-full mt-0.5 -left-2 border border-gray-200  border-2">
                            <div className="mb-10 ml-4 absolute w-3 h-3 border border-white rounded-full -mt-0.25 -left-4 bg-gray-300"></div>
                        </div>
                        <div class="text-sm text-secondary text-gray-400">Pengambilan minyak</div>
                        <p class="mb-4 text-xs font-normal text-gray-500 invisible">Driver sedang menuju tempatmu untuk mengambil minyak</p>
                    </li>
                    <li class="ml-4">
                        <div class="absolute w-4 h-4 rounded-full mt-0.5 -left-2 border border-gray-200  border-2">
                            <div className="mb-10 ml-4 absolute w-3 h-3 border border-white rounded-full -mt-0.25 -left-4 bg-gray-300"></div>
                        </div>
                        <div class="text-sm text-secondary text-gray-400">Minyak diterima</div>
                        <p class="text-xs font-normal text-gray-500 invisible">Minyak telah diterima oleh Mitra </p>
                    </li>
                </ol>
            </div>
        </div>
        </>
    );
}

export default DetailTransaksi;