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
import detailTransaksi from './Pages/detailTransaksi';
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
        <Route path="/" element={<Home />} />
        <Route path="/mitra" element={<Mitra />} />
        <Route path="/mitra/:id_mitra" element={<DetailMitra />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id_berita" element={<DetailBerita />} />
        <Route path="/profil/:id_user" element={<Profil />} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/riwayatPoin" element={<RiwayatPoin />} />
        <Route path="/tukarPoin" element={<TukarPoin />} />
        <Route path="/voucher/:id_voucher" element={<Voucher />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/detailTransaksi" element={<detailTransaksi />} />
        <Route path="/dashboard" element={<Dashboard />} />
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
