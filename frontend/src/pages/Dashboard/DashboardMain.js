import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function DashboardMain() {
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
              <a className="px-4 py-1.5 rounded-full bg-surface-border text-white text-sm font-bold shadow-sm"><Link to="/dashboard">Dashboard</Link></a>
              <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium"><Link to="/dashboard/analytics">Analytics</Link></a>
              <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium"><Link to="/dashboard/goals">Goals</Link></a>
              <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium"><Link to="/dashboard/settings">Settings</Link></a>
              <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium"><Link to="/dashboard/tasks">Tasks</Link></a>
              {/* <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium"><Link to="/dashboard/quick">Quick Start</Link></a> */}
              {/* <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium"><Link to="/dashboard/task">Task Forms</Link></a> */}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-surface-border transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <div className="h-6 w-px bg-surface-border mx-1"></div>
            <button className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full border border-surface-border bg-gray-600 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyx9K-7NH3UkWNf1BwA5K2I8nvnhA3pzxhDhYTFqGGkMFGoKluL9ByRJx2qV3zLiA0GcgNZ5REPCP-L3eR9lfMXK2EVL2SLAysxJOUDRLjjb_XdyX1oujdNFZJ_6B0BoPkmIeOUapfVQcP1-5ehB9beVa_ma7dnKSU4iiqCRlSAEzwOB0vhllSbyEoFspYJVIE0SSRQImmB0r0Rc2UaKmg5TDdD9x-Z75O1c91nsbI1zMr3fOHct4o3TjZQlMkerswBejFRbShb9g')" }}></div>
              <span className="text-sm font-medium text-white hidden sm:block group-hover:text-primary transition-colors">Alex M.</span>
              <span className="material-symbols-outlined text-gray-400 text-sm hidden sm:block">expand_more</span>
            </button>
          </div>
        </header>
      </div>
      <Outlet />
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

export default DashboardMain
