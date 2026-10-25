import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

export default function Home() {
  return (
    <>
<header className="navbar">

        <div className="container nav-container">


            

            <a href="#home" className="logo">

                <span className="logo-icon">♥</span>

                <span>
                    MedCare<span className="logo-plus">++</span>
                </span>

            </a>


            

            <nav>

                <ul className="nav-links">

                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#features">Features</a>
                    </li>

                    <li>
                        <a href="#how-it-works">How It Works</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    

                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>

                </ul>

            </nav>


            

            <div className="nav-actions">

                <a href="/login" className="login-btn">
                    Login
                </a>

                <a href="/login" className="nav-get-started">
                    Get Started
                </a>

            </div>


        </div>

    </header>



    

    <main>


        <section id="home" className="hero">

            <div className="container hero-container">


                

                <div className="hero-content">

                    <div className="hero-badge">

                        <span>●</span>

                        AI-Powered Cardiac Healthcare

                    </div>


                    <h1>

                        Smarter Care.
                        <br />

                        <span>Healthier Hearts.</span>

                    </h1>


                    <p>

                        MedCare++ is an intelligent cardiovascular
                        healthcare platform that monitors your heart,
                        predicts potential risks using AI, manages
                        medical records, and enables faster emergency
                        response.

                    </p>


                    

                    <div className="hero-buttons">

                        <a href="/login" className="primary-btn">

                            Get Started

                            <span>→</span>

                        </a>


                        <a href="#how-it-works" className="secondary-btn">

                            See How It Works

                        </a>

                    </div>


                    

                    <div className="hero-trust">

                        <div>

                            <strong>24/7</strong>

                            <span>
                                Health Monitoring
                            </span>

                        </div>


                        <div>

                            <strong>AI</strong>

                            <span>
                                Risk Prediction
                            </span>

                        </div>


                        <div>

                            <strong>SOS</strong>

                            <span>
                                Emergency Support
                            </span>

                        </div>

                    </div>


                </div>



                

                <div className="hero-visual">


                    <div className="health-card">


                        <div className="health-card-header">

                            <div>

                                <span>
                                    HEALTH OVERVIEW
                                </span>

                                <h3>
                                    Today's Health
                                </h3>

                            </div>


                            <div className="live-status">

                                <span></span>

                                Live

                            </div>

                        </div>



                        

                        <div className="heart-rate-card">

                            <div className="metric-icon heart">
                                ♥
                            </div>


                            <div className="metric-info">

                                <span>
                                    Heart Rate
                                </span>

                                <strong>
                                    72
                                    <small>BPM</small>
                                </strong>

                            </div>


                            <div className="normal">
                                Normal
                            </div>

                        </div>



                        

                        <div className="ecg-preview">

                            <div className="ecg-line"></div>

                        </div>



                        

                        <div className="health-metrics">


                            <div className="small-metric">

                                <div className="metric-icon oxygen">
                                    ◉
                                </div>

                                <div>

                                    <span>
                                        Blood Oxygen
                                    </span>

                                    <strong>
                                        98%
                                    </strong>

                                </div>

                            </div>



                            <div className="small-metric">

                                <div className="metric-icon pressure">
                                    +
                                </div>

                                <div>

                                    <span>
                                        Blood Pressure
                                    </span>

                                    <strong>
                                        120/80
                                    </strong>

                                </div>

                            </div>


                        </div>



                        

                        <div className="ai-health-card">

                            <div className="ai-symbol">
                                ✦
                            </div>

                            <div>

                                <span>
                                    AI Risk Assessment
                                </span>

                                <strong>
                                    Low Risk
                                </strong>

                            </div>

                            <span className="ai-confidence">
                                98%
                            </span>

                        </div>


                    </div>


                </div>


            </div>

        </section>



        

        <section id="features" className="features-section">


            <div className="container">


                <div className="section-heading">

                    <span>
                        POWERFUL FEATURES
                    </span>

                    <h2>
                        Everything You Need for
                        <br />
                        Better Heart Health
                    </h2>

                    <p>

                        MedCare++ combines AI, real-time monitoring,
                        emergency response and secure medical records
                        into one intelligent healthcare platform.

                    </p>

                </div>



                <div className="features-grid">


                    

                    <div className="feature-card">

                        <div className="feature-icon blue">
                            ♥
                        </div>

                        <h3>
                            Real-Time Monitoring
                        </h3>

                        <p>

                            Continuously monitor heart rate,
                            blood oxygen, blood pressure and
                            other vital health parameters.

                        </p>

                        <a href="/heart-monitor">
                            Explore Monitoring →
                        </a>

                    </div>



                    

                    <div className="feature-card">

                        <div className="feature-icon purple">
                            ✦
                        </div>

                        <h3>
                            AI Risk Prediction
                        </h3>

                        <p>

                            AI analyzes your health patterns
                            and identifies potential cardiovascular
                            risks before they become serious.

                        </p>

                        <a href="/login">
                            Explore AI →
                        </a>

                    </div>



                    

                    <div className="feature-card">

                        <div className="feature-icon red">
                            !
                        </div>

                        <h3>
                            Emergency Response
                        </h3>

                        <p>

                            Quickly connect patients with
                            emergency responders and caregivers
                            during critical situations.

                        </p>

                        <a href="/login">
                            Emergency Support →
                        </a>

                    </div>



                    

                    <div className="feature-card">

                        <div className="feature-icon green">
                            ▣
                        </div>

                        <h3>
                            Medical Records
                        </h3>

                        <p>

                            Keep important medical information
                            organized and accessible for doctors
                            and patients.

                        </p>

                        <a href="/login">
                            Manage Records →
                        </a>

                    </div>



                    

                    <div className="feature-card">

                        <div className="feature-icon orange">
                            ⚕
                        </div>

                        <h3>
                            Doctor Connectivity
                        </h3>

                        <p>

                            Connect patients with healthcare
                            professionals for better diagnosis
                            and personalized care.

                        </p>

                        <a href="/login">
                            Find Doctors →
                        </a>

                    </div>



                    

                    <div className="feature-card">

                        <div className="feature-icon cyan">
                            🔒
                        </div>

                        <h3>
                            Secure Health Data
                        </h3>

                        <p>

                            Keep your sensitive healthcare
                            information protected with secure
                            digital records.

                        </p>

                        <a href="/login">
                            Learn More →
                        </a>

                    </div>


                </div>


            </div>


        </section>



        

        <section id="how-it-works" className="how-section">


            <div className="container">


                <div className="section-heading">

                    <span>
                        HOW IT WORKS
                    </span>

                    <h2>
                        Your Health. One Intelligent Platform.
                    </h2>

                    <p>

                        MedCare++ brings monitoring, prediction
                        and emergency support together in a
                        simple four-step process.

                    </p>

                </div>



                <div className="steps">


                    

                    <div className="step">

                        <div className="step-number">
                            01
                        </div>

                        <div className="step-icon">
                            ♙
                        </div>

                        <h3>
                            Create Your Profile
                        </h3>

                        <p>

                            Register securely and add your
                            basic health information.

                        </p>

                    </div>



                    

                    <div className="step">

                        <div className="step-number">
                            02
                        </div>

                        <div className="step-icon">
                            ♥
                        </div>

                        <h3>
                            Monitor Your Health
                        </h3>

                        <p>

                            Track important cardiovascular
                            health parameters in real time.

                        </p>

                    </div>



                    

                    <div className="step">

                        <div className="step-number">
                            03
                        </div>

                        <div className="step-icon">
                            ✦
                        </div>

                        <h3>
                            AI Predicts Risk
                        </h3>

                        <p>

                            AI analyzes your health data
                            and identifies potential risks.

                        </p>

                    </div>



                    

                    <div className="step">

                        <div className="step-number">
                            04
                        </div>

                        <div className="step-icon">
                            !
                        </div>

                        <h3>
                            Get Timely Help
                        </h3>

                        <p>

                            Receive alerts and connect with
                            emergency support when required.

                        </p>

                    </div>


                </div>


            </div>


        </section>



        

        <section id="about" className="about-section">


            <div className="container about-container">


                <div className="about-content">

                    <span className="section-label">
                        WHY MEDCARE++
                    </span>

                    <h2>
                        Healthcare That
                        <span>Thinks Ahead.</span>
                    </h2>

                    <p>

                        Traditional healthcare often reacts after
                        symptoms become serious. MedCare++ focuses
                        on prevention by combining continuous
                        monitoring, AI-powered prediction and
                        rapid emergency response.

                    </p>


                    <div className="about-points">

                        <div>

                            <span className="check">
                                ✓
                            </span>

                            <p>
                                Early detection of cardiovascular risks
                            </p>

                        </div>


                        <div>

                            <span className="check">
                                ✓
                            </span>

                            <p>
                                Continuous health monitoring
                            </p>

                        </div>


                        <div>

                            <span className="check">
                                ✓
                            </span>

                            <p>
                                Faster emergency intervention
                            </p>

                        </div>


                        <div>

                            <span className="check">
                                ✓
                            </span>

                            <p>
                                Centralized medical information
                            </p>

                        </div>

                    </div>


                    <a href="/login" className="primary-btn">
                        Start Your Health Journey →
                    </a>

                </div>



                

                <div className="about-visual">


                    <div className="about-card main-about-card">

                        <div className="about-card-icon">
                            ♥
                        </div>

                        <h3>
                            Intelligent Cardiac Care
                        </h3>

                        <p>
                            Monitor. Predict. Protect.
                        </p>

                    </div>


                    <div className="floating-card card-one">

                        <strong>
                            24/7
                        </strong>

                        <span>
                            Monitoring
                        </span>

                    </div>


                    <div className="floating-card card-two">

                        <strong>
                            AI
                        </strong>

                        <span>
                            Powered
                        </span>

                    </div>


                </div>


            </div>


        </section>



        

        <section className="cta-section">


            <div className="container cta-container">


                <div>

                    <span>
                        TAKE CONTROL OF YOUR HEART HEALTH
                    </span>

                    <h2>
                        Your Heart Deserves
                        Smarter Care.
                    </h2>

                    <p>

                        Start monitoring your cardiovascular
                        health with MedCare++ today.

                    </p>

                </div>


                <a href="/login" className="cta-btn">

                    Get Started

                    <span>→</span>

                </a>


            </div>


        </section>


    </main>



    

    <footer className="footer">


        <div className="container footer-container">


            <div className="footer-brand">

                <a href="#home" className="logo">

                    <span className="logo-icon">♥</span>

                    MedCare<span className="logo-plus">++</span>

                </a>

                <p>

                    AI-powered cardiovascular healthcare
                    for a healthier tomorrow.

                </p>

            </div>


            <div className="footer-links">

                <div>

                    <h4>
                        Platform
                    </h4>

                    <a href="#features">
                        Features
                    </a>

                    <a href="/dashboard">
                        Dashboard
                    </a>

                    <a href="/heart-monitor">
                        Heart Monitor
                    </a>

                </div>


                <div>

                    <h4>
                        Account
                    </h4>

                    <a href="/login">
                        Login
                    </a>

                    <a href="/login">
                        Register
                    </a>

                    <a href="/dashboard">
                        Dashboard
                    </a>

                </div>


                <div>

                    <h4>
                        Information
                    </h4>

                    <a href="#about">
                        About
                    </a>

                    <a href="#how-it-works">
                        How It Works
                    </a>

                    <a href="#features">
                        Features
                    </a>

                </div>

            </div>


        </div>


        <div className="footer-bottom">

            <div className="container">

                <p>
                    © 2026 MedCare++. All rights reserved.
                </p>

                <p>
                    AI-powered cardiac healthcare platform
                </p>

            </div>

        </div>


    </footer>
    </>
  );
}
