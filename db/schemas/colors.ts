import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './users';

export const colors = pgTable('colors', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type ColorSelect = typeof colors.$inferSelect;
export type ColorInsert = typeof colors.$inferInsert;

export const colorsUsersRelations = relations(colors, ({ one }) => ({
    user: one(users, {
        fields: [colors.userId],
        references: [users.id],
    }),
}));