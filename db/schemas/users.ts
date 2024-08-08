import { relations } from 'drizzle-orm';
import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { usersToroles } from './roles';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    is_fav: boolean('is_fav'),
    is_active: text('is_active'),
    email: text('email').notNull(),
    email_verified_at: timestamp('email_verified_at'),
    phone: text('phone'),
    password: text('password'),
    overview: text('overview'),
    facebook_id: text('facebook_id'),
    gtag_id: text('gtag_id'),
    webhook: text('webhook'),
    website: text('website'),
    photo_path: text('photo_path'),
    stripe_id: text('stripe_id'),
    pm_type: text('pm_type'),
    pm_last_four: text('pm_last_four'),
    trial_ends_at: text('trial_ends_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
    deletedAt: timestamp('deleted_at'),
});

export const usersRelations = relations(users, ({ many }) => ({
    usersToroles: many(usersToroles),
}));
