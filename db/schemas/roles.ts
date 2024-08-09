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
    usersToRoles: many(usersToRoles),
}));

export const usersToRoles = pgTable(
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

export const usersToRolesRelations = relations(usersToRoles, ({ one }) => ({
    role: one(roles, {
        fields: [usersToRoles.roleId],
        references: [roles.id],
    }),
    user: one(users, {
        fields: [usersToRoles.userId],
        references: [users.id],
    }),
}));

