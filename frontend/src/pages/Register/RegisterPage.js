// import React, { useState } from 'react';


// const RegisterPage = () => {
  


//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={e => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={Email}
//           onChange={e => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           required
//         />
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;

import React,{useState} from 'react'
import { register } from '../../services/authService';
import { useNavigate , Link} from 'react-router-dom';

function RegisterPage() {
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (password.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    if (!hasUpperCase) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowerCase) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!hasNumber) {
      return "Password must contain at least one number.";
    }
    if (!hasSpecialChar) {
      return "Password must contain at least one special character (!@#$%^&*).";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validatePassword(password);
    if (error) {
      // alert(error); 
      setError(error);
      return;
    }

    try {
      const result = await register({ name, Email, password });
      console.log("Registered:", result);
    } catch (err) {
      console.error(err);
    }
  };

  // Passord confirm

  return (
    // <div className="bg-background-light bg-background-dark font-display text-slate-900 text-white antialiased selection:bg-primary selection:text-background-dark">
    <div className="bg-background-dark font-display text-slate-900 text-white antialiased selection:bg-primary selection:text-background-dark">
      <div className="min-h-screen w-full flex">
        {/* <!-- Left Section: Form --> */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-20 xl:px-32 relative z-10">
          {/* <!-- Logo --> */}
          <div className="absolute top-8 left-6 lg:left-20 flex items-center gap-3 text-slate-900 text-white">
            <div className="size-8 text-primary">
              <svg className="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_543)">
                  <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                  <path clip-rule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fill-rule="evenodd"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_543"><rect fill="white" height="48" width="48"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">StudyFocus</h2>
          </div>
          {/* <!-- Content Container --> */}
          <div className="w-full max-w-[480px] mx-auto flex flex-col gap-6">
            {/* <!-- Heading --> */}
            <div className="flex flex-col gap-2">
              <h1 className="text-slate-900 text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                Create your account
              </h1>
              <p className="text-slate-500 text-[#a3b99d] text-base font-medium leading-normal">
                Join thousands of students improving their productivity.
              </p>
            </div>
            {/* <!-- Social Login --> */}
            <button className="flex w-full items-center justify-center gap-3 rounded-full h-14 bg-white bg-[#1e271c] border border-slate-200 border-[#2c3928] hover:bg-slate-50 hover:bg-[#2c3928] transition-colors group">
              <img alt="Google Logo" className="w-6 h-6" data-alt="Google G logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7zimbTUOJFEF92MK5Jsi6nL6R6IiiETmkg24Luy9IiKtLTNjTWisshpYlMWRv2C8Vicjh-iF0qH0CEFMtD4beEmvolaZK_5LtYG_yX6LyhauYt4ncH5j90iNLRuizOwHVgtvm0mkFZQZ7UwTEztzj808aElZFY6Zzv2nVB3Jcz1CtCD8-uwCKVTe1IWq99lj6GPx36CNbChcjYfnks_bwCLgHuNC2J6dtW0T6aAPZ3dNJJ6tchARrEQV8hXqTSgmTYXjuHqCoJWg" />
              <span className="text-slate-900 text-white text-base font-bold">Sign up with Google</span>
            </button>
            {/* <!-- Divider --> */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-200 border-[#2c3928]"></div>
              <span className="flex-shrink-0 mx-4 text-slate-400 text-[#5f745a] text-sm font-medium">Or continue with email</span>
              <div className="flex-grow border-t border-slate-200 border-[#2c3928]"></div>
            </div>
            {/* <!-- Form --> */}
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* <!-- Name Field --> */}
              <label className="flex flex-col flex-1">
                <p className="text-slate-900 text-white text-base font-medium leading-normal pb-2">Full Name</p>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 text-white focus:outline-0 focus:ring-0 border border-slate-200 border-[#41543b] bg-white bg-[#1e271c] focus:border-primary h-14 placeholder:text-slate-400 placeholder:text-[#a3b99d] p-[15px] text-base font-normal leading-normal transition-all"
                  placeholder="John Doe" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              {/* <!-- Email Field --> */}
              <label className="flex flex-col flex-1">
                <p className="text-slate-900 text-white text-base font-medium leading-normal pb-2">Email Address</p>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 text-white focus:outline-0 focus:ring-0 border border-slate-200 border-[#41543b] bg-white bg-[#1e271c] focus:border-primary h-14 placeholder:text-slate-400 placeholder:text-[#a3b99d] p-[15px] text-base font-normal leading-normal transition-all" 
                  placeholder="student@example.com" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              {/* <!-- Password Field --> */}
              <label className="flex flex-col flex-1">
                <p className="text-slate-900 text-white text-base font-medium leading-normal pb-2">Password</p>
                <div className="relative">
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 text-white focus:outline-0 focus:ring-0 border border-slate-200 border-[#41543b] bg-white bg-[#1e271c] focus:border-primary h-14 placeholder:text-slate-400 placeholder:text-[#a3b99d] p-[15px] text-base font-normal leading-normal transition-all pr-12" 
                  placeholder="Min. 8 characters" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[#a3b99d] cursor-pointer hover:text-primary">visibility_off</span>
                </div>
              </label>
              {/* <!-- Confirm Password/ Field --> */}
              <label className="flex flex-col flex-1">
                <p className="text-slate-900 text-white text-base font-medium leading-normal pb-2">Confirm Password</p>
                <div className="relative">
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 text-white focus:outline-0 focus:ring-0 border border-slate-200 border-[#41543b] bg-white bg-[#1e271c] focus:border-primary h-14 placeholder:text-slate-400 placeholder:text-[#a3b99d] p-[15px] text-base font-normal leading-normal transition-all pr-12" 
                  placeholder="Re-enter password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[#a3b99d] cursor-pointer hover:text-primary">visibility_off</span>
                </div>
              </label>
              {/* <!-- Submit Button --> */}
              <button className="mt-2 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 bg-primary hover:bg-[#3bdb0f] transition-colors text-background-dark text-base font-bold leading-normal tracking-[0.015em]" type="submit">
                Sign Up
              </button>
            </form>
            {/* <!-- Footer Link --> */}
            <p className="text-center text-slate-500 text-[#a3b99d] text-sm">
              Already have an account?
              <a className="text-primary font-bold hover:underline ml-1"><Link to="/login">Log In</Link></a>
            </p>
          </div>
        </div>
        {/* <!-- Right Section: Visual Image --> */}
        {/* <!-- Hidden on mobile, visible on lg screens --> */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-surface-dark p-4">
          <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
            {/* <!-- Image with data-alt --> */}
            <div className="absolute inset-0 bg-cover bg-center" data-alt="A focused student working on a laptop in a modern library with soft lighting" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBO8yN1ds_ai0k6Aru1MMgtgaxv8oj31KzepzcF9pvGdCgSaMDWTO1dBcPb-hvVNNrCQq4vViw5Re1c5U4zhPsatfChGhoDxw8gzuigkIBKUXXRvoX2ldmOgMOe2UDMCizS7G2fmCyKPHDQzZMMmOU73eSXrGYc9rDUDIgTiEllFS7cSgIP6wXt8BAA_3qldbp6SspXeAQRbguNS1YeYVdwNcLRiMX6TlSfXWTBuI4vhWTgc4U86ZXix_F2Cnj2joA4ICiDo5Arqg')"}}>
            </div>
            {/* <!-- Dark Overlay Gradient --> */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>
            {/* <!-- Text Overlay --> */}
            <div className="absolute bottom-12 left-12 right-12">
              <div className="max-w-md">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-primary/20 backdrop-blur-sm mb-6 text-primary">
                  <span className="material-symbols-outlined">timer</span>
                </div>
                <p className="text-white text-3xl font-bold leading-tight tracking-tight mb-4">
                  "The key to success is to focus on goals, not obstacles."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-primary rounded-full"></div>
                  <p className="text-slate-300 font-medium">Track your progress daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
