import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { categories } from './categories';

export const styles = pgTable('styles', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    categoryId: integer('category_id').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export const stylesCategoriesRelations = relations(styles, ({ one }) => ({
    category: one(categories, {
        fields: [styles.categoryId],
        references: [categories.id],
    }),
}));