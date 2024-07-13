import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import path from 'path';
import sqlite3 from 'better-sqlite3';

// Set up the database connection
const dbPath = path.join(process.cwd(), 'courses.db');
const db = sqlite3(dbPath);

export async function POST(request) {
  try {
    const { username, password, role } = await request.json();

    // Check if the username already exists
    const userCheckStmt = db.prepare('SELECT * FROM users WHERE username = ?');
    const existingUser = userCheckStmt.get(username);
    if (existingUser) {
      return NextResponse.json({ error: 'Username already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Insert the user into the database
    const stmt = db.prepare('INSERT INTO users (username, password, role) VALUES (?, ?, ?)');
    stmt.run(username, hashedPassword, role);

    return NextResponse.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error.message);
    return NextResponse.json({ error: `Failed to register user: ${error.message}` }, { status: 500 });
  }
}
