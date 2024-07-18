import { NextResponse } from 'next/server';
import path from 'path';
import sqlite3 from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import jwt from 'jsonwebtoken';

const dbPath = path.join(process.cwd(), 'courses.db');
const db = sqlite3(dbPath);
const secretKey = 'EDT1UR8C9Cq9L1/EegcdTTyWMdxOWo/kw6RiLuhS8Yw=';

export async function GET(request) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, secretKey);
    const userId = decoded.id;

    const stmt = db.prepare('SELECT username, lastname, email, phone, birthDate, photo FROM users WHERE id = ?');
    const user = stmt.get(userId);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching profile:', error.message);
    return NextResponse.json({ error: `Failed to fetch profile: ${error.message}` }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, secretKey);
    const userId = decoded.id;

    const formData = await request.formData();

    const username = formData.get('username');
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const birthDate = formData.get('birthDate');
    const photoFile = formData.get('photo');

    console.log('Received formData:', { username, lastname, email, phone, birthDate, photoFile });

    let photoFileName = null;
    if (photoFile && photoFile.name) {
      photoFileName = `${uuidv4()}${path.extname(photoFile.name)}`;
      const photoPath = path.join(process.cwd(), 'public', 'uploads', photoFileName);
      const buffer = Buffer.from(await photoFile.arrayBuffer());
      fs.writeFileSync(photoPath, buffer);
    }

    const stmt = db.prepare('UPDATE users SET username = ?, lastname = ?, email = ?, phone = ?, birthDate = ?, photo = ? WHERE id = ?');
    stmt.run(username, lastname, email, phone, birthDate, photoFileName, userId);

    return NextResponse.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error.message);
    return NextResponse.json({ error: `Failed to update profile: ${error.message}` }, { status: 500 });
  }
}
