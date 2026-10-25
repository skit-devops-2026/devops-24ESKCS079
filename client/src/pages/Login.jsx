import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault(); setMessage(''); setBusy(true);
    const form = event.currentTarget;
    const email = form.querySelector('#email')?.value?.trim();
    const password = form.querySelector('#password')?.value;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/auth/login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed.');
      localStorage.setItem('medcare_token', data.token);
      localStorage.setItem('medcare_user', JSON.stringify(data.user));
      window.location.assign('/dashboard');
    } catch (error) { setMessage(error.message || 'Unable to connect to the server.'); }
    finally { setBusy(false); }
  }
  return (
    <>
<main className="min-h-screen grid lg:grid-cols-2">


        

        <section className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-12 items-center">

            <div className="max-w-lg mx-auto">

                

                <div className="text-3xl font-bold mb-16">

                    ❤️ MedCare++

                </div>


                

                <p className="uppercase tracking-widest text-teal-100 font-semibold mb-4">

                    AI-Powered Healthcare

                </p>


                <h1 className="text-5xl font-bold leading-tight">

                    Your Health.
                    <span className="block text-cyan-100">
                        Our Priority.
                    </span>

                </h1>


                <p className="mt-6 text-lg text-teal-50 leading-relaxed">

                    Access your personalized cardiac health dashboard,
                    monitor your vitals and stay connected with smarter
                    healthcare.

                </p>


                

                <div className="mt-10 space-y-5">

                    <div className="flex items-center gap-4">

                        <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-xl">

                            ❤️

                        </div>

                        <div>

                            <h3 className="font-semibold">

                                AI Cardiac Prediction

                            </h3>

                            <p className="text-sm text-teal-100">

                                Early risk detection

                            </p>

                        </div>

                    </div>


                    <div className="flex items-center gap-4">

                        <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-xl">

                            📊

                        </div>

                        <div>

                            <h3 className="font-semibold">

                                Real-Time Monitoring

                            </h3>

                            <p className="text-sm text-teal-100">

                                Track your vital health data

                            </p>

                        </div>

                    </div>


                    <div className="flex items-center gap-4">

                        <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-xl">

                            🚑

                        </div>

                        <div>

                            <h3 className="font-semibold">

                                Emergency Support

                            </h3>

                            <p className="text-sm text-teal-100">

                                Quick SOS response

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>



        

        <section className="flex items-center justify-center px-6 py-12 sm:px-10">

            <div className="w-full max-w-md">


                

                <div className="lg:hidden text-center mb-10">

                    <a
                        href="/" className="text-3xl font-bold text-teal-600">

                        ❤️ MedCare++

                    </a>

                </div>


                

                <div className="mb-8">

                    <p className="text-teal-600 font-semibold mb-2">

                        WELCOME BACK

                    </p>

                    <h2 className="text-4xl font-bold text-slate-900">

                        Login to your account

                    </h2>

                    <p className="text-slate-500 mt-3">

                        Access your MedCare++ health dashboard.

                    </p>

                </div>



                

                <form
                    id="loginForm" className="space-y-5">


                    

                    <div>

                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">

                            Email Address

                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition" />

                    </div>



                    

                    <div>

                        <div className="flex justify-between items-center mb-2">

                            <label htmlFor="password" className="block text-sm font-semibold text-slate-700">

                                Password

                            </label>

                            <a
                                href="#" className="text-sm text-teal-600 hover:text-teal-700 font-medium">

                                Forgot Password?

                            </a>

                        </div>


                        <div className="relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required className="w-full px-4 py-3.5 pr-12 rounded-xl border border-slate-300 bg-white outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition" />


                            <button
                                type="button"
                                id="togglePassword"
                            type="button"
                            onClick={() => setShowPassword(v => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-teal-600">

                                👁️

                            </button>

                        </div>

                    </div>



                    

                    <div className="flex items-center gap-2">

                        <input
                            type="checkbox"
                            id="remember" className="w-4 h-4 accent-teal-600" />

                        <label htmlFor="remember" className="text-sm text-slate-600">

                            Remember me

                        </label>

                    </div>



                    

                    <button
                        type="submit" className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-lg shadow-teal-100 hover:shadow-xl transition duration-300">

                        {busy ? "Signing in…" : "Login to MedCare++"}

                    </button>


                    

                    <p
                        id="loginMessage" className="hidden text-center text-sm font-medium">
                    </p>

                {message && <p role="alert" className="text-red-500">{message}</p>}
                </form>



                

                <div className="flex items-center gap-4 my-8">

                    <div className="h-px bg-slate-200 flex-1"></div>

                    <span className="text-sm text-slate-400">
                        OR
                    </span>

                    <div className="h-px bg-slate-200 flex-1"></div>

                </div>



                

                <p className="text-center text-slate-600">

                    Don't have an account?

                    <a
                        href="#" className="text-teal-600 font-semibold hover:text-teal-700">

                        Create Account

                    </a>

                </p>



                

                <div className="text-center mt-8">

                    <a
                        href="/" className="text-sm text-slate-500 hover:text-teal-600 transition">

                        ← Back to MedCare++

                    </a>

                </div>

            </div>

        </section>

    </main>
    </>
  );
}
