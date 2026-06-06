window.buka_wudhu = function() {
    const target = document.getElementById('render-target');
    
    // Data Lengkap Panduan Wudhu
    const dataWudhu = [
        {
            langkah: "Langkah 1: Membaca Basmalah & Mencuci Tangan",
            arab: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
            latin: "Bismillahirrahmanirrahim.",
            arti: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
            ket: "Mencuci kedua telapak tangan hingga pergelangan sebanyak 3 kali sambil menyela-nyela jari."
        },
        {
            langkah: "Langkah 2: Berkumur (Madhmadhoh)",
            arab: "اَللَّهُمَّ أَعِنِّيْ عَلَى تِلَاوَةِ كِتَابِكَ وَكَثْرَةِ الذِّكْرِ لَكَ",
            latin: "Allahumma a'innii 'alaa tilaawati kitaabika wa katsratidz-dzikri laka.",
            arti: "Ya Allah, tolonglah aku untuk dapat membaca kitab-Mu dan banyak berdzikir kepada-Mu.",
            ket: "Memasukkan air ke dalam mulut, memutarnya, lalu membuangnya sebanyak 3 kali."
        },
        {
            langkah: "Langkah 3: Menghirup Air ke Hidung (Istinsyaq)",
            arab: "اَللَّهُمَّ أَرِحْنِيْ رَائِحَةَ الْجَنَّةِ",
            latin: "Allahumma arihnii raaihatal jannati.",
            arti: "Ya Allah, ciumkanlah kepadaku wewangian surga.",
            ket: "Menghirup air ke dalam hidung lalu mengeluarkannya sebanyak 3 kali."
        },
        {
            langkah: "Langkah 4: Niat & Membasuh Wajah",
            arab: "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلَّهِ تَعَالَى",
            latin: "Nawaitul wudhuu-a liraf'il hadatsil ashghari fardhan lillaahi ta'aalaa.",
            arti: "Aku niat berwudhu untuk menghilangkan hadas kecil, fardu karena Allah Ta'ala.",
            ket: "Niat dibaca di dalam hati bersamaan dengan air menyentuh wajah. Basuh seluruh wajah dari batas rambut hingga dagu sebanyak 3 kali."
        },
        {
            langkah: "Langkah 5: Membasuh Tangan Kanan",
            arab: "اَللَّهُمَّ أَعْطِنِيْ كِتَابِيْ بِيَمِيْنِيْ وَحَاسِبْنِيْ حِسَابًا يَسِيْرًا",
            latin: "Allahumma a'thinii kitaabii biyamiinii wa haasibnii hisaaban yasiiraa.",
            arti: "Ya Allah, berikanlah kitab amalku dari tangan kananku dan hisablah aku dengan hisab yang ringan.",
            ket: "Membasuh tangan kanan dari ujung jari hingga melebihi siku sebanyak 3 kali."
        },
        {
            langkah: "Langkah 6: Membasuh Tangan Kiri",
            arab: "اَللَّهُمَّ لَا تُعْطِنِيْ كِتَابِيْ بِشِمَالِيْ وَلَا مِنْ وَرَاءِ ظَهْرِيْ",
            latin: "Allahumma laa tu'thinii kitaabii bisyimaalii wa laa min waraa-i zhahrii.",
            arti: "Ya Allah, janganlah Engkau berikan kitab amalku dari tangan kiriku dan jangan pula dari belakang punggungku.",
            ket: "Membasuh tangan kiri dari ujung jari hingga melebihi siku sebanyak 3 kali."
        },
        {
            langkah: "Langkah 7: Mengusap Sebagian Kepala",
            arab: "اَللَّهُمَّ حَرِّمْ شَعْرِيْ وَبَشَرِيْ عَلَى النَّارِ",
            latin: "Allahumma harrim sya'rii wa basyarii 'alan-naari.",
            arti: "Ya Allah, haramkanlah rambutku dan kulitku dari tersentuh api neraka.",
            ket: "Mengusap sebagian rambut atau batas ubun-ubun kepala dengan air sebanyak 3 kali."
        },
        {
            langkah: "Langkah 8: Mengusap Kedua Telinga",
            arab: "اَللَّهُمَّ اجْعَلْنِيْ مِنَ الَّذِيْنَ يَسْتَمِعُوْنَ الْقَوْلَ فَيَتَّبِعُوْنَ أَحْسَنَهُ",
            latin: "Allahummaj'alnii minalladziina yastami'uunal qaula fayattabi'uuna ahsanahu.",
            arti: "Ya Allah, jadikanlah aku termasuk orang-orang yang mendengarkan perkataan lalu mengikuti yang paling baik.",
            ket: "Mengusap bagian dalam dan luar kedua daun telinga secara bersamaan sebanyak 3 kali."
        },
        {
            langkah: "Langkah 9: Membasuh Kaki Kanan",
            arab: "اَللَّهُمَّ ثَبِّتْ قَدَمِيْ عَلَى الصِّرَاطِ يَوْمَ تَزِلُّ فِيْهِ الْأَقْدَامُ",
            latin: "Allahumma tsabbit qadamii 'alash-shiraathi yauma tazillu fiihil aqdaamu.",
            arti: "Ya Allah, tetapkanlah pijakan kakiku di atas jembatan shirath pada hari di mana banyak kaki-kaki terpeleset.",
            ket: "Membasuh kaki kanan dari ujung jari hingga di atas mata kaki sebanyak 3 kali."
        },
        {
            langkah: "Langkah 10: Membasuh Kaki Kiri",
            arab: "اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ أَنْ تَزِلَّ قَدَمِيْ عَنِ الصِّرَاطِ فِي النَّارِ يَوْمَ تَزِلُّ أَقْدَامُ الْمُنَافِقِيْنَ",
            latin: "Allahumma innii a'uudzu bika an tazilla qadamii 'anish-shiraathi fin-naari yauma tazillu aqdaamul munaafiqiina.",
            arti: "Ya Allah, aku berlindung kepada-Mu dari terpelesetnya kakiku dari jembatan shirath menuju neraka.",
            ket: "Membasuh kaki kiri dari ujung jari hingga di atas mata kaki sebanyak 3 kali. Pastikan sela-sela jari terbasuh."
        },
        {
            langkah: "Langkah 11: Doa Selesai Sempurna Wudhu",
            arab: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اَللَّهُمَّ اجْعَلْنِيْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِيْ مِنَ الْمُتَطَهِّرِيْنَ وَاجْعَلْنِيْ مِنْ عِبَادِكَ الصَّالِحِيْنَ",
            latin: "Asyhadu allaa ilaaha illallaahu wahdahu laa syariikalahu wa asyhadu anna muhammadan 'abduhu wa rasuuluhu. Allahummaj'alnii minat-tawwaabiina waj'alnii minal-mutathahhiriina waj'alnii min 'ibaadikash-shaalihiin.",
            arti: "Aku bersaksi tiada Tuhan selain Allah yang Maha Esa, tiada sekutu bagi-Nya, dan aku bersaksi bahwa Nabi Muhammad adalah hamba dan utusan-Nya. Ya Allah, jadikanlah aku termasuk orang-orang yang bertaubat, jadikanlah aku termasuk orang-orang yang menyucikan diri, dan jadikanlah aku bagian dari hamba-hamba-Mu yang saleh.",
            ket: "Disunnahkan membaca doa ini menghadap kiblat setelah selesai berwudhu secara sempurna."
        }
    ];

    let htmlContent = `
        <div style="margin-bottom: 30px;">
            <h2 style="color: #10b981; font-weight: 800; font-size: 28px; margin-bottom: 10px;">Panduan Wudhu</h2>
            <p style="color: #94a3b8; font-size: 15px;">Tata cara bersuci yang benar sesuai sunnah dilengkapi dengan doa di setiap basuhannya.</p>
        </div>
    `;

    dataWudhu.forEach(item => {
        htmlContent += `
            <div class="data-list-item">
                <h4 style="color:#10b981; margin-bottom:10px; font-size:16px; font-weight: 800;">${item.langkah}</h4>
                <div class="arabic-text">${item.arab}</div>
                <div class="latin-text">${item.latin}</div>
                <div class="translation-text">
                    <strong style="color: #f8fafc;">Arti:</strong> ${item.arti}
                    <div style="margin-top: 12px; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 12px;">
                        <span style="color:#fbbf24;">💡 Keterangan:</span> ${item.ket}
                    </div>
                </div>
            </div>
        `;
    });

    target.innerHTML = htmlContent;
};
