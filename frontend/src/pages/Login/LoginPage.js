// import React from 'react'


// function LoginPage() {
//   const [Email, setEmail] = useState('');
//   const [password_hash, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await login(Email, password_hash);
//       console.log("Logged in:", result);
//       navigate('/dashboard');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={Email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password_hash}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account? <Link to="/register">Register here</Link>
//       </p>
//     </div>
//   );
// }

// export default LoginPage


import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../../services/authService';
function LoginPage() {
  const [Email, setEmail] = useState('');
  const [password_hash, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await login(Email, password_hash);
      console.log("Logged in:", result);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="bg-background-dark font-display text-slate-900 text-white min-h-screen flex flex-col overflow-x-hidden">
      {/* Background Pattern/Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* <!-- Subtle gradient blob behind the form --> */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>
      {/* <!-- Navigation --> */}
      <header className="relative z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-transparent border-border-dark px-6 py-4 lg:px-10">
        <div className="flex items-center gap-4 text-white">
          <div className="size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">timer</span>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">StudyTracker</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-9">
            <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">Features</a>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 border border-slate-200 border-border-dark hover:border-primary hover:border-primary text-slate-900 text-white hover:text-primary transition-all text-sm font-bold" onClick={() => navigate('/register')}>
            <span className="truncate">Sign Up</span>
          </button>
        </div>
      </header>
      {/* <!-- Main Content Area --> */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-10 w-full">
        <div className="w-full max-w-[480px] flex flex-col">
          {/* <!-- Header Section --> */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary">
              <span className="material-symbols-outlined text-4xl">lock_open</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.02em] mb-2 text-slate-900 text-white">
              Focus &amp; Track
            </h1>
            <p className="text-slate-500 text-text-subtle text-base md:text-lg font-normal">
              Log in to continue your study streak today.
            </p>
          </div>
          {/* <!-- Login Form --> */}
          <form className="flex flex-col gap-5 w-full bg-surface-dark/50 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border border-slate-200 border-border-dark shadow-xl shadow-none">
            {/* <!-- Email Field --> */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-bold pl-2" for="email">Email Address</label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-400 text-text-subtle material-symbols-outlined text-[20px]">mail</span>
                <input className="form-input flex w-full resize-none overflow-hidden rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#41543b] bg-[#1e271c] h-12 md:h-14 pl-11 pr-4 placeholder:text-[#a3b99d] text-base font-normal transition-all" id="email" placeholder="student@example.com" type="email" />
              </div>
            </div>
            {/* <!-- Password Field --> */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center pl-2 pr-1">
                <label className="text-slate-900 text-white text-sm font-bold" for="password">Password</label>
                <a className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors" href="#">Forgot Password?</a>
              </div>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-400 text-text-subtle material-symbols-outlined text-[20px]">key</span>
                <input className="form-input flex w-full resize-none overflow-hidden rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#41543b] bg-[#1e271c] h-12 md:h-14 pl-11 pr-12 placeholder:text-[#a3b99d] text-base font-normal transition-all" id="password" placeholder="•••••••••" type="password" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-slate-200 hover:bg-white/5 text-slate-400 text-[#a3b99d] transition-colors flex items-center justify-center" type="button">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>
            {/* <!-- Submit Button --> */}
            <button className="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 md:h-14 bg-primary hover:bg-primary/90 text-[#131811] text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-[0_0_20px_rgba(70,236,19,0.3)] hover:shadow-[0_0_30px_rgba(70,236,19,0.5)] transform hover:-translate-y-0.5" type="submit">
              <span className="truncate">Log In</span>
            </button>
            {/* <!-- Divider --> */}
            <div className="flex items-center gap-3 my-2">
              <div className="h-px flex-1 bg-slate-200 bg-border-dark"></div>
              <span className="text-slate-400 text-text-subtle text-xs font-medium uppercase tracking-wider">Or continue with</span>
              <div className="h-px flex-1 bg-slate-200 bg-border-dark"></div>
            </div>
            {/* <!-- Social Login --> */}
            <button className="flex w-full items-center justify-center gap-3 rounded-full h-12 border border-slate-200 border-border-dark bg-white bg-transparent hover:bg-slate-50 hover:bg-white/5 text-slate-700 text-white transition-all" type="button">
              <svg aria-hidden="true" className="h-5 w-5" viewbox="0 0 24 24"><path d="M12.0003 20.45c4.6667 0 8.45-3.7833 8.45-8.45 0-.4167-.0334-.8166-.1-1.2h-8.35v3.2334h4.7834c-.2167 1.1-.85 2.0333-1.8 2.6833l-.0162.1066 2.613 2.0252.181.0182c2.65-2.45 2.9166-6.8333 1.4-9.9166H12v-3.6H3.55c-1.5833 3.1167-.8833 7.0333 1.95 9.3833 2.5 2.0667 6.4 1.7334 6.5 1.7334z" fill="#4285F4"></path><path d="M3.55 8.5167C5.0667 4.9667 9.1834 3.0167 12.8334 4.05c1.7.4833 3.2 1.5166 4.25 2.9l2.6333-2.6333c-2-1.8667-4.6333-2.8834-7.4-2.8167C6.6334 1.6334 2.1667 5.0667.6834 10.3l2.8666-1.7833z" fill="#EA4335"></path><path d="M12 20.4501c-2.3667 0-4.6333-.95-6.2833-2.6167l-2.8667 1.7833C5.1 22.8834 8.65 24.0001 12 24.0001c3.0833 0 5.9666-.9667 8.35-2.7167l-2.6333-2.0333c-1.5834 1.0333-3.6667 1.3333-5.7167 1.2z" fill="#34A853"></path><path d="M5.7166 17.8332c-.75-2.2833-.75-4.7833 0-7.0666L2.85 8.9832c-1.8833 3.1334-1.8833 7.0834 0 10.2168l2.8666-1.3668z" fill="#FBBC05"></path></svg>
              <span className="text-sm font-semibold">Google</span>
            </button>
          </form>
          {/* <!-- Bottom Links --> */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-text-subtle text-sm">
              Don't have an account?
              <a className="text-slate-900 text-white font-bold hover:text-primary transition-colors ml-1"><Link to="/register">Sign Up Now</Link></a>
            </p>
          </div>
        </div>
      </main>
      {/* <!-- Simple footer text --> */}
      <footer className="py-6 text-center text-xs text-slate-400 text-white/20">
        © 2024 StudyTracker. Focus Better.
      </footer>
    </div>
  )
}

export default LoginPage
