// DATASET PANDUAN WUDHU LENGKAP
const dataWudhu = [
    { langkah: "1", nama: "Membaca Niat Wudhu", arab: "نَوَيْتُ الْوُضُوءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلَّهِ تَعَالَى", latin: "Nawaitul whudhuu-a liraf'il hadatsil ashghari fardhal lillaahi ta'aalaa.", arti: "Aku niat berwudhu untuk menghilangkan hadats kecil fardhu karena Allah Ta'ala.", ket: "Niat dibaca bersamaan saat air pertama kali menyentuh basuhan wajah." },
    { langkah: "2", nama: "Membasuh Kedua Telapak Tangan", arab: "اللَّهُمَّ احْفَظْ يَدَيَّ مِنْ مَعَاصِيكَ كُلِّهَا", latin: "Allahummahfadz yadaiya min ma'aashika kullihaa.", arti: "Ya Allah, jagalah kedua tanganku dari segala maksiat kepada-Mu.", ket: "Sunnah membersihkan sela-sela jari tangan." },
    { langkah: "3", nama: "Berkumur (Madmadah)", arab: "اللَّهُمَّ أَعِنِّي عَلَى تِلَاوَةِ كِتَابِكَ وَكَثْرَةِ الذِّكْرِ لَكَ", latin: "Allahumma a'innii 'alaa tilaawati kitaabika wa katsratidh-dzikri laka.", arti: "Ya Allah, bantulah aku untuk selalu membaca kitab-Mu dan memperbanyak dzikir kepada-Mu.", ket: "Berkumur secara sempurna guna membersihkan sisa makanan." },
    { langkah: "4", nama: "Menghirup Air ke Hidung (Istinsyaq)", arab: "اللَّهُمَّ أَرِحْنِي رَائِحَةَ الْجَنَّةِ", latin: "Allahumma arihnii raaihatal jannati.", arti: "Ya Allah, ciumkanlah kepadaku wewangian surga.", ket: "Menghirup air dengan hidung lalu mengeluarkannya kembali." },
    { langkah: "5", nama: "Membasuh Wajah (Muka)", arab: "اللَّهُمَّ بَيِّضْ وَجْهِي يَوْمَ تَبْيَضُّ وُجُوهٌ وَتَسْوَدُّ وُجُوهٌ", latin: "Allahumma bayyidh wajhii yauma tabyaddhu wujuuhun wa taswaddu wujuuhun.", arti: "Ya Allah, putihkanlah wajahku pada hari memutihnya wajah-wajah dan menghitamnya wajah-wajah.", ket: "Batasan wajah adalah dari tumbuhnya rambut kepala hingga dagu, dan telinga kanan ke kiri." },
    { langkah: "6", nama: "Membasuh Tangan Kanan", arab: "اللَّهُمَّ أَعْطِنِي كِتَابِي بِيَمِينِي وَحَاسِبْنِي حِسَابًا يَسِيرًا", latin: "Allahumma a'thinii kitaabii biyamii-nii wa haasibnii hisaabay yasiiraa.", arti: "Ya Allah, berikanlah kitab catatan amalku di tangan kananku dan hisablah aku dengan hisab yang mudah.", ket: "Membasuh dari ujung jari hingga melewati siku tangan." },
    { langkah: "7", "nama": "Membasuh Tangan Kiri", arab: "اللَّهُمَّ لَا تُعْطِنِي كِتَابِي بِشِمَالِي وَلَا مِنْ وَرَاءِ ظَهْرِي", latin: "Allahumma laa tu'thinii kitaabii bisyimaalii wa laa miw waraai dzahrii.", arti: "Ya Allah, janganlah Engkau berikan catatan amalku di tangan kiriku dan jangan pula dari arah belakang punggungku.", ket: "Wajib dibasuh merata hingga siku tangan." },
    { langkah: "8", nama: "Mengusap Sebagian Rambut Kepala", arab: "اللَّهُمَّ حَرِّمْ شَعْرِي وَبَشَرِي عَلَى النَّارِ", latin: "Allahumma harrim sya'rii wa basyarii 'alan-naar.", arti: "Ya Allah, haramkanlah rambutku dan kulit kepalaku dari sentuhan api neraka.", ket: "Mengusap minimal sebagian kepala yang ditumbuhi rambut." },
    { langkah: "9", nama: "Mengusap Kedua Telinga", arab: "اللَّهُمَّ اجْعَلْنِي مِنَ الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ فَيَتَّبِعُونَ أَحْسَنَهُ", latin: "Allahummaj'alnii minal-ladziina yastami'uunal qaula fayattabi'uuna ahsanahu.", arti: "Ya Allah, jadikanlah aku termasuk orang-orang yang mendengarkan perkataan baik lalu mengikuti apa yang paling baik.", ket: "Mengusap bagian luar dan dalam telinga dengan air baru." },
    { langkah: "10", nama: "Membasuh Kaki Kanan", arab: "اللَّهُمَّ ثَبِّتْ قَدَمَيَّ عَلَى الصِّرَاطِ يَوْمَ تَزِلُّ فِيهِ الْأَقْدَامُ", latin: "Allahumma tsabbit qadamaiyya 'alas-shiraathi yauma tazillu fiihil aqdaam.", arti: "Ya Allah, kokohkanlah kedua kakiku di atas jembatan pada hari terpelesetnya kaki-kaki manusia.", ket: "Membasuh dari ujung jari kaki hingga di atas mata kaki secara menyeluruh." },
    { langkah: "11", nama: "Membasuh Kaki Kiri", arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ تَزِلَّ قَدَمِي عَنِ الصِّرَاطِ فِي النَّارِ يَوْمَ تَزِلُّ أَقْدَامُ الْمُنَافِقِينَ", latin: "Allahumma innii a'uudzu bika an tazilla qadamii 'anas-shiraathi fin-naari yauma tazillu aqdaamul munaafiqiina.", arti: "Ya Allah, aku berlindung kepada-Mu dari terpelesetnya kakiku dari jembatan shirath menuju neraka.", ket: "Pastikan sela-sela jari kaki terbasuh air." },
    { langkah: "12", nama: "Doa Selesai Sempurna Wudhu", arab: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ...", latin: "Asyhadu allaa ilaaha illallaahu wahdahu laa syariikalahu wa asyhadu anna muhammadan 'abduhu wa rasuuluhu...", arti: "Aku bersaksi tiada Tuhan selain Allah yang Maha Esa, tiada sekutu bagi-Nya, dan aku bersaksi bahwa Nabi Muhammad adalah hamba dan utusan-Nya.", ket: "Disunnahkan membaca doa ini dengan menghadap kiblat sambil mengangkat kedua tangan." }
];

// FUNGSI RENDER (DIPANGGIL OLEH APP.JS)
function buka_wudhu() {
    let htmlResult = `
        <div style="background: #0f172a; padding: 24px; border-radius: 16px; margin-bottom: 24px; border-left: 5px solid #10b981;">
            <h3 style="color:#f8fafc; font-size:18px; margin-bottom:4px;">💧 Fiqih & Tata Cara Wudhu Sempurna</h3>
            <p style="color:#94a3b8; font-size:13px;">Panduan urutan wudhu lengkap beserta doa-doa mustajab di setiap basuhan.</p>
        </div>
    `;

    dataWudhu.forEach(w => {
        let isAkhir = w.langkah === '12';
        let styleBorder = isAkhir ? 'border: 2px dashed #10b981; background: rgba(16,185,129,0.05);' : '';
        
        htmlResult += `
        <div class="data-list-item" style="${styleBorder}">
            <h4 style="color:#10b981; margin-bottom:10px;">Langkah ${w.langkah}: ${w.nama}</h4>
            <div class="arabic-text">${w.arab}</div>
            <p class="latin-text">${w.latin}</p>
            <p class="translation-text"><b>Arti:</b> ${w.arti}</p>
            <div class="badge-info">💡 <b>Keterangan:</b> ${w.ket}</div>
        </div>`;
    });

    document.getElementById('render-target').innerHTML = htmlResult;
}