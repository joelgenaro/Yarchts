import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { categories } from './categories';
import { fences } from './fences';

export const lengths = pgTable('lengths', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    categoryId: integer('category_id').notNull().references(() => categories.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type LengthSelect = typeof lengths.$inferSelect;
export type LengthInsert = typeof lengths.$inferInsert;

export const lengthsCategoriesRelations = relations(lengths, ({ one }) => ({
    category: one(categories, {
        fields: [lengths.categoryId],
        references: [categories.id],
    }),
}));

export const lengthsFencesRelations = relations(lengths, ({ many }) => ({
    fences: many(fences),
}));


