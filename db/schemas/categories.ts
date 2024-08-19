import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './users';
import { styles } from './styles';
import { colors } from './colors';
import { heights } from './heights';
import { lengths } from './lengths';
import { removals } from './removals';

export const categories = pgTable('categories', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type CategorySelect = typeof categories.$inferSelect;
export type CategoryInsert = typeof categories.$inferInsert;

export const categoriesUsersRelations = relations(categories, ({ one }) => ({
    user: one(users, {
        fields: [categories.userId],
        references: [users.id],
    }),
}));

export const categoriesRemovalsRelations = relations(categories, ({ one }) => ({
    removals: one(removals),
}));

export const categoriesStylesRelations = relations(categories, ({ many }) => ({
    styles: many(styles),
}));

export const categoriesColorsRelations = relations(categories, ({ many }) => ({
    colors: many(colors),
}));

export const categoriesHeightsRelations = relations(categories, ({ many }) => ({
    heights: many(heights),
}));

export const categoriesLengthsRelations = relations(categories, ({ many }) => ({
    lengths: many(lengths),
}));