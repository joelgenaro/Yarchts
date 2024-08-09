import { relations } from 'drizzle-orm';
import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { usersToRoles } from './roles';
import { colors } from './colors';
import { heights } from './heights';
import { lengths } from './lengths';
import { categories } from './categories';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    isFav: boolean('is_fav'),
    isActive: text('is_active'),
    email: text('email').notNull(),
    emailVerifiedAt: timestamp('email_verified_at'),
    phone: text('phone'),
    password: text('password'),
    overview: text('overview'),
    facebookId: text('facebook_id'),
    gtagId: text('gtag_id'),
    webhook: text('webhook'),
    website: text('website'),
    photoPath: text('photo_path'),
    stripeId: text('stripe_id'),
    pmType: text('pm_type'),
    pmLastFour: text('pm_last_four'),
    trialEndsAt: text('trial_ends_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
    deletedAt: timestamp('deleted_at'),
});

export const usersRolesRelations = relations(users, ({ many }) => ({
    usersToRoles: many(usersToRoles),
}));

export const usersColorsRelations = relations(users, ({ many }) => ({
    colors: many(colors),
}));

export const usersHeightsRelations = relations(users, ({ many }) => ({
    heights: many(heights),
}));

export const usersLengthsRelations = relations(users, ({ many }) => ({
    lengths: many(lengths),
}));

export const usersCategoriesRelations = relations(users, ({ many }) => ({
    categories: many(categories),
}));
