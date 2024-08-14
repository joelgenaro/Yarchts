import { pgTable, serial, numeric, integer, timestamp } from 'drizzle-orm/pg-core';
import { categories } from './categories';

export const removals = pgTable('removals', {
    id: serial('id').primaryKey(),
    chargePrice: numeric('charge_price'),
    categoryId: integer('category_id').references(() => categories.id).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type Removalselect = typeof removals.$inferSelect;
export type RemovalInsert = typeof removals.$inferInsert;
