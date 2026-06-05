// ==========================================
// 1. DATASET NIAT SHALAT (FULL UPDATE)
// ==========================================
const dataNiatWajib = [
    { nama: "Shalat Subuh (2 Rakaat)", arab: "أُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Usholli fardhas-shubhi rak'ataini mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", arti: "Aku niat shalat fardhu Subuh dua rakaat, menghadap kiblat, karena Allah Ta'ala." },
    { nama: "Shalat Dzuhur (4 Rakaat)", arab: "أُصَلِّى فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Usholli fardhad-zhuhri arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", arti: "Aku niat shalat fardhu Dzuhur empat rakaat, menghadap kiblat, karena Allah Ta'ala." },
    { nama: "Shalat Ashar (4 Rakaat)", arab: "أُصَلِّى فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Usholli fardhal-'ashri arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", arti: "Aku niat shalat fardhu Ashar empat rakaat, menghadap kiblat, karena Allah Ta'ala." },
    { nama: "Shalat Maghrib (3 Rakaat)", arab: "أُصَلِّى فَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Usholli fardhal-maghribi thalaatha raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", arti: "Aku niat shalat fardhu Maghrib tiga rakaat, menghadap kiblat, karena Allah Ta'ala." },
    { nama: "Shalat Isya (4 Rakaat)", arab: "أُصَلِّى فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Usholli fardhal-'isyaa-i arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", arti: "Aku niat shalat fardhu Isya empat rakaat, menghadap kiblat, karena Allah Ta'ala." },
    { nama: "Shalat Jumat (2 Rakaat)", arab: "أُصَلِّي فَرْضَ الْجُمْعَةِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Usholli fardhol jum'ati rak'ataini mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", arti: "Aku niat shalat fardhu Jumat dua rakaat, menghadap kiblat, karena Allah Ta'ala." }
];

const dataNiatSunnah = [
    { nama: "Shalat Dhuha", arab: "أُصَلِّى سُنَّةَ الضُّحَى رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Usholli sunnatadh-dhuhaa rak'ataini lillaahi ta'aalaa.", arti: "Aku niat shalat sunnah Dhuha dua rakaat karena Allah Ta'ala." },
    { nama: "Shalat Tahajjud", arab: "أُصَلِّى سُنَّةَ التَّهَجُّدِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Usholli sunnatat-tahajjudi rak'ataini lillaahi ta'aalaa.", arti: "Aku niat shalat sunnah Tahajjud dua rakaat karena Allah Ta'ala." },
    { nama: "Shalat Witir (1 Rakaat)", arab: "أُصَلِّى سُنَّةَ الْوِتْرِ رَكْعَةً لِلَّهِ تَعَالَى", latin: "Usholli sunnatal-witri rak'atan lillaahi ta'aalaa.", arti: "Aku niat shalat sunnah Witir satu rakaat karena Allah Ta'ala." },
    { nama: "Shalat Idul Fitri (2 Rakaat)", arab: "أُصَلِّي سُنَّةً لِعِيْدِ الْفِطْرِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Usholli sunnatan li'iidil fithri rak'ataini mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", arti: "Aku niat shalat sunnah Idul Fitri dua rakaat, menghadap kiblat, karena Allah Ta'ala." },
    { nama: "Shalat Idul Adha (2 Rakaat)", arab: "أُصَلِّي سُنَّةً لِعِيْدِ الْأَضْحَى رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Usholli sunnatan li'iidil adlhaa rak'ataini mustaqbilal qiblati adaa-an lillaahi ta'aalaa.", arti: "Aku niat shalat sunnah Idul Adha dua rakaat, menghadap kiblat, karena Allah Ta'ala." },
    { nama: "Shalat Istikharah (2 Rakaat)", arab: "أُصَلِّي سُنَّةَ الِاسْتِخَارَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Usholli sunnatal istikhaarati rak'ataini lillaahi ta'aalaa.", arti: "Aku niat shalat sunnah Istikharah dua rakaat karena Allah Ta'ala." },
    { nama: "Shalat Tarawih (2 Rakaat)", arab: "أُصَلِّي سُنَّةَ التَّرَاوِيْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ مَأْمُوْمًا لِلَّهِ تَعَالَى", latin: "Usholli sunnatat-taraawiihi rak'ataini mustaqbilal qiblati ma'muuman lillaahi ta'aalaa.", arti: "Aku niat shalat sunnah Tarawih dua rakaat, menghadap kiblat, sebagai makmum karena Allah Ta'ala." }
];

const dataNiatJenazah = [
    { nama: "Shalat Jenazah (Mayit Laki-laki)", arab: "أُصَلِّى عَلَى هَذَا الْمَيِّتِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ كِفَايَةٍ مَأْمُوْمًا لِلَّهِ تَعَالَى", latin: "Usholli 'alaa haadzal mayyiti arba'a takbiiraatin fardha kifaayatin ma'muuman lillaahi ta'aalaa.", arti: "Aku niat shalat atas jenazah laki-laki ini empat kali takbir fardhu kifayah sebagai makmum karena Allah Ta'ala." },
    { nama: "Shalat Jenazah (Mayit Perempuan)", arab: "أُصَلِّى عَلَى هَذِهِ الْمَيِّتَةِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ كِفَايَةٍ مَأْمُوْمًا لِلَّهِ تَعَالَى", latin: "Usholli 'alaa haadzihil mayyitati arba'a takbiiraatin fardha kifaayatin ma'muuman lillaahi ta'aalaa.", arti: "Aku niat shalat atas jenazah perempuan ini empat kali takbir fardhu kifayah sebagai makmum karena Allah Ta'ala." },
    { nama: "Shalat Ghaib (Mayit Laki-laki)", arab: "أُصَلِّى عَلَى الْمَيِّتِ الْغَائِبِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ كِفَايَةٍ لِلَّهِ تَعَالَى", latin: "Usholli 'alal mayyitil ghaa-ibi arba'a takbiiraatin fardha kifaayatin lillaahi ta'aalaa.", arti: "Aku niat shalat atas mayit ghaib laki-laki empat kali takbir fardhu kifayah karena Allah Ta'ala." }
];

// ==========================================
// 2. DATASET BACAAN SHALAT 
// ==========================================
const dataBacaanWajib = [
    { nama: "Takbiratul Ihram", arab: "اللَّهُ أَكْبَرُ", latin: "Allahu Akbar.", arti: "Allah Maha Besar." },
    { nama: "Doa Iftitah", arab: "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا. إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا مُسْلِمًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ. إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ. لَا شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ", latin: "Allahu akbar kabiiraa walhamdu lillaahi katsiiraa, wa subhaanallaahi bukratan wa asiilaa. Innii wajjahtu wajhiya lilladzii fatharas samaawaati wal ardha haniifan musliman wamaa anaa minal musyrikiin. Inna shalaatii wanusukii wamahyaaya wamamaatii lillaahi rabbil 'aalamiin. Laa syariika lahu wa bidzaalika umirtu wa anaa minal muslimiin.", arti: "Allah Maha Besar lagi Sempurna Kebesaran-Nya, segala puji bagi-Nya dengan pujian yang banyak, dan Maha Suci Allah sepanjang pagi dan petang. Kuhadapkan wajahku kepada Zat yang mencipta langit dan bumi dalam keadaan lurus dan pasrah..." },
    { nama: "Surat Al-Fatihah", arab: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ. الرَّحْمٰنِ الرَّحِيْمِ. مٰلِكِ يَوْمِ الدِّيْنِ. اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ. اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ. صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ", latin: "Bismillahir rahmaanir rahiim. Alhamdu lillaahi rabbil 'aalamiin. Arrahmaanir rahiim. Maaliki yaumid diin. Iyyaaka na'budu wa iyyaaka nasta'iin. Ihdinas shiraathal mustaqiim. Shiraathal ladziina an'amta 'alaihim ghairil maghdhuubi 'alaihim waladh-dhaalliin.", arti: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam..." },
    { nama: "Ruku'", arab: "سُبْحَانَ رَبِّىَ الْعَظِيمِ وَبِحَمْدِهِ", latin: "Subhaana rabbiyal 'adziimi wa bihamdih. (Dibaca 3x)", arti: "Maha Suci Tuhanku Yang Maha Agung dan dengan memuji-Nya." },
    { nama: "I'tidal", arab: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ. رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ", latin: "Sami'allaahu liman hamidah. Rabbanaa lakal hamdul mil'us samaawaati wamil'ul ardhi wamil'u maa syi'ta min syai'in ba'du.", arti: "Allah Maha Mendengar pujian orang yang memuji-Nya. Ya Tuhan kami, bagi-Mu segala puji..." },
    { nama: "Sujud", arab: "سُبْحَانَ رَبِّىَ الأَعْلَى وَبِحَمْدِهِ", latin: "Subhaana rabbiyal a'laa wa bihamdih. (Dibaca 3x)", arti: "Maha Suci Tuhanku Yang Maha Tinggi dan dengan memuji-Nya." },
    { nama: "Duduk di Antara Dua Sujud", arab: "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّي", latin: "Rabbighfirlii warhamnii wajburnii warfa'nii warzuqnii wahdinii wa'aafinii wa'fu 'annii.", arti: "Ya Tuhanku, ampunilah aku, rahmatilah aku, cukupkanlah kekuranganku, angkatlah derajatku, berilah rezeki kepadaku, berilah aku petunjuk, sehatkanlah aku, dan berilah ampunan kepadaku." },
    { nama: "Tasyahud Akhir", arab: "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ. السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ. السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ سَيِّدَنَا مُحَمَّدًا رَسُولُ اللَّهِ. اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ، وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ. كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ، وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ. وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ، وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ. كَمَا بَارَكْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ، وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ. فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ", latin: "Attahiyyaatul mubaarakaatush shalawaatuth thayyibaatu lillaah. Assalaamu 'alaika ayyuhan nabiyyu wa rahmatullaahi wa barakaatuh. Assalaamu 'alainaa wa 'alaa 'ibaadillaahish shaalihiin. Asyhadu allaa ilaaha illallaah, wa asyhadu anna Sayyidinaa Muhammadar rasuulullaah. Allahumma sholli 'alaa Sayyidinaa Muhammad wa 'alaa aali Sayyidinaa Muhammad. Kamaa shallaita 'alaa Sayyidinaa Ibraahiim wa 'alaa aali Sayyidinaa Ibraahiim. Wa baarik 'alaa Sayyidinaa Muhammad wa 'alaa aali Sayyidinaa Muhammad. Kamaa baarakta 'alaa Sayyidinaa Ibraahiim wa 'alaa aali Sayyidinaa Ibraahiim. Fil 'aalamiina innaka hamiidum majiid.", arti: "Segala penghormatan, keberkahan, shalawat dan kebaikan adalah milik Allah. Semoga keselamatan, rahmat Allah dan berkah-Nya dilimpahkan kepadamu wahai Nabi..." },
    { nama: "Salam", arab: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ", latin: "Assalaamu 'alaikum wa rahmatullaah.", arti: "Semoga keselamatan dan rahmat Allah dilimpahkan kepadamu." }
];

const dataBacaanJenazah = [
    { nama: "Takbir Pertama", arab: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ...", latin: "Membaca Surat Al-Fatihah", arti: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang..." },
    { nama: "Takbir Kedua", arab: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ ، وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ", latin: "Allahumma sholli 'alaa sayyidinaa Muhammad wa 'alaa aali sayyidinaa Muhammad.", arti: "Ya Allah, limpahkanlah rahmat kepada junjungan kami Nabi Muhammad dan keluarganya." },
    { nama: "Takbir Ketiga", arab: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ", latin: "Allahummaghfir lahu warhamhu wa'aafihi wa'fu 'anhu.", arti: "Ya Allah, ampunilah dia, berilah rahmat kepadanya, selamatkanlah dia, dan maafkanlah kesalahannya." },
    { nama: "Takbir Keempat", arab: "اللَّهُمَّ لاَ تَحْرِمْنَا أَجْرَهُ وَلاَ تَفْتِنَّا بَعْدَهُ وَاغْفِرْ لَنَا وَلَهُ", latin: "Allahumma laa tahrimnaa ajrahu wa laa taftinnaa ba'dahu waghfirlanaa walahu.", arti: "Ya Allah, janganlah Engkau halangi kami dari pahalanya, dan janganlah Engkau beri fitnah kepada kami setelah kepergiannya, dan ampunilah kami dan dia." },
    { nama: "Salam", arab: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ", latin: "Assalaamu 'alaikum wa rahmatullaah.", arti: "Semoga keselamatan dan rahmat Allah dilimpahkan kepadamu." }
];

const dataDoaSesudahShalat = [
    { nama: "1. Membaca Istighfar (3x)", arab: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ", latin: "Astaghfirullaahal 'adziim, alladzii laa ilaaha illaa huwal hayyul qayyuumu wa atuubu ilaih.", arti: "Aku memohon ampun kepada Allah Yang Maha Agung, yang tiada tuhan selain Dia, Yang Maha Hidup lagi Maha Berdiri Sendiri, dan aku bertaubat kepada-Nya." },
    { nama: "2. Doa Keselamatan (Sapu Jagat Shalat)", arab: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", latin: "Allahumma antas salaam waminkas salaam tabaarakta yaa dzal jalaali wal ikraam.", arti: "Ya Allah, Engkaulah As-Salam (Yang Maha Sejahtera), dan dari-Mu lah kesejahteraan. Maha Suci Engkau wahai Zat Yang Memiliki Kebesaran dan Kemuliaan." },
    { nama: "3. Membaca Tasbih (33x)", arab: "سُبْحَانَ اللَّهِ", latin: "Subhaanallaah. (Dibaca 33 kali)", arti: "Maha Suci Allah." },
    { nama: "4. Membaca Tahmid (33x)", arab: "الْحَمْدُ لِلَّهِ", latin: "Alhamdulillaah. (Dibaca 33 kali)", arti: "Segala puji bagi Allah." },
    { nama: "5. Membaca Takbir (33x)", arab: "اللَّهُ أَكْبَرُ", latin: "Allahu Akbar. (Dibaca 33 kali)", arti: "Allah Maha Besar." },
    { nama: "6. Dzikir Penyempurna Tasbih", arab: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", latin: "Laa ilaaha illallaah wahdahu laa syariika lah, lahul mulku walahul hamdu wahuwa 'alaa kulli syai-in qadiir.", arti: "Tiada tuhan yang berhak disembah selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya lah kerajaan dan milik-Nya lah segala pujian, dan Dia Maha Kuasa atas segala sesuatu." },
    { nama: "7. Doa Kebaikan Dunia Akhirat", arab: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", latin: "Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa 'adzaaban-naar.", arti: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, serta lindungilah kami dari siksa neraka." }
];

// ==========================================
// 4. FUNGSI RENDER MENU SHALAT & TAB
// ==========================================
function buka_shalat() {
    let htmlResult = `
        <div style="position:relative; overflow:hidden; padding: 30px; border-radius: 20px; margin-bottom: 24px; border: 1px solid rgba(16, 185, 129, 0.4); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
            <!-- Gambar Background untuk Card (Cover) -->
            <img src="https://images.unsplash.com/photo-1519817650390-64d9f2d1e2e1?auto=format&fit=crop&w=800&q=80" style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; opacity:0.2; z-index:0;">
            <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:linear-gradient(to right, #020617, transparent); z-index:1;"></div>
            
            <div style="position:relative; z-index:2;">
                <h3 style="color:#10b981; font-size:24px; margin-bottom:8px; font-weight:800;">🧎 Panduan Shalat & Wirid</h3>
                <p style="color:#cbd5e1; font-size:14px; margin-bottom:20px; max-width:500px;">Panduan Niat (Jumat, Tarawih, Idul Fitri), Bacaan Rukun 100% lengkap, dan Wirid sesudah shalat.</p>
                
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <button onclick="renderSubShalat('niat')" id="tab-niat" style="background:#10b981; color:#fff; border:none; padding:10px 20px; border-radius:12px; cursor:pointer; font-weight:700; font-size:13px; transition:0.3s; box-shadow:0 4px 15px rgba(16,185,129,0.3);">📋 Niat Shalat</button>
                    <button onclick="renderSubShalat('bacaan')" id="tab-bacaan" style="background:rgba(255,255,255,0.05); color:#94a3b8; border:1px solid rgba(255,255,255,0.1); padding:10px 20px; border-radius:12px; cursor:pointer; font-weight:700; font-size:13px; transition:0.3s; backdrop-filter:blur(5px);">🔲 Rukun & Bacaan</button>
                    <button onclick="renderSubShalat('wirid')" id="tab-wirid" style="background:rgba(255,255,255,0.05); color:#94a3b8; border:1px solid rgba(255,255,255,0.1); padding:10px 20px; border-radius:12px; cursor:pointer; font-weight:700; font-size:13px; transition:0.3s; backdrop-filter:blur(5px);">📿 Wirid & Doa</button>
                </div>
            </div>
        </div>
        <div id="shalat-content-area"></div>
    `;
    
    document.getElementById('render-target').innerHTML = htmlResult;
    renderSubShalat('niat'); 
}

function renderSubShalat(jenisTab) {
    const tabs = ['niat', 'bacaan', 'wirid'];
    const colors = { 'niat': '#10b981', 'bacaan': '#0ea5e9', 'wirid': '#a855f7' };
    
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        if(btn) {
            btn.style.background = jenisTab === t ? colors[t] : 'rgba(255,255,255,0.05)';
            btn.style.color = jenisTab === t ? '#fff' : '#94a3b8';
            btn.style.borderColor = jenisTab === t ? 'transparent' : 'rgba(255,255,255,0.1)';
            btn.style.boxShadow = jenisTab === t ? `0 4px 15px ${colors[t]}60` : 'none';
        }
    });

    const area = document.getElementById('shalat-content-area');

    if (jenisTab === 'niat') {
        area.innerHTML = `
            <div style="display:flex; gap:10px; margin-bottom:20px; flex-wrap:wrap;">
                <button onclick="filterNiat('wajib', this)" class="filter-niat-btn" style="background:rgba(16,185,129,0.2); color:#34d399; border:1px solid #10b981; padding:6px 14px; border-radius:20px; font-size:12px; font-weight:bold; cursor:pointer;">🟢 Wajib & Jumat</button>
                <button onclick="filterNiat('sunnah', this)" class="filter-niat-btn" style="background:rgba(255,255,255,0.05); color:#94a3b8; border:1px solid rgba(255,255,255,0.1); padding:6px 14px; border-radius:20px; font-size:12px; font-weight:bold; cursor:pointer;">🟡 Shalat Sunnah</button>
                <button onclick="filterNiat('jenazah', this)" class="filter-niat-btn" style="background:rgba(255,255,255,0.05); color:#94a3b8; border:1px solid rgba(255,255,255,0.1); padding:6px 14px; border-radius:20px; font-size:12px; font-weight:bold; cursor:pointer;">⚰️ Jenazah & Ghaib</button>
            </div>
            <div id="list-niat-container"></div>
        `;
        filterNiat('wajib', document.querySelector('.filter-niat-btn')); 
    } 
    else if (jenisTab === 'bacaan') {
        area.innerHTML = `
            <div style="display:flex; gap:10px; margin-bottom:20px; flex-wrap:wrap;">
                <button onclick="filterBacaan('wajib', this)" class="filter-bacaan-btn" style="background:rgba(14,165,233,0.2); color:#38bdf8; border:1px solid #0ea5e9; padding:6px 14px; border-radius:20px; font-size:12px; font-weight:bold; cursor:pointer;">🧎 Shalat Wajib</button>
                <button onclick="filterBacaan('jenazah', this)" class="filter-bacaan-btn" style="background:rgba(255,255,255,0.05); color:#94a3b8; border:1px solid rgba(255,255,255,0.1); padding:6px 14px; border-radius:20px; font-size:12px; font-weight:bold; cursor:pointer;">⚰️ Tata Cara Jenazah</button>
            </div>
            <div id="list-bacaan-container"></div>
        `;
        filterBacaan('wajib', document.querySelector('.filter-bacaan-btn'));
    }
    else if (jenisTab === 'wirid') {
        let html = '';
        dataDoaSesudahShalat.forEach(item => {
            html += `
            <div class="data-list-item" style="border-left: 4px solid #a855f7;">
                <h4 style="color:#c084fc; margin-bottom:10px; font-size:16px;">${item.nama}</h4>
                <div class="arabic-text">${item.arab}</div>
                <p class="latin-text" style="color:#d8b4fe;">${item.latin}</p>
                <p class="translation-text" style="border-left-color:#a855f7; background:rgba(168,85,247,0.05);"><b>Arti:</b> ${item.arti}</p>
            </div>`;
        });
        area.innerHTML = html;
    }
}

function filterNiat(kategori, btnElement) {
    document.querySelectorAll('.filter-niat-btn').forEach(b => {
        b.style.background = 'rgba(255,255,255,0.05)'; b.style.color = '#94a3b8'; b.style.borderColor = 'rgba(255,255,255,0.1)';
    });
    if(kategori === 'wajib') { btnElement.style.background = 'rgba(16,185,129,0.2)'; btnElement.style.color = '#34d399'; btnElement.style.borderColor = '#10b981'; }
    if(kategori === 'sunnah') { btnElement.style.background = 'rgba(245,158,11,0.2)'; btnElement.style.color = '#fbbf24'; btnElement.style.borderColor = '#f59e0b'; }
    if(kategori === 'jenazah') { btnElement.style.background = 'rgba(139,92,246,0.2)'; btnElement.style.color = '#a78bfa'; btnElement.style.borderColor = '#8b5cf6'; }

    let targetData = kategori === 'wajib' ? dataNiatWajib : (kategori === 'sunnah' ? dataNiatSunnah : dataNiatJenazah);
    let html = '';
    targetData.forEach(item => {
        html += `<div class="data-list-item" style="border-left: 4px solid ${kategori === 'wajib' ? '#10b981' : (kategori === 'sunnah' ? '#f59e0b' : '#8b5cf6')};"><h4 style="color:#f8fafc; margin-bottom:10px; font-size:16px;">${item.nama}</h4><div class="arabic-text">${item.arab}</div><p class="latin-text">${item.latin}</p><p class="translation-text"><b>Arti:</b> ${item.arti}</p></div>`;
    });
    document.getElementById('list-niat-container').innerHTML = html;
}

function filterBacaan(kategori, btnElement) {
    document.querySelectorAll('.filter-bacaan-btn').forEach(b => {
        b.style.background = 'rgba(255,255,255,0.05)'; b.style.color = '#94a3b8'; b.style.borderColor = 'rgba(255,255,255,0.1)';
    });
    if(kategori === 'wajib') { btnElement.style.background = 'rgba(14,165,233,0.2)'; btnElement.style.color = '#38bdf8'; btnElement.style.borderColor = '#0ea5e9'; }
    if(kategori === 'jenazah') { btnElement.style.background = 'rgba(139,92,246,0.2)'; btnElement.style.color = '#a78bfa'; btnElement.style.borderColor = '#8b5cf6'; }

    let targetData = kategori === 'wajib' ? dataBacaanWajib : dataBacaanJenazah;
    let html = '';
    targetData.forEach((item, index) => {
        html += `<div class="data-list-item"><span style="display:inline-block; background:rgba(255,255,255,0.1); color:#94a3b8; font-size:11px; font-weight:bold; padding:4px 10px; border-radius:12px; margin-bottom:10px;">Tahap ${index + 1}</span><h4 style="color:${kategori === 'wajib' ? '#0ea5e9' : '#8b5cf6'}; margin-bottom:10px; font-size:16px;">${item.nama}</h4><div class="arabic-text">${item.arab}</div><p class="latin-text">${item.latin}</p><p class="translation-text"><b>Arti:</b> ${item.arti}</p></div>`;
    });
    document.getElementById('list-bacaan-container').innerHTML = html;
}