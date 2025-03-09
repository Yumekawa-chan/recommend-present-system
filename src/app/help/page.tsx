"use client";

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const HelpPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="container mx-auto py-10 flex-grow px-4">
        <div className="max-w-3xl mx-auto bg-white rounded shadow-md p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
            ヘルプ・ガイド
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-700">ギフト提案くん🎁とは？</h2>
              <p className="text-gray-600 leading-relaxed">
                ギフト提案くん🎁は、大切な方へのプレゼント選びに悩んでいる方のための
                シンプルなギフト提案ツールです。相手の年齢、性別、予算などの情報を入力するだけで、
                最適なプレゼントのアイデアを提案します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-700">使い方</h2>
              <ol className="list-decimal pl-5 space-y-3 text-gray-600">
                <li>ホームページのフォームに必要事項を入力します</li>
                <li>相手の年齢、性別、予算は必須項目です</li>
                <li>より詳細な提案を得るために、関係性や趣味なども入力することをおすすめします</li>
                <li>「提案を取得」ボタンをクリックすると、ギフトのアイデアが表示されます</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-700">入力項目の説明</h2>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="font-medium text-gray-700 w-32">相手の年齢:</span>
                  <span className="text-gray-600">プレゼントを贈る相手の年齢を入力します</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-700 w-32">相手の性別:</span>
                  <span className="text-gray-600">男性・女性・その他から選択します</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-700 w-32">予算:</span>
                  <span className="text-gray-600">使用できる予算を円単位で入力します</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-700 w-32">状況:</span>
                  <span className="text-gray-600">誕生日、記念日、クリスマスなど、贈る状況を入力します</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-700 w-32">関係性:</span>
                  <span className="text-gray-600">家族、友人、恋人、同僚など、相手との関係を選択します</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-700 w-32">趣味:</span>
                  <span className="text-gray-600">相手の趣味や好きなことを入力します</span>
                </li>
                <li className="flex">
                  <span className="font-medium text-gray-700 w-32">目的:</span>
                  <span className="text-gray-600">プレゼントを贈る目的を選択します</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-700">よくある質問</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700">Q: 提案された商品はどこで購入できますか？</h3>
                  <p className="text-gray-600">A: 当サービスは商品の提案のみを行っており、実際の商品販売は行っておりません。お近くの店舗やオンラインショップでお探しください。</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Q: 提案は保存できますか？</h3>
                  <p className="text-gray-600">A: 現在のバージョンでは提案の保存機能はありません。必要な場合はスクリーンショットなどでご対応ください。</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Q: 提案結果は何に基づいていますか？</h3>
                  <p className="text-gray-600">A: 入力された情報に基づいて、一般的な好みやトレンドを考慮した提案を生成しています。</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage; 