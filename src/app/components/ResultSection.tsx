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
        <div className="bg-white rounded border border-gray-200 p-10 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-600">提案を生成中です...</p>
            <p className="text-gray-500 text-sm mt-3">しばらくお待ちください</p>
          </div>
        </div>
      ) : results && results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div 
              key={index} 
              className="bg-white rounded border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">提案 {index + 1}</span>
                  <svg className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">{result}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded border border-gray-200 p-8 text-center">
          <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="text-gray-600">
            フォームに情報を入力して「提案を取得」ボタンをクリックすると、
            <br />最適なギフトの提案が表示されます。
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultSection;
