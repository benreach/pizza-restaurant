'use client';

import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-red-500">Pizza Company</h2>
          <p className="mt-2 text-gray-400">Delicious pizza made with love, fresh ingredients, and a passion for flavor.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-red-400">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/menu" className="text-gray-300 hover:text-white">Menu</Link></li>
            <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            <li><Link href="/locations" className="text-gray-300 hover:text-white">Locations</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold text-red-400">Get in Touch</h3>
          <p className="text-gray-400 mt-2">123 Pizza Street, Food City, USA</p>
          <p className="text-gray-400">+1 (555) 123-4567</p>
          <p className="text-gray-400">contact@pizzacompany.com</p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter size={24} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Pizza Company. All rights reserved.
      </div>
    </footer>
  );
}