import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db, client } from '.';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  try {
    console.log('Starting database migration...');
    // Run migrations on the database, skipping the ones already applied
    await migrate(db, { migrationsFolder: './db/migrations' });
    console.log('Migrations applied successfully');
  } catch (error) {
    console.error('Error during migration or seeding:', error);
  } finally {
    try {
      // Close the connection, otherwise the script will hang
      await client.end();
      console.log('Database connection closed.');
    } catch (endError) {
      console.error('Error closing database connection:', endError);
    }
  }
})().catch((error) => {
  console.error('Unhandled error in the async function:', error);
});