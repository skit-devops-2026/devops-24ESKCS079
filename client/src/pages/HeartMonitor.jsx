import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/heart-monitor.css';

export default function HeartMonitor() {
  return (
    <>
<aside className="sidebar">

        <div className="logo">
            <span>❤</span> MedCare++
        </div>

        <div className="profile">

            <div className="profile-img">
                KB
            </div>

            <div>
                <h4>Kanika</h4>
                <p>Patient</p>
            </div>

        </div>


        <nav className="side-nav">

            <a href="/dashboard">
                <span>⌂</span>
                Dashboard
            </a>

            <a href="#" className="active">
                <span>♥</span>
                Heart Monitor
            </a>

            <a href="#">
                <span>✦</span>
                AI Prediction
            </a>

            <a href="#">
                <span>▥</span>
                Health Analytics
            </a>

            <a href="#">
                <span>▣</span>
                Medical Records
            </a>

            <a href="#">
                <span>⚕</span>
                Doctors
            </a>

            <a href="#">
                <span>⚙</span>
                Settings
            </a>

        </nav>


        <div className="emergency-box">

            <div className="emergency-icon">
                !
            </div>

            <h4>Emergency?</h4>

            <p>
                Need immediate medical assistance?
            </p>

            <button>
                SOS Emergency
            </button>

        </div>


        <div className="logout">

            <a href="/login">
                ← Logout
            </a>

        </div>

    </aside>


    

    <main className="main-content">


        

        <header className="topbar">

            <div>

                <p className="page-label">
                    HEALTH MONITORING
                </p>

                <h1>
                    Heart Monitor
                </h1>

                <p className="subtitle">
                    Monitor your heart activity in real time.
                </p>

            </div>


            <div className="top-actions">

                <div className="monitor-status">

                    <span className="live-dot"></span>

                    Live Monitoring

                </div>


                <div className="user-avatar">
                    KB
                </div>

            </div>

        </header>


        

        <section className="main-monitor">

            <div className="monitor-header">

                <div>

                    <p>LIVE HEART RATE</p>

                    <h2>
                        Current Heart Activity
                    </h2>

                </div>

                <button className="time-btn">
                    Real Time ▾
                </button>

            </div>


            <div className="heart-value">

                <div className="heart-icon">
                    ♥
                </div>

                <div>

                    <strong>
                        72
                    </strong>

                    <span>
                        BPM
                    </span>

                    <p>
                        Normal resting heart rate
                    </p>

                </div>

            </div>


            

            <div className="ecg-container">

                <div className="ecg-grid"></div>

                <div className="ecg-line"></div>

            </div>


            <div className="ecg-info">

                <span>60 BPM</span>

                <span>
                    ECG • LIVE
                </span>

                <span>100 BPM</span>

            </div>

        </section>


        

        <section className="metrics-grid">


            <div className="metric-card">

                <div className="metric-icon blue">
                    ♥
                </div>

                <div>

                    <p>Average Heart Rate</p>

                    <h2>
                        74 <small>BPM</small>
                    </h2>

                    <span className="positive">
                        ↓ 3% from yesterday
                    </span>

                </div>

            </div>


            <div className="metric-card">

                <div className="metric-icon green">
                    ◉
                </div>

                <div>

                    <p>Blood Oxygen</p>

                    <h2>
                        98 <small>%</small>
                    </h2>

                    <span className="positive">
                        ● Optimal
                    </span>

                </div>

            </div>


            <div className="metric-card">

                <div className="metric-icon purple">
                    +
                </div>

                <div>

                    <p>Blood Pressure</p>

                    <h2>
                        120/80
                    </h2>

                    <span className="positive">
                        ● Normal
                    </span>

                </div>

            </div>


            <div className="metric-card">

                <div className="metric-icon orange">
                    ◷
                </div>

                <div>

                    <p>Monitoring Time</p>

                    <h2>
                        08:42
                    </h2>

                    <span>
                        Hours today
                    </span>

                </div>

            </div>

        </section>


        

        <section className="content-grid">


            

            <div className="panel">

                <div className="panel-header">

                    <div>

                        <p>HEART RATE HISTORY</p>

                        <h2>
                            Today's Activity
                        </h2>

                    </div>

                    <button className="time-btn">
                        Today ▾
                    </button>

                </div>


                <div className="history-chart">

                    <div className="y-axis">

                        <span>100</span>
                        <span>90</span>
                        <span>80</span>
                        <span>70</span>
                        <span>60</span>

                    </div>


                    <div className="chart-area">

                        <div className="chart-line"></div>

                        <div className="chart-point p1"></div>
                        <div className="chart-point p2"></div>
                        <div className="chart-point p3"></div>
                        <div className="chart-point p4"></div>
                        <div className="chart-point p5"></div>
                        <div className="chart-point p6"></div>
                        <div className="chart-point p7"></div>

                    </div>

                </div>


                <div className="chart-time">

                    <span>6 AM</span>
                    <span>9 AM</span>
                    <span>12 PM</span>
                    <span>3 PM</span>
                    <span>6 PM</span>

                </div>

            </div>


            

            <div className="panel status-panel">

                <div className="panel-header">

                    <div>

                        <p>DEVICE STATUS</p>

                        <h2>
                            Monitoring Status
                        </h2>

                    </div>

                </div>


                <div className="device-status">

                    <div className="device-icon">
                        ♥
                    </div>

                    <div>

                        <strong>
                            Heart Sensor
                        </strong>

                        <p>
                            Connected
                        </p>

                    </div>

                    <span className="connected">
                        ●
                    </span>

                </div>


                <div className="device-status">

                    <div className="device-icon">
                        ◉
                    </div>

                    <div>

                        <strong>
                            Oxygen Sensor
                        </strong>

                        <p>
                            Connected
                        </p>

                    </div>

                    <span className="connected">
                        ●
                    </span>

                </div>


                <div className="device-status">

                    <div className="device-icon">
                        + 
                    </div>

                    <div>

                        <strong>
                            BP Monitor
                        </strong>

                        <p>
                            Connected
                        </p>

                    </div>

                    <span className="connected">
                        ●
                    </span>

                </div>


                <div className="battery">

                    <div>

                        <span>
                            Device Battery
                        </span>

                        <strong>
                            87%
                        </strong>

                    </div>

                    <div className="battery-bar">

                        <div></div>

                    </div>

                </div>

            </div>

        </section>


        

        <section className="health-note">

            <div className="note-icon">
                ✦
            </div>

            <div>

                <h3>
                    Everything looks normal
                </h3>

                <p>
                    Your current heart rate and vital signs
                    are within the healthy range. MedCare++
                    will notify you and your emergency contacts
                    if an abnormal pattern is detected.
                </p>

            </div>

        </section>


        <footer>

            <span>
                © 2026 MedCare++
            </span>

            <span>
                AI-powered cardiac healthcare
            </span>

        </footer>


    </main>
    </>
  );
}
