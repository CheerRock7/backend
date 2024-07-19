// app/api/route.js
import { NextResponse } from 'next/server';
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

export async function GET() {
  try {
    const result = await client.query('SELECT * FROM tbl_student');
    return NextResponse.json(result.rows);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}