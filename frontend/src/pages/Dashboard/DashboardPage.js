import React from 'react'
import { Link } from 'react-router-dom'
function DashboardPage() {
  return (
    <div className="bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
      <div className="w-full flex justify-center sticky top-0 z-50 pt-5 px-4 mb-8">
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
              <a className="px-4 py-1.5 rounded-full bg-surface-border text-white text-sm font-bold shadow-sm" href="#">Dashboard</a>
              <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium" href="#">Analytics</a>
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
      </div>
      <main className="w-full max-w-[1200px] mx-auto px-4 pb-12 flex-grow">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Welcome back, Alex! 👋</h1>
            <p className="text-gray-400 text-sm">You've been productive for 4 days in a row. Keep it up!</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl border border-surface-border bg-surface-dark hover:bg-surface-border text-white text-sm font-bold transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-base">add_task</span>
              New Task
            </button>
            <button className="px-4 py-2 rounded-xl bg-primary hover:bg-[#3bdb0f] text-[#131811] text-sm font-bold transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(70,236,19,0.2)]">
              <span className="material-symbols-outlined text-base">play_arrow</span>
              Quick Start
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-surface-dark border border-surface-border rounded-2xl p-5 flex items-start justify-between group hover:border-surface-border/80 transition-all">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Today's Focus</p>
              <h3 className="text-2xl font-bold text-white">4h 25m</h3>
              <div className="flex items-center gap-1 mt-2 text-primary text-xs font-medium bg-primary/10 w-fit px-2 py-0.5 rounded-md">
                <span className="material-symbols-outlined text-xs">trending_up</span>
                <span>+12% vs yest.</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">timer</span>
            </div>
          </div>
          <div className="bg-surface-dark border border-surface-border rounded-2xl p-5 flex items-start justify-between group hover:border-surface-border/80 transition-all">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Weekly Goal</p>
              <h3 className="text-2xl font-bold text-white">32h / 40h</h3>
              <div className="w-full bg-background-dark h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{width: "80%"}}></div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">flag</span>
            </div>
          </div>
          <div className="bg-surface-dark border border-surface-border rounded-2xl p-5 flex items-start justify-between group hover:border-surface-border/80 transition-all">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Current Streak</p>
              <h3 className="text-2xl font-bold text-white">12 Days</h3>
              <p className="text-gray-500 text-xs mt-2">Best: 24 days</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">local_fire_department</span>
            </div>
          </div>
          <div className="bg-surface-dark border border-surface-border rounded-2xl p-5 flex items-start justify-between group hover:border-surface-border/80 transition-all">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Focus Score</p>
              <h3 className="text-2xl font-bold text-white">88/100</h3>
              <div className="flex items-center gap-1 mt-2 text-gray-400 text-xs font-medium">
                <span>High efficiency</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">psychology</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-surface-dark border border-surface-border rounded-[2rem] p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex bg-background-dark p-1 rounded-full border border-surface-border">
                  <button className="px-4 py-1.5 rounded-full bg-surface-border text-white text-xs font-bold">Pomodoro</button>
                  <button className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white text-xs font-medium transition-colors">Short Break</button>
                  <button className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white text-xs font-medium transition-colors">Long Break</button>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined">settings</span>
                </button>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-4 relative z-10">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-border" cx="128" cy="128" fill="transparent" r="120" stroke="currentColor" stroke-width="8"></circle>
                    <circle className="text-primary transition-all duration-1000" cx="128" cy="128" fill="transparent" r="120" stroke="currentColor" stroke-dasharray="753" stroke-dashoffset="188" stroke-linecap="round" stroke-width="8"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-6xl font-black text-white tracking-tight font-display">25:00</span>
                    <span className="text-gray-400 text-sm font-medium mt-2 uppercase tracking-widest">Focusing</span>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-center md:items-start w-full md:w-auto">
                  <div className="text-center md:text-left">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Current Task</p>
                    <div className="flex items-center gap-3 text-white text-lg font-medium">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span>Advanced Calculus Review</span>
                      <button className="text-gray-500 hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">edit</span></button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="w-16 h-16 rounded-full bg-primary hover:bg-[#3bdb0f] text-[#131811] flex items-center justify-center transition-all hover:scale-105 shadow-[0_0_20px_rgba(70,236,19,0.3)]">
                      <span className="material-symbols-outlined text-3xl font-bold">play_arrow</span>
                    </button>
                    <button className="w-12 h-12 rounded-full border border-surface-border bg-transparent text-white hover:bg-surface-border flex items-center justify-center transition-all">
                      <span className="material-symbols-outlined">stop</span>
                    </button>
                    <button className="w-12 h-12 rounded-full border border-surface-border bg-transparent text-white hover:bg-surface-border flex items-center justify-center transition-all">
                      <span className="material-symbols-outlined">skip_next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-dark border border-surface-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-lg">Activity History</h3>
                <select className="bg-background-dark border border-surface-border text-gray-300 text-xs rounded-lg px-3 py-1.5 focus:ring-primary focus:border-primary">
                  <option>Last 7 Days</option>
                  <option>This Month</option>
                </select>
              </div>
              <div className="w-full h-48 flex items-end justify-between gap-2 sm:gap-4 px-2">
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full max-w-[40px] bg-surface-border rounded-t-lg relative h-full flex items-end overflow-hidden group-hover:bg-gray-700 transition-colors">
                    <div className="w-full bg-primary/30 h-[40%]"></div>
                  </div>
                  <span className="text-gray-500 text-xs font-medium">Mon</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full max-w-[40px] bg-surface-border rounded-t-lg relative h-full flex items-end overflow-hidden group-hover:bg-gray-700 transition-colors">
                    <div className="w-full bg-primary/60 h-[75%]"></div>
                  </div>
                  <span className="text-gray-500 text-xs font-medium">Tue</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full max-w-[40px] bg-surface-border rounded-t-lg relative h-full flex items-end overflow-hidden group-hover:bg-gray-700 transition-colors">
                    <div className="w-full bg-primary/40 h-[50%]"></div>
                  </div>
                  <span className="text-gray-500 text-xs font-medium">Wed</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full max-w-[40px] bg-surface-border rounded-t-lg relative h-full flex items-end overflow-hidden group-hover:bg-gray-700 transition-colors">
                    <div className="w-full bg-primary/80 h-[90%]"></div>
                  </div>
                  <span className="text-gray-500 text-xs font-medium">Thu</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full max-w-[40px] bg-surface-border rounded-t-lg relative h-full flex items-end overflow-hidden group-hover:bg-gray-700 transition-colors">
                    <div className="w-full bg-primary h-[65%]"></div>
                  </div>
                  <span className="text-gray-500 text-xs font-medium">Fri</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full max-w-[40px] bg-surface-border rounded-t-lg relative h-full flex items-end overflow-hidden group-hover:bg-gray-700 transition-colors">
                    <div className="w-full bg-primary/20 h-[30%]"></div>
                  </div>
                  <span className="text-gray-500 text-xs font-medium">Sat</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full max-w-[40px] bg-surface-border rounded-t-lg relative h-full flex items-end overflow-hidden group-hover:bg-gray-700 transition-colors">
                    <div className="w-full bg-primary/10 h-[15%]"></div>
                  </div>
                  <span className="text-gray-500 text-xs font-medium">Sun</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-surface-dark border border-surface-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-lg">Active Goals</h3>
                <button className="text-primary text-xs font-bold hover:underline">View All</button>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-200 font-medium">Complete Python Course</span>
                    <span className="text-primary font-bold">75%</span>
                  </div>
                  <div className="w-full bg-background-dark h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-green-300 h-full rounded-full" style={{width: "75%"}}></div>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">3 modules remaining</p>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-200 font-medium">Read 500 Pages</span>
                    <span className="text-blue-400 font-bold">42%</span>
                  </div>
                  <div className="w-full bg-background-dark h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full rounded-full" style={{width: "42%"}}></div>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">210 / 500 pages read</p>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-200 font-medium">Study 5 days/week</span>
                    <span className="text-yellow-400 font-bold">4/5</span>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <div className="h-2 flex-1 bg-yellow-400 rounded-full"></div>
                    <div className="h-2 flex-1 bg-yellow-400 rounded-full"></div>
                    <div className="h-2 flex-1 bg-yellow-400 rounded-full"></div>
                    <div className="h-2 flex-1 bg-yellow-400 rounded-full"></div>
                    <div className="h-2 flex-1 bg-background-dark rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-dark border border-surface-border rounded-2xl p-6 flex-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-lg">Recent Sessions</h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-background-dark/50 transition-colors cursor-pointer border border-transparent hover:border-surface-border">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <span className="material-symbols-outlined text-xl">code</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-bold truncate">React Component</h4>
                    <p className="text-gray-500 text-xs truncate">Coding • 45 mins</p>
                  </div>
                  <span className="text-gray-400 text-xs whitespace-nowrap">2h ago</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-background-dark/50 transition-colors cursor-pointer border border-transparent hover:border-surface-border">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <span className="material-symbols-outlined text-xl">menu_book</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-bold truncate">Chapter 4 Review</h4>
                    <p className="text-gray-500 text-xs truncate">Reading • 25 mins</p>
                  </div>
                  <span className="text-gray-400 text-xs whitespace-nowrap">5h ago</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-background-dark/50 transition-colors cursor-pointer border border-transparent hover:border-surface-border">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                    <span className="material-symbols-outlined text-xl">edit_note</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-bold truncate">Essay Draft</h4>
                    <p className="text-gray-500 text-xs truncate">Writing • 50 mins</p>
                  </div>
                  <span className="text-gray-400 text-xs whitespace-nowrap">Yesterday</span>
                </div>
              </div>
              <button className="w-full mt-4 py-3 rounded-xl border border-surface-border text-gray-400 text-xs font-bold hover:bg-surface-border hover:text-white transition-colors">
                View All History
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t border-surface-border bg-surface-dark py-6 mt-auto">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2024 StudyTime Inc.</p>
          <div className="flex gap-6 text-xs font-medium text-gray-400">
            <a className="hover:text-primary transition-colors" href="#">Help Center</a>
            <a className="hover:text-primary transition-colors" href="#">Keyboard Shortcuts</a>
            <a className="hover:text-primary transition-colors" href="#">Feedback</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default DashboardPage
