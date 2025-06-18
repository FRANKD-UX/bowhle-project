import React from 'react';
import './Footer.css';
import {
    Linkedin,
    Github,
    Instagram,
    Mail,
    Phone,
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Background Lighting */}
            <div className="background-lighting" aria-hidden="true">
                <div id="wrap" className="h-full">
                    <div className="lighting-container">
                        <section id="one" className="h-full"></section>
                        <section id="two" className="h-full"></section>
                        <section id="three" className="h-full"></section>
                        <section id="four" className="h-full"></section>
                        <section id="five" className="h-full"></section>
                    </div>
                </div>
            </div>

            {/* Footer Layout Content */}
            <div className="footer-content">
                {/* Useful Links */}
                <div className="footer-column">
                    <h2 className="text-xl font-semibold text-white">Useful Links</h2>
                    <ul className="text-gray-300">
                        <li><a href="/about" className="hover:text-white flex items-center gap-2">About</a></li>
                        <li><a href="/services" className="hover:text-white flex items-center gap-2">Services</a></li>
                        <li><a href="/portfolio" className="hover:text-white flex items-center gap-2">Portfolio</a></li>
                        <li><a href="/contact" className="hover:text-white flex items-center gap-2">Let's Connect</a></li>
                    </ul>
                </div>

                {/* Connect with Us */}
                <div className="footer-column footer-center">
                    <h2 className="text-xl font-semibold text-white">Connect with Us</h2>
                    <div className="social-links">
                        <a href="#" aria-label="LinkedIn" className="social-link"><Linkedin className="w-6 h-6" /></a>
                        <a href="#" aria-label="GitHub" className="social-link"><Github className="w-6 h-6" /></a>
                        <a href="#" aria-label="Instagram" className="social-link"><Instagram className="w-6 h-6" /></a>
                        <a href="#" aria-label="Email" className="social-link"><Mail className="w-6 h-6" /></a>
                        <a href="tel:+27782792747" aria-label="Call Us" className="social-link"><Phone className="w-6 h-6" /></a>
                        <a href="mailto:samie@bowhle.co.za" aria-label="Email Us" className="social-link"><Mail className="w-6 h-6" /></a>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="footer-column">
                    <h2 className="text-xl font-semibold text-white">Stay Updated</h2>
                    <p className="text-gray-300">Subscribe to our newsletter to receive the latest news and updates.</p>
                    <form>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input-field"
                        />
                        <button
                            type="submit"
                            className="submit-button"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Bowhle & FrankTech. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
