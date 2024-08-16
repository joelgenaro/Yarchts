import { pgTable, serial, text, integer, numeric, timestamp, boolean } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { categories } from './categories';

export const styles = pgTable('styles', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    categoryId: integer('category_id').notNull().references(() => categories.id, { onDelete: 'cascade' }),
    heightId: integer('height_id').notNull(),
    colorId: integer('color_id').notNull(),
    lengthId: integer('length_id').notNull(),
    panelPrice: numeric('panel_price'),
    postPrice: numeric('post_price'),
    lftPrice: numeric('lft_price'),
    ThirdFeetGatePrice: numeric('3_feet_gate_price'),
    ForuthFeetGatePrice: numeric('4_feet_gate_price'),
    FifthFeetGatePrice: numeric('5_feet_gate_price'),
    eighthFeetGatePrice: numeric('8_feet_gate_price'),
    tenthFeetGatePrice: numeric('10_feet_gate_price'),
    HeavyDutyEndPostPrice: numeric('heavy_duty_end_post_price'),
    endPostPrice: numeric('end_post_price'),
    cornerPostPrice: numeric('corner_post_price'),
    flatCapPrice: numeric('flat_cap_price'),
    gothicCapPrice: numeric('gothic_cap_price'),
    newEnglandCapPrice: numeric('new_england_cap_price'),
    federationCapPrice: numeric('federation_cap_price'),
    minProfit: numeric('min_profit'),
    laborCost: numeric('labor_cost'),
    photoPath: text('photo_path'),
    isActive: boolean('is_active').default(false),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type StyleSelect = typeof styles.$inferSelect;
export type StyleInsert = typeof styles.$inferInsert;

export const stylesCategoriesRelations = relations(styles, ({ one }) => ({
    category: one(categories, {
        fields: [styles.categoryId],
        references: [categories.id],
    }),
}));