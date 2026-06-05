// ==========================================
// MENU AL-QUR'AN DIGITAL PREMIUM (API EQURAN)
// ==========================================

let globalSuratList = [];
let currentAudio = null;

async function buka_alquran() {
    const target = document.getElementById('render-target');
    
    // Hentikan audio jika user pindah menu lalu balik lagi
    if(currentAudio) { currentAudio.pause(); currentAudio = null; }

    target.innerHTML = `
        <div style="background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(10px); padding: 24px; border-radius: 16px; margin-bottom: 24px; border-left: 5px solid #10b981; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <h3 style="color:#f8fafc; font-size:18px; margin-bottom:4px;">📖 Al-Qur'an Digital Premium</h3>
            <p style="color:#94a3b8; font-size:13px; margin-bottom:15px;">Baca mushaf Al-Qur'an lengkap 114 surat dengan terjemahan, transliterasi, dan Murottal.</p>
            <input type="text" id="cari-surat" class="form-input" placeholder="🔍 Cari nama surat (Contoh: Yasin, Al-Mulk)..." onkeyup="filterSurat()" style="margin-bottom:0;">
        </div>
        <div id="quran-content-area" style="text-align:center; padding:50px;">
            <div style="color:#10b981; font-size:30px; margin-bottom:15px;"><i class="fas fa-spinner fa-spin"></i></div>
            <div style="color:#94a3b8; font-size:14px; font-weight:bold;">Menyambungkan ke Server Mushaf...</div>
        </div>
    `;

    try {
        const response = await fetch('https://equran.id/api/v2/surat');
        const result = await response.json();
        globalSuratList = result.data;
        renderDaftarSurat(globalSuratList);
    } catch (error) {
        document.getElementById('quran-content-area').innerHTML = `
            <div style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; padding:30px; border-radius:16px; color:#ef4444;">
                <i class="fas fa-wifi" style="font-size:24px; margin-bottom:10px;"></i><br>
                Gagal memuat data Al-Qur'an. Silakan periksa koneksi internet lu, Mas Wahyu.
            </div>
        `;
    }
}

function renderDaftarSurat(list) {
    const area = document.getElementById('quran-content-area');
    if(list.length === 0) {
        area.innerHTML = `<div style="color:#94a3b8; padding:30px;">Surat tidak ditemukan. Periksa ejaan ketikan Anda.</div>`;
        return;
    }

    let html = `<div class="grid-menu">`;
    list.forEach(s => {
        html += `
        <div class="item-box" onclick="bukaDetailSurat(${s.nomor})" style="display:flex; justify-content:space-between; align-items:center; border-left:3px solid transparent; transition:0.3s;" onmouseover="this.style.borderLeft='3px solid #10b981'" onmouseout="this.style.borderLeft='3px solid transparent'">
            <div style="display:flex; align-items:center; gap:15px;">
                <div style="width: 42px; height: 42px; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); border-radius: 12px; display:flex; justify-content:center; align-items:center; color:#10b981; font-weight:800; font-size:14px; box-shadow: inset 0 0 10px rgba(16,185,129,0.1);">
                    ${s.nomor}
                </div>
                <div>
                    <h4 style="color:#f8fafc; margin-bottom:4px; font-size:16px;">${s.namaLatin}</h4>
                    <p style="color:#94a3b8; font-size:11px; font-weight:600; text-transform:uppercase;">${s.arti} • ${s.jumlahAyat} Ayat</p>
                </div>
            </div>
            <div style="font-family:'Amiri', serif; font-size:26px; color:#10b981; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
                ${s.nama}
            </div>
        </div>`;
    });
    html += `</div>`;
    area.innerHTML = html;
    area.style.textAlign = 'left';
    area.style.padding = '0';
}

function filterSurat() {
    const keyword = document.getElementById('cari-surat').value.toLowerCase();
    const filtered = globalSuratList.filter(s => s.namaLatin.toLowerCase().includes(keyword) || s.arti.toLowerCase().includes(keyword));
    renderDaftarSurat(filtered);
}

// ==========================================
// RENDER DETAIL SURAT & MUSHAF
// ==========================================
async function bukaDetailSurat(nomor) {
    if(currentAudio) { currentAudio.pause(); currentAudio = null; } // Matikan audio sebelumnya

    const area = document.getElementById('render-target');
    
    // Tampilan Loading Detail
    area.innerHTML = `
        <div style="text-align:center; padding:80px; background:rgba(15, 23, 42, 0.6); border-radius:20px;">
            <div style="color:#10b981; font-size:36px; margin-bottom:15px;"><i class="fas fa-quran fa-beat-fade"></i></div>
            <div style="color:#f8fafc; font-size:18px; font-weight:bold; margin-bottom:5px;">Membuka Mushaf...</div>
            <p style="color:#94a3b8; font-size:13px;">Mengunduh teks ayat dan audio Murottal</p>
        </div>
    `;

    try {
        const response = await fetch('https://equran.id/api/v2/surat/' + nomor);
        const result = await response.json();
        const s = result.data;

        // HEADER SURAT
        let html = `
            <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(2, 6, 23, 0.9) 100%); padding: 30px; border-radius: 24px; border: 1px solid rgba(16, 185, 129, 0.4); margin-bottom: 30px; text-align:center; position:relative; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
                
                <button onclick="buka_alquran()" style="position:absolute; top:20px; left:20px; background:rgba(15,23,42,0.8); border:1px solid rgba(255,255,255,0.1); color:#f8fafc; padding:8px 16px; border-radius:12px; cursor:pointer; font-size:12px; font-weight:bold; transition:0.3s; backdrop-filter:blur(5px);" onmouseover="this.style.background='#10b981'" onmouseout="this.style.background='rgba(15,23,42,0.8)'">
                    <i class="fas fa-arrow-left" style="margin-right:5px;"></i> Kembali
                </button>
                
                <h2 style="font-size:28px; color:#10b981; font-weight:800; margin-bottom:5px; margin-top:30px; letter-spacing:1px;">${s.namaLatin}</h2>
                <h1 style="font-family:'Amiri', serif; font-size:42px; color:#f8fafc; margin-bottom:10px; text-shadow: 0 0 20px rgba(16,185,129,0.5);">${s.nama}</h1>
                <p style="color:#94a3b8; font-size:13px; margin-bottom:24px; font-weight:bold; text-transform:uppercase; letter-spacing:1px;">
                    ${s.arti} • ${s.tempatTurun} • ${s.jumlahAyat} Ayat
                </p>
                
                <button onclick="putarAudioSurat('${s.audioFull['05']}', this)" id="btn-audio-full" style="background:linear-gradient(135deg, #10b981 0%, #059669 100%); color:#fff; border:none; padding:12px 24px; border-radius:30px; font-weight:800; font-size:14px; cursor:pointer; box-shadow: 0 10px 20px rgba(16,185,129,0.3); transition:0.3s;">
                    <i class="fas fa-play-circle" style="margin-right:8px; font-size:16px;"></i> Putar Murottal Full
                </button>
            </div>
        `;

        // BISMILLAH (Ditampilkan untuk semua surat kecuali At-Tawbah dan Al-Fatihah yg sudah include)
        if(nomor !== 1 && nomor !== 9) {
            html += `<div style="text-align:center; font-family:'Amiri', serif; font-size:36px; color:#10b981; margin-bottom:40px; margin-top:20px; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>`;
        }

        // RENDER LOOPING AYAT
        s.ayat.forEach(a => {
            html += `
            <div class="data-list-item" style="position:relative; overflow:hidden; padding:30px; margin-bottom:20px;">
                <div style="position:absolute; top:0; left:0; width:5px; height:100%; background:linear-gradient(to bottom, #10b981, #0ea5e9);"></div>
                
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px dashed rgba(255,255,255,0.1); padding-bottom:15px;">
                    <span style="background:rgba(16,185,129,0.1); color:#10b981; width:35px; height:35px; display:flex; justify-content:center; align-items:center; border-radius:10px; font-weight:800; font-size:14px; border:1px solid rgba(16,185,129,0.3);">${a.nomorAyat}</span>
                    
                    <button onclick="putarAudioAyat('${a.audio['05']}', this)" style="background:rgba(14, 165, 233, 0.1); border:1px solid rgba(14, 165, 233, 0.3); color:#38bdf8; width:35px; height:35px; border-radius:50%; cursor:pointer; transition:0.3s;" title="Dengarkan Ayat Ini" onmouseover="this.style.background='#0ea5e9'; this.style.color='#fff';" onmouseout="this.style.background='rgba(14, 165, 233, 0.1)'; this.style.color='#38bdf8';">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                
                <div class="arabic-text" style="font-size:38px; line-height:2.6; margin-bottom:25px;">${a.teksArab}</div>
                <p class="latin-text" style="color:#38bdf8; margin-bottom:15px; font-size:15px; line-height:1.7;">${a.teksLatin}</p>
                <p class="translation-text" style="color:#cbd5e1; font-size:14px; background:rgba(2, 6, 23, 0.5); padding:16px; border-radius:12px; border-left:4px solid #10b981;">${a.teksIndonesia}</p>
            </div>
            `;
        });

        area.innerHTML = html;

    } catch (error) {
        area.innerHTML = `
            <div style="text-align:center; padding:50px;">
                <h3 style="color:#ef4444; margin-bottom:10px;">Gagal Memuat Mushaf</h3>
                <p style="color:#94a3b8; margin-bottom:20px;">Server equran.id sedang sibuk atau koneksi terputus.</p>
                <button onclick="bukaDetailSurat(${nomor})" style="background:#10b981; color:#fff; border:none; padding:10px 20px; border-radius:10px; cursor:pointer;">Coba Lagi</button>
            </div>
        `;
    }
}

// ==========================================
// AUDIO PLAYER CONTROLLER
// ==========================================
function putarAudioSurat(url, btn) {
    if(currentAudio && btn.innerText.includes("Hentikan")) {
        // Jika sedang play dan diklik tombol stop
        currentAudio.pause();
        currentAudio = null;
        btn.innerHTML = `<i class="fas fa-play-circle" style="margin-right:8px;"></i> Putar Murottal Full`;
        btn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
        return;
    }

    if(currentAudio) { currentAudio.pause(); } // Matikan audio lain yg sedang jalan
    
    currentAudio = new Audio(url);
    currentAudio.play();
    btn.innerHTML = `<i class="fas fa-stop-circle" style="margin-right:8px;"></i> Hentikan Murottal`;
    btn.style.background = "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)"; // Ubah merah
    
    currentAudio.onended = () => {
        btn.innerHTML = `<i class="fas fa-play-circle" style="margin-right:8px;"></i> Putar Murottal Full`;
        btn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
    };
}

function putarAudioAyat(url, btn) {
    if(currentAudio) { currentAudio.pause(); }
    
    // Kembalikan semua tombol play icon ke semula (jika ada yg sedang diputar)
    document.querySelectorAll('.fa-spinner').forEach(icon => {
        icon.className = 'fas fa-volume-up';
    });

    currentAudio = new Audio(url);
    currentAudio.play();
    
    const icon = btn.querySelector('i');
    icon.className = 'fas fa-spinner fa-spin'; // Efek loading
    
    currentAudio.onended = () => {
        icon.className = 'fas fa-volume-up';
    };
}