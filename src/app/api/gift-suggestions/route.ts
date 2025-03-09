import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { age, gender, budget, occasion, relation, hobbies, purpose } = body;

    if (!age || !gender || !budget || !occasion || !purpose) {
      return NextResponse.json(
        { error: '必須パラメータが不足しています' },
        { status: 400 }
      );
    }

    const sanitizedHobbies = hobbies?.slice(0, 100) || '';
    const sanitizedOccasion = occasion.slice(0, 50);

    const prompt = `
あなたはギフト提案専門のアドバイザーです。以下の情報に基づいて、簡潔なギフト提案を6つ提供してください。
各提案は40文字以内で、具体的な商品やアイデアを挙げてください。理由や説明は不要です。

入力情報:
- 相手の年齢: ${age}歳
- 相手の性別: ${gender}
- 予算: ${budget}円
- 状況: ${sanitizedOccasion}
- 関係性: ${relation || '特定なし'}
- 相手の趣味や好きなもの: ${sanitizedHobbies || '特定なし'}
- プレゼントの目的: ${purpose}

回答形式:
1. [具体的なギフト提案]
2. [具体的なギフト提案]
3. [具体的なギフト提案]
4. [具体的なギフト提案]
5. [具体的なギフト提案]
6. [具体的なギフト提案]

詳細な説明や理由は不要です。短く具体的な提案のみを出力してください。
`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0125',
      messages: [
        { role: 'system', content: 'あなたはギフト提案の専門家です。短く簡潔な提案のみを出力してください。' },
        { role: 'user', content: prompt }
      ],
      response_format: { type: 'text' },
      temperature: 0.7,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    const suggestions = completion.choices[0].message.content || '';
    
    const suggestionArray = suggestions
      .split('\n')
      .filter(line => line.trim() !== '' && line.match(/^\d+\.\s/))
      .map(line => line.replace(/^\d+\.\s*/, '').trim())
      .filter(line => line.length <= 60);

    return NextResponse.json({
      suggestions: suggestionArray
    });

  } catch (error: unknown) {
    console.error('OpenAI API エラー:', error);
    
    const errorMessage = error instanceof Error ? error.message : '不明なエラー';
    
    return NextResponse.json(
      { error: 'ギフト提案の生成中にエラーが発生しました', details: errorMessage },
      { status: 500 }
    );
  }
}