import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='p-10 bg-slate-900'>
            <div className='grid md:grid-cols-30 justify-between gap-6 mb-10'>
                <div className='col-span-9 '>
                    <h1 className='text-xl font-semibold mb-1'>Company Info</h1>
                    <p className=''>Import Export Hub is a modern online platform that connects global exporters and importers. Manage your exports, explore international products, and import what you love — all from one 
                        dashboard.</p>
                </div>

                <div className='col-span-4'>
                    <h1 className='text-xl font-semibold mb-1'>Quick Links</h1>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allProducts'>All Products</NavLink></li>
                        <li><NavLink to='/myExports'>My Exports</NavLink></li>
                        <li><NavLink to='/myImports'>My Imports</NavLink></li>
                        <li><NavLink to='/addExports'>Add Export</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink> / <NavLink to='/signup'>Register</NavLink> </li>
                    </ul>
                </div>

                <div className='col-span-6'>
                    <h1 className='text-xl font-semibold mb-1'>Contact Information</h1>
                    <p>📍 Address: 45/A Global Trade Center, Dhaka, Bangladesh</p>
                    <p>📞 Phone: +880 1780-456789</p>
                    <p>✉️ Email: support@importexporthub.com</p>
                </div>

                <div className='col-span-7'>
                    <h1 className='text-xl font-semibold mb-1'>Additional Info</h1>
                    <p>Business Hours:</p>
                    <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                    <p>Saturday: 10:00 AM – 4:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p>Trusted by over 10,000 global traders.</p>
                </div>

                <div className='col-span-4'>
                    <h1 className='text-xl font-semibold mb-1'>Social Links</h1>
                    <div className='flex gap-2'>
                        <FaFacebook size={20} />
                        <FaXTwitter size={20} />
                        <FaInstagramSquare size={20} />
                        <FaLinkedin size={20} />
                    </div>
                </div>
            </div>
            <p className='text-center border-t border-slate-600 pt-2'>© 2025 Import Export Hub. All rights reserved.</p>
        </footer>
    );
};

export default Footer;