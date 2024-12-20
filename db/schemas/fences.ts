import { pgTable, serial, text, integer, numeric, timestamp, boolean } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { categories } from './categories';
import { styles } from './styles';
import { colors } from './colors';
import { heights } from './heights';
import { lengths } from './lengths';

export const fences = pgTable('fences', {
    id: serial('id').primaryKey(),
    categoryId: integer('category_id').notNull().references(() => categories.id, { onDelete: 'cascade' }),
    styleId: integer('style_id').notNull().references(() => styles.id, { onDelete: 'cascade' }),
    heightId: integer('height_id').notNull().references(() => heights.id, { onDelete: 'cascade' }),
    colorId: integer('color_id').notNull().references(() => colors.id, { onDelete: 'cascade' }),
    lengthId: integer('length_id').notNull().references(() => lengths.id, { onDelete: 'cascade' }),
    isActive: boolean('is_active').default(true),
    image: text('image'),
    panelPrice: numeric('panel_price'),
    postPrice: numeric('post_price'),
    lftPrice: numeric('lft_price'),
    thirdFeetGatePrice: numeric('3_feet_gate_price'),
    foruthFeetGatePrice: numeric('4_feet_gate_price'),
    fifthFeetGatePrice: numeric('5_feet_gate_price'),
    eighthFeetGatePrice: numeric('8_feet_gate_price'),
    tenthFeetGatePrice: numeric('10_feet_gate_price'),
    heavyDutyEndPostPrice: numeric('heavy_duty_end_post_price'),
    endPostPrice: numeric('end_post_price'),
    cornerPostPrice: numeric('corner_post_price'),
    flatCapPrice: numeric('flat_cap_price'),
    gothicCapPrice: numeric('gothic_cap_price'),
    newEnglandCapPrice: numeric('new_england_cap_price'),
    federationCapPrice: numeric('federation_cap_price'),
    ourPanelPrice: numeric('our_panel_price'),
    ourPostPrice: numeric('our_post_price'),
    ourLftPrice: numeric('our_lft_price'),
    ourThirdFeetGatePrice: numeric('our_3_feet_gate_price'),
    ourForuthFeetGatePrice: numeric('our_4_feet_gate_price'),
    ourFifthFeetGatePrice: numeric('our_5_feet_gate_price'),
    ourEighthFeetGatePrice: numeric('our_8_feet_gate_price'),
    ourTenthFeetGatePrice: numeric('our_10_feet_gate_price'),
    ourHeavyDutyEndPostPrice: numeric('our_heavy_duty_end_post_price'),
    ourEndPostPrice: numeric('our_end_post_price'),
    ourCornerPostPrice: numeric('our_corner_post_price'),
    ourFlatCapPrice: numeric('our_flat_cap_price'),
    ourGothicCapPrice: numeric('our_gothic_cap_price'),
    ourNewEnglandCapPrice: numeric('our_new_england_cap_price'),
    ourFederationCapPrice: numeric('our_federation_cap_price'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export type FenceSelect = typeof fences.$inferSelect;
export type FenceInsert = typeof fences.$inferInsert;

export const fencesCategoriesRelations = relations(fences, ({ one }) => ({
    category: one(categories, {
        fields: [fences.categoryId],
        references: [categories.id],
    }),
}));

export const fencesStylesRelations = relations(fences, ({ one }) => ({
    style: one(styles, {
        fields: [fences.styleId],
        references: [styles.id],
    }),
}));

export const fencesColorsRelations = relations(fences, ({ one }) => ({
    color: one(colors, {
        fields: [fences.colorId],
        references: [colors.id],
    }),
}));

export const fencesHeightsRelations = relations(fences, ({ one }) => ({
    height: one(heights, {
        fields: [fences.heightId],
        references: [heights.id],
    }),
}));

export const fencesLengthsRelations = relations(fences, ({ one }) => ({
    length: one(lengths, {
        fields: [fences.lengthId],
        references: [lengths.id],
    }),
}));