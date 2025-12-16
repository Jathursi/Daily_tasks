import React from 'react'

function GoalPage() {
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
                            <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium" href="#">Analytics</a>
                            <a className="px-4 py-1.5 rounded-full bg-surface-border text-white text-sm font-bold shadow-sm" href="#">Goals</a>
                            <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium" href="#">Settings</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-surface-border transition-colors">
                            <span className="material-symbols-outlined text-[20px]">notifications</span>
                        </button>
                        <div className="h-6 w-px bg-surface-border mx-1"></div>
                        <button className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-full border border-surface-border bg-gray-600 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyx9K-7NH3UkWNf1BwA5K2I8nvnhA3pzxhDhYTFqGGkMFGoKluL9ByRJx2qV3zLiA0GcgNZ5REPCP-L3eR9lfMXK2EVL2SLAysxJOUDRLjjb_XdyX1oujdNFZJ_6B0BoPkmIeOUapfVQcP1-5ehB9beVa_ma7dnKSU4iiqCRlSAEzwOB0vhllSbyEoFspYJVIE0SSRQImmB0r0Rc2UaKmg5TDdD9x-Z75O1c91nsbI1zMr3fOHct4o3TjZQlMkerswBejFRbShb9g")'></div>
                            <span className="text-sm font-medium text-white hidden sm:block group-hover:text-primary transition-colors">Alex M.</span>
                            <span className="material-symbols-outlined text-gray-400 text-sm hidden sm:block">expand_more</span>
                        </button>
                    </div>
                </header>
            </div> */}
            <main className="w-full max-w-[1200px] mx-auto px-4 pb-12 flex-grow">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-1">Goals Dashboard</h1>
                        <p className="text-gray-400 text-sm">Set targets, track progress, and achieve your study milestones.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex bg-surface-dark border border-surface-border rounded-xl p-1">
                            <button className="px-4 py-1.5 rounded-lg bg-surface-border text-white text-xs font-bold shadow-sm">Active</button>
                            <button className="px-4 py-1.5 rounded-lg text-gray-400 hover:text-white text-xs font-bold transition-colors">Completed</button>
                            <button className="px-4 py-1.5 rounded-lg text-gray-400 hover:text-white text-xs font-bold transition-colors">Missed</button>
                        </div>
                        <button className="px-4 py-2 rounded-xl bg-primary hover:bg-[#3bdb0f] text-[#131811] text-sm font-bold transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(70,236,19,0.2)]">
                            <span className="material-symbols-outlined text-xl">add</span>
                            Create New Goal
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-surface-dark border border-surface-border rounded-2xl p-5 flex items-start justify-between group hover:border-surface-border/80 transition-all">
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Active Goals</p>
                            <h3 className="text-2xl font-bold text-white">5</h3>
                            <div className="flex items-center gap-1 mt-2 text-primary text-xs font-medium bg-primary/10 w-fit px-2 py-0.5 rounded-md">
                                <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                <span>2 Due soon</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">flag</span>
                        </div>
                    </div>
                    <div className="bg-surface-dark border border-surface-border rounded-2xl p-5 flex items-start justify-between group hover:border-surface-border/80 transition-all">
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Completion Rate</p>
                            <h3 className="text-2xl font-bold text-white">85%</h3>
                            <div className="flex items-center gap-1 mt-2 text-green-400 text-xs font-medium">
                                <span className="material-symbols-outlined text-xs">trending_up</span>
                                <span>+5% this week</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                    </div>
                    <div className="bg-surface-dark border border-surface-border rounded-2xl p-5 flex items-start justify-between group hover:border-surface-border/80 transition-all">
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Current Streak</p>
                            <h3 className="text-2xl font-bold text-white">12 Days</h3>
                            <p className="text-gray-500 text-xs mt-2">Best: 24 Days</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">local_fire_department</span>
                        </div>
                    </div>
                    <div className="bg-surface-dark border border-surface-border rounded-2xl p-5 flex items-start justify-between group hover:border-surface-border/80 transition-all">
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Achievement Points</p>
                            <h3 className="text-2xl font-bold text-white">2,450 XP</h3>
                            <div className="flex items-center gap-1 mt-2 text-purple-400 text-xs font-medium">
                                <span>Level 12 Scholar</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">military_tech</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-white font-bold text-lg">Current Targets</h3>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-400">Sort by:</span>
                                <select className="bg-transparent text-white font-bold border-none focus:ring-0 cursor-pointer py-0 pl-2 pr-6 text-sm">
                                    <option>Deadline (Soonest)</option>
                                    <option>Progress (Lowest)</option>
                                    <option>Priority (Highest)</option>
                                </select>
                            </div>
                        </div>
                        <div className="bg-surface-dark border border-surface-border rounded-2xl p-6 group hover:border-primary/50 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                                        <span className="material-symbols-outlined">functions</span>
                                    </div>
                                    <div>
                                        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider block mb-0.5">Mathematics</span>
                                        <h4 className="text-white font-bold text-lg">Master Calculus Integration</h4>
                                    </div>
                                </div>
                                <button className="text-gray-500 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-300 font-medium">Progress</span>
                                    <span className="text-white font-bold">8.5 / 10 Hours</span>
                                </div>
                                <div className="w-full bg-background-dark h-3 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 h-full rounded-full relative overflow-hidden" style={{width: "85%"}}>
                                        <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-surface-border/50">
                                <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                                    <span className="material-symbols-outlined text-base">schedule</span>
                                    <span>Ends in 2 days</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 rounded-lg border border-surface-border text-gray-300 text-xs font-bold hover:bg-surface-border hover:text-white transition-colors">Edit</button>
                                    <button className="px-3 py-1.5 rounded-lg bg-surface-border text-white text-xs font-bold hover:bg-primary hover:text-background-dark transition-colors">Log Time</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-dark border border-surface-border rounded-2xl p-6 group hover:border-primary/50 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                                        <span className="material-symbols-outlined">menu_book</span>
                                    </div>
                                    <div>
                                        <span className="text-orange-400 text-xs font-bold uppercase tracking-wider block mb-0.5">Literature</span>
                                        <h4 className="text-white font-bold text-lg">Read 3 Chapters of Hamlet</h4>
                                    </div>
                                </div>
                                <button className="text-gray-500 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-300 font-medium">Progress</span>
                                    <span className="text-white font-bold">1 / 3 Chapters</span>
                                </div>
                                <div className="w-full bg-background-dark h-3 rounded-full overflow-hidden">
                                    <div className="bg-orange-500 h-full rounded-full" style={{width: "33%"}}></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-surface-border/50">
                                <div className="flex items-center gap-2 text-red-400 text-xs font-bold">
                                    <span className="material-symbols-outlined text-base">warning</span>
                                    <span>Due Tomorrow</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 rounded-lg border border-surface-border text-gray-300 text-xs font-bold hover:bg-surface-border hover:text-white transition-colors">Edit</button>
                                    <button className="px-3 py-1.5 rounded-lg bg-surface-border text-white text-xs font-bold hover:bg-primary hover:text-background-dark transition-colors">Mark Complete</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-dark border border-surface-border rounded-2xl p-6 group hover:border-primary/50 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                                        <span className="material-symbols-outlined">code</span>
                                    </div>
                                    <div>
                                        <span className="text-purple-400 text-xs font-bold uppercase tracking-wider block mb-0.5">Computer Science</span>
                                        <h4 className="text-white font-bold text-lg">Complete Python Data Project</h4>
                                    </div>
                                </div>
                                <button className="text-gray-500 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-300 font-medium">Progress</span>
                                    <span className="text-white font-bold">45%</span>
                                </div>
                                <div className="w-full bg-background-dark h-3 rounded-full overflow-hidden">
                                    <div className="bg-purple-500 h-full rounded-full" style={{width: "45%"}}></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-surface-border/50">
                                <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                                    <span className="material-symbols-outlined text-base">calendar_today</span>
                                    <span>Deadline: May 28</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 rounded-lg border border-surface-border text-gray-300 text-xs font-bold hover:bg-surface-border hover:text-white transition-colors">Edit</button>
                                    <button className="px-3 py-1.5 rounded-lg bg-surface-border text-white text-xs font-bold hover:bg-primary hover:text-background-dark transition-colors">Update Status</button>
                                </div>
                            </div>
                        </div>
                        <button className="w-full border-2 border-dashed border-surface-border rounded-2xl p-6 flex flex-col items-center justify-center text-gray-500 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all gap-2 h-[180px]">
                            <span className="material-symbols-outlined text-3xl">add_circle</span>
                            <span className="font-bold text-sm">Add New Goal</span>
                        </button>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-surface-dark border border-surface-border rounded-2xl p-6">
                            <h3 className="text-white font-bold text-lg mb-4">Weekly Success</h3>
                            <div className="flex items-end justify-between h-32 gap-2 mb-4">
                                <div className="flex flex-col items-center gap-1 w-full">
                                    <div className="w-full bg-primary/20 rounded-t-sm h-[40%] relative"><div className="absolute bottom-0 w-full bg-primary h-[80%] rounded-t-sm"></div></div>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase">M</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 w-full">
                                    <div className="w-full bg-primary/20 rounded-t-sm h-[70%] relative"><div className="absolute bottom-0 w-full bg-primary h-[100%] rounded-t-sm"></div></div>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase">T</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 w-full">
                                    <div className="w-full bg-primary/20 rounded-t-sm h-[50%] relative"><div className="absolute bottom-0 w-full bg-primary h-[60%] rounded-t-sm"></div></div>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase">W</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 w-full">
                                    <div className="w-full bg-primary/20 rounded-t-sm h-[80%] relative"><div className="absolute bottom-0 w-full bg-primary h-[90%] rounded-t-sm"></div></div>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase">T</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 w-full">
                                    <div className="w-full bg-primary/20 rounded-t-sm h-[60%] relative"><div className="absolute bottom-0 w-full bg-primary h-[40%] rounded-t-sm"></div></div>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase">F</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 w-full">
                                    <div className="w-full bg-surface-border rounded-t-sm h-[30%]"></div>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase">S</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 w-full">
                                    <div className="w-full bg-surface-border rounded-t-sm h-[20%]"></div>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase">S</span>
                                </div>
                            </div>
                            <p className="text-xs text-center text-gray-400">You've completed <span className="text-primary font-bold">12 goals</span> this week!</p>
                        </div>
                        <div className="bg-surface-dark border border-surface-border rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-white font-bold text-lg">Achievements</h3>
                                <a className="text-xs font-bold text-primary hover:underline" href="#">View All</a>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                <div className="aspect-square rounded-full bg-surface-border border border-primary text-primary flex items-center justify-center relative group cursor-pointer">
                                    <span className="material-symbols-outlined text-xl">workspace_premium</span>
                                    <div className="absolute -bottom-8 bg-black/90 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">Top Scholar</div>
                                </div>
                                <div className="aspect-square rounded-full bg-surface-border text-orange-400 flex items-center justify-center relative group cursor-pointer hover:bg-orange-500/10 transition-colors">
                                    <span className="material-symbols-outlined text-xl">local_fire_department</span>
                                    <div className="absolute -bottom-8 bg-black/90 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">10 Day Streak</div>
                                </div>
                                <div className="aspect-square rounded-full bg-surface-border text-blue-400 flex items-center justify-center relative group cursor-pointer hover:bg-blue-500/10 transition-colors">
                                    <span className="material-symbols-outlined text-xl">functions</span>
                                    <div className="absolute -bottom-8 bg-black/90 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">Math Wizard</div>
                                </div>
                                <div className="aspect-square rounded-full bg-surface-border text-gray-600 flex items-center justify-center opacity-50">
                                    <span className="material-symbols-outlined text-xl">lock</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-dark border border-surface-border rounded-2xl p-6">
                            <h3 className="text-white font-bold text-lg mb-4">Goal History</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 pb-3 border-b border-surface-border/50">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-bold leading-tight">Physics Quiz Prep</h4>
                                        <span className="text-xs text-gray-500">Completed yesterday</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 pb-3 border-b border-surface-border/50">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-bold leading-tight">5h Study Marathon</h4>
                                        <span className="text-xs text-gray-500">Completed May 14</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-sm font-bold">close</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-bold leading-tight">Finish Essay Draft</h4>
                                        <span className="text-xs text-gray-500">Missed May 12</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-5 py-2 rounded-lg border border-surface-border text-gray-400 text-xs font-bold hover:bg-surface-border hover:text-white transition-colors">
                                View Full History
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default GoalPage
