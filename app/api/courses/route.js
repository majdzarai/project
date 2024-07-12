import { NextResponse } from 'next/server';
import sqlite3 from 'better-sqlite3';
import path from 'path';

// Open SQLite database
const dbPath = path.join(process.cwd(), 'courses.db');
const db = sqlite3(dbPath);

export async function GET() {
  const rows = db.prepare('SELECT * FROM courses').all();
  return NextResponse.json(rows);
}

export async function POST(request) {
  const { teacherName, section, courseName, price, description, image, status } = await request.json();
  const result = db.prepare(
    'INSERT INTO courses (teacherName, section, courseName, price, description, image, status) VALUES (?, ?, ?, ?, ?, ?, ?)'
  ).run(teacherName, section, courseName, price, description, image, status);
  return NextResponse.json({ id: result.lastInsertRowid });
}

export async function DELETE(request) {
  // Parse the request to get the course ID
  const { id } = await request.json();
  const result = db.prepare('DELETE FROM courses WHERE id = ?').run(id);
  return NextResponse.json({ changes: result.changes });
}

export async function PUT(request) {
  // Parse the request to get the updated course data
  const { id, teacherName, section, courseName, price, description, image, status } = await request.json();
  const result = db.prepare(
    'UPDATE courses SET teacherName = ?, section = ?, courseName = ?, price = ?, description = ?, image = ?, status = ? WHERE id = ?'
  ).run(teacherName, section, courseName, price, description, image, status, id);
  return NextResponse.json({ changes: result.changes });
}
