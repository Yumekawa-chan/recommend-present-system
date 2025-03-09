"use client";

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import GiftForm, { FormData } from '@/app/components/GiftForm';
import ResultSection from '@/app/components/ResultSection';
import Footer from '@/app/components/Footer';

const RecommendGiftPage = () => {
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (data: FormData) => {
    // ローディング状態をオンにする
    setIsLoading(true);
    
    // APIリクエストを模擬するために遅延を設定
    setTimeout(() => {
      // ここではデモ用にダミーデータを使用
      // 実際のアプリケーションではChatGPT APIなどを使用
      const dummyResults = [
        `${data.gender}の${data.age}歳の方へ、${data.occasion}に最適な${data.hobbies}を楽しめるアイテム`,
        `${data.budget}円以内で購入できるおすすめギフト。${data.relation}関係に適しています。`,
        `${data.purpose}に合わせて選定した特別なギフト提案です。`
      ];
      setResults(dummyResults);
      
      // ローディング状態をオフにする
      setIsLoading(false);
    }, 2000); // 2秒の遅延を設定
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="container mx-auto py-6 flex-grow">
        <GiftForm onSubmit={handleFormSubmit} />
        <ResultSection results={results} isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  );
};

export default RecommendGiftPage;