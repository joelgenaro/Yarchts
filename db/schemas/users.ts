import { relations } from 'drizzle-orm';
import { pgTable, serial, text, timestamp, boolean, numeric } from 'drizzle-orm/pg-core';
import { usersToRoles } from './roles';
import { categories } from './categories';
import { gates } from './gates';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    isFav: boolean('is_fav').default(false),
    isActive: boolean('is_active').default(false),
    email: text('email').notNull(),
    emailVerifiedAt: timestamp('email_verified_at'),
    phone: text('phone'),
    password: text('password'),
    overview: text('overview'),
    facebookId: text('facebook_id'),
    gtagId: text('gtag_id'),
    webhook: text('webhook'),
    website: text('website'),
    image: text('image'),
    stripeId: text('stripe_id'),
    pmType: text('pm_type'),
    pmLastFour: text('pm_last_four'),
    minProfit: numeric('min_profit'),
    holePrice: numeric('hole_price'),
    trialEndsAt: text('trial_ends_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type UserSelect = typeof users.$inferSelect;
export type UserInsert = typeof users.$inferInsert;

export const usersRolesRelations = relations(users, ({ many }) => ({
    usersToRoles: many(usersToRoles),
}));

export const usersCategoriesRelations = relations(users, ({ many }) => ({
    categories: many(categories),
}));

export const usersGatesRelations = relations(users, ({ many }) => ({
    gates: many(gates),
}));
