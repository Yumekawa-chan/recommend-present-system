"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-lg font-semibold mb-3">ギフト提案くん🎁</h3>
          <p className="text-sm text-center max-w-md">
            大切な人へのギフト選びをサポートする
            シンプルなギフト提案ツールです。
          </p>
          
          <div className="border-t border-gray-800 w-full mt-6 pt-6 text-sm text-center">
            <p>© Yumekawa Holdings all reserved 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 