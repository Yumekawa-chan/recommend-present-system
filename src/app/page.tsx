"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import GiftForm, { FormData } from '@/app/components/GiftForm';
import ResultSection from '@/app/components/ResultSection';
import Footer from '@/app/components/Footer';

// レート制限の設定
const COOLDOWN_PERIOD = 120; // 秒単位での制限時間 (2分)
const MAX_REQUESTS_PER_SESSION = 10; // セッションあたりの最大リクエスト数

const RecommendGiftPage = () => {
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [requestCount, setRequestCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // クールダウンタイマー（非表示だがバックグラウンドで動作）
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => {
        setCooldown(cooldown - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  // セッションストレージからリクエスト数を取得
  useEffect(() => {
    const storedCount = sessionStorage.getItem('requestCount');
    if (storedCount) {
      setRequestCount(parseInt(storedCount, 10));
    }
  }, []);

  // リクエスト数を更新
  const updateRequestCount = (count: number) => {
    setRequestCount(count);
    sessionStorage.setItem('requestCount', count.toString());
  };

  const handleFormSubmit = (data: FormData) => {
    // 入力値のサニタイズ（XSS対策など）
    const sanitizedData = {
      ...data,
      occasion: data.occasion.slice(0, 50),
      hobbies: data.hobbies?.slice(0, 100) || '',
    };

    // エラーをリセット
    setError(null);

    // レート制限チェック
    if (cooldown > 0) {
      setError(`しばらく経ってから再度お試しください。`);
      return;
    }

    // セッションあたりの最大リクエスト数チェック
    if (requestCount >= MAX_REQUESTS_PER_SESSION) {
      setError(`リクエスト数の上限に達しました。再度お試しになるには、ブラウザを再起動してください。`);
      return;
    }

    // ローディング状態をオンにする
    setIsLoading(true);
    
    // クールダウン開始
    setCooldown(COOLDOWN_PERIOD);
    
    // リクエスト数を増やす
    updateRequestCount(requestCount + 1);
    
    // APIリクエストを模擬するために遅延を設定
    setTimeout(() => {
      // ここではデモ用にダミーデータを使用
      // 実際のアプリケーションではChatGPT APIなどを使用
      const dummyResults = [
        `${sanitizedData.gender}の${sanitizedData.age}歳の方へ、${sanitizedData.occasion}に最適な${sanitizedData.hobbies}を楽しめるアイテム`,
        `${sanitizedData.budget}円以内で購入できるおすすめギフト。${sanitizedData.relation}関係に適しています。`,
        `${sanitizedData.purpose}に合わせて選定した特別なギフト提案です。`
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
        {error && (
          <div className="max-w-3xl mx-auto my-4 px-4">
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
              <p>{error}</p>
            </div>
          </div>
        )}
        
        <GiftForm onSubmit={handleFormSubmit} />
        
        <ResultSection results={results} isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  );
};

export default RecommendGiftPage;