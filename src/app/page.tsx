"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import GiftForm, { FormData } from '@/app/components/GiftForm';
import ResultSection from '@/app/components/ResultSection';
import Footer from '@/app/components/Footer';

const COOLDOWN_PERIOD = 120;
const MAX_REQUESTS_PER_SESSION = 10;

const RecommendGiftPage = () => {
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [requestCount, setRequestCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => {
        setCooldown(cooldown - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  useEffect(() => {
    const storedCount = sessionStorage.getItem('requestCount');
    if (storedCount) {
      setRequestCount(parseInt(storedCount, 10));
    }
    
    const storedCooldown = sessionStorage.getItem('cooldownUntil');
    if (storedCooldown) {
      const cooldownUntil = parseInt(storedCooldown, 10);
      const now = Math.floor(Date.now() / 1000);
      const remainingCooldown = Math.max(0, cooldownUntil - now);
      
      if (remainingCooldown > 0) {
        setCooldown(remainingCooldown);
      }
    }
  }, []);

  const updateRequestCount = (count: number) => {
    setRequestCount(count);
    sessionStorage.setItem('requestCount', count.toString());
  };

  const updateCooldown = (seconds: number) => {
    setCooldown(seconds);
    const now = Math.floor(Date.now() / 1000);
    const cooldownUntil = now + seconds;
    sessionStorage.setItem('cooldownUntil', cooldownUntil.toString());
  };

  const handleFormSubmit = async (data: FormData) => {
    const sanitizedData = {
      ...data,
      occasion: data.occasion.slice(0, 50),
      hobbies: data.hobbies?.slice(0, 100) || '',
    };

    setError(null);

    if (cooldown > 0) {
      setError(`しばらく経ってから再度お試しください。`);
      return;
    }

    if (requestCount >= MAX_REQUESTS_PER_SESSION) {
      setError(`リクエスト数の上限に達しました。再度お試しになるには、ブラウザを再起動してください。`);
      return;
    }

    setIsLoading(true);
    updateCooldown(COOLDOWN_PERIOD);
    updateRequestCount(requestCount + 1);
    
    try {
      const response = await fetch('/api/gift-suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '提案の取得中にエラーが発生しました');
      }
      
      const data = await response.json();
      setResults(data.suggestions);
      
    } catch (err) {
      console.error('API呼び出しエラー:', err);
      setError(err instanceof Error ? err.message : '提案の取得中にエラーが発生しました');
    } finally {
      setIsLoading(false);
    }
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