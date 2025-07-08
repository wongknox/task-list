import db from "#db/client";

export async function createUser(username, password) {
  const sql = `
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING id, username
    `;
  try {
    const {
      rows: [user],
    } = await db.query(sql, [username, password]);
    return user;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
