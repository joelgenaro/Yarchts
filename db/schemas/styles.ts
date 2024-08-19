import { pgTable, serial, text, integer, numeric, timestamp, boolean } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { categories } from './categories';
import { fences } from './fences';

export const styles = pgTable('styles', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    categoryId: integer('category_id').notNull().references(() => categories.id, { onDelete: 'cascade' }),
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

export const stylesFencesRelations = relations(styles, ({ many }) => ({
    fences: many(fences),
}));