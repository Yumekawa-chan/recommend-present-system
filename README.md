# プレゼント推薦システム

このアプリケーションは、ユーザーが入力した情報に基づいて最適なプレゼントを提案するシステムです。OpenAI API を活用して、相手の年齢、性別、予算、目的などから、シチュエーションに合った贈り物のアイデアを提供します。

## 主な機能

- **パーソナライズされた提案**: 相手の情報（年齢、性別、趣味など）に基づいたギフト提案
- **予算に合わせた提案**: 設定した予算内での最適な提案
- **多様な提案**: 複数のギフトアイデアを一度に提供
- **モダンな UI**: 直感的で使いやすいインターフェース

## 技術スタック

- Next.js
- TypeScript
- Tailwind CSS
- [OpenAI API](https://openai.com/api/)

## インストール方法

### 前提条件

- Node.js (18.x 以上)
- npm または pnpm

### セットアップ手順

1. リポジトリをクローン

```bash
git clone https://github.com/yourusername/recommend-present-system.git
cd recommend-present-system
```

2. 依存パッケージのインストール

```bash
npm install
# または
pnpm install
```

3. 環境変数の設定

`.env.local` ファイルをプロジェクトのルートディレクトリに作成し、以下の変数を設定します：

```
OPENAI_API_KEY=your_openai_api_key
```

4. 開発サーバーの起動

```bash
npm run dev
# または
pnpm dev
```

5. ブラウザで http://localhost:3000 にアクセス

## 使用方法

1. フォームに必要な情報を入力：

   - 相手の年齢
   - 相手の性別
   - 予算
   - 状況（誕生日、記念日など）
   - 関係性
   - 趣味や好きなもの（オプション）
   - プレゼントの目的

2. 「提案を取得」ボタンをクリック

3. AI が生成した提案リストが表示されます

## レート制限について

API の過剰な使用を防ぐため、以下のレート制限が設定されています：

- セッションあたりのリクエスト数: 10 回
- リクエスト間の待機時間: 2 分

## 開発者向け情報

### フォルダ構造

```
src/
├── app/                 # Next.js アプリケーション
│   ├── api/             # APIルート
│   ├── components/      # UIコンポーネント
│   └── page.tsx         # メインページ
├── middleware.ts        # リクエスト制限等のミドルウェア
```

### 主要コンポーネント

- `GiftForm`: ユーザー入力フォーム
- `ResultSection`: 提案結果表示
- `api/gift-suggestions`: OpenAI API との連携

## ライセンス

[MIT](LICENSE)
