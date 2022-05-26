import { useState, useEffect } from 'react';
import swal from 'sweetalert';
const Daftar = () => {
    const [namaLengkap, setNamaLengkap] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [noHp, setNoHp] = useState("");
    const [alamat, setAlamat] = useState("");
    const [idLevel, setIdLevel] = useState(0);
    const [onProgress, setOnProgress] = useState(false);

    useEffect(() => {
        if (!onProgress) return;

        if (alamat.split(",").length !== 6) {
            swal("Format Alamat Salah", "Isikan Alamat dengan format Jalan, Kelurahan, Kecamatan, Kota, Provinsi, Kode Pos", "error");
            setOnProgress(false);
            return;
        }

        fetch('https://taichan2-0-inowaste-backend-dewiaap.vercel.app/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama_lengkap: namaLengkap,
                username: username,
                email: email,
                password: password,
                no_telp: noHp,
                alamat: alamat,
                id_level: idLevel,
            }),
        })
            .then((response) => {
                return response.json();
            }
            )
            .then((response) => {
                if (response.status === "success") {
                    swal("Berhasil", "Akun berhasil dibuat", "success");
                    setNamaLengkap("");
                    setUsername("");
                    setEmail("");
                    setPassword("");
                    setNoHp("");
                    setAlamat("");
                    setIdLevel(0);
                    setOnProgress(false);
                } else {
                    swal("Gagal", "Akun gagal dibuat", "error");
                    setOnProgress(false);
                }
            }
            )
            .catch((error) => {
                console.log(error);
                setOnProgress(false);
            })
    }, [onProgress])
    return (
        <>
            <div className="flex w-full h-full bg-primary md:bg-gradient-to-r md:from-zinc-400 md:via-primary md:to-primary py-10 ">
                <div className="items-center justify-center bg-white border border-light-grey w-5/6 md:w-3/6 h-fit rounded mx-auto py-10 px-6 mb-6 font-poppins mt-10">
                    <h1 className="font-bold mb-2 text-3xl text-center">Daftar</h1>
                    <p className="mt-1 text-center">Sudah punya akun? <a href="#/masuk" className="text-secondary font-bold underline underline-offset-1">Log In</a></p>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setOnProgress(true);
                    }}>
                        <select className="form-select block border rounded-lg border-black w-11/12 mt-10 mx-auto p-3 mb-4 text-xs" value={idLevel} onChange={(e) => { setIdLevel(e.target.value) }} required>
                            <option selected value={0}>Daftar sebagai</option>
                            <option value={2}>User</option>
                            <option value={1}>Mitra</option>
                        </select>
                        <input type="text" className="block border rounded-lg border-black w-11/12 mx-auto p-3 mb-4 text-xs" placeholder="Masukkan Nama Lengkap..." value={namaLengkap} onChange={(e) => { setNamaLengkap(e.target.value) }} required />
                        <input type="text" className="block border rounded-lg border-black w-11/12 mx-auto mb-4 p-3 text-xs" placeholder="Masukkan Username..." value={username} onChange={(e) => { setUsername(e.target.value) }} required />
                        <input type="email" className="block border rounded-lg border-black w-11/12 mx-auto p-3 mb-4 text-xs" placeholder="Masukkan Email..." value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                        <input type="text" className="block border rounded-lg  border-black w-11/12 mx-auto p-3 mb-4 text-xs" placeholder="Masukkan Nomor Handphone..." value={noHp} onChange={(e) => { setNoHp(e.target.value) }} required />
                        <textarea className="block border rounded-lg border-black w-11/12 h-auto mx-auto mb-4 text-xs align-center" placeholder="Masukkan Alamat dengan format: Jalan, Kelurahan, Kecamatan, Kota, Provinsi, Kode Pos" value={alamat} onChange={(e) => { setAlamat(e.target.value) }} required></textarea>
                        <input type="password" className="block border rounded-lg border-black w-11/12 mx-auto p-3 mb-4 text-xs" placeholder="Masukkan Kata Sandi..." value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                        <button type="submit" className=" rounded-full w-11/12 mx-4 text-center p-3 bg-secondary text-white hover:bg-tertiary text-xl font-bold focus:outline-none mt-16">
                        {onProgress ? (<span className="animate-pulse">Memproses...</span>) : (<>Daftar</>)}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Daftar;