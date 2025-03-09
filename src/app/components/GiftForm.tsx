"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export type FormData = {
  age: number;
  gender: string;
  budget: number;
  occasion: string;
  relation: string;
  hobbies: string;
  purpose: string;
};

interface GiftFormProps {
  onSubmit: (data: FormData) => void;
}

const GiftForm: React.FC<GiftFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    onSubmit(data);
  };

  return (
    <div className="max-w-3xl mx-auto my-8 px-4">
      <form onSubmit={handleSubmit(onSubmitHandler)} className="bg-white rounded shadow-md p-6 md:p-8 border border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          プレゼント情報を入力
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 text-sm font-medium mb-2">相手の年齢</label>
            <input
              type="number"
              {...register("age", { 
                required: true,
                min: { value: 0, message: "0以上の値を入力してください" },
                max: { value: 120, message: "120以下の値を入力してください" }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="例: 25"
            />
            {errors.age && <span className="text-red-500 text-xs mt-1 block">{errors.age.message || "年齢を入力してください"}</span>}
          </div>

          <div className="form-group">
            <label className="block text-gray-700 text-sm font-medium mb-2">相手の性別</label>
            <select
              {...register("gender", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">選択してください</option>
              <option value="男性">男性</option>
              <option value="女性">女性</option>
              <option value="その他">その他</option>
            </select>
            {errors.gender && <span className="text-red-500 text-xs mt-1 block">性別を選択してください</span>}
          </div>

          <div className="form-group">
            <label className="block text-gray-700 text-sm font-medium mb-2">予算</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">¥</span>
              <input
                type="number"
                {...register("budget", { 
                  required: true,
                  min: { value: 0, message: "0以上の値を入力してください" },
                  max: { value: 1000000, message: "100万円以下の値を入力してください" }
                })}
                className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="例: 5000"
              />
            </div>
            {errors.budget && <span className="text-red-500 text-xs mt-1 block">{errors.budget.message || "予算を入力してください"}</span>}
          </div>

          <div className="form-group">
            <label className="block text-gray-700 text-sm font-medium mb-2">状況</label>
            <input
              type="text"
              {...register("occasion", { 
                required: true,
                maxLength: { value: 50, message: "50文字以内で入力してください" }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="例: 誕生日、記念日"
              maxLength={50}
            />
            {errors.occasion && <span className="text-red-500 text-xs mt-1 block">{errors.occasion.message || "状況を入力してください"}</span>}
          </div>

          <div className="form-group">
            <label className="block text-gray-700 text-sm font-medium mb-2">関係性</label>
            <select
              {...register("relation")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">選択してください</option>
              <option value="家族">家族</option>
              <option value="友人">友人</option>
              <option value="恋人">恋人</option>
              <option value="同僚">同僚</option>
            </select>
          </div>

          <div className="form-group">
            <label className="flex justify-between text-gray-700 text-sm font-medium mb-2">
              <span>趣味や好きなもの</span>
              <span className="text-gray-500 text-xs">最大100文字</span>
            </label>
            <input
              type="text"
              {...register("hobbies", { 
                maxLength: { value: 100, message: "100文字以内で入力してください" }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="例: 読書、旅行、料理"
              maxLength={100}
            />
            {errors.hobbies && <span className="text-red-500 text-xs mt-1 block">{errors.hobbies.message}</span>}
          </div>

          <div className="form-group md:col-span-2">
            <label className="block text-gray-700 text-sm font-medium mb-2">プレゼントの目的</label>
            <select
              {...register("purpose", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">選択してください</option>
              <option value="喜ばせたい">喜ばせたい</option>
              <option value="驚かせたい">驚かせたい</option>
              <option value="感謝を伝えたい">感謝を伝えたい</option>
              <option value="実用性重視">実用性重視</option>
            </select>
            {errors.purpose && <span className="text-red-500 text-xs mt-1 block">目的を選択してください</span>}
          </div>
        </div>

        <div className="mt-8 text-right">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-colors duration-200"
          >
            提案を取得
          </button>
        </div>
      </form>
    </div>
  );
};

export default GiftForm;
