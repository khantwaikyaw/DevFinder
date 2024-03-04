import { NextResponse } from 'next/server';
import type { GitHubUser } from '@/types/interface';

export async function GET(request: Request) {
  // Extract the username from the query parameters
  const url = new URL(request.url);
  const username = url.searchParams.get('username');

  if (!username) {
    return new NextResponse(JSON.stringify({ error: 'Username is required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const endpoint = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      // Handle non-2xx responses
      throw new Error('Failed to fetch GitHub user data');
    }
    const data: GitHubUser = await response.json();
    return new NextResponse(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
