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
    console.error(`Error creating user: ${error.message}`);
    throw error;
  }
}

export async function getUserByUsername(username) {
  const sql = `
    SELECT *
    FROM users
    WHERE username = $1
    `;
  const {
    rows: [user],
  } = await db.query(sql, [username]);

  return user;
}
