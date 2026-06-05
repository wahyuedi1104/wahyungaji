// FUNGSI RENDER MENU ZAKAT
function buka_zakat() {
    document.getElementById('render-target').innerHTML = `
        <div style="background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(10px); padding: 24px; border-radius: 16px; margin-bottom: 24px; border-left: 5px solid #f59e0b; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <h3 style="color:#f8fafc; font-size:18px; margin-bottom:4px;">🪙 Kalkulator Zakat Cerdas</h3>
            <p style="color:#94a3b8; font-size:13px;">Hitung kewajiban zakat harta (Maal) dan jiwa (Fitrah) lu secara instan sesuai standar syariat.</p>
        </div>

        <div class="grid-menu" style="grid-template-columns: 1fr;">
            
            <!-- ZAKAT MAAL -->
            <div class="data-list-item" style="border: 1px solid rgba(245, 158, 11, 0.3);">
                <h4 style="color:#f59e0b; margin-bottom:20px; font-size:18px;">1. Zakat Maal (Tabungan & Emas)</h4>
                
                <label style="color:#cbd5e1; font-size:13px; margin-bottom:8px; display:block; font-weight:600;">Total Nilai Harta Saldo (Rp)</label>
                <input type="number" id="harta-maal" value="100000000">
                
                <label style="color:#cbd5e1; font-size:13px; margin-bottom:8px; display:block; font-weight:600;">Harga Emas Murni Saat Ini Per Gram (Rp)</label>
                <input type="number" id="harga-emas" value="1400000">
                <p style="font-size:11px; color:#94a3b8; margin-bottom:20px;">💡 Nisab minimal wajib zakat adalah setara harga 85 Gram Emas murni.</p>
                
                <button class="btn-action" style="background:#f59e0b; color:#fff;" onclick="hitungZakatMaal()">Hitung Zakat Maal</button>
                <div id="hasil-maal" style="margin-top:20px; font-size:14px; display:none; background:rgba(245, 158, 11, 0.1); padding:16px; border-radius:12px; border:1px solid rgba(245, 158, 11, 0.2);"></div>
            </div>

            <!-- ZAKAT FITRAH -->
            <div class="data-list-item" style="border: 1px solid rgba(16, 185, 129, 0.3);">
                <h4 style="color:#10b981; margin-bottom:20px; font-size:18px;">2. Zakat Fitrah (Jiwa)</h4>
                
                <label style="color:#cbd5e1; font-size:13px; margin-bottom:8px; display:block; font-weight:600;">Jumlah Tanggungan Keluarga (Orang)</label>
                <input type="number" id="jumlah-jiwa" value="4">
                
                <label style="color:#cbd5e1; font-size:13px; margin-bottom:8px; display:block; font-weight:600;">Estimasi Harga Beras Per Kg (Rp)</label>
                <input type="number" id="harga-beras" value="15000">
                <p style="font-size:11px; color:#94a3b8; margin-bottom:20px;">💡 Standar zakat fitrah adalah senilai 2.5 Kg makanan pokok per jiwa.</p>
                
                <button class="btn-action" onclick="hitungZakatFitrah()">Hitung Zakat Fitrah</button>
                <div id="hasil-fitrah" style="margin-top:20px; font-size:14px; display:none; background:rgba(16, 185, 129, 0.1); padding:16px; border-radius:12px; border:1px solid rgba(16, 185, 129, 0.2);"></div>
            </div>

        </div>
    `;
}

// LOGIKA MATEMATIKA ZAKAT MAAL
function hitungZakatMaal() {
    const harta = parseFloat(document.getElementById('harta-maal').value) || 0;
    const emas = parseFloat(document.getElementById('harga-emas').value) || 0;
    const limitNisab = emas * 85;
    const hasilBox = document.getElementById('hasil-maal');
    hasilBox.style.display = "block";

    if (harta >= limitNisab) {
        const kewajiban = harta * 0.025;
        hasilBox.innerHTML = `<span style="color:#f59e0b; font-weight:bold;">🟢 Wajib Zakat Maal!</span><br><br><span style="color:#cbd5e1;">Harta lu telah melewati batas nisab tahunan (Rp ${limitNisab.toLocaleString('id-ID')}).</span><br><br>Total zakat yang wajib dibayarkan:<br><b style="font-size:20px; color:#f8fafc;">Rp ${kewajiban.toLocaleString('id-ID')}</b>`;
    } else {
        hasilBox.innerHTML = `<span style="color:#94a3b8; font-weight:bold;">🟡 Belum Wajib Zakat Maal.</span><br><br><span style="color:#cbd5e1;">Total akumulasi saldo harta lu belum menyentuh batas syarat minimum nisab (Rp ${limitNisab.toLocaleString('id-ID')}).</span>`;
    }
}

// LOGIKA MATEMATIKA ZAKAT FITRAH
function hitungZakatFitrah() {
    const jiwa = parseInt(document.getElementById('jumlah-jiwa').value) || 0;
    const beras = parseFloat(document.getElementById('harga-beras').value) || 0;
    const totalBeras = jiwa * 2.5;
    const totalUang = totalBeras * beras;
    
    const hasilBox = document.getElementById('hasil-fitrah');
    hasilBox.style.display = "block";
    hasilBox.innerHTML = `<span style="color:#10b981; font-weight:bold;">🟢 Hasil Perhitungan Zakat Fitrah:</span><br><br><span style="color:#cbd5e1;">Total Makanan Pokok: <b>${totalBeras} Kg Beras</b>.</span><br><br>Jika dikonversikan dalam bentuk uang tunai:<br><b style="font-size:20px; color:#f8fafc;">Rp ${totalUang.toLocaleString('id-ID')}</b> <span style="color:#94a3b8; font-size:12px;">untuk ${jiwa} jiwa keluarga.</span>`;
}