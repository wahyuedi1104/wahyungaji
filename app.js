// ==========================================
// 1. PRELOADER & UI CONTROLLER
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loader = document.getElementById('preloader');
        if(loader) { 
            loader.style.opacity = '0'; 
            setTimeout(() => loader.remove(), 600); 
        }
    }, 1800);
    
    // Panggil render pertama kali saat web dibuka
    renderHalaman();
});

// LOGIKA SIDEBAR PINTAR (DESKTOP BISA DI-HIDE, HP BISA DI-SLIDE)
function toggleMenu() { 
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('open'); 
    } else {
        sidebar.classList.toggle('hide-desktop'); 
    }
}

// ==========================================
// 2. ROUTER & NAVIGASI MENU (OTAK UTAMA)
// ==========================================

// Fungsi ini dipanggil pas tombol menu diklik. 
// Tugasnya cuma ngubah URL (nambahin #). 
function pindahTab(namaTab) {
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
    // Mengubah URL otomatis memicu fitur renderHalaman() via 'hashchange'
    window.location.hash = namaTab;
}

// Fungsi ini mendeteksi perubahan URL (termasuk saat tombol BACK di HP/Browser ditekan)
function renderHalaman() {
    // Ambil nama tab dari URL (buang tanda #)
    let namaTab = window.location.hash.replace('#', '');
    
    // Kalau URL kosong (baru buka web), default ke beranda
    if (!namaTab) {
        namaTab = 'beranda';
    }

    const judulMap = {
        'beranda': 'Dashboard Utama', 'alquran': "Al-Qur'an Digital", 'wudhu': 'Panduan Wudhu',
        'shalat': 'Panduan Shalat', 'kisah_nabi': 'Kisah 25 Nabi', 'zakat': 'Kalkulator Zakat',
        'kalender': 'Kalender Hijriah', 'doa': 'Doa Harian', 'jadwal': 'Jadwal Shalat', 'asmaul': '99 Asmaul Husna'
    };
    document.getElementById('nama-halaman').innerText = judulMap[namaTab] || "WahyuNgaji";

    document.querySelectorAll('#sidebar-nav button').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`m-${namaTab}`);
    if(btn) btn.classList.add('active');
    
    const target = document.getElementById('render-target');

    // ==========================================
    // TAMPILAN HALAMAN BERANDA
    // ==========================================
    if (namaTab === 'beranda') {
        target.innerHTML = `
            <style>
                .card-cover { position: relative; overflow: hidden; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); transition: 0.4s; cursor: pointer; background: #0f172a; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
                .card-cover:hover { transform: translateY(-8px); border-color: #10b981; box-shadow: 0 20px 40px rgba(16,185,129,0.2); }
                .card-cover img { width: 100%; height: 140px; object-fit: cover; opacity: 0.5; transition: 0.4s; }
                .card-cover:hover img { opacity: 0.9; transform: scale(1.05); }
                .card-body { padding: 20px; position: relative; z-index: 2; background: linear-gradient(to top, #0f172a 85%, transparent); margin-top: -50px; }
            </style>

            <div style="position:relative; overflow:hidden; border-radius: 24px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 40px rgba(0,0,0,0.4); min-height: 250px; display:flex; align-items:center;">
                <!-- Hero Banner Baru -->
                <img src="gambar/saudara.jpg" style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; opacity:0.4; z-index:0;">
                <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:linear-gradient(to right, #020617 20%, transparent); z-index:1;"></div>
                
                <div style="position:relative; z-index:2; padding: 40px;">
                    <h2 style="font-size: 32px; color: #10b981; margin-bottom: 12px; font-weight: 800; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">Selamat Datang, Saudaraku</h2>
                    <p style="font-size: 15px; color: #e2e8f0; line-height: 1.8; max-width: 600px;">WahyuNgaji adalah ekosistem Muslim Premium yang dirancang khusus untuk mempermudah ibadah harian Anda. Akurat, lengkap, dan tanpa gangguan.</p>
                </div>
            </div>
            
            <h3 style="font-size: 18px; margin-bottom: 20px; font-weight: 800; color: #f8fafc; letter-spacing: 0.5px;">Semua Fitur Ibadah</h3>
            
            <div class="grid-menu">
                
                <div class="card-cover" onclick="pindahTab('alquran')">
                    <img src="gambar/kitab.jpg" alt="Quran">
                    <div class="card-body">
                        <h4 style="font-size:17px; color:#f8fafc; margin-bottom:8px; font-weight:800;">📖 Al-Qur'an Digital</h4>
                        <p style="font-size:13px; color:#94a3b8; line-height:1.5;">Bacaan mushaf lengkap dengan fitur Audio Murottal per ayat.</p>
                    </div>
                </div>

                <div class="card-cover" onclick="pindahTab('wudhu')">
                    <img src="gambar/wudhu.jpg" alt="Wudhu">
                    <div class="card-body">
                        <h4 style="font-size:17px; color:#f8fafc; margin-bottom:8px; font-weight:800;">💧 Panduan Wudhu</h4>
                        <p style="font-size:13px; color:#94a3b8; line-height:1.5;">Tata cara wudhu yang benar dilengkapi doa di setiap basuhannya.</p>
                    </div>
                </div>

                <div class="card-cover" onclick="pindahTab('shalat')">
                    <img src="gambar/shalat.jpg" alt="Shalat">
                    <div class="card-body">
                        <h4 style="font-size:17px; color:#f8fafc; margin-bottom:8px; font-weight:800;">🧎 Panduan Shalat</h4>
                        <p style="font-size:13px; color:#94a3b8; line-height:1.5;">Kumpulan Niat, Rukun bacaan lengkap, hingga Wirid setelah shalat.</p>
                    </div>
                </div>

                <div class="card-cover" onclick="pindahTab('kisah_nabi')">
                    <img src="gambar/kisah.jpg" alt="Kisah Nabi">
                    <div class="card-body">
                        <h4 style="font-size:17px; color:#f8fafc; margin-bottom:8px; font-weight:800;">🐪 Kisah 25 Nabi</h4>
                        <p style="font-size:13px; color:#94a3b8; line-height:1.5;">Sejarah perjuangan, mukjizat, dan keteladanan agung para rasul Allah.</p>
                    </div>
                </div>

                <div class="card-cover" onclick="pindahTab('zakat')">
                    <img src="gambar/zakat.jpg" alt="Zakat">
                    <div class="card-body">
                        <h4 style="font-size:17px; color:#f8fafc; margin-bottom:8px; font-weight:800;">🪙 Kalkulator Zakat</h4>
                        <p style="font-size:13px; color:#94a3b8; line-height:1.5;">Hitung kewajiban zakat fitrah dan maal Anda secara instan dan tepat.</p>
                    </div>
                </div>

                <div class="card-cover" onclick="pindahTab('kalender')">
                    <img src="gambar/kalender.jpg" alt="Kalender">
                    <div class="card-body">
                        <h4 style="font-size:17px; color:#f8fafc; margin-bottom:8px; font-weight:800;">📅 Kalender Hijriah</h4>
                        <p style="font-size:13px; color:#94a3b8; line-height:1.5;">Informasi tanggal hijriah terkini dan penanda jadwal puasa sunnah.</p>
                    </div>
                </div>

                <div class="card-cover" onclick="pindahTab('doa')">
                    <img src="gambar/doa.jpg" alt="Doa">
                    <div class="card-body">
                        <h4 style="font-size:17px; color:#f8fafc; margin-bottom:8px; font-weight:800;">🙏 Doa Harian</h4>
                        <p style="font-size:13px; color:#94a3b8; line-height:1.5;">Kumpulan doa perlindungan dan keberkahan untuk aktivitas sehari-hari.</p>
                    </div>
                </div>

                <div class="card-cover" onclick="pindahTab('jadwal')">
                    <img src="gambar/jadwal.jpg" alt="Jadwal">
                    <div class="card-body">
                        <h4 style="font-size:17px; color:#f8fafc; margin-bottom:8px; font-weight:800;">📍 Jadwal Shalat GPS</h4>
                        <p style="font-size:13px; color:#94a3b8; line-height:1.5;">Waktu adzan akurat yang menyesuaikan dengan titik lokasi Anda berada.</p>
                    </div>
                </div>

                <div class="card-cover" onclick="pindahTab('asmaul')">
                    <img src="gambar/asmaul.jpg" alt="Asmaul Husna">
                    <div class="card-body">
                        <h4 style="font-size:17px; color:#f8fafc; margin-bottom:8px; font-weight:800;">✨ Asmaul Husna</h4>
                        <p style="font-size:13px; color:#94a3b8; line-height:1.5;">Daftar 99 Nama Agung dan sifat mulia Allah SWT beserta artinya.</p>
                    </div>
                </div>

            </div>`;
        return;
    }

    // ==========================================
    // PEMANGGIL MODUL FILE JS OTOMATIS
    // ==========================================
    if (typeof window['buka_' + namaTab] === "function") {
        window['buka_' + namaTab]();
    } else {
        target.innerHTML = `
            <div style="text-align:center; padding:80px; background:rgba(15,23,42,0.5); border-radius:24px; border:1px dashed #334155; margin-top:20px;">
                <h3 style="color:#f87171; margin-bottom:15px; font-size:24px;">⚙️ Modul Sedang Dirakit</h3>
                <p style="color:#94a3b8; font-size:15px; line-height:1.6;">
                    Sabar ya Mas Wahyu, file <b style="color:#f8fafc;">menu_${namaTab}.js</b> belum dimasukkan ke dalam hosting.<br>
                    Silakan tambahkan file tersebut agar menu ini berfungsi.
                </p>
            </div>`;
    }
}

// EVENT LISTENER BROWSER BACK BUTTON
window.addEventListener('hashchange', renderHalaman);
