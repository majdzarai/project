import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import path from 'path';
import sqlite3 from 'better-sqlite3';

// Set up the database connection
const dbPath = path.join(process.cwd(), 'courses.db');
const db = sqlite3(dbPath);

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Fetch the user from the database
    const userStmt = db.prepare('SELECT * FROM users WHERE username = ?');
    const user = userStmt.get(username);

    if (!user) {
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 400 });
    }

    // Verify the password
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 400 });
    }

    // Return success response with the user's role
    return NextResponse.json({ message: 'Login successful', role: user.role });
  } catch (error) {
    console.error('Error logging in:', error.message);
    return NextResponse.json({ error: `Failed to log in: ${error.message}` }, { status: 500 });
  }
}
