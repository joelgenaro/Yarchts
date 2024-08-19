import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { categories } from './categories';
import { fences } from './fences';

export const heights = pgTable('heights', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    categorId: integer('category_id').notNull().references(() => categories.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type HeightSelector = typeof heights.$inferSelect;
export type HeightInsert = typeof heights.$inferInsert;

export const heightsCategoriesRelations = relations(heights, ({ one }) => ({
    category: one(categories, {
        fields: [heights.categorId],
        references: [categories.id],
    }),
}));

export const heightsFencesRelations = relations(heights, ({ many }) => ({
    fences: many(fences),
}));