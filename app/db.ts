// db.ts
import * as SQLite from "expo-sqlite";
import uuid from "react-native-uuid";

export type Note = {
  id: string;
  title: string;
  content: string;
};

// Open DB (sync, but provides async APIs inside)
const db = SQLite.openDatabaseSync("notes.db");

// Initialize DB
export const initDB = async () => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS notes (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT,
      content TEXT
    );
  `);
};

// Save note
export const saveNote = async (title: string, content: string) => {
  const id = uuid.v4().toString();
  await db.runAsync("INSERT INTO notes (id, title, content) VALUES (?, ?, ?);", [
    id,
    title,
    content,
  ]);
};

// Get all notes
export const getNotes = async (): Promise<Note[]> => {
  const result = await db.getAllAsync<Note>("SELECT * FROM notes;");
  return result;
};

// Delete note
export const deleteNote = async (id: string) => {
  await db.runAsync("DELETE FROM notes WHERE id = ?;", [id]);
};

// Update note
export const updateNote = async (id: string, title: string, content: string) => {
  await db.runAsync("UPDATE notes SET title = ?, content = ? WHERE id = ?;", [
    title,
    content,
    id,
  ]);
};
