import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './users';

export const heights = pgTable('heights', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type HeightSelector = typeof heights.$inferSelect;
export type HeightInsert = typeof heights.$inferInsert;

export const heightsUsersRelations = relations(heights, ({ one }) => ({
    user: one(users, {
        fields: [heights.userId],
        references: [users.id],
    }),
}));