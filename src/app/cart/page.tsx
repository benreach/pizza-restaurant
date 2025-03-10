'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash } from 'lucide-react';



type Items = {
  id: number,
  amount: number,

}


const initialCart = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, qty: 1, img: '/temporary/p1.png' },
  { id: 2, name: 'Smartwatch', price: 149.99, qty: 1, img: '/temporary/p2.png' },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, qty: item.qty + amount } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map((item) => (
            <Card key={item.id} className="flex items-center p-4 gap-4">
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, -1)}>
                  <Minus size={16} />
                </Button>
                <span className="text-lg font-medium">{item.qty}</span>
                <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, 1)}>
                  <Plus size={16} />
                </Button>
              </div>
              <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
                <Trash size={16} />
              </Button>
            </Card>
          ))}
          <div className="flex justify-between items-center mt-4 border-t pt-4">
            <span className="text-lg font-semibold">Subtotal: ${subtotal}</span>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Proceed to Checkout</Button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
}
