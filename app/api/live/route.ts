import { NextResponse } from 'next/server';

type Player = {
    name: string;
    elo: number;
    country: string;
    Rank: number;
};

type Element = {
    player: Player;
    split: string;
    time: number;
    url: string;
    realtime: number;
};

type ApiResponse = {
    data: Element[];
};

export async function GET() {
    try {
        const res = await fetch('http://45.93.249.131:8001/api/getLive');

        if (!res.ok) {
            return NextResponse.json({ error: 'Failed to fetch live data' }, { status: res.status });
        }

        const json: unknown = await res.json();

        if (!json || typeof json !== 'object' || !('data' in json)) {
            return NextResponse.json({ error: 'Invalid response format' }, { status: 500 });
        }

        const response = json as ApiResponse;

        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error', details: String(error) }, { status: 500 });
    }
}
