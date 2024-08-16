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

export type RoleSelect = typeof roles.$inferSelect;
export type RoleInsert = typeof roles.$inferInsert;

export const rolesRelations = relations(roles, ({ many }) => ({
    usersToRoles: many(usersToRoles),
}));

export const usersToRoles = pgTable(
    'users_to_roles',
    {
        userId: integer('user_id')
            .notNull()
            .references(() => users.id, { onDelete: 'cascade' }),
        roleId: integer('role_id')
            .notNull()
            .references(() => roles.id, { onDelete: 'cascade' }),
    },
    (t) => ({
        pk: primaryKey({ columns: [t.userId, t.roleId] }),
    }),
);

export type UserToRoleSelect = typeof usersToRoles.$inferSelect;
export type UserToRoleInsert = typeof usersToRoles.$inferInsert;

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

