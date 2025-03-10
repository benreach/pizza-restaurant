'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account created successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-red-600">Sign Up</h1>
        <p className="text-center text-gray-600 mt-2">Create your account to order delicious pizza!</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <Input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <Input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">Sign Up</Button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account? 
            <Link href="/login" className="text-red-500 hover:underline"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
