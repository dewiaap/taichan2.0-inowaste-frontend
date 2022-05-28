import { useState, useEffect } from "react";
import swal from "sweetalert";
import { setData, CheckAlreadyLogin } from "../Helpers/Session";
const Masuk = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [onProgress, setOnProgress] = useState(false);

    useEffect(() => {
        if (!onProgress) return;
        console.log(username, password);
        fetch('https://taichan2-0-inowaste-backend-dewiaap.vercel.app/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.status === "success") {
                    setData(response.data);
                    window.location.reload();
                } else {
                    swal("Gagal", "Username atau password salah", "error");
                }
                setOnProgress(false);
            })
            .catch(err => {
                console.log(err);
                setOnProgress(false);
            })
    }, [onProgress])
    return (
        <>
            <CheckAlreadyLogin>
                <div className="w-full h-screen md:bg-test md:bg-primary bg-primary md:from-gray-400 md:via-primary md:to-primary">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="hidden md:flex justify-center self-center">
                            <span className="font-poppins font-medium text-5xl text-white">Be Hero to Zero Waste</span>
                        </div>
                        <div className="mx-auto bg-white border border-light-grey rounded py-10 px-10 mt-16">
                            <h1 className="font-poppins font-black mb-2 text-3xl text-center">Log In</h1>
                            <div className="font-poppins text-xs mt-12">
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    setOnProgress(true);
                                }}>
                                    <input type="text" className="block border rounded-lg border-black w-full mx-auto p-3 mb-4 mt-8 font-poppins text-xs" placeholder="Email atau Username" onChange={(e) => { setUsername(e.target.value) }} />
                                    <input type="password" className="block border rounded-lg border-black w-full mx-auto p-3 mb-4 font-poppins text-xs" placeholder="Kata Sandi" onChange={(e) => { setPassword(e.target.value) }} />
                                    <a href="" className="underline float-right font-semibold underline-offset-1">Lupa kata sandi?</a>
                                    <button type="submit" className={`${onProgress ? 'px-8' : 'px-16'} rounded-full py-2 w-full text-center p-3 bg-secondary text-white font-bold hover:bg-secondarydark mt-6 text-lg focus:outline-none my-1`}>
                                        {onProgress ? (<span className="animate-pulse">Memproses...</span>) : (<>Masuk</>)}
                                    </button>
                                </form>
                                <p className="mt-8 text-center">Belum memiliki akun? <a href="#/daftar" className="text-secondary font-bold underline underline-offset-1">Daftar Disini</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </CheckAlreadyLogin>
        </>
    );
}

export default Masuk;