import React from 'react';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">React Starter</h1>
        <Menu className="h-6 w-6 cursor-pointer" />
      </div>
    </header>
  );
};
