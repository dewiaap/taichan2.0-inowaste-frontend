import Sidebar from "../Components/Sidebar";
import { dataLogin, CheckNotLogin } from "../Helpers/Session";
const Galeri = () => {
    {
        const targetE1 = document.getElementById('dropdownMenu');
        const triggerEl = document.getElementById('dropdownButton');
        const options = {
            placement: 'bottom',
            onHide: () => {
                console.log('dropdown has been hidden');
            },
            onShow: () => {
                console.log('dropdown has been shown');
            }
        };
    };
    return (
        <>
            <CheckNotLogin>
                <Sidebar active="galeri">
                    <div className="font-poppins mx-12 mt-6 pb-12">
                        <div className="flex justify-between place-items-center mb-8">
                            <p className="font-bold text-lg">Galeri</p>

                            <button className="bg-tertiary text-white rounded-full font-bold px-6 py-2">Tambah</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
                            <div className="box-border bg-white rounded-xl shadow-lg relative">
                                <div className="absolute right-0 mt-2">
                                    <button id="dropdownDefault" data-dropdown-toggle="dropdown" type="button">
                                        <div className="relative bg-gray-300 z-10 w-8 h-8 rounded-full">
                                            <img src="assets/more.png" className="absolute h-4 mt-2 ml-3.5"></img>
                                        </div>
                                    </button>

                                    <div id="dropdown hidden">
                                        <ul>
                                            <li>delete</li>
                                            <li>edit</li>
                                        </ul>
                                    </div>
                                </div>

                                <img src="assets/img_detailMitra_square.png" className="absolute object-cover rounded-t-xl h-56 w-full"></img>
                                <p className="font-bold text-sm mx-4 mt-56 py-4 pr-12">Forum Silahturahmi IKM Seluruh Malang</p>
                            </div>

                            <div className="box-border bg-white rounded-xl shadow-lg relative">
                                <img src="assets/img_detailMitra_square.png" className="absolute object-cover rounded-t-xl h-56 w-full"></img>
                                <p className="font-bold text-sm mx-4 mt-56 py-4 pr-12">Forum Silahturahmi IKM Seluruh Malang</p>
                            </div>

                            <div className="box-border bg-white rounded-xl shadow-lg relative">
                                <div className="absolute">
                                    <div className="bg-gray-300 w-4 h-4 rounded-full"></div>
                                </div>
                                <img src="assets/img_detailMitra_square.png" className="absolute object-cover rounded-t-xl h-56 w-full"></img>
                                <p className="font-bold text-sm mx-4 mt-56 py-4 pr-12">Forum Silahturahmi IKM Seluruh Malang</p>
                            </div>


                        </div>
                        <div className="flex font-poppins justify-center mt-14">
                            <button className="hover:bg-secondary border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                                <div className="py-2 px-2">
                                    <img src="assets/nextLeft.png" className="w-2 h-3"></img>
                                </div>
                            </button>
                            <button className="hover:bg-secondary hover:text-white active:bg-secondary active:text-white border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                                <div className="py-0.5 px-2 text-center font-bold">1
                                </div>
                            </button>
                            <button className="hover:bg-secondary hover:text-white active:bg-secondary active:text-white border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                                <div className="py-0.5 px-2 text-center font-bold">2
                                </div>
                            </button>
                            <button className="hover:bg-secondary hover:text-white active:bg-secondary active:text-white border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                                <div className="py-0.5 px-2 text-center font-bold">3
                                </div>
                            </button>
                            <button className="hover:bg-secondary border border-2 border-secondary w-8 h-8 rounded-lg mx-1">
                                <div className="py-2 px-2">
                                    <img src="assets/nextRight.png" className="w-2 h-3"></img>
                                </div>
                            </button>
                        </div>
                    </div>
                </Sidebar>
            </CheckNotLogin>
        </>
    );
}

export default Galeri;