import React from 'react'

function TaskListPage() {
    return (
        <div>
            {/* <!-- Side Navigation --> */}
            <aside className="w-20 lg:w-64 flex flex-col justify-between border-r border-[#2c3928] bg-background-dark h-full shrink-0 transition-all duration-300">
                <div className="flex flex-col gap-8 p-4 lg:p-6">
                    {/* <!-- Logo --> */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background-dark">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <h1 className="hidden lg:block text-white text-xl font-bold tracking-tight">StudyTracker</h1>
                    </div>
                    {/* <!-- Nav Links --> */}
                    <nav className="flex flex-col gap-2">
                        <a className="flex items-center gap-4 px-3 py-3 rounded-xl text-text-secondary hover:text-white hover:bg-surface-dark transition-colors group" href="#">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">timer</span>
                            <p className="hidden lg:block text-sm font-medium">Timer</p>
                        </a>
                        <a className="flex items-center gap-4 px-3 py-3 rounded-xl bg-surface-dark border border-[#2c3928] shadow-sm" href="#">
                            <span className="material-symbols-outlined text-primary icon-filled">check_circle</span>
                            <p className="hidden lg:block text-white text-sm font-bold">Tasks</p>
                        </a>
                        <a className="flex items-center gap-4 px-3 py-3 rounded-xl text-text-secondary hover:text-white hover:bg-surface-dark transition-colors group" href="#">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">bar_chart</span>
                            <p className="hidden lg:block text-sm font-medium">Analytics</p>
                        </a>
                        <a className="flex items-center gap-4 px-3 py-3 rounded-xl text-text-secondary hover:text-white hover:bg-surface-dark transition-colors group mt-4" href="#">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
                            <p className="hidden lg:block text-sm font-medium">Settings</p>
                        </a>
                    </nav>
                </div>
                {/* <!-- User Profile (Bottom Sidebar) --> */}
                <div className="p-4 lg:p-6 border-t border-[#2c3928]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-surface-dark border border-primary/30 overflow-hidden relative" data-alt="User profile avatar gradient">
                            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB3XqizhLFvatzbmFqo5Agw3NCNupBhLuZiaq6VAL0TdkbRV8Oe_XE2U8L_mlTrOj6f479bGLkgIRTP_BCdQ4D6WZR51fosDGxyTGQxw3PhZtVOaIPzFBHDhu6jdJA3hOz1w_dGF8Od3UtDDajjFTEWcLlyX7t8H1KURZxnZoRGUw4ImCOHdLZVE53vVbelvDtAEivx-fJYOfkQ-I6TLML5UgOQJI6vSFIq7MKwT-TKWrnTi-bIOOVbMWrhHtq-yxphJP8NDpn3MU" />
                        </div>
                        <div className="hidden lg:flex flex-col">
                            <p className="text-white text-sm font-bold leading-tight">Alex M.</p>
                            <p className="text-text-secondary text-xs">Premium Plan</p>
                        </div>
                    </div>
                </div>
            </aside>
            {/* <!-- Main Content Area --> */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* <!-- Header Section with Stats --> */}
                <header className="w-full p-6 lg:px-10 lg:py-8 shrink-0 flex flex-col gap-6">
                    {/* <!-- Top Row: Title & Stats --> */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        {/* <!-- Title --> */}
                        <div className="flex flex-col gap-2 max-w-lg">
                            <h2 className="text-white text-3xl lg:text-4xl font-black leading-tight tracking-[-0.02em]">My Study Tasks</h2>
                            <p className="text-text-secondary text-base lg:text-lg font-normal">Manage your study schedule efficiently and track your progress.</p>
                        </div>
                        {/* <!-- Stats Cards --> */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex min-w-[160px] items-center gap-4 rounded-xl p-4 bg-surface-dark border border-[#2c3928] shadow-lg">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">calendar_today</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-text-secondary text-xs font-bold uppercase tracking-wider">Due Today</p>
                                    <p className="text-white text-2xl font-bold leading-none mt-1">4</p>
                                </div>
                            </div>
                            <div className="flex min-w-[160px] items-center gap-4 rounded-xl p-4 bg-surface-dark border border-[#2c3928] shadow-lg">
                                <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                                    <span className="material-symbols-outlined">schedule</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-text-secondary text-xs font-bold uppercase tracking-wider">Planned</p>
                                    <p className="text-white text-2xl font-bold leading-none mt-1">5.5h</p>
                                </div>
                            </div>
                            <div className="flex min-w-[160px] items-center gap-4 rounded-xl p-4 bg-surface-dark border border-[#2c3928] shadow-lg">
                                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-text-secondary text-xs font-bold uppercase tracking-wider">Completed</p>
                                    <p className="text-white text-2xl font-bold leading-none mt-1">12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Controls Row: Search, Filters, Add Button --> */}
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-4">
                        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4 flex-1">
                            {/* <!-- Search Bar --> */}
                            <label className="relative flex items-center w-full md:max-w-xs group">
                                <span className="absolute left-4 text-text-secondary group-focus-within:text-primary transition-colors material-symbols-outlined">search</span>
                                <input className="w-full h-12 bg-surface-dark border border-[#2c3928] text-white rounded-full pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-text-secondary transition-all shadow-sm" placeholder="Search tasks..." type="text" />
                            </label>
                            {/* <!-- Filter Pills --> */}
                            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
                                <button className="whitespace-nowrap h-10 px-5 rounded-full bg-primary text-background-dark text-sm font-bold border border-primary transition-transform hover:scale-105">
                                    All Tasks
                                </button>
                                <button className="whitespace-nowrap h-10 px-5 rounded-full bg-transparent text-text-secondary border border-[#2c3928] hover:border-text-secondary hover:text-white text-sm font-medium transition-colors">
                                    To Do
                                </button>
                                <button className="whitespace-nowrap h-10 px-5 rounded-full bg-transparent text-text-secondary border border-[#2c3928] hover:border-text-secondary hover:text-white text-sm font-medium transition-colors">
                                    High Priority
                                </button>
                            </div>
                        </div>
                        {/* <!-- Add Button --> */}
                        <button className="w-full md:w-auto flex items-center justify-center gap-2 h-12 px-6 bg-primary hover:bg-[#3bdb0a] text-background-dark rounded-full font-bold shadow-[0_0_15px_rgba(70,236,19,0.3)] transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
                            <span className="material-symbols-outlined">add</span>
                            Add New Task
                        </button>
                    </div>
                </header>
                {/* <!-- Task List Content --> */}
                <div className="flex-1 overflow-y-auto px-6 lg:px-10 pb-10">
                    {/* <!-- List Header --> */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-text-secondary text-xs font-bold uppercase tracking-wider border-b border-[#2c3928] mb-2">
                        <div className="col-span-5">Task Name</div>
                        <div className="col-span-2">Subject</div>
                        <div className="col-span-2">Due Date</div>
                        <div className="col-span-2">Est. Time</div>
                        <div className="col-span-1 text-right">Actions</div>
                    </div>
                    {/* <!-- Task Items Container --> */}
                    <div className="flex flex-col gap-3">
                        {/* <!-- Task Item 1: High Priority --> */}
                        <div className="group relative flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center p-4 md:px-6 md:py-5 bg-surface-dark hover:bg-[#233320] border-l-4 border-l-red-500 border-y border-r border-y-[#2c3928] border-r-[#2c3928] rounded-r-2xl rounded-l-md transition-all duration-200">
                            <div className="col-span-5 flex items-center gap-4">
                                <button className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-text-secondary hover:border-primary hover:bg-primary/20 transition-colors flex items-center justify-center group-hover/btn:text-primary">
                                    <span className="material-symbols-outlined text-transparent hover:text-primary text-[16px]">check</span>
                                </button>
                                <div>
                                    <p className="text-white font-bold text-lg leading-tight">Calculus Chapter 3 Review</p>
                                    <p className="text-red-400 text-xs font-medium md:hidden mt-1">High Priority</p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/20">
                                    Math
                                </span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2 text-white">
                                <span className="material-symbols-outlined text-red-500 text-[18px]">event_busy</span>
                                <span className="text-sm font-medium">Tomorrow</span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2 text-text-secondary">
                                <span className="material-symbols-outlined text-[18px]">timer</span>
                                <span className="text-sm">2h 30m</span>
                            </div>
                            <div className="col-span-1 flex justify-end">
                                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">more_vert</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Task Item 2 --> */}
                        <div className="group relative flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center p-4 md:px-6 md:py-5 bg-surface-dark hover:bg-[#233320] border border-[#2c3928] rounded-2xl transition-all duration-200">
                            <div className="col-span-5 flex items-center gap-4">
                                <button className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-text-secondary hover:border-primary hover:bg-primary/20 transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined text-transparent hover:text-primary text-[16px]">check</span>
                                </button>
                                <div>
                                    <p className="text-white font-bold text-lg leading-tight">History Essay Outline</p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-600/20 text-yellow-400 border border-yellow-600/20">
                                    History
                                </span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2 text-text-secondary">
                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                <span className="text-sm font-medium">Oct 12, 2023</span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2 text-text-secondary">
                                <span className="material-symbols-outlined text-[18px]">timer</span>
                                <span className="text-sm">45m</span>
                            </div>
                            <div className="col-span-1 flex justify-end">
                                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">more_vert</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Task Item 3: Due Today --> */}
                        <div className="group relative flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center p-4 md:px-6 md:py-5 bg-surface-dark hover:bg-[#233320] border border-[#2c3928] rounded-2xl transition-all duration-200">
                            <div className="col-span-5 flex items-center gap-4">
                                <button className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-text-secondary hover:border-primary hover:bg-primary/20 transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined text-transparent hover:text-primary text-[16px]">check</span>
                                </button>
                                <div>
                                    <p className="text-white font-bold text-lg leading-tight">Physics Lab Report</p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/20">
                                    Science
                                </span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined text-[18px] icon-filled">event</span>
                                <span className="text-sm font-bold">Today</span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2 text-text-secondary">
                                <span className="material-symbols-outlined text-[18px]">timer</span>
                                <span className="text-sm">1h 00m</span>
                            </div>
                            <div className="col-span-1 flex justify-end">
                                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">more_vert</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Task Item 4: Completed --> */}
                        <div className="group relative flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center p-4 md:px-6 md:py-5 bg-surface-darker/50 opacity-60 hover:opacity-100 border border-[#2c3928] rounded-2xl transition-all duration-200">
                            <div className="col-span-5 flex items-center gap-4">
                                <button className="flex-shrink-0 w-6 h-6 rounded-full bg-primary border-2 border-primary text-background-dark flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                                </button>
                                <div>
                                    <p className="text-text-secondary font-medium text-lg leading-tight line-through">Reading Ch. 4-5</p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-700/20 text-gray-400 border border-gray-700/20 grayscale">
                                    Literature
                                </span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2 text-text-secondary grayscale">
                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                <span className="text-sm font-medium">Yesterday</span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2 text-text-secondary grayscale">
                                <span className="material-symbols-outlined text-[18px]">timer</span>
                                <span className="text-sm">1h 30m</span>
                            </div>
                            <div className="col-span-1 flex justify-end">
                                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">delete_outline</span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Task Item 5 --> */}
                        <div className="group relative flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center p-4 md:px-6 md:py-5 bg-surface-dark hover:bg-[#233320] border border-[#2c3928] rounded-2xl transition-all duration-200">
                            <div className="col-span-5 flex items-center gap-4">
                                <button className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-text-secondary hover:border-primary hover:bg-primary/20 transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined text-transparent hover:text-primary text-[16px]">check</span>
                                </button>
                                <div>
                                    <p className="text-white font-bold text-lg leading-tight">French Vocabulary</p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-pink-500/20 text-pink-400 border border-pink-500/20">
                                    Language
                                </span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2 text-text-secondary">
                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                <span className="text-sm font-medium">Oct 14, 2023</span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2 text-text-secondary">
                                <span className="material-symbols-outlined text-[18px]">timer</span>
                                <span className="text-sm">20m</span>
                            </div>
                            <div className="col-span-1 flex justify-end">
                                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">more_vert</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Empty State Helper (Hidden by default, shown if needed) --> */}
                    {/*<!-- 
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-surface-dark rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-4xl text-text-secondary">task_alt</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">No tasks found</h3>
                <p className="text-text-secondary max-w-sm">Try adjusting your search or filters to find what you're looking for.</p>
            </div> 
            -->*/}
                </div>
            </main>
        </div>
    )
}

export default TaskListPage
