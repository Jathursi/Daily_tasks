import React from 'react'

function AnalyticsPage() {
    return (
        <div>
            {/* <div className="w-full flex justify-center sticky top-0 z-50 pt-5 px-4 mb-8">
                <header className="flex items-center justify-between whitespace-nowrap border border-surface-border bg-surface-dark/90 backdrop-blur-md px-6 py-3 rounded-full w-full max-w-[1200px] shadow-lg">
                    <div className="flex items-center gap-3 text-white">
                        <div className="size-6 text-primary">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_6_319)">
                                    <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">StudyTime</h2>
                    </div>
                    <div className="hidden md:flex flex-1 justify-center gap-8 items-center">
                        <nav className="flex items-center bg-background-dark/50 rounded-full px-2 py-1 border border-surface-border">
                            <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium" href="#">Dashboard</a>
                            <a className="px-4 py-1.5 rounded-full bg-surface-border text-white text-sm font-bold shadow-sm" href="#">Analytics</a>
                            <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium" href="#">Goals</a>
                            <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium" href="#">Settings</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-surface-border transition-colors">
                            <span className="material-symbols-outlined text-[20px]">notifications</span>
                        </button>
                        <div className="h-6 w-px bg-surface-border mx-1"></div>
                        <button className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-full border border-surface-border bg-gray-600 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyx9K-7NH3UkWNf1BwA5K2I8nvnhA3pzxhDhYTFqGGkMFGoKluL9ByRJx2qV3zLiA0GcgNZ5REPCP-L3eR9lfMXK2EVL2SLAysxJOUDRLjjb_XdyX1oujdNFZJ_6B0BoPkmIeOUapfVQcP1-5ehB9beVa_ma7dnKSU4iiqCRlSAEzwOB0vhllSbyEoFspYJVIE0SSRQImmB0r0Rc2UaKmg5TDdD9x-Z75O1c91nsbI1zMr3fOHct4o3TjZQlMkerswBejFRbShb9g')"}}></div>
                            <span className="text-sm font-medium text-white hidden sm:block group-hover:text-primary transition-colors">Alex M.</span>
                            <span className="material-symbols-outlined text-gray-400 text-sm hidden sm:block">expand_more</span>
                        </button>
                    </div>
                </header>
            </div> */}
            <main className="w-full max-w-[1200px] mx-auto px-4 pb-12 flex-grow">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-1">Analytics Dashboard</h1>
                        <p className="text-gray-400 text-sm">Deep dive into your study habits and performance metrics.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <select className="px-4 py-2 rounded-xl border border-surface-border bg-surface-dark text-white text-sm font-bold focus:ring-primary focus:border-primary cursor-pointer">
                            <option>Last 30 Days</option>
                            <option>Last 7 Days</option>
                            <option>This Month</option>
                            <option>This Year</option>
                        </select>
                        <select className="px-4 py-2 rounded-xl border border-surface-border bg-surface-dark text-white text-sm font-bold focus:ring-primary focus:border-primary cursor-pointer">
                            <option>All Subjects</option>
                            <option>Physics</option>
                            <option>Mathematics</option>
                            <option>Computer Science</option>
                            <option>Literature</option>
                        </select>
                        <button className="px-4 py-2 rounded-xl bg-primary hover:bg-[#3bdb0f] text-[#131811] text-sm font-bold transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(70,236,19,0.2)]">
                            <span className="material-symbols-outlined text-base">download</span>
                            Export Report
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-surface-dark border border-surface-border rounded-2xl p-5 flex items-start justify-between group hover:border-surface-border/80 transition-all">
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Total Study Time</p>
                            <h3 className="text-2xl font-bold text-white">86h 40m</h3>
                            <div className="flex items-center gap-1 mt-2 text-primary text-xs font-medium bg-primary/10 w-fit px-2 py-0.5 rounded-md">
                                <span className="material-symbols-outlined text-xs">trending_up</span>
                                <span>+12% vs last mo.</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">schedule</span>
                        </div>
                    </div>
                    <div className="bg-surface-dark border border-surface-border rounded-2xl p-5 flex items-start justify-between group hover:border-surface-border/80 transition-all">
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Avg. Daily Focus</p>
                            <h3 className="text-2xl font-bold text-white">4h 12m</h3>
                            <div className="flex items-center gap-1 mt-2 text-gray-400 text-xs font-medium">
                                <span>Target: 4h 00m</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">avg_time</span>
                        </div>
                    </div>
                    <div className="bg-surface-dark border border-surface-border rounded-2xl p-5 flex items-start justify-between group hover:border-surface-border/80 transition-all">
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Most Productive</p>
                            <h3 className="text-2xl font-bold text-white">Tuesday</h3>
                            <p className="text-gray-500 text-xs mt-2">Best streak: 12 days</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">bolt</span>
                        </div>
                    </div>
                    <div className="bg-surface-dark border border-surface-border rounded-2xl p-5 flex items-start justify-between group hover:border-surface-border/80 transition-all">
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Efficiency Score</p>
                            <h3 className="text-2xl font-bold text-white">92/100</h3>
                            <div className="flex items-center gap-1 mt-2 text-primary text-xs font-medium">
                                <span>Top 5% of users</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">psychology_alt</span>
                        </div>
                    </div>
                </div>
                <div className="bg-surface-dark border border-surface-border rounded-[2rem] p-8 mb-8 relative overflow-hidden shadow-sm">
                    <div className="flex items-center justify-between mb-8 relative z-10">
                        <div>
                            <h3 className="text-white font-bold text-lg">Study Performance Trend</h3>
                            <p className="text-gray-500 text-xs">Comparison of study hours over the selected period.</p>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-medium">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-primary"></span>
                                <span className="text-gray-300">This Period</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-surface-border border border-gray-600"></span>
                                <span className="text-gray-500">Previous Period</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-72 relative z-10">
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 300">
                            <line stroke="#2c3928" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="250" y2="250"></line>
                            <line stroke="#2c3928" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="175" y2="175"></line>
                            <line stroke="#2c3928" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="100" y2="100"></line>
                            <line stroke="#2c3928" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="25" y2="25"></line>
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#46ec13" stopOpacity="0.2"></stop>
                                <stop offset="100%" stopColor="#46ec13" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <path d="M0,200 C100,180 150,120 250,140 S350,80 450,60 S550,100 650,80 S750,40 850,50 S950,10 1000,30 V300 H0 Z" fill="url(#chartGradient)"></path>
                            <path d="M0,200 C100,180 150,120 250,140 S350,80 450,60 S550,100 650,80 S750,40 850,50 S950,10 1000,30" fill="none" stroke="#46ec13" strokeLinecap="round" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
                            <path d="M0,220 C100,210 150,160 250,180 S350,140 450,150 S550,120 650,130 S750,100 850,110 S950,80 1000,90" fill="none" stroke="#525252" strokeDasharray="5 5" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                            <circle cx="450" cy="60" fill="#131811" r="6" stroke="#46ec13" strokeWidth="3"></circle>
                            <circle cx="850" cy="50" fill="#131811" r="6" stroke="#46ec13" strokeWidth="3"></circle>
                            </svg>
                    </div>
                    <div className="flex justify-between mt-4 text-xs font-medium text-gray-500 uppercase tracking-widest px-2">
                        <span>Week 1</span>
                        <span>Week 2</span>
                        <span>Week 3</span>
                        <span>Week 4</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-surface-dark border border-surface-border rounded-2xl p-6 flex flex-col">
                        <h3 className="text-white font-bold text-lg mb-6">Subject Breakdown</h3>
                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center gap-8 flex-1">
                            <div className="relative w-48 h-48 shrink-0">
                                <div className="w-full h-full rounded-full" style={{background: "conic-gradient(#46ec13 0% 35%, #3b82f6 35% 60%, #a855f7 60% 80%, #f97316 80% 100%)"}}></div>
                                <div className="absolute inset-0 m-auto w-32 h-32 bg-surface-dark rounded-full flex items-center justify-center flex-col">
                                    <span className="text-3xl font-bold text-white font-display">4</span>
                                    <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Subjects</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <div className="flex items-center justify-between text-sm group cursor-default">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-primary group-hover:scale-125 transition-transform"></span>
                                        <span className="text-gray-300">Physics</span>
                                    </div>
                                    <span className="font-bold text-white">35%</span>
                                </div>
                                <div className="flex items-center justify-between text-sm group cursor-default">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
                                        <span className="text-gray-300">Math</span>
                                    </div>
                                    <span className="font-bold text-white">25%</span>
                                </div>
                                <div className="flex items-center justify-between text-sm group cursor-default">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-purple-500 group-hover:scale-125 transition-transform"></span>
                                        <span className="text-gray-300">CS</span>
                                    </div>
                                    <span className="font-bold text-white">20%</span>
                                </div>
                                <div className="flex items-center justify-between text-sm group cursor-default">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-orange-500 group-hover:scale-125 transition-transform"></span>
                                        <span className="text-gray-300">English</span>
                                    </div>
                                    <span className="font-bold text-white">20%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-dark border border-surface-border rounded-2xl p-6 lg:col-span-2 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-white font-bold text-lg">Focus by Hour</h3>
                            <div className="flex gap-2">
                                <button className="p-1 rounded bg-surface-border text-white hover:bg-gray-600 transition-colors">
                                    <span className="material-symbols-outlined text-sm">bar_chart</span>
                                </button>
                                <button className="p-1 rounded text-gray-500 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-sm">show_chart</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 w-full flex items-end justify-between gap-2 sm:gap-4 px-2 h-48 sm:h-auto">
                            <div className="flex flex-col items-center gap-2 flex-1 group h-full justify-end">
                                <div className="w-full bg-surface-border/50 rounded-sm relative flex items-end overflow-hidden group-hover:bg-gray-700 transition-colors h-[15%]"></div>
                                <span className="text-gray-500 text-[10px] sm:text-xs font-medium">6am</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 flex-1 group h-full justify-end">
                                <div className="w-full bg-surface-border/50 rounded-sm relative flex items-end overflow-hidden group-hover:bg-gray-700 transition-colors h-[30%]"></div>
                                <span className="text-gray-500 text-[10px] sm:text-xs font-medium">8am</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 flex-1 group h-full justify-end">
                                <div className="w-full bg-primary/40 rounded-sm relative flex items-end overflow-hidden group-hover:bg-primary/60 transition-colors h-[55%]"></div>
                                <span className="text-gray-500 text-[10px] sm:text-xs font-medium">10am</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 flex-1 group h-full justify-end">
                                <div className="w-full bg-primary/60 rounded-sm relative flex items-end overflow-hidden group-hover:bg-primary/80 transition-colors h-[75%]"></div>
                                <span className="text-gray-500 text-[10px] sm:text-xs font-medium">12pm</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 flex-1 group h-full justify-end">
                                <div className="w-full bg-primary rounded-sm relative flex items-end overflow-hidden hover:bg-[#3bdb0f] transition-colors h-[90%] shadow-[0_0_10px_rgba(70,236,19,0.3)]"></div>
                                <span className="text-gray-500 text-[10px] sm:text-xs font-medium text-primary">2pm</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 flex-1 group h-full justify-end">
                                <div className="w-full bg-primary/80 rounded-sm relative flex items-end overflow-hidden group-hover:bg-primary transition-colors h-[65%]"></div>
                                <span className="text-gray-500 text-[10px] sm:text-xs font-medium">4pm</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 flex-1 group h-full justify-end">
                                <div className="w-full bg-primary/30 rounded-sm relative flex items-end overflow-hidden group-hover:bg-primary/50 transition-colors h-[40%]"></div>
                                <span className="text-gray-500 text-[10px] sm:text-xs font-medium">6pm</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 flex-1 group h-full justify-end">
                                <div className="w-full bg-surface-border/50 rounded-sm relative flex items-end overflow-hidden group-hover:bg-gray-700 transition-colors h-[20%]"></div>
                                <span className="text-gray-500 text-[10px] sm:text-xs font-medium">8pm</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 flex-1 group h-full justify-end">
                                <div className="w-full bg-surface-border/50 rounded-sm relative flex items-end overflow-hidden group-hover:bg-gray-700 transition-colors h-[10%]"></div>
                                <span className="text-gray-500 text-[10px] sm:text-xs font-medium">10pm</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-surface-dark border border-surface-border rounded-2xl p-6 lg:col-span-1">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-white font-bold text-lg">Goal Achievements</h3>
                            <button className="text-primary text-xs font-bold hover:underline">See All</button>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-200 font-medium">Weekly Study Hours</span>
                                    <span className="text-primary font-bold">32/40h</span>
                                </div>
                                <div className="w-full bg-background-dark h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full rounded-full" style={{width: "80%"}}></div>
                                </div>
                                <p className="text-gray-500 text-xs mt-1">On track to beat last week</p>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-200 font-medium">Complete Physics Module</span>
                                    <span className="text-blue-400 font-bold">65%</span>
                                </div>
                                <div className="w-full bg-background-dark h-2 rounded-full overflow-hidden">
                                    <div className="bg-blue-400 h-full rounded-full" style={{width: "65%"}}></div>
                                </div>
                                <p className="text-gray-500 text-xs mt-1">Deadline: Friday</p>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-200 font-medium">Daily Streak</span>
                                    <span className="text-orange-500 font-bold">12 Days</span>
                                </div>
                                <div className="w-full bg-background-dark h-2 rounded-full overflow-hidden">
                                    <div className="bg-orange-500 h-full rounded-full" style={{width: "100%"}}></div>
                                </div>
                                <p className="text-gray-500 text-xs mt-1">Personal Best: 24 Days</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-dark border border-surface-border rounded-2xl p-6 lg:col-span-2">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-white font-bold text-lg">Detailed Session Log</h3>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <span className="material-symbols-outlined">filter_list</span>
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-gray-500 text-xs border-b border-surface-border">
                                        <th className="py-3 pr-4 font-bold uppercase tracking-wider">Date &amp; Time</th>
                                        <th className="py-3 px-4 font-bold uppercase tracking-wider">Subject</th>
                                        <th className="py-3 px-4 font-bold uppercase tracking-wider">Duration</th>
                                        <th className="py-3 px-4 font-bold uppercase tracking-wider">Efficiency</th>
                                        <th className="py-3 pl-4 font-bold uppercase tracking-wider text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-gray-300">
                                    <tr className="border-b border-surface-border/50 group hover:bg-background-dark/50 transition-colors">
                                        <td className="py-4 pr-4">Today, 10:30 AM</td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                                <span>Physics</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 font-medium">1h 45m</td>
                                        <td className="py-4 px-4"><span className="text-green-400 font-bold">95%</span></td>
                                        <td className="py-4 pl-4 text-right"><span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider">Completed</span></td>
                                    </tr>
                                    <tr className="border-b border-surface-border/50 group hover:bg-background-dark/50 transition-colors">
                                        <td className="py-4 pr-4">Yesterday, 02:15 PM</td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                                <span>Mathematics</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 font-medium">2h 10m</td>
                                        <td className="py-4 px-4"><span className="text-yellow-400 font-bold">82%</span></td>
                                        <td className="py-4 pl-4 text-right"><span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider">Completed</span></td>
                                    </tr>
                                    <tr className="border-b border-surface-border/50 group hover:bg-background-dark/50 transition-colors">
                                        <td className="py-4 pr-4">May 15, 09:00 AM</td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                                <span>Computer Sci.</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 font-medium">45m</td>
                                        <td className="py-4 px-4"><span className="text-gray-500 font-bold">--</span></td>
                                        <td className="py-4 pl-4 text-right"><span className="bg-red-500/10 text-red-500 px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider">Interrupted</span></td>
                                    </tr>
                                    <tr className="group hover:bg-background-dark/50 transition-colors">
                                        <td className="py-4 pr-4">May 14, 04:30 PM</td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                <span>Literature</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 font-medium">1h 15m</td>
                                        <td className="py-4 px-4"><span className="text-green-400 font-bold">91%</span></td>
                                        <td className="py-4 pl-4 text-right"><span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider">Completed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className="w-full mt-6 py-3 rounded-xl border border-surface-border text-gray-400 text-xs font-bold hover:bg-surface-border hover:text-white transition-colors">
                            Load More History
                        </button>
                    </div>
                </div>
            </main>
            {/* <footer className="w-full border-t border-surface-border bg-surface-dark py-6 mt-auto">
                <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">© 2024 StudyTime Inc.</p>
                    <div className="flex gap-6 text-xs font-medium text-gray-400">
                        <a className="hover:text-primary transition-colors" href="#">Help Center</a>
                        <a className="hover:text-primary transition-colors" href="#">Keyboard Shortcuts</a>
                        <a className="hover:text-primary transition-colors" href="#">Feedback</a>
                    </div>
                </div>
            </footer> */}
        </div>
    )
}

export default AnalyticsPage
