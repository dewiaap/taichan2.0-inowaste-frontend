const Profil = () => {
    return (
        <>
        <div className="grid grid-cols-3 items mt-16 mb-14 mx-28">
            <div className="box-border bg-white w-72 h-72 drop-shadow-md rounded-md">
                <div className="box-border bg-white border-b h-10"><p className="font-extrabold ml-8 mt-6 text-lg">Hi, Arum</p></div>
                <ul className="m-8 text-sm">
                    <li>Akun Saya</li>
                    <li>Poin Saya</li>
                    <li>Riwayat Transaksi</li>
                    <li>Log Out</li>
                </ul>
            </div>
            <div className="container col-start-2 col-span-2 box-border bg-white w-110 h-auto border border-2 rounded-md justify-between pb-6"></div>
        </div>
        </>
    );
}

export default Profil;