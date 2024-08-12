import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './users';
import { styles } from './styles';

export const categories = pgTable('categories', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    userId: integer('user_id').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export const categoriesUsersRelations = relations(categories, ({ one }) => ({
    user: one(users, {
        fields: [categories.userId],
        references: [users.id],
    }),
}));

export const categoriesStylesRelations = relations(categories, ({ many }) => ({
    styles: many(styles),
}));