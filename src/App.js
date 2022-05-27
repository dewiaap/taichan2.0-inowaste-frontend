import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Mitra from './Pages/Mitra';
import DetailMitra from './Pages/DetailMitra';
import Berita from './Pages/Berita';
import DetailBerita from './Pages/DetailBerita';
import Profil from './Pages/Profil';
import Masuk from './Pages/Masuk';
import Daftar from './Pages/Daftar';
import RiwayatPoin from './Pages/RiwayatPoin';
import TukarPoin from './Pages/TukarPoin';
import Riwayat from './Pages/Riwayat';
import DetailTransaksi from './Pages/DetailTransaksi';
import Dashboard from './Pages/Dashboard';
import Permintaan from './Pages/Permintaan';
import Galeri from './Pages/Galeri';
import Penjemputan from './Pages/Penjemputan';
import Voucher from './Pages/Voucher';
import ProfilMitra from './Pages/ProfilMitra';
import DashboardDriver from './Pages/DashboardDriver';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* udah jos */}
        <Route path="/" element={<Home />} />
        {/* udah jos */}
        <Route path="/mitra" element={<Mitra />} />
        {/* udah tinggal post data*/}
        <Route path="/mitra/:id_mitra" element={<DetailMitra />} />
        {/* udah jos */}
        <Route path="/berita" element={<Berita />} />
        {/* udah jos */}
        <Route path="/berita/:id_berita" element={<DetailBerita />} />
        {/* udah tinggal update foto*/}
        <Route path="/profil" element={<Profil />} />
        {/* udah jos */}
        <Route path="/masuk" element={<Masuk />} />
        {/* udah jos */}
        <Route path="/daftar" element={<Daftar />} />
        {/* udah */}
        <Route path="/riwayatPoin" element={<RiwayatPoin />} />
        {/* udah */}
        <Route path="/tukarPoin" element={<TukarPoin />} />
        {/* udah */}
        <Route path="/voucher/:id_voucher" element={<Voucher />} />
        {/* udah */}
        <Route path="/riwayat" element={<Riwayat />} />
         {/* udah */}
        <Route path="/detailTransaksi" element={<DetailTransaksi />} /> {/* udah */}
        <Route path="/dashboard" element={<Dashboard />} /> {/**udah better */}
        <Route path="/profilmitra/:id_mitra" element={<ProfilMitra />} />
        <Route path="/permintaan" element={<Permintaan />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/penjemputan" element={<Penjemputan />} />
        <Route path="/dashboardDriver" element={<DashboardDriver />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
