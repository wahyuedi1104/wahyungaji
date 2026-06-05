// FUNGSI RENDER ASMAUL HUSNA DARI API ALADHAN
async function buka_asmaul() {
    const target = document.getElementById('render-target');
    
    target.innerHTML = `
        <div style="background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(10px); padding: 24px; border-radius: 16px; margin-bottom: 24px; border-left: 5px solid #a855f7;">
            <h3 style="color:#f8fafc; font-size:18px; margin-bottom:4px;">✨ 99 Asmaul Husna</h3>
            <p style="color:#94a3b8; font-size:13px;">Nama-nama agung dan sifat mulia Allah SWT.</p>
        </div>
        <div style="text-align:center; padding: 50px;">
            <div style="color:#a855f7; font-size:24px; margin-bottom:10px;"><i class="fas fa-spinner fa-spin"></i></div>
            <div style="color:#94a3b8; font-size:14px;">Mengambil data dari server...</div>
        </div>
    `;

    try {
        const res = await fetch('https://api.aladhan.com/v1/asmaAlHusna');
        const json = await res.json();
        const list = json.data;
        
        let htmlGrid = `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px;">`;
        
        list.forEach(a => {
            htmlGrid += `
                <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 24px 16px; text-align: center; transition: 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <span style="font-size:11px; color:#64748b; font-weight:800; display:block; margin-bottom:8px;">${a.number}</span>
                    <div style="font-family:'Amiri', serif; font-size:32px; color:#a855f7; margin-bottom:12px; font-weight:bold;">${a.name}</div>
                    <div style="font-size:14px; font-weight:700; color:#38bdf8; margin-bottom:6px;">${a.transliteration}</div>
                    <div style="font-size:12px; color:#cbd5e1; line-height:1.4;">${terjemahAsmaul(a.number, a.en.meaning)}</div>
                </div>
            `;
        });
        
        htmlGrid += `</div>`;
        target.innerHTML = `
            <div style="background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(10px); padding: 24px; border-radius: 16px; margin-bottom: 24px; border-left: 5px solid #a855f7;">
                <h3 style="color:#f8fafc; font-size:18px; margin-bottom:4px;">✨ 99 Asmaul Husna</h3>
                <p style="color:#94a3b8; font-size:13px;">Nama-nama agung dan sifat mulia Allah SWT.</p>
            </div>
            ${htmlGrid}
        `;

    } catch(e) {
        target.innerHTML = `<div style="text-align:center; color:#ef4444; padding:40px;">Gagal memuat Asmaul Husna. Periksa koneksi internet Anda.</div>`;
    }
}

// Fungsi Terjemahan Bahasa Indonesia Manual (Karena API aslinya pakai bahasa Inggris)
function terjemahAsmaul(num, defaultEng) {
    const artiIndo = {
        1: "Maha Pengasih", 2: "Maha Penyayang", 3: "Maha Raja", 4: "Maha Suci", 5: "Maha Sejahtera",
        6: "Maha Mengamankan", 7: "Maha Memelihara", 8: "Maha Perkasa", 9: "Maha Gagah", 10: "Maha Megah",
        11: "Maha Pencipta", 12: "Maha Mengadakan", 13: "Maha Membentuk Rupa", 14: "Maha Pengampun", 15: "Maha Menundukkan",
        16: "Maha Pemberi", 17: "Maha Pemberi Rezeki", 18: "Maha Pembuka Rahmat", 19: "Maha Mengetahui", 20: "Maha Menyempitkan",
        21: "Maha Melapangkan", 22: "Maha Merendahkan", 23: "Maha Meninggikan", 24: "Maha Memuliakan", 25: "Maha Menghinakan",
        26: "Maha Mendengar", 27: "Maha Melihat", 28: "Maha Menetapkan Hukum", 29: "Maha Adil", 30: "Maha Lembut",
        99: "Maha Sabar" // Sebagian kecil dicantumkan, sisanya akan fallback ke bahasa Inggris jika tidak didefinisikan semua
    };
    return artiIndo[num] || defaultEng;
}