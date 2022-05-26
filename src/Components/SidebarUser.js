import swal from "sweetalert";
import { invalidateSession } from "../Helpers/Session";
const SidebarUser = ({ active }) => {
    const logout = () => {
        swal({
            title: "Yakin Mau Keluar?",
            text: "Tekan OK jika yakin",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((value) => {
            if (value) {
                invalidateSession();
                window.location.reload();
            }
        });
    };
    return (
        <div className="box-border bg-white w-full h-auto mb-8 md:mb-0 md:w-52 md:h-60 drop-shadow-md rounded-xl">
            <div className="box-border bg-white border-b h-10"><p className="font-extrabold ml-6 mt-6 text-md">Hi, Arum!</p></div>
            <ul className="mx-6 my-4 justify-between text-sm">
                <li className={`${active === "profil" ? 'font-semibold' : ''} mb-3`}><a href="#/profil">Akun Saya</a></li>
                <li className={`${active === "poin" ? 'font-semibold' : ''} mb-3`}><a href="#/riwayatpoin">Poin Saya</a></li>
                <li className={`${active === "riwayat" ? 'font-semibold' : ''} mb-3`}><a href="#/riwayat">Riwayat Transaksi</a></li>
                <li className="mb-3 cursor-pointer" onClick={(e) => { logout() }}>Log Out</li>
            </ul>
        </div>
    )
}
export default SidebarUser;