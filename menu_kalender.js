// FUNGSI RENDER KALENDER HIJRIAH
function buka_kalender() {
    document.getElementById('render-target').innerHTML = `
        <div style="background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(10px); padding: 24px; border-radius: 16px; margin-bottom: 24px; border-left: 5px solid #0284c7; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <h3 style="color:#f8fafc; font-size:18px; margin-bottom:4px;">📅 Penanggalan Kalender Hijriah</h3>
            <p style="color:#94a3b8; font-size:13px;">Informasi siklus bulan Islam terkini (Dzulhijjah) beserta penanda amalan puasa sunnah.</p>
        </div>

        <div style="background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <div style="text-align:center; margin-bottom:24px;">
                <h3 style="font-size:24px; color:#f8fafc; font-weight:800; letter-spacing:1px;">Dzulhijjah 1447 H</h3>
                <p style="font-size:14px; color:#0ea5e9; font-weight:600; margin-top:4px;">Mei / Juni 2026</p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; text-align: center;">
                <!-- Header Hari -->
                <div style="font-size: 12px; font-weight: 800; color: #ef4444; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">Ahd</div>
                <div style="font-size: 12px; font-weight: 800; color: #94a3b8; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">Sen</div>
                <div style="font-size: 12px; font-weight: 800; color: #94a3b8; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">Sel</div>
                <div style="font-size: 12px; font-weight: 800; color: #94a3b8; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">Rab</div>
                <div style="font-size: 12px; font-weight: 800; color: #94a3b8; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">Kam</div>
                <div style="font-size: 12px; font-weight: 800; color: #94a3b8; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">Jum</div>
                <div style="font-size: 12px; font-weight: 800; color: #94a3b8; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">Sab</div>
                
                <!-- Tanggal Dummy Bulan Lalu -->
                <div style="opacity:0.2; padding: 12px 6px;"><span style="display:block; font-size:15px; font-weight:800; color:#f8fafc;">24</span><span style="font-size:11px; color:#10b981;">7</span></div>
                <div style="opacity:0.2; padding: 12px 6px;"><span style="display:block; font-size:15px; font-weight:800; color:#f8fafc;">25</span><span style="font-size:11px; color:#10b981;">8</span></div>
                <div style="opacity:0.2; padding: 12px 6px;"><span style="display:block; font-size:15px; font-weight:800; color:#f8fafc;">26</span><span style="font-size:11px; color:#10b981;">9</span></div>
                <div style="opacity:0.2; padding: 12px 6px;"><span style="display:block; font-size:15px; font-weight:800; color:#f8fafc;">27</span><span style="font-size:11px; color:#10b981;">10</span></div>
                <div style="opacity:0.2; padding: 12px 6px;"><span style="display:block; font-size:15px; font-weight:800; color:#f8fafc;">28</span><span style="font-size:11px; color:#10b981;">11</span></div>
                
                <!-- Tanggal Aktif -->
                <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: 10px; padding: 12px 6px; display: flex; flex-direction: column; justify-content: space-between;">
                    <span style="font-size:15px; font-weight:800; color:#10b981;">29</span>
                    <span style="font-size:11px; font-weight:600; color:#94a3b8;">12 Dzul</span>
                    <span style="font-size:9px; color:#ffffff; background:#10b981; padding:2px 4px; border-radius:4px; margin-top:6px; font-weight:700;">Tasyrik</span>
                </div>
                
                <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 12px 6px; display: flex; flex-direction: column; justify-content: space-between;">
                    <span style="font-size:15px; font-weight:800; color:#f8fafc;">30</span>
                    <span style="font-size:11px; font-weight:600; color:#10b981;">13 Dzul</span>
                    <span style="font-size:9px; color:#cbd5e1; background:rgba(255,255,255,0.1); padding:2px 4px; border-radius:4px; margin-top:6px; font-weight:700;">Tasyrik</span>
                </div>
                
                <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 12px 6px;">
                    <span style="font-size:15px; font-weight:800; color:#f8fafc; display:block;">31</span>
                    <span style="font-size:11px; font-weight:600; color:#10b981;">14 Dzul</span>
                </div>

                <div style="background: rgba(2, 132, 199, 0.15); border: 1px solid #0284c7; border-radius: 10px; padding: 12px 6px; display: flex; flex-direction: column; justify-content: space-between;">
                    <span style="font-size:15px; font-weight:800; color:#38bdf8;">1 Jun</span>
                    <span style="font-size:11px; font-weight:600; color:#94a3b8;">15 Dzul</span>
                    <span style="font-size:9px; color:#ffffff; background:#0284c7; padding:2px 4px; border-radius:4px; margin-top:6px; font-weight:700;">Ayyamul Bidh</span>
                </div>

                <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 12px 6px;">
                    <span style="font-size:15px; font-weight:800; color:#f8fafc; display:block;">2</span>
                    <span style="font-size:11px; font-weight:600; color:#10b981;">16 Dzul</span>
                </div>
                <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 12px 6px;">
                    <span style="font-size:15px; font-weight:800; color:#f8fafc; display:block;">3</span>
                    <span style="font-size:11px; font-weight:600; color:#10b981;">17 Dzul</span>
                </div>
                <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 12px 6px;">
                    <span style="font-size:15px; font-weight:800; color:#f8fafc; display:block;">4</span>
                    <span style="font-size:11px; font-weight:600; color:#10b981;">18 Dzul</span>
                </div>
            </div>
        </div>
    `;
}