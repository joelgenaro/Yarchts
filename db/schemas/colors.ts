import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { categories } from './categories';
import { fences } from './fences';

export const colors = pgTable('colors', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    image: text('image'),
    categoryId: integer('category_id').notNull().references(() => categories.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type ColorSelect = typeof colors.$inferSelect;
export type ColorInsert = typeof colors.$inferInsert;

export const colorsCategoriesRelations = relations(colors, ({ one }) => ({
    category: one(categories, {
        fields: [colors.categoryId],
        references: [categories.id],
    }),
}));

export const colorsFencesRelations = relations(colors, ({ many }) => ({
    fences: many(fences),
}));