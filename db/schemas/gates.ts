import { pgTable, serial, text, integer, timestamp, numeric } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './users';

export const gates = pgTable('gates', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    laborPrice: numeric('labor_price'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type GateSelect = typeof gates.$inferSelect;
export type GateInsert = typeof gates.$inferInsert;

export const gatesUsersRelations = relations(gates, ({ one }) => ({
    user: one(users, {
        fields: [gates.userId],
        references: [users.id],
    }),
}));