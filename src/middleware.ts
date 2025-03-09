import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOLDOWN_PERIOD = 120;
const MAX_REQUESTS_PER_IP = 5;

const ipRequestsMap = new Map<string, { count: number, lastRequest: number }>();

const RESET_INTERVAL = 24 * 60 * 60 * 1000;
setInterval(() => {
  ipRequestsMap.clear();
}, RESET_INTERVAL);

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/gift-suggestions')) {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';
    
    const now = Date.now();
    const ipData = ipRequestsMap.get(ip) || { count: 0, lastRequest: 0 };

    const timeSinceLastRequest = now - ipData.lastRequest;
    if (timeSinceLastRequest < COOLDOWN_PERIOD * 1000) {
      return NextResponse.json(
        {
          error: 'レート制限を超えました。しばらく経ってから再度お試しください。',
        },
        { status: 429 }
      );
    }

    if (ipData.count >= MAX_REQUESTS_PER_IP) {
      return NextResponse.json(
        {
          error: '1日のリクエスト上限に達しました。明日再度お試しください。',
        },
        { status: 429 }
      );
    }

    ipRequestsMap.set(ip, {
      count: ipData.count + 1,
      lastRequest: now
    });
  }

  return NextResponse.next();
}