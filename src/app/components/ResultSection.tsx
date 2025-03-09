"use client";

import React from 'react';

interface ResultSectionProps {
  results: string[];
  isLoading?: boolean;
}

const ResultSection: React.FC<ResultSectionProps> = ({ results, isLoading = false }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-12">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-3">
        ギフト提案結果
      </h2>
      
      {isLoading ? (
        <div className="bg-white rounded-xl shadow-lg p-10 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-20 h-20">
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"></div>
              <div className="absolute top-1 left-1 w-[90%] h-[90%] rounded-full border-r-4 border-l-4 border-pink-400 animate-spin-slow"></div>
            </div>
            <p className="text-gray-700 font-semibold mt-6">素敵な提案を生成中</p>
            <p className="text-gray-500 text-sm mt-2">しばらくお待ちください</p>
          </div>
        </div>
      ) : results && results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-transparent hover:border-indigo-100"
            >
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 mb-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium text-lg text-center leading-relaxed">
                  {result}
                </p>
               
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-10 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">まだ提案がありません</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            フォームに情報を入力して「提案を取得」ボタンをクリックすると、
            あなたにぴったりのギフト提案が表示されます。
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultSection;
