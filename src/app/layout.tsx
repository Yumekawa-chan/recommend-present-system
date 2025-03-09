import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ギフト提案くん🎁 - ギフト選びをサポート",
  description: "大切な人へのプレゼント選びを簡単に。年齢、性別、予算などから最適なギフトを提案します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
