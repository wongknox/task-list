import db from "#db/client";

export async function createTask(title, done, userId) {
  const sql = `
    INSERT INTO tasks (title, done, user_id)
    VALUES ($1, $2, $3)
    RETURNING *
    `;
  try {
    const {
      rows: [task],
    } = await db.query(sql, [title, done, userId]);
    return task;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
