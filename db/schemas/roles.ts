import { pgTable, serial, text, timestamp, integer, primaryKey } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './users'

export const roles = pgTable('roles', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export const rolesRelations = relations(roles, ({ many }) => ({
    usersToroles: many(usersToroles),
}));

export const usersToroles = pgTable(
    'users_to_roles',
    {
        userId: integer('user_id')
            .notNull()
            .references(() => users.id),
        roleId: integer('group_id')
            .notNull()
            .references(() => roles.id),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.userId, t.roleId] }),
    }),
);

export const usersTorolesRelations = relations(usersToroles, ({ one }) => ({
    role: one(roles, {
        fields: [usersToroles.roleId],
        references: [roles.id],
    }),
    user: one(users, {
        fields: [usersToroles.userId],
        references: [users.id],
    }),
}));

