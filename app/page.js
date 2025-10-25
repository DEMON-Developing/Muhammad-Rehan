'use client';

import { useState } from 'react';
import Image from 'next/image';
import './globals.css';
import QuizSection from './QuizSection';

const Portfolio = () => {
    const [status, setStatus] = useState('');
    const [copyStatus, setCopyStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('Sending...');
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus('Message sent successfully!');
                e.target.reset();
            } else {
                setStatus('Failed to send message: ' + data.message);
            }
        } catch (error) {
            setStatus('An error occurred.');
            console.error('Submission error:', error);
        }
    };

    const handleCopyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
            .then(() => {
                setCopyStatus('Link copied!');
                setTimeout(() => {
                    setCopyStatus('');
                }, 2000);
            })
            .catch(err => {
                setCopyStatus('Failed to copy link.');
                console.error('Copy failed:', err);
            });
    };

    return (
        <>
            <header className="hero">
                <div className="hero-content">
                    <Image
                        src="/BG.png"
                        alt="Muhammad Rehan - Profile Picture"
                        className="profile-pic"
                        width={200}
                        height={200}
                    />
                    <h1>Muhammad Rehan</h1>
                    <p>Web Developer</p>
                </div>
            </header>

            <main>
                <section className="about-me">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>About Me</h2>
                            <p>My name is Muhammad Rehan. I am from Kasur, Pakistan. I have a strong passion for programming, web design, etc. I am always ready to learn new skills and apply them to real-world projects. This website provides information about my skills. Contact me on **rehanchutto68@gamil.com**</p>
                        </div>
                    </div>
                </section>

                <section className="skills">
                    <h2>My Skills</h2>
                    <div className="skills-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Python</span>
                        <span>Web Developing</span>
                    </div>
                </section>

                <QuizSection />

                <section className="contact-me">
                    <h2>Contact Me</h2>
                    <p className="contact-info">My Address: Khara Chugi, Kasur, Pakistan</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="your-email@example.com" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                    {status && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{status}</p>}
                </section>
            </main>

            <footer>
                <div className="social-share">
                    {/* <a href="https://www.facebook.com/hafiz.atif.salfi?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                    </a> */}
                    <button onClick={handleCopyLink} className="copy-link-btn">
                        <i className="fa-solid fa-link"></i>
                    </button>
                </div>
                {copyStatus && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{copyStatus}</p>}
                <p>&copy; 2025 Muhammad Rehan. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Portfolio;