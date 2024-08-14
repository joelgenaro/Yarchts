CREATE TABLE IF NOT EXISTS "gates" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"user_id" integer NOT NULL,
	"labor_price" numeric,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "removals" (
	"id" serial PRIMARY KEY NOT NULL,
	"charge_price" numeric,
	"category_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "height_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "color_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "length_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "panel_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "post_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "lft_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "3_feet_gate_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "4_feet_gate_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "5_feet_gate_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "8_feet_gate_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "10_feet_gate_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "heavy_duty_end_post_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "end_post_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "corner_post_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "flat_cap_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "gothic_cap_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "new_england_cap_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "federation_cap_price" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "min_profit" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "labor_cost" numeric;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "photo_path" text;--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "is_active" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "min_profit" numeric;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "hole_price" numeric;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "removals" ADD CONSTRAINT "removals_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
