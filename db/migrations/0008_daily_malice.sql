ALTER TABLE "users" ADD COLUMN "image" text;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "photo_path";