import React from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="container mx-auto py-20 flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">ページが見つかりませんでした</h2>
          <p className="text-gray-600 mb-8">
            お探しのページは存在しないか、移動または削除された可能性があります。
          </p>
          <div className="flex justify-center">
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-colors duration-200">
              ホームページに戻る
            </Link>
          </div>

          <div className="mt-12 flex flex-col items-center text-gray-500">
            <svg className="w-20 h-20 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p>何かお困りのことがありましたら、<Link href="/help" className="text-blue-600 hover:underline">ヘルプページ</Link>をご覧ください。</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 