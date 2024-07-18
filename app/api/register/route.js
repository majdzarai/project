import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import path from 'path';
import sqlite3 from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

// Set up the database connection
const dbPath = path.join(process.cwd(), 'courses.db');
const db = sqlite3(dbPath);

export async function POST(request) {
  try {
    const formData = await request.formData();
    const username = formData.get('username');
    const password = formData.get('password');
    const role = formData.get('role');
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const birthDate = formData.get('birthDate');
    const photoFile = formData.get('photo');

    // Check if the username already exists
    const userCheckStmt = db.prepare('SELECT * FROM users WHERE username = ?');
    const existingUser = userCheckStmt.get(username);
    if (existingUser) {
      return NextResponse.json({ error: 'Username already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    let photoFileName = null;
    if (photoFile && photoFile.name) {
      // Generate a unique filename for the photo
      photoFileName = `${uuidv4()}${path.extname(photoFile.name)}`;

      // Ensure the upload directory exists
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // Move the uploaded file to the designated folder
      const photoPath = path.join(uploadDir, photoFileName);
      const buffer = await photoFile.arrayBuffer();
      fs.writeFileSync(photoPath, Buffer.from(buffer));
    }

    // Insert the user into the database with all fields
    const stmt = db.prepare(
      'INSERT INTO users (username, password, role, lastname, email, phone, photo, birthDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    );
    stmt.run(username, hashedPassword, role, lastname, email, phone, photoFileName, birthDate);

    return NextResponse.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error.message);
    return NextResponse.json({ error: `Failed to register user: ${error.message}` }, { status: 500 });
  }
}
