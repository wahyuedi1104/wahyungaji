// ==========================================
// MENU JADWAL SHALAT (GPS TAGGING & REAL-TIME API)
// ==========================================

function buka_jadwal() {
    // Render layar loading dulu
    document.getElementById('render-target').innerHTML = `
        <div id="jadwal-container">
            <div style="text-align:center; padding: 60px; background: rgba(15, 23, 42, 0.6); border-radius: 20px; border: 1px dashed #10b981;">
                <h3 style="color:#10b981; margin-bottom:15px; font-size:20px;">📍 Memindai Koordinat GPS...</h3>
                <p style="color:#94a3b8; font-size:14px; margin-bottom:20px;">Mohon izinkan akses lokasi (GPS) pada browser Anda agar jadwal shalat presisi.</p>
                <div style="color:#10b981; font-size:24px;"><i class="fas fa-spinner fa-spin"></i></div>
            </div>
        </div>
    `;
    
    deteksiLokasiUser();
}

function deteksiLokasiUser() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            // JIKA USER MENGIZINKAN GPS
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                tarikDataJadwalAPI(lat, lon, null);
            },
            // JIKA USER MENOLAK / ERROR GPS
            (error) => {
                console.warn("GPS ditolak. Pakai default Jakarta Pusat.");
                tarikDataJadwalAPI(-6.1754, 106.8272, "⚠️ Izin GPS ditolak browser. Menampilkan jadwal default: Jakarta Pusat.");
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    } else {
        tarikDataJadwalAPI(-6.1754, 106.8272, "⚠️ Browser tidak mendukung GPS. Menampilkan jadwal default: Jakarta Pusat.");
    }
}

async function tarikDataJadwalAPI(lat, lon, warningMsg) {
    const container = document.getElementById('jadwal-container');
    container.innerHTML = `
        <div style="text-align:center; padding: 60px; background: rgba(15, 23, 42, 0.6); border-radius: 20px;">
            <h3 style="color:#0ea5e9; margin-bottom:15px; font-size:20px;">⏳ Mengunduh Data Kemenag RI...</h3>
            <p style="color:#94a3b8; font-size:14px;">Menyinkronkan waktu dengan satelit...</p>
        </div>
    `;

    try {
        // 1. Ambil Nama Kota (Reverse Geocoding OpenStreetMap)
        let namaLokasi = "Lokasi Ditemukan";
        try {
            const resGeo = await fetch('https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lon);
            const dataGeo = await resGeo.json();
            namaLokasi = dataGeo.address.city || dataGeo.address.regency || dataGeo.address.town || dataGeo.address.village || dataGeo.address.suburb || "Lokasi Anda";
        } catch(e) { 
            console.log("Gagal mengambil nama kota."); 
        }

        // 2. Ambil Jadwal Shalat API Aladhan (Metode 20 = KEMENAG RI)
        const dateObj = new Date();
        const dd = String(dateObj.getDate()).padStart(2, '0');
        const mm = String(dateObj.getMonth() + 1).padStart(2, '0'); 
        const yyyy = dateObj.getFullYear();
        const dateStr = dd + '-' + mm + '-' + yyyy; // Format DD-MM-YYYY

        const resPray = await fetch('https://api.aladhan.com/v1/timings/' + dateStr + '?latitude=' + lat + '&longitude=' + lon + '&method=20');
        const dataPray = await resPray.json();
        
        const jadwal = dataPray.data.timings;
        const hijri = dataPray.data.date.hijri;
        const masehi = dataPray.data.date.gregorian;
        
        renderUIJadwal(jadwal, hijri, masehi, namaLokasi, warningMsg);

    } catch(error) {
        container.innerHTML = `
            <div style="text-align:center; padding: 60px; background: rgba(15, 23, 42, 0.6); border-radius: 20px; border: 1px dashed #ef4444;">
                <h3 style="color:#ef4444; margin-bottom:10px;">❌ Koneksi Terputus</h3>
                <p style="color:#cbd5e1; font-size:14px; margin-bottom:20px;">Gagal terhubung ke server. Periksa internet Anda.</p>
                <button onclick="buka_jadwal()" style="background:#ef4444; color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer;">Coba Lagi</button>
            </div>
        `;
    }
}

function renderUIJadwal(jadwal, hijri, masehi, namaLokasi, warningMsg) {
    const tanggalHijriah = hijri.day + ' ' + hijri.month.en + ' ' + hijri.year + ' H';
    const tanggalMasehi = masehi.weekday.en + ', ' + masehi.day + ' ' + masehi.month.en + ' ' + masehi.year;

    const listSholat = [
        { id: 'Imsak', nama: 'Imsak', waktu: jadwal.Imsak, icon: '🛑' },
        { id: 'Fajr', nama: 'Subuh', waktu: jadwal.Fajr, icon: '✨' },
        { id: 'Dhuhr', nama: 'Dzuhur', waktu: jadwal.Dhuhr, icon: '☀️' },
        { id: 'Asr', nama: 'Ashar', waktu: jadwal.Asr, icon: '🌤️' },
        { id: 'Maghrib', nama: 'Maghrib', waktu: jadwal.Maghrib, icon: '🌄' },
        { id: 'Isha', nama: 'Isya', waktu: jadwal.Isha, icon: '🌙' }
    ];

    // Cek waktu shalat selanjutnya
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    let nextPrayerIndex = -1;
    
    for (let i = 0; i < listSholat.length; i++) {
        let parts = listSholat[i].waktu.split(':');
        let prayMinutes = parseInt(parts[0]) * 60 + parseInt(parts[1]);
        if (prayMinutes > currentMinutes) {
            nextPrayerIndex = i;
            break;
        }
    }
    if (nextPrayerIndex === -1) nextPrayerIndex = 0;

    let htmlResult = `
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(2, 6, 23, 0.8) 100%); padding: 30px; border-radius: 20px; border: 1px solid rgba(16, 185, 129, 0.3); margin-bottom: 30px;">
            
            ${warningMsg ? `<div style="background: rgba(245, 158, 11, 0.1); color: #f59e0b; padding: 10px 15px; border-radius: 8px; font-size: 12px; margin-bottom: 20px; border: 1px solid rgba(245, 158, 11, 0.3);">${warningMsg}</div>` : ''}

            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 15px; margin-bottom: 30px;">
                <div>
                    <h3 style="font-size: 14px; color: #10b981; font-weight: 700; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">📍 Titik Lokasi Presisi</h3>
                    <h2 style="font-size: 28px; font-weight: 800; color: #f8fafc;">${namaLokasi}</h2>
                    <button onclick="deteksiLokasiUser()" style="background:transparent; border:1px solid #10b981; color:#10b981; padding:6px 12px; border-radius:20px; font-size:11px; margin-top:10px; cursor:pointer; font-weight:bold; transition:0.3s;" onmouseover="this.style.background='rgba(16,185,129,0.1)'" onmouseout="this.style.background='transparent'">🔄 Perbarui GPS</button>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 16px; font-weight: 600; color: #cbd5e1; margin-bottom: 4px;">${tanggalMasehi}</div>
                    <div style="font-size: 13px; font-weight: 600; color: #0ea5e9; margin-bottom: 12px;">${tanggalHijriah}</div>
                    <span style="display: inline-block; background: rgba(14, 165, 233, 0.2); color: #38bdf8; font-size: 11px; font-weight: 700; padding: 6px 14px; border-radius: 20px; border: 1px solid rgba(14, 165, 233, 0.3);">✓ KEMENAG RI</span>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 16px;">
    `;

    listSholat.forEach((s, index) => {
        const isActive = index === nextPrayerIndex;
        const cardStyle = isActive 
            ? 'background: rgba(16, 185, 129, 0.15); border: 2px solid #10b981; transform: translateY(-5px); box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2);' 
            : 'background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.05);';
        
        const badgeSelanjutnya = isActive ? '<div style="position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:#10b981; color:#fff; font-size:10px; font-weight:800; padding:4px 12px; border-radius:20px; white-space:nowrap;">SELANJUTNYA</div>' : '';

        htmlResult += `
                <div style="${cardStyle} border-radius: 16px; padding: 24px 16px; text-align: center; position: relative; transition: 0.3s;">
                    ${badgeSelanjutnya}
                    <h4 style="font-size: 14px; color: #94a3b8; font-weight: 700; margin-bottom: 8px;">${s.nama} ${s.icon}</h4>
                    <div style="font-size: 26px; font-weight: 800; color: #f8fafc;">${s.waktu}</div>
                </div>
        `;
    });

    htmlResult += `</div></div>`;
    document.getElementById('render-target').innerHTML = htmlResult;
}