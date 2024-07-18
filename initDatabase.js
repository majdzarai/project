const sqlite3 = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(process.cwd(), 'courses.db');

const initDB = () => {
  try {
    // Set up the database connection
    const db = sqlite3(dbPath);

    // Create the users table if it doesn't exist
    const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL
    );
    `;

    db.exec(createUsersTable);

    console.log('Database initialized successfully');
  } catch (error) {
    if (error.code === 'SQLITE_BUSY') {
      console.log('Database is locked, retrying in 1 second...');
      setTimeout(initDB, 1000);
    } else {
      console.error('Failed to initialize the database:', error);
    }
  }
};

initDB();
