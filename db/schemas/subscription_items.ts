import { pgTable, serial, text, timestamp, integer, numeric } from 'drizzle-orm/pg-core';

export const subscriptionItems = pgTable('subscription_items', {
    id: serial('id').primaryKey(),
    subscriptionId: integer('subscription_id').notNull(),
    stripeId: text('stripe_id').notNull(),
    stripeProduct: text('stripe_product').notNull(),
    stripePrice: numeric('stripe_price').notNull(),
    quantity: integer('quantity'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type SubscriptionItemSelect = typeof subscriptionItems.$inferSelect;
export type SubscriptionItemInsert = typeof subscriptionItems.$inferInsert;