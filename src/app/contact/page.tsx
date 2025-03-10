'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center text-red-600">Contact Us</h1>
        <p className="text-center text-gray-600 mt-2">We’d love to hear from you!</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <Input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <Textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">Send Message</Button>
          </form>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-red-600" />
              <p className="text-gray-700">contact@pizzacompany.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-red-600" />
              <p className="text-gray-700">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-red-600" />
              <p className="text-gray-700">123 Pizza Street, Food City, USA</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509293!2d144.9537353153181!3d-37.81627974202114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzM4LjYiUyAxNDTCsDU3JzE1LjkiRQ!5e0!3m2!1sen!2sus!4v1625751071245!5m2!1sen!2sus"
              width="100%"
              height="200"
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-sm"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
