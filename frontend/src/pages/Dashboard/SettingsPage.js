import React from 'react'

function SettingsPage() {
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
                            <a className="px-4 py-1.5 rounded-full text-gray-400 hover:text-white transition-colors text-sm font-medium" href="#">Goals</a>
                            <a className="px-4 py-1.5 rounded-full bg-surface-border text-white text-sm font-bold shadow-sm" href="#">Settings</a>
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
                        <h1 className="text-3xl font-bold text-white mb-1">Settings</h1>
                        <p className="text-gray-400 text-sm">Manage your profile, preferences, and account security.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                            <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-dark border border-surface-border text-white font-medium shadow-sm whitespace-nowrap text-sm">
                                <span className="material-symbols-outlined text-[20px]">person</span>
                                Profile
                            </button>
                            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-surface-dark/50 transition-colors whitespace-nowrap text-sm group">
                                <span className="material-symbols-outlined text-[20px] group-hover:text-white">notifications</span>
                                Notifications
                            </button>
                            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-surface-dark/50 transition-colors whitespace-nowrap text-sm group">
                                <span className="material-symbols-outlined text-[20px] group-hover:text-white">tune</span>
                                App Settings
                            </button>
                            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-surface-dark/50 transition-colors whitespace-nowrap text-sm group">
                                <span className="material-symbols-outlined text-[20px] group-hover:text-white">shield</span>
                                Account
                            </button>
                        </nav>
                    </aside>
                    <div className="flex-1 space-y-8">
                        <section className="bg-surface-dark border border-surface-border rounded-2xl p-6 sm:p-8">
                            <div className="flex items-center justify-between mb-8 border-b border-surface-border pb-6">
                                <div>
                                    <h2 className="text-xl font-bold text-white">Public Profile</h2>
                                    <p className="text-gray-400 text-sm mt-1">Update your photo and personal details.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                                <div className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-surface-border shadow-lg" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyx9K-7NH3UkWNf1BwA5K2I8nvnhA3pzxhDhYTFqGGkMFGoKluL9ByRJx2qV3zLiA0GcgNZ5REPCP-L3eR9lfMXK2EVL2SLAysxJOUDRLjjb_XdyX1oujdNFZJ_6B0BoPkmIeOUapfVQcP1-5ehB9beVa_ma7dnKSU4iiqCRlSAEzwOB0vhllSbyEoFspYJVIE0SSRQImmB0r0Rc2UaKmg5TDdD9x-Z75O1c91nsbI1zMr3fOHct4o3TjZQlMkerswBejFRbShb9g')"}}></div>
                                <div className="flex flex-col items-center sm:items-start pt-2">
                                    <div className="flex gap-3 mb-2">
                                        <button className="px-4 py-2 bg-surface-border hover:bg-gray-600 text-white text-xs font-bold rounded-xl transition-colors">Change Photo</button>
                                        <button className="px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 text-xs font-bold rounded-xl transition-colors">Remove</button>
                                    </div>
                                    <p className="text-gray-500 text-xs">Recommended: Square JPG, PNG up to 2MB</p>
                                </div>
                            </div>
                            <form onsubmit="event.preventDefault();">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-300 uppercase tracking-wider ml-1">First Name</label>
                                        <input className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-3 text-white text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-600" type="text" value="Alex" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-300 uppercase tracking-wider ml-1">Last Name</label>
                                        <input className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-3 text-white text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-600" type="text" value="M." />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-xs font-bold text-gray-300 uppercase tracking-wider ml-1">Email Address</label>
                                        <input className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-3 text-white text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-600" type="email" value="alex.m@example.com" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-xs font-bold text-gray-300 uppercase tracking-wider ml-1">Bio</label>
                                        <textarea className="w-full bg-background-dark border border-surface-border rounded-xl px-4 py-3 text-white text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-600 resize-none" rows="3">Passionate learner focusing on Physics and Computer Science. Always striving to improve my focus time.</textarea>
                                        <div className="flex justify-between text-xs text-gray-500 px-1">
                                            <span>Brief description for your profile.</span>
                                            <span>84/120</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end pt-4 border-t border-surface-border">
                                    <button className="px-6 py-2.5 bg-primary hover:bg-[#3bdb0f] text-[#131811] text-sm font-bold rounded-xl transition-colors shadow-[0_0_15px_rgba(70,236,19,0.3)]">Save Changes</button>
                                </div>
                            </form>
                        </section>
                        <section className="bg-surface-dark border border-surface-border rounded-2xl p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-white mb-6">Notifications</h2>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between pb-6 border-b border-surface-border/50">
                                    <div>
                                        <p className="text-white font-medium">Study Reminders</p>
                                        <p className="text-gray-400 text-xs mt-1">Get notified when it's time to start a scheduled session.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input checked="" className="sr-only peer" type="checkbox" value="" />
                                        <div className="w-11 h-6 bg-surface-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between pb-6 border-b border-surface-border/50">
                                    <div>
                                        <p className="text-white font-medium">Goal Updates</p>
                                        <p className="text-gray-400 text-xs mt-1">Receive alerts when you reach a milestone or daily goal.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input checked="" className="sr-only peer" type="checkbox" value="" />
                                        <div className="w-11 h-6 bg-surface-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-medium">Weekly Report</p>
                                        <p className="text-gray-400 text-xs mt-1">Receive a summary of your weekly progress via email.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input className="sr-only peer" type="checkbox" value="" />
                                        <div className="w-11 h-6 bg-surface-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                </div>
                            </div>
                        </section>
                        <section className="bg-surface-dark border border-surface-border rounded-2xl p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-white mb-6">Application Settings</h2>
                            <div className="space-y-8">
                                <div>
                                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-4">Theme Preference</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <button className="relative border-2 border-primary bg-primary/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all">
                                            <div className="absolute top-2 right-2 text-primary">
                                                <span className="material-symbols-outlined text-[18px] filled">check_circle</span>
                                            </div>
                                            <span className="material-symbols-outlined text-primary text-3xl">dark_mode</span>
                                            <span className="text-sm font-bold text-white">Dark Mode</span>
                                        </button>
                                        <button className="border border-surface-border hover:border-gray-500 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all group">
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-white text-3xl">light_mode</span>
                                            <span className="text-sm font-medium text-gray-400 group-hover:text-white">Light Mode</span>
                                        </button>
                                        <button className="border border-surface-border hover:border-gray-500 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all group">
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-white text-3xl">settings_system_daydream</span>
                                            <span className="text-sm font-medium text-gray-400 group-hover:text-white">System</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="h-px bg-surface-border"></div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-medium">Sound Effects</p>
                                        <p className="text-gray-400 text-xs mt-1">Play sounds on timer completion and button clicks.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input checked="" className="sr-only peer" type="checkbox" value="" />
                                        <div className="w-11 h-6 bg-surface-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                </div>
                            </div>
                        </section>
                        <section className="bg-surface-dark border border-surface-border rounded-2xl p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-white mb-6">Account Management</h2>
                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-surface-border rounded-xl bg-background-dark/30 gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center text-gray-300 shrink-0">
                                            <span className="material-symbols-outlined">lock</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm">Password</p>
                                            <p className="text-gray-500 text-xs">Last changed 3 months ago</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-surface-border hover:bg-gray-600 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap">Change Password</button>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-red-500/20 rounded-xl bg-red-500/5 gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                                            <span className="material-symbols-outlined">delete</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm">Delete Account</p>
                                            <p className="text-gray-500 text-xs">Permanently remove your account and data</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 text-red-500 border border-red-500/30 hover:bg-red-500/10 text-xs font-bold rounded-lg transition-colors whitespace-nowrap">Delete Account</button>
                                </div>
                            </div>
                        </section>
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

export default SettingsPage
