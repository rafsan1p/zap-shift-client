import React from 'react';
import Logo from '../../../components/Logo/Logo';

const navLinks = ['Services', 'Coverage', 'About Us', 'Pricing', 'Blog', 'Contact'];

const Footer = () => {
    return (
        <div className="bg-gray-100 px-4 sm:px-8 py-8">
            <footer className="max-w-[1200px] w-full mx-auto bg-[#111] rounded-2xl px-8 sm:px-16 py-12 text-white text-center">
                <div className="flex justify-center mb-4">
                    <Logo />
                </div>
                <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed mb-8">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>

                <div className="border-t border-dashed border-white/20 my-6"></div>

                <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/80 mb-6">
                    {navLinks.map(link => (
                        <a key={link} href="#" className="hover:text-white transition">{link}</a>
                    ))}
                </nav>

                <div className="border-t border-dashed border-white/20 my-6"></div>

                <div className="flex justify-center gap-3">
                    {/* LinkedIn */}
                    <a href="#" className="w-9 h-9 rounded-full bg-[#0077B5] flex items-center justify-center hover:opacity-80 transition">
                        <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    {/* X / Twitter */}
                    <a href="#" className="w-9 h-9 rounded-full bg-black border border-white/30 flex items-center justify-center hover:opacity-80 transition">
                        <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    {/* Facebook */}
                    <a href="#" className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition">
                        <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    {/* YouTube */}
                    <a href="#" className="w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition">
                        <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF0000"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
