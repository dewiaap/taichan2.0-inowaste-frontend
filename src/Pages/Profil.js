import { useState, useEffect } from "react";
import { CheckNotLogin, dataLogin } from "../Helpers/Session";
import swal from "sweetalert";
import SidebarUser from "../Components/SidebarUser";
const Profil = () => {
    const [namaLengkap, setNamaLengkap] = useState(dataLogin.nama_lengkap);
    const [email, setEmail] = useState(dataLogin.email);
    const [password, setPassword] = useState(dataLogin.password);
    const [noHp, setNoHp] = useState(dataLogin.no_telp);
    const [alamat, setAlamat] = useState(dataLogin.alamat);
    const [message, setMessage] = useState("");
    const [onProgress, setOnProgress] = useState(false);

    const checkPassword = (passwords) => {
        if (password !== passwords) {
            setMessage("❌ Password tidak sama!");
        }
    }
    useEffect(() => {
        if (!onProgress) return;

        if (alamat.split(",").length !== 6) {
            swal("Format Alamat Salah", "Isikan Alamat dengan format Jalan, Kelurahan, Kecamatan, Kota, Provinsi, Kode Pos", "error");
            setOnProgress(false);
            return;
        }

        console.log({
            nama_lengkap: namaLengkap,
            email: email,
            password: password,
            no_telp: noHp,
            alamat: alamat,
        })

        fetch('https://taichan2-0-inowaste-backend-dewiaap.vercel.app/user/' + dataLogin.id_user, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama_lengkap: namaLengkap,
                email: email,
                password: password,
                no_telp: noHp,
                alamat: alamat,
            }),
        })
            .then((response) => {
                return response.json();
            }
            )
            .then((response) => {
                if (response.status === "success") {
                    swal("Berhasil", "Akun berhasil diubah", "success");
                    setOnProgress(false);
                } else {
                    swal("Gagal", "Akun gagal diubah", "error");
                    setOnProgress(false);
                }
            }
            )
            .catch((error) => {
                console.log(error);
                setOnProgress(false);
            })

    }, [onProgress]);
    return (
        <>
            <CheckNotLogin>
                <div className="grid grid-cols-1 md:grid-cols-4 items mt-16 mb-28 mx-12 md:mx-28 font-poppins">
                    <SidebarUser active="profil"/>
                    <div className="container md:col-start-2 md:col-span-4 box-border bg-white w-110 h-auto border rounded-lg justify-between py-8 px-12 shadow-md">
                        <div className="text-primary text-2xl font-extrabold">
                            <p>Data Diri</p>
                        </div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            setOnProgress(true);
                        }}>
                            <div className="grid grid-cols-1 md:grid-cols-4">
                                <div className="mt-8 mx-auto md:mx-0">
                                    <img src={dataLogin.gambar_profil} className="rounded-full w-28 h-28 object-cover"></img>
                                    <div className="mt-2 flex justify-center md:ml-4 md:justify-start">
                                        <input type="file" encType="multipart/form-data" className="font-poppins hidden text-primary font-normal text-sm" placeholder="Ganti Foto" />
                                        <button className="font-poppins text-primary font-normal text-sm">Ganti Foto</button>
                                    </div>
                                </div>

                                <div className="md:col-start-2 md:col-span-3 mt-12">
                                    <input type="text" className="block border  rounded-lg border-black w-11/12 p-3 mb-4 font-poppins text-xs" name="nama" placeholder="Nama" defaultValue={dataLogin.nama_lengkap} onChange={(e) => { setNamaLengkap(e.target.value) }} />
                                    <input type="text" className="block border  rounded-lg border-gray-500 w-11/12 bg-gray-200 text-gray-500 mb-4 p-3 font-poppins text-xs" name="username" placeholder="Username" defaultValue={dataLogin.username} readOnly />
                                    <input type="email" className="block border  rounded-lg border-black w-11/12  p-3 mb-4 font-poppins text-xs" name="email" placeholder="E-mail" defaultValue={dataLogin.email} onChange={(e) => { setEmail(e.target.value) }} />
                                    <input type="text" className="block border  rounded-lg  border-black w-11/12  p-3 mb-4 font-poppins text-xs" name="noHp" placeholder="Nomor Handphone" defaultValue={dataLogin.no_telp} onChange={(e) => { setNoHp(e.target.value) }} />
                                    <textarea className="block border rounded-lg border-black w-11/12 h-auto mb-4 font-poppins text-xs align-center" name="alamat" placeholder="Alamat" defaultValue={dataLogin.alamat} onChange={(e) => { setAlamat(e.target.value) }}></textarea>
                                    <input type="password" className="block border  rounded-lg border-black w-11/12 p-3 mb-4 font-poppins text-xs" name="password" placeholder="Kata Sandi" onChange={(e) => { setPassword(e.target.value) }} />
                                    <input type="password" className="block border  rounded-lg border-black w-11/12 p-3 mb-4 font-poppins text-xs" name="password" placeholder="Ulangi Kata Sandi" onChange={(e) => { checkPassword(e.target.value) }} />
                                    <p className="text-xs font-bold text-red-700">{message}</p>
                                </div>
                            </div>
                            <div className="md:justify-end flex justify-center mt-6">
                                <button className="py-2 md:px-6 md:w-1/3 w-full rounded-full bg-secondary text-white font-poppins text-md font-bold text-center hover:bg-secondarydark">
                                    {onProgress ? (<span className="animate-pulse">Memproses...</span>) : (<>Simpan</>)}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </CheckNotLogin>
        </>
    );
}

export default Profil;