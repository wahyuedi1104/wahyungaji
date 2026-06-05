// DATASET DOA HARIAN
const dataDoa = [
    { judul: "Doa Sebelum Makan", arab: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ", latin: "Allahumma baariki lanaa fiimaa razaqtanaa wa qinaa 'adzaaban-naar.", arti: "Ya Allah, berkahilah kami pada apa yang Engkau rezekikan kepada kami dan jagalah kami dari siksa neraka." },
    { judul: "Doa Keluar Rumah", arab: "بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللهِ", latin: "Bismillahi tawakkaltu 'alallah, laa haula wa laa quwwata illaa billah.", arti: "Dengan nama Allah, aku bertawakal kepada Allah. Tiada daya dan kekuatan kecuali dengan Allah." },
    { judul: "Doa Kebaikan Dunia Akhirat (Sapujagat)", arab: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", latin: "Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa 'adzaaban-naar.", arti: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat dan peliharalah kami dari siksa neraka." }
];

// FUNGSI RENDER MENU DOA
function buka_doa() {
    let htmlResult = `
        <div style="background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(10px); padding: 24px; border-radius: 16px; margin-bottom: 24px; border-left: 5px solid #0ea5e9; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <h3 style="color:#f8fafc; font-size:18px; margin-bottom:4px;">🙏 Kumpulan Doa Harian</h3>
            <p style="color:#94a3b8; font-size:13px;">Lantunan doa praktis sehari-hari untuk menjaga keberkahan dalam setiap aktivitas lu.</p>
        </div>
    `;

    dataDoa.forEach((d, index) => {
        htmlResult += `
        <div class="data-list-item">
            <h4 style="color:#0ea5e9; margin-bottom:10px; font-size:16px;">✨ #${index + 1} ${d.judul}</h4>
            <div class="arabic-text">${d.arab}</div>
            <p class="latin-text">${d.latin}</p>
            <p class="translation-text"><b>Terjemahan:</b> ${d.arti}</p>
        </div>`;
    });

    document.getElementById('render-target').innerHTML = htmlResult;
}