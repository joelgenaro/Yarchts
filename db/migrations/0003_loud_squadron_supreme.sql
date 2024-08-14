ALTER TABLE "users" ALTER COLUMN "photo_path" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "is_fav";