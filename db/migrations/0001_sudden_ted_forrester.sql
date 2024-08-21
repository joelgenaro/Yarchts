ALTER TABLE "fences" ADD COLUMN "category_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "fences" ADD CONSTRAINT "fences_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
