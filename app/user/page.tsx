import { getServerSession } from 'next-auth'
import React from 'react'
import { NEXT_AUTH } from '../lib/auth';
import { NextResponse } from 'next/server';

export default async function GET() {
  const session= await getServerSession(NEXT_AUTH);
  return NextResponse.json({session})
}
