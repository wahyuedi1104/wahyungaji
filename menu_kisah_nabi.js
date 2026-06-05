// DATASET 25 NABI & RASUL LENGKAP
const databaseNabi = [
    { urut: "1", nama: "Nabi Adam AS", sejarah: "Manusia pertama yang diciptakan Allah SWT dari tanah. Ia bertempat tinggal di surga bersama Hawa sebelum akhirnya diturunkan ke bumi.", mukjizat: "Diberikan kecerdasan luar biasa untuk mengetahui seluruh nama benda di alam semesta.", teladan: "Segera bertaubat dengan tulus dan mengakui kesalahan ketika khilaf." },
    { urut: "2", nama: "Nabi Idris AS", sejarah: "Keturunan keenam Nabi Adam yang terkenal sangat saleh dan rajin beribadah. Beliau gigih berdakwah mengajak kaum keturunan Qabil agar kembali menyembah Allah SWT.", mukjizat: "Nabi pertama yang dianugerahi kemampuan menulis dengan pena, menjahit, dan ilmu perbintangan.", teladan: "Sangat rajin belajar, mencintai ilmu pengetahuan, dan berani menegakkan kebenaran." },
    { urut: "3", nama: "Nabi Nuh AS", sejarah: "Beribadah berdakwah selama ratusan tahun namun hanya sedikit sekali kaumnya yang mau beriman.", mukjizat: "Mampu membuat bahtera (kapal besar) yang sangat kokoh untuk menyelamatkan kaum beriman dari azab banjir air bah.", teladan: "Memiliki tingkat kesabaran dan ketabahan yang luar biasa dalam berdakwah." },
    { urut: "4", nama: "Nabi Hud AS", sejarah: "Diutus untuk menyeru Kaum 'Ad, suku yang berbadan besar, kuat, namun sangat sombong.", mukjizat: "Mendatangkan badai angin topan yang dahsyat atas izin Allah.", teladan: "Tetap bersikap santun dan lemah lembut meskipun terus-menerus dicaci maki." },
    { urut: "5", nama: "Nabi Saleh AS", sejarah: "Diutus kepada Kaum Tsamud yang pandai memahat gunung batu menjadi istana megah.", mukjizat: "Memunculkan seekor unta betina yang gemuk dari belahan batu besar.", teladan: "Berani memimpin umat, mengutamakan kedamaian, dan selalu menjaga keadilan." },
    { urut: "6", nama: "Nabi Ibrahim AS", sejarah: "Bapak para Nabi (Abul Anbiya) yang hidup di masa Raja Namrud yang kejam.", mukjizat: "Tubuhnya tidak hangus terbakar di dalam kobaran api unggun raksasa Raja Namrud.", teladan: "Keteguhan tauhid yang tidak tergoyahkan dan sangat patuh pada perintah Allah." },
    { urut: "7", nama: "Nabi Luth AS", sejarah: "Keponakan Nabi Ibrahim yang diutus berdakwah di Kota Sodom, masyarakat yang melakukan kemaksiatan menyimpang.", mukjizat: "Selamat dari bencana hujan batu belerang dan gempa bumi dahsyat.", teladan: "Gigih mempertahankan moralitas umat dari kerusakan zaman." },
    { urut: "8", nama: "Nabi Ismail AS", sejarah: "Putra sulung Nabi Ibrahim dan Siti Hajar yang ditinggal di lembah gersang Makkah sejak bayi.", mukjizat: "Memunculkan mata air Zamzam melalui entakan kakinya saat bayi.", teladan: "Sangat patuh kepada orang tua dan ikhlas menerima ketetapan Allah." },
    { urut: "9", nama: "Nabi Ishaq AS", sejarah: "Putra kedua Nabi Ibrahim dari Siti Sarah. Lahir ketika ibunya sudah berusia lanjut.", mukjizat: "Diberkahi keturunan yang mayoritas menjadi nabi-nabi mulia bani Israil.", teladan: "Sangat menyayangi keluarga dan ramah terhadap sesama manusia." },
    { urut: "10", nama: "Nabi Yaqub AS", sejarah: "Putra Nabi Ishaq yang juga merupakan ayah dari Nabi Yusuf.", mukjizat: "Penglihatan matanya kembali pulih setelah mengusapkan jubah Nabi Yusuf ke wajahnya.", teladan: "Sabar menghadapi karakter anak yang beragam dan tidak pernah berputus asa." },
    { urut: "11", nama: "Nabi Yusuf AS", sejarah: "Putra kesayangan Nabi Yaqub yang dibuang ke sumur, lalu dijual menjadi budak, hingga menjadi menteri di Mesir.", mukjizat: "Diberikan paras wajah tertampan serta dianugerahi kemampuan menafsirkan mimpi.", teladan: "Mampu memaafkan dengan tulus dan menjaga kehormatan diri dari maksiat." },
    { urut: "12", nama: "Nabi Ayyub AS", sejarah: "Nabi yang diuji Allah dengan kehilangan harta, kematian anak-anaknya, serta penyakit kulit parah.", mukjizat: "Memunculkan air segar penawar segala penyakit dari tanah dengan hentakan kaki.", teladan: "Menjadi simbol puncak kesabaran manusia tanpa pernah mengeluh." },
    { urut: "13", nama: "Nabi Syu'aib AS", sejarah: "Diutus kepada Kaum Madyan yang memiliki kebiasaan curang dalam berdagang.", mukjizat: "Selamat dari petir dan awan panas yang membinasakan penduduk Madyan.", teladan: "Selalu jujur dalam bertransaksi ekonomi dan pandai berkomunikasi." },
    { urut: "14", nama: "Nabi Musa AS", sejarah: "Lahir di masa Firaun yang kejam. Memimpin Bani Israil keluar dari perbudakan Mesir.", mukjizat: "Tongkatnya berubah menjadi ular besar dan mampu membelah Laut Merah.", teladan: "Berani melawan kezaliman penguasa demi keadilan umat." },
    { urut: "15", nama: "Nabi Harun AS", sejarah: "Kakak kandung Nabi Musa yang setia menemani perjuangan dakwah Musa menghadapi Firaun.", mukjizat: "Anugerah kemampuan berbicara dan berdiplomasi yang sangat fasih.", teladan: "Menjadi mitra kerja yang setia dan penuh kasih sayang dalam mendamaikan umat." },
    { urut: "16", nama: "Nabi Dzulkifli AS", sejarah: "Nabi yang diangkat menjadi raja karena mampu selalu berpuasa di siang hari dan beribadah di malam hari.", mukjizat: "Memimpin kerajaan dengan sangat adil tanpa pernah merasa lelah atau amarah.", teladan: "Teguh memegang janji dan disiplin membagi waktu." },
    { urut: "17", nama: "Nabi Daud AS", sejarah: "Nabi sekaligus raja Israil yang mengalahkan raksasa Jalut. Terkenal dengan ibadah puasanya.", mukjizat: "Memiliki suara paling merdu di dunia dan melunakkan besi dengan tangan.", teladan: "Meski kaya raya, tetap hidup mandiri dari hasil keringat sendiri." },
    { urut: "18", nama: "Nabi Sulaiman AS", sejarah: "Putra Nabi Daud. Menjadi manusia terkaya dan paling berkuasa di muka bumi.", mukjizat: "Memahami bahasa hewan dan sanggup memerintah bangsa jin dan angin.", teladan: "Kekayaan tidak membuatnya sombong, melainkan semakin bersyukur." },
    { urut: "19", nama: "Nabi Ilyas AS", sejarah: "Diutus kepada Kaum Baalbak yang menyembah berhala bernama Ba'al.", mukjizat: "Mampu menghentikan hujan sehingga terjadi kemarau panjang untuk menyadarkan kaumnya.", teladan: "Konsisten mengajak kebaikan meskipun diancam diusir." },
    { urut: "20", nama: "Nabi Ilyasa AS", sejarah: "Sahabat sekaligus penerus perjuangan dakwah Nabi Ilyas.", mukjizat: "Menyembuhkan berbagai penyakit kronis dan menghidupkan orang mati atas izin Allah.", teladan: "Pemimpin yang akomodatif dan setia pada guru." },
    { urut: "21", nama: "Nabi Yunus AS", sejarah: "Meninggalkan kaumnya yang membangkang, naik kapal, lalu terlempar ke laut.", mukjizat: "Bertahan hidup dengan selamat di dalam perut ikan paus raksasa di dasar lautan.", teladan: "Selalu berdzikir memohon ampun ketika menyadari kekhilafan." },
    { urut: "22", nama: "Nabi Zakaria AS", sejarah: "Nabi yang bertugas merawat Baitul Maqdis dan mengasuh Maryam.", mukjizat: "Dianugerahi putra bernama Yahya di usia yang sangat senja.", teladan: "Sangat konsisten dan tidak pernah lelah berdoa menanti rahmat Allah." },
    { urut: "23", nama: "Nabi Yahya AS", sejarah: "Putra Nabi Zakaria yang cerdas sejak kecil.", mukjizat: "Kemampuan menghafal Al-Kitab sejak dini dan keberanian mempertahankan syariat.", teladan: "Hidup sederhana, penyayang binatang, dan hormat pada orang tua." },
    { urut: "24", nama: "Nabi Isa AS", sejarah: "Lahir tanpa ayah dari rahim Maryam. Membawa ajaran Injil.", mukjizat: "Dapat berbicara saat bayi, menyembuhkan orang buta, dan menghidupkan burung dari tanah liat.", teladan: "Sangat menyayangi orang miskin dan lemah lembut." },
    { urut: "25", nama: "Nabi Muhammad SAW", sejarah: "Nabi dan Rasul terakhir yang diutus untuk seluruh alam semesta. Membawa risalah Islam.", mukjizat: "Al-Qur'anul Karim, peristiwa Isra Mi'raj, serta membelah bulan.", teladan: "Memiliki akhlak paling sempurna, jujur, dan pemaaf bagi yang memusuhinya." }
];

function buka_kisah_nabi() {
    let htmlResult = `
        <div style="background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(10px); padding: 24px; border-radius: 16px; margin-bottom: 24px; border-left: 5px solid #10b981;">
            <h3 style="color:#f8fafc; font-size:18px; margin-bottom:4px;">🐪 Sejarah 25 Nabi & Rasul</h3>
            <p style="color:#94a3b8; font-size:13px; margin-bottom:15px;">Pelajari kisah perjuangan, mukjizat agung, serta hikmah kehidupan dari para utusan Allah SWT.</p>
            <input type="text" id="cari-nabi" class="form-input" placeholder="🔍 Ketik nama Nabi untuk mencari (Contoh: Musa, Yusuf)..." onkeyup="filterNabi()" style="margin-bottom:0;">
        </div>
        <div id="list-nabi-container"></div>
    `;
    
    document.getElementById('render-target').innerHTML = htmlResult;
    renderListNabi(databaseNabi); // Tampilkan semua saat pertama buka
}

function renderListNabi(dataArray) {
    const container = document.getElementById('list-nabi-container');
    if(dataArray.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8;">Nabi tidak ditemukan. Cek ejaan Anda.</div>`;
        return;
    }
    
    let html = '';
    dataArray.forEach(n => {
        html += `
        <div class="data-list-item" style="border-top: 1px solid rgba(16, 185, 129, 0.2);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                <h3 style="color:#10b981; margin:0;">✨ ${n.nama}</h3>
                <span style="background:rgba(255,255,255,0.05); color:#94a3b8; font-size:11px; padding:4px 10px; border-radius:8px;">Nabi ke-${n.urut}</span>
            </div>
            <div style="font-size:12px; color:#10b981; font-weight:800; text-transform:uppercase; margin-bottom:4px; letter-spacing:1px;">📖 Sejarah</div>
            <p style="color:#cbd5e1; font-size:14px; margin-bottom:15px; line-height:1.6;">${n.sejarah}</p>
            
            <div style="font-size:12px; color:#0ea5e9; font-weight:800; text-transform:uppercase; margin-bottom:4px; letter-spacing:1px;">⚡ Mukjizat</div>
            <p style="color:#cbd5e1; font-size:14px; margin-bottom:15px;">${n.mukjizat}</p>
            
            <div class="translation-text" style="border-color:#f59e0b; background:rgba(245,158,11,0.05);">
                <span style="color:#f59e0b; font-weight:800;">🌟 Keteladanan:</span> ${n.teladan}
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

function filterNabi() {
    const keyword = document.getElementById('cari-nabi').value.toLowerCase();
    const hasil = databaseNabi.filter(n => n.nama.toLowerCase().includes(keyword));
    renderListNabi(hasil);
}