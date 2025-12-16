import React from 'react'

function QuickPage() {
    return (
        <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col items-center justify-center p-4">
            {/* <!-- Background Pattern/Effect --> */}
            <div className="fixed inset-0 pointer-events-none opacity-20 dark:opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" data-alt="Subtle radial gradient background"></div>
            {/* <!-- Main Card/Modal Container --> */}
            <div className="relative w-full max-w-[520px] bg-white dark:bg-[#1c2e18] rounded-xl shadow-2xl border border-slate-200 dark:border-white/5 overflow-hidden">
                {/* <!-- Header --> */}
                <div className="px-8 pt-8 pb-2 flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Quick Start</h2>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                {/* <!-- Subject/Context --> */}
                <div className="px-8 pb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-[#a3b99d]">
                        <span className="material-symbols-outlined text-[18px]">history</span>
                        <span>Continuing: <span className="font-semibold text-slate-700 dark:text-white">Advanced Calculus II</span></span>
                        <button className="ml-auto text-xs font-medium text-primary hover:underline">Change</button>
                    </div>
                </div>
                {/* <!-- Main Timer Display --> */}
                <div className="px-8 py-2 flex justify-center">
                    <h1 className="text-[80px] font-bold leading-none tracking-tighter text-slate-900 dark:text-white select-none">
                        25<span className="text-slate-300 dark:text-white/20">:</span>00
                    </h1>
                </div>
                {/* <!-- Meta Text --> */}
                <div className="px-8 text-center pb-8">
                    <p className="text-slate-500 dark:text-[#a3b99d] text-sm font-medium">Estimated finish time: 4:25 PM</p>
                </div>
                {/* <!-- Slider Section --> */}
                <div className="px-8 pb-8">
                    <div className="@container">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center text-sm font-medium text-slate-500 dark:text-[#a3b99d]">
                                <span>5m</span>
                                <span className="text-slate-900 dark:text-white">Duration</span>
                                <span>120m</span>
                            </div>
                            {/* <!-- Custom Slider Track --> */}
                            <div className="relative flex h-8 w-full items-center group cursor-pointer">
                                {/* <!-- Background Track --> */}
                                <div className="absolute w-full h-2 rounded-full bg-slate-200 dark:bg-[#2c3928]"></div>
                                {/* <!-- Active Track (approx 25m out of 120m ~ 20%) --> */}
                                <div className="absolute h-2 rounded-full bg-primary w-[20%] shadow-[0_0_15px_rgba(70,236,19,0.4)]"></div>
                                {/* <!-- Thumb --> */}
                                <div className="absolute left-[20%] h-6 w-6 rounded-full bg-white border-4 border-primary shadow-lg transform -translate-x-1/2 transition-transform group-hover:scale-110"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Presets Chips --> */}
                <div className="px-8 pb-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-background-dark font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5">
                            <span className="material-symbols-outlined text-[18px]">timer</span>
                            <span className="text-sm">Pomodoro (25m)</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-[#2c3928] text-slate-600 dark:text-white/80 hover:bg-slate-200 dark:hover:bg-[#3a4b35] transition-colors border border-transparent dark:border-white/5">
                            <span className="material-symbols-outlined text-[18px]">hourglass_top</span>
                            <span className="text-sm font-medium">Hour Focus (60m)</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-[#2c3928] text-slate-600 dark:text-white/80 hover:bg-slate-200 dark:hover:bg-[#3a4b35] transition-colors border border-transparent dark:border-white/5">
                            <span className="material-symbols-outlined text-[18px]">sprint</span>
                            <span className="text-sm font-medium">Sprint (15m)</span>
                        </button>
                    </div>
                </div>
                {/* <!-- Primary Action Button --> */}
                <div className="px-8 pb-8 pt-2">
                    <button className="group relative w-full h-16 rounded-full bg-slate-900 dark:bg-white overflow-hidden flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300">
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                        <span className="material-symbols-outlined text-white dark:text-background-dark text-3xl group-hover:scale-110 transition-transform duration-300">play_arrow</span>
                        <span className="text-lg font-bold text-white dark:text-background-dark tracking-wide">START STUDYING</span>
                        {/* <!-- Keyboard Shortcut Hint --> */}
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 opacity-30 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-white dark:text-background-dark">Press Enter</span>
                            <span className="material-symbols-outlined text-[14px] text-white dark:text-background-dark">keyboard_return</span>
                        </div>
                    </button>
                </div>
            </div>
            {/* <!-- Background Decoration Image --> */}
            <div className="fixed bottom-0 right-0 w-1/3 h-1/3 opacity-5 pointer-events-none z-[-1]">
                <img alt="Abstract geometric dark shapes representing focus" className="w-full h-full object-cover mask-image-gradient" data-alt="Abstract geometric dark shapes representing focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZiyOna8MaGEshTiCD47fb6-vFily7epSIphZprvsoxsqgNdoJywxf7yzy2T35nNGVEAlmj-XyMKnTxN1NvkQPnm9v_AMTh6s5hC0naXBPQC05joKaEsn2buXMP41yc1quIeAFIkKmDAzY0Wlsuu4Zzs7iA8mgWs_NL0pJJAqDy_72zXV2RrT-a8yLc_4oU6Uy6Fn8QamTeJTUqGnAClz3yc-EfRW6a26Cvz-5AHjjRAOeaZzWfZTXqV0zmoi5g0hmQuJEITm_pKE" style={{WebkitMaskImage: "radial-gradient(circle at bottom right, black 40%, transparent 100%)", maskImage: "radial-gradient(circle at bottom right, black 40%, transparent 100%)"}} />
            </div>
        </body>
    )
}

export default QuickPage
