import { pgTable, serial, text, timestamp, integer, numeric } from 'drizzle-orm/pg-core';

export const subscriptions = pgTable('subscriptions', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    userId: integer('user_id').notNull(),
    stripeId: text('stripe_id').notNull(),
    stripeStatus: text('stripe_status').notNull(),
    stripePrice: numeric('stripe_price'),
    quantity: integer('quantity'),
    trialEndsAt: timestamp('trial_ends_at'),
    endsAt: timestamp('ends_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});