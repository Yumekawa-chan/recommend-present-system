import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-5 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tight">
          ギフト提案くん🎁
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300 transition-colors">ホーム</Link>
          <Link href="/help" className="hover:text-gray-300 transition-colors">ヘルプ</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
