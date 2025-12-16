import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden">
    {/* <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden"> */}
      {/* <!-- Top Navigation --> */}
      <div className="w-full flex justify-center sticky top-0 z-50 pt-5 px-4">
        <header className="flex items-center justify-between whitespace-nowrap border border-surface-border bg-surface-dark/90 backdrop-blur-md px-6 py-3 rounded-full w-full max-w-[960px] shadow-lg">
          <div className="flex items-center gap-3 text-white">
            <div className="size-6 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">StudyTime</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex items-center gap-6">
              <a className="text-gray-300 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#features">Features</a>
              <a className="text-gray-300 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#how-it-works">How it Works</a>
              <a className="text-gray-300 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#testimonials">Testimonials</a>
            </nav>
            <div className="flex gap-2">
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-transparent border border-surface-border text-white hover:bg-surface-border transition-all text-sm font-bold leading-normal tracking-[0.015em]" onClick={() => navigate('/login')}>
                <span className="truncate">Log In</span>
              </button>
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary hover:bg-[#3bdb0f] transition-all text-[#131811] text-sm font-bold leading-normal tracking-[0.015em]" onClick={() => navigate('/register')}>
                <span className="truncate">Sign Up</span>
              </button>
            </div>
          </div>
          {/* <!-- Mobile Menu Icon --> */}
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>
      </div>
      {/* <!-- Main Content Wrapper --> */}
      <main className="flex flex-col items-center w-full">
        {/* <!-- Hero Section --> */}
        <section className="w-full max-w-[1200px] px-4 md:px-10 py-12 md:py-20">
          <div className="@container">
            <div className="flex flex-col-reverse gap-10 lg:flex-row items-center">
              {/* <!-- Hero Content --> */}
              <div className="flex flex-col gap-6 lg:w-1/2 items-start text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-surface-border">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">Version 2.0 Now Live</span>
                </div>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                  Master Your Focus. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">Track Your Growth.</span>
                </h1>
                <p className="text-gray-400 text-lg font-normal leading-relaxed max-w-lg">
                  The intelligent study timer that adapts to your workflow. Set goals, track progress, and build better habits with our cyber-productivity tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                  <button className="flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-[#3bdb0f] hover:shadow-[0_0_20px_rgba(70,236,19,0.4)] transition-all text-[#131811] text-base font-bold">
                    <span>Start Tracking Free</span>
                  </button>
                  <button className="flex items-center justify-center rounded-full h-12 px-8 bg-surface-dark border border-surface-border text-white hover:bg-surface-border transition-all text-base font-bold gap-2 group">
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">play_circle</span>
                    <span>Watch Demo</span>
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-gray-600 bg-cover bg-center" data-alt="User avatar 1" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpQmwdKuv_-5Uoz1fNGpHTBnstj3aEvtHaKlnyFVQW5UoU9kFaaIOC65dGCDniXeg25J5zeAsFGoPcC5kiXgwiNWpTYpYkd8voAIW2u2G7Ff93OMMxnLO3hUs6LJ3rG_S0LV3JGDUNyFdcUNtqHvWuNZVpkX34qg4NVekM8lPxcG1NOORtJWw5N2oAQnV1UhYcIGVyrigzkmYkutqes78Fcb8ZUI7zZz_T2NlFDnsHv8b8lCDGZBTN0sIlsRXnnT6TCRuXa5wyRuo')"}}></div>
                    <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-gray-600 bg-cover bg-center" data-alt="User avatar 2" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGhso5Plc_Jekh0R53DJHXOp9TzbYPv4RzVHydsnHIZMMAps1vqF_kFAGVaxOFA7IxUWNXGbwn3WStqni4S0EYl28w6P9NjWKR2Nag3YnoOUbFHVwFj-ul-Ffzpc5KgSq3ua80KFJSwoXXAFhTs917e75FUwt-sv3OT9q2uG0L8d6nVEqiv_baGWc7Tea0QbsOgYC3drgcA9jIR9hEnDFeDc4T76YutKTPBlG-3Wa6QHqRQBAJyBcZvi_JcCg9t3ANvbWlaLXe4-o')"}}></div>
                    <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-gray-600 bg-cover bg-center" data-alt="User avatar 3" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZAlo_QVlcWVQbs1BQwZgBH_kzZM8nkf40Pj-Bw4n2atC_rHhd9IC6H4KKdwItorzNzyvfDh0jJg0cQyAoU5Q33hwigvs4WIspvQI4iD2e7b_E5cwAF1AV-d9R1NPY0VKY2Sn3UDNOw4hiKU_KiNp41SQpZJBw6jZUDb5YzpYnwSLz5WU2OCLaqDDhIHC-sQ7NgxD2MuKwOXryoOvO5aGkaHkjt5x_02Og6lNixaPTWW4_uAj9IvHKoT5tAEkX4ap_sCGNQGhONpg')"}}></div>
                  </div>
                  <p>Trusted by 10,000+ students</p>
                </div>
              </div>
              {/* <!-- Hero Image / Visual --> */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-surface-border shadow-2xl bg-surface-dark group">
                  {/* <!-- Abstract Dashboard UI Mockup --> */}
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-dark to-[#0f140d]"></div>
                  {/* <!-- Central Timer Circle --> */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-[6px] border-surface-border flex items-center justify-center bg-[#131811] shadow-[0_0_40px_rgba(0,0,0,0.5)] z-10">
                    <div className="absolute inset-0 rounded-full border-[6px] border-primary border-t-transparent border-r-transparent -rotate-45"></div>
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-wider">25:00</div>
                      <div className="text-sm text-primary uppercase tracking-widest mt-2 font-bold">Focus Mode</div>
                    </div>
                  </div>
                  {/* <!-- Floating Elements --> */}
                  <div className="absolute top-10 right-10 p-4 bg-surface-dark/80 backdrop-blur border border-surface-border rounded-xl shadow-lg z-20 animate-[float_4s_ease-in-out_infinite]">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <div>
                        <div className="text-xs text-gray-400">Task Completed</div>
                        <div className="text-sm font-bold text-white">Read Chapter 4</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-10 left-10 p-4 bg-surface-dark/80 backdrop-blur border border-surface-border rounded-xl shadow-lg z-20 animate-[float_5s_ease-in-out_infinite_1s]">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-yellow-500">local_fire_department</span>
                      <div>
                        <div className="text-xs text-gray-400">Current Streak</div>
                        <div className="text-sm font-bold text-white">4 Days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Features Section --> */}
        <section className="w-full bg-surface-dark border-y border-surface-border py-20" id="features">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4 text-center md:text-left max-w-3xl">
                <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Why StudyTime?</h2>
                <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                  Optimize Your Workflow <br />
                  <span className="text-gray-400 font-normal">Everything you need to stay focused.</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* <!-- Feature 1 --> */}
                <div className="group relative flex flex-col gap-4 rounded-2xl border border-surface-border bg-[#131811] p-6 hover:border-primary/50 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="w-12 h-12 rounded-full bg-surface-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{fontSize: 28}}>timer</span>
                  </div>
                  <div className="flex flex-col gap-2 relative z-10">
                    <h4 className="text-white text-xl font-bold">Pomodoro &amp; Flow</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Custom intervals for any study style. Adapt the timer to your specific needs, whether it's 25/5 or 50/10.</p>
                  </div>
                </div>
                {/* <!-- Feature 2 --> */}
                <div className="group relative flex flex-col gap-4 rounded-2xl border border-surface-border bg-[#131811] p-6 hover:border-primary/50 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="w-12 h-12 rounded-full bg-surface-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{fontSize: 28}}>bar_chart</span>
                  </div>
                  <div className="flex flex-col gap-2 relative z-10">
                    <h4 className="text-white text-xl font-bold">Visual Analytics</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">See exactly where your time goes with beautiful, high-contrast charts. Identify peak productivity hours.</p>
                  </div>
                </div>
                {/* <!-- Feature 3 --> */}
                <div className="group relative flex flex-col gap-4 rounded-2xl border border-surface-border bg-[#131811] p-6 hover:border-primary/50 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="w-12 h-12 rounded-full bg-surface-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined"  style={{fontSize: 28}}>emoji_events</span>
                  </div>
                  <div className="flex flex-col gap-2 relative z-10">
                    <h4 className="text-white text-xl font-bold">Goal Streaks</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Gamify your study routine to stay consistent. Earn badges and keep your daily streak alive.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Visualizer / Action Section --> */}
        <section className="w-full max-w-[1200px] px-4 md:px-10 py-20">
          <div className="relative overflow-hidden rounded-3xl bg-surface-dark border border-surface-border">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="flex flex-col md:flex-row items-stretch min-h-[400px]">
              {/* <!-- Text Content --> */}
              <div className="flex flex-col justify-center p-8 md:p-12 w-full md:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-xl">bolt</span>
                  <span className="text-primary font-bold uppercase tracking-wider text-sm">Instant Focus</span>
                </div>
                <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">See it in Action</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Distraction-free interface designed to keep you in the zone. Toggle dark mode, set ambient sounds, and start your session in seconds.
                </p>
                <button className="w-fit flex items-center justify-center rounded-full h-12 px-8 bg-white text-black hover:bg-gray-200 transition-all font-bold">
                  Try Demo Now
                </button>
              </div>
              {/* <!-- Image Content --> */}
              <div className="w-full md:w-1/2 min-h-[300px] md:min-h-auto relative bg-cover bg-center" data-alt="Laptop displaying code and productivity software in a dark room" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChcWoVFxt8ZvqosMAae5B7UEmzCwJdNwivyZyoECAzYpx768Xs9A5fuXjgcfNGYbtWVPBV_YfLlfDb0rmrJLCttTHXkBJ6lPVes5tFv5QKnJlhCNMR7QewwXmKvlC3eRUvulX1vHGEHz1QqdoA8Ml9IPqNs40U41xziMZFMwsgBIVOOprlUOpOtGV_Az-iS6z6qWBDwrK4ykE-FaOTsDEfg2s_Z90ADZQZTwc2JhRzqVqpt2pgRBxU5Wib0qAafzxWLsesWL2jnrU')"}}>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent md:bg-gradient-to-l"></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Testimonials Carousel --> */}
        <section className="w-full py-20 bg-[#131811]" id="testimonials">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10">
            <div className="text-center mb-12">
              <h2 className="text-white text-3xl font-bold">Community Success Stories</h2>
              <p className="text-gray-400 mt-2">Join thousands achieving their goals.</p>
            </div>
            <div className="flex overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory">
              <div className="flex gap-6 px-4">
                {/* <!-- Card 1 --> */}
                <div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-surface-dark border border-surface-border rounded-2xl p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cover bg-center" data-alt="Portrait of Alex M." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyx9K-7NH3UkWNf1BwA5K2I8nvnhA3pzxhDhYTFqGGkMFGoKluL9ByRJx2qV3zLiA0GcgNZ5REPCP-L3eR9lfMXK2EVL2SLAysxJOUDRLjjb_XdyX1oujdNFZJ_6B0BoPkmIeOUapfVQcP1-5ehB9beVa_ma7dnKSU4iiqCRlSAEzwOB0vhllSbyEoFspYJVIE0SSRQImmB0r0Rc2UaKmg5TDdD9x-Z75O1c91nsbI1zMr3fOHct4o3TjZQlMkerswBejFRbShb9g')"}}></div>
                    <div>
                      <p className="text-white font-bold">Alex M.</p>
                      <p className="text-gray-500 text-xs">Medical Student</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">"This app helped me ace my finals. The dark mode is perfect for late nights, and the streak feature keeps me accountable even when I'm tired."</p>
                  <div className="flex text-primary text-sm">
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                  </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-surface-dark border border-surface-border rounded-2xl p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cover bg-center" data-alt="Portrait of Sarah K." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdrXY7bzorG52St0YH6_yTqUYP3CRmRDJpIhp55KXUXllytcX5yLphl7IO7lfDyZcc65IhzcWkRfzzd4lvAiOGvWhPCdIUcdPhfzuCBbatnbpdn6hqzVXN5HYo9fENfHfXpAA_y0gJqWvvSAsxjccEhGT7b5JsWltXdv54qLmprcGA0WiBf5dh5N-YoQ_fe8se8017HsqlU36T5dIHeGCWYD2Tx_1FQBz-z5vwZJxXn8ASJPjJYDPzficrVpJ0JhnKLUU1o9nckaM')"}}></div>
                    <div>
                      <p className="text-white font-bold">Sarah K.</p>
                      <p className="text-gray-500 text-xs">Freelance Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">"I love the customizable timers. It fits my flow perfectly. I switch between 50 minute deep work sessions and quick 15 minute sprints."</p>
                  <div className="flex text-primary text-sm">
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                  </div>
                </div>
                {/* <!-- Card 3 --> */}
                <div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-surface-dark border border-surface-border rounded-2xl p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cover bg-center" data-alt="Portrait of David L." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGx3peYujBJZSDI-7GpAbo2-Y0qhiZJ7OH325qS_OXcdl-rpVr0j2LQwiJL_2R3OL-UwsIboxrup7AMnskBnPzhouYhp17UnolPHU0h6Vulx10-8YAzA47_30woYQ4rfgMCaPW5M9YWkOH_fHpy7xj9cyk9RDgRt-DE2aceT1xASvjUWMcTeZJ8cpv_Wkx8JBuv6i3P3lxhu1Tewy33AmULSRNQt3Emycsqx3JgXBCPsx1HPXD1bCLQ-sMe8X7gKjSp9ssESXQxN0')"}}></div>
                    <div>
                      <p className="text-white font-bold">David L.</p>
                      <p className="text-gray-500 text-xs">Researcher</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">"The analytics are a game changer. I know exactly when I'm most productive and can schedule my hardest tasks for those times."</p>
                  <div className="flex text-primary text-sm">
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star_half</span>
                  </div>
                </div>
                {/* <!-- Card 4 --> */}
                <div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-surface-dark border border-surface-border rounded-2xl p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cover bg-center" data-alt="Portrait of Emily R." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXczkrcWIDFMuLgGaQPnkATYviXpNc3S6I2_THOjgl7g9KSRPe6lOmtbM2vnasDjWmWXxEkF2xA0VQ04IrjxWG93tHPrEHW85ZEdYKrjZOKFvvM1DjyU-ucDczg6XwRx0tbw3nxtXAODzzUA85om2Xn7r1yAJ9gx1eLT4Htio0PFOfkM2dDwnQuj_O5c9GJaOJrH8z7dO4N60BosXQhOVL7YTN9yGv5qodPjOhhxeVRSrDbXFd1WfG3E23_DxoIyM6e2tV5rCOZAY')"}}></div>
                    <div>
                      <p className="text-white font-bold">Emily R.</p>
                      <p className="text-gray-500 text-xs">Law Student</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">"Simple, effective, and beautiful. It's the only productivity app I've actually stuck with for more than a month."</p>
                  <div className="flex text-primary text-sm">
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Footer --> */}
        <footer className="w-full border-t border-surface-border bg-surface-dark py-12">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="flex items-center gap-3 text-white">
                <div className="size-5 text-primary">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_footer)">
                      <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_footer"><rect fill="white" height="48" width="48"></rect></clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-bold">StudyTime</h2>
              </div>
              <p className="text-gray-500 text-sm text-center md:text-left">© 2024 StudyTime Inc. All rights reserved.</p>
            </div>
            <div className="flex gap-8 text-sm font-medium text-gray-400">
              <a className="hover:text-primary transition-colors" href="#">Privacy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms</a>
              <a className="hover:text-primary transition-colors" href="#">Contact</a>
            </div>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-surface-border flex items-center justify-center text-gray-400 hover:text-white hover:bg-surface-border transition-colors" href="#">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a className="w-10 h-10 rounded-full border border-surface-border flex items-center justify-center text-gray-400 hover:text-white hover:bg-surface-border transition-colors" href="#">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default HomePage
