window.buka_kalender = function() {
    const target = document.getElementById('render-target');
    
    let htmlContent = `
        <style>
            /* KOTAK KALENDER UTAMA */
            .cal-wrapper { background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(10px); border-radius: 20px; border: 1px solid rgba(255,255,255,0.05); padding: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .cal-header { text-align: center; margin-bottom: 25px; }
            .cal-header h3 { font-size: 26px; color: #f8fafc; font-weight: 800; margin-bottom: 5px; }
            .cal-header p { color: #38bdf8; font-size: 15px; font-weight: 600; }
            
            /* GRID NAMA HARI */
            .cal-days { display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; margin-bottom: 15px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; }
            .cal-days div { font-size: 13px; font-weight: 800; color: #94a3b8; text-transform: uppercase; }
            .cal-days .sunday { color: #ef4444; } /* Warna merah khusus hari minggu */
            
            /* GRID TANGGAL (RAHASIA BIAR LURUS TERUS) */
            .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; }
            
            /* KOTAK PER TANGGAL */
            .cal-cell { 
                background: rgba(30, 41, 59, 0.4); border: 1px solid rgba(255,255,255,0.05); border-radius: 14px; 
                padding: 12px 4px; text-align: center; position: relative; min-height: 100px; 
                display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
                transition: 0.3s;
            }
            .cal-cell:hover { background: rgba(51, 65, 85, 0.8); transform: translateY(-3px); }
            .cal-cell.disabled { opacity: 0.25; pointer-events: none; }
            
            /* VARIAN WARNA KOTAK */
            .cal-cell.today { border: 2px solid #38bdf8; background: rgba(56, 189, 248, 0.1); box-shadow: 0 0 15px rgba(56, 189, 248, 0.15); }
            .cal-cell.puasa { border: 1px solid #10b981; background: rgba(16, 185, 129, 0.1); }
            .cal-cell.tasyrik { border: 1px solid #475569; background: rgba(15, 23, 42, 0.5); }
            
            /* TEKS DI DALAM KOTAK */
            .masehi { font-size: 20px; font-weight: 800; color: #f8fafc; line-height: 1; margin-bottom: 4px; }
            .masehi-bln { font-size: 11px; color: #38bdf8; font-weight: 800; margin-bottom: 4px; text-transform: uppercase; }
            .hijri { font-size: 11px; color: #10b981; font-weight: 600; margin-bottom: auto; }
            
            /* LABEL/BADGE KETERANGAN */
            .badge-cal { font-size: 10px; padding: 4px 0; border-radius: 6px; font-weight: bold; width: 95%; text-align: center; margin-top: 8px; line-height: 1.1; }
            .bg-puasa { background: #10b981; color: #fff; }
            .bg-tasyrik { background: #475569; color: #e2e8f0; }
            .bg-today { background: #38bdf8; color: #0f172a; }

            /* RESPONSIF KHUSUS HP BIAR NGGAK MENTOK */
            @media(max-width: 768px) {
                .cal-wrapper { padding: 15px; border-radius: 16px; }
                .cal-days { gap: 4px; }
                .cal-days div { font-size: 11px; }
                .cal-grid { gap: 4px; }
                .cal-cell { padding: 8px 2px; min-height: 85px; border-radius: 10px; }
                .masehi { font-size: 16px; }
                .hijri { font-size: 9px; }
                .badge-cal { font-size: 8px; padding: 3px 0; margin-top: 5px; }
                .masehi-bln { font-size: 9px; }
            }
        </style>
        
        <div style="margin-bottom: 25px;">
            <div style="background: rgba(15, 23, 42, 0.8); border-left: 4px solid #38bdf8; border-radius: 16px; padding: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                <h2 style="color: #f8fafc; font-weight: 800; font-size: 20px; margin-bottom: 8px;">📅 Penanggalan Kalender Hijriah</h2>
                <p style="color: #94a3b8; font-size: 14px; line-height: 1.6;">Informasi siklus bulan Islam terkini (Dzulhijjah) beserta penanda amalan puasa sunnah.</p>
            </div>
        </div>

        <div class="cal-wrapper">
            <div class="cal-header">
                <h3>Dzulhijjah 1447 H</h3>
                <p>Mei / Juni 2026</p>
            </div>

            <!-- NAMA HARI LURUS -->
            <div class="cal-days">
                <div class="sunday">Ahd</div>
                <div>Sen</div>
                <div>Sel</div>
                <div>Rab</div>
                <div>Kam</div>
                <div>Jum</div>
                <div>Sab</div>
            </div>

            <!-- TANGGAL-TANGGAL -->
            <div class="cal-grid">
                
                <!-- Baris 1: Tanggal Lewat (Disabled) -->
                <div class="cal-cell disabled"><div class="masehi">24</div><div class="hijri">7 Dzul</div></div>
                <div class="cal-cell disabled"><div class="masehi">25</div><div class="hijri">8 Dzul</div></div>
                <div class="cal-cell disabled"><div class="masehi">26</div><div class="hijri">9 Dzul</div></div>
                <div class="cal-cell disabled"><div class="masehi">27</div><div class="hijri">10 Dzul</div></div>
                <div class="cal-cell disabled"><div class="masehi">28</div><div class="hijri">11 Dzul</div></div>
                
                <div class="cal-cell tasyrik">
                    <div class="masehi">29</div>
                    <div class="hijri">12 Dzul</div>
                    <div class="badge-cal bg-tasyrik">Tasyrik</div>
                </div>
                
                <div class="cal-cell tasyrik">
                    <div class="masehi">30</div>
                    <div class="hijri">13 Dzul</div>
                    <div class="badge-cal bg-tasyrik">Tasyrik</div>
                </div>

                <!-- Baris 2 -->
                <div class="cal-cell">
                    <div class="masehi">31</div>
                    <div class="hijri">14 Dzul</div>
                </div>
                
                <div class="cal-cell today">
                    <div class="masehi">1</div>
                    <div class="masehi-bln">Jun</div>
                    <div class="hijri">15 Dzul</div>
                    <div class="badge-cal bg-today">Ayyamul Bidh</div>
                </div>
                
                <div class="cal-cell">
                    <div class="masehi">2</div>
                    <div class="hijri">16 Dzul</div>
                </div>
                
                <div class="cal-cell">
                    <div class="masehi">3</div>
                    <div class="hijri">17 Dzul</div>
                </div>
                
                <div class="cal-cell puasa">
                    <div class="masehi">4</div>
                    <div class="hijri">18 Dzul</div>
                    <div class="badge-cal bg-puasa">Puasa Sunnah</div>
                </div>
                
                <div class="cal-cell">
                    <div class="masehi">5</div>
                    <div class="hijri">19 Dzul</div>
                </div>
                
                <div class="cal-cell">
                    <div class="masehi">6</div>
                    <div class="hijri">20 Dzul</div>
                </div>
                
            </div>
        </div>
    `;
    
    target.innerHTML = htmlContent;
};
