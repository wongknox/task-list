import db from "#db/client";

import { createTask } from "#db/queries/tasks";
import { createUser } from "#db/queries/users";

async function main() {
  try {
    await db.connect();
    console.log("✅ Connected to database.");

    await seed();
    console.log("🌱 Database seeded.");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    await db.end();
    console.log("👋 Database connection closed.");
  }
}

async function seed() {
  console.log("Creating user...");
  const user1 = await createUser("mochi", "password123");
  console.log(`👤 User created: ${user1.username} (ID: ${user1.id})`);

  console.log("Creating tasks for 'mochi'...");
  await Promise.all([
    createTask("Write seed file", true, user1.id),
    createTask("Buy groceries", false, user1.id),
    createTask("Walk the dog", false, user1.id),
  ]);
  console.log("📝 3 tasks created.");
}

main();
