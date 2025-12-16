import React from 'react'

function TaskForms() {
    return (
        <body className="bg-background-light dark:bg-background-dark font-display min-h-screen relative overflow-hidden text-slate-900 dark:text-white">
            {/* <!-- Background Simulation (Dashboard Context) --> */}
            {/* <!-- This section creates the illusion that the user is overlaying the modal on an existing dashboard --> */}
            <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-100 flex flex-col h-full w-full p-6 md:p-10 gap-8 blur-[2px] scale-[0.99] transition-transform">
                {/* <!-- Dashboard Header --> */}
                <div className="flex justify-between items-center w-full">
                    <div className="h-10 w-48 bg-surface-dark rounded-full border border-border-dark opacity-50"></div>
                    <div className="flex gap-4">
                        <div className="h-10 w-10 bg-surface-dark rounded-full border border-border-dark opacity-50"></div>
                        <div className="h-10 w-10 bg-surface-dark rounded-full border border-border-dark opacity-50"></div>
                    </div>
                </div>
                {/* <!-- Dashboard Content Grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                    <div className="col-span-2 h-full bg-surface-dark rounded-lg border border-border-dark opacity-40 p-6 flex flex-col gap-4">
                        <div className="h-8 w-1/3 bg-border-dark rounded-md opacity-30"></div>
                        <div className="h-32 w-full bg-background-dark rounded-md opacity-30"></div>
                        <div className="h-32 w-full bg-background-dark rounded-md opacity-30"></div>
                    </div>
                    <div className="h-full bg-surface-dark rounded-lg border border-border-dark opacity-40 p-6 flex flex-col gap-4">
                        <div className="h-8 w-1/2 bg-border-dark rounded-md opacity-30"></div>
                        <div className="h-64 w-full bg-background-dark rounded-md opacity-30"></div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal Overlay --> */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity duration-300">
                {/* <!-- Modal Card --> */}
                <div className="relative w-full max-w-[640px] flex flex-col max-h-[90vh] bg-[#1a2118] dark:bg-[#1a2118] rounded-[2rem] border border-[#41543b] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    {/* <!-- Modal Header --> */}
                    <div className="flex items-center justify-between px-8 pt-8 pb-4">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-white">Create New Task</h2>
                            <p className="text-text-muted text-sm mt-1">Add a new study goal to your schedule.</p>
                        </div>
                        <button className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    {/* <!-- Modal Content (Scrollable Form) --> */}
                    <div className="overflow-y-auto custom-scrollbar px-8 pb-6 flex-1">
                        <form className="flex flex-col gap-6" onsubmit="event.preventDefault();">
                            {/* <!-- Task Name --> */}
                            <label className="flex flex-col gap-2">
                                <span className="text-white text-sm font-medium ml-1">Task Title</span>
                                <div className="relative">
                                    <input className="w-full h-14 pl-5 pr-4 rounded-full bg-surface-dark border border-border-dark text-white placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium" placeholder="e.g., Read Chapter 4 of Physics" type="text" />
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-[20px]">edit</span>
                                </div>
                            </label>
                            {/* <!-- Description --> */}
                            <label className="flex flex-col gap-2">
                                <span className="text-white text-sm font-medium ml-1">Description <span className="text-text-muted font-normal text-xs">(Optional)</span></span>
                                <textarea className="w-full min-h-[120px] p-5 rounded-[1.5rem] bg-surface-dark border border-border-dark text-white placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Add notes, links, or sub-tasks here..."></textarea>
                            </label>
                            {/* <!-- Grid for Details --> */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* <!-- Subject Select --> */}
                                <label className="flex flex-col gap-2">
                                    <span className="text-white text-sm font-medium ml-1">Subject</span>
                                    <div className="relative">
                                        <select className="w-full h-14 pl-5 pr-12 appearance-none rounded-full bg-surface-dark border border-border-dark text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer">
                                            <option disabled="" selected="" value="">Select subject</option>
                                            <option value="math">Mathematics</option>
                                            <option value="physics">Physics</option>
                                            <option value="history">History</option>
                                            <option value="cs">Computer Science</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">expand_more</span>
                                    </div>
                                </label>
                                {/* <!-- Due Date --> */}
                                <label className="flex flex-col gap-2">
                                    <span className="text-white text-sm font-medium ml-1">Due Date</span>
                                    <div className="relative">
                                        <input className="w-full h-14 pl-5 pr-4 rounded-full bg-surface-dark border border-border-dark text-white placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [color-scheme:dark]" type="date" />
                                        {/* <!-- Icon is hidden on date inputs in some browsers, positioned absolute for decoration if needed, generally browser default is fine with color-scheme dark --> */}
                                    </div>
                                </label>
                                {/* <!-- Estimated Time --> */}
                                <label className="flex flex-col gap-2 md:col-span-2">
                                    <span className="text-white text-sm font-medium ml-1">Estimated Duration</span>
                                    <div className="flex gap-3 items-center">
                                        <div className="relative flex-1">
                                            <input className="w-full h-14 pl-5 pr-12 rounded-full bg-surface-dark border border-border-dark text-white placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" min="0" placeholder="0" type="number" />
                                            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-text-muted text-sm font-semibold">HR</span>
                                        </div>
                                        <div className="relative flex-1">
                                            <input className="w-full h-14 pl-5 pr-12 rounded-full bg-surface-dark border border-border-dark text-white placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" max="59" min="0" placeholder="00" type="number" />
                                            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-text-muted text-sm font-semibold">MIN</span>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            {/* <!-- Priority Toggle --> */}
                            <div className="flex items-center justify-between p-1 pl-2">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">flag</span>
                                    <span className="text-white font-medium">Mark as High Priority</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input className="sr-only peer" type="checkbox" value="" />
                                    <div className="w-11 h-6 bg-surface-dark border border-border-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-text-muted after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary/20 peer-checked:after:bg-primary peer-checked:border-primary"></div>
                                </label>
                            </div>
                        </form>
                    </div>
                    {/* <!-- Modal Footer --> */}
                    <div className="p-8 pt-4 border-t border-white/5 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 bg-[#1a2118]">
                        <button className="w-full sm:w-auto h-12 px-8 rounded-full border border-border-dark text-white hover:bg-white/5 font-semibold transition-colors focus:ring-2 focus:ring-white/20">
                            Cancel
                        </button>
                        <button className="w-full sm:w-auto h-12 px-8 rounded-full bg-primary text-black hover:bg-[#3cd610] font-bold shadow-[0_0_15px_rgba(70,236,19,0.3)] hover:shadow-[0_0_25px_rgba(70,236,19,0.5)] transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[20px] font-bold">add</span>
                            Create Task
                        </button>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default TaskForms
