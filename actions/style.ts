"use server"

import { db } from '@/db';
import { CategoryInsert, categories } from '@/db/schemas/categories';
import { StyleInsert, styles } from '@/db/schemas/styles';
import { ColorInsert, colors } from '@/db/schemas/colors';
import { HeightInsert, heights } from '@/db/schemas/heights';
import { LengthInsert, lengths } from '@/db/schemas/lengths';
import { FenceInsert, fences } from '@/db/schemas/fences';
import { revalidatePath } from 'next/cache';

export const createStyle = async (formData: FormData) => {
    try {
        let categoryID = Number(formData.get('categoryID'));
        let styleId = Number(formData.get('styleId'));
        let colorId = Number(formData.get('colorId'));
        let heightId = Number(formData.get('heightId'));
        let lengthId = Number(formData.get('lengthId'));

        if (categoryID === 0) {
            const newCategory: CategoryInsert = { name: formData.get('category') as string, userId: Number(formData.get('userId')) };
            const result = await db.insert(categories).values(newCategory).returning({ insertedId: categories.id });

            categoryID = result[0].insertedId;
        }

        if (styleId === 0) {
            const newStyle: StyleInsert = { name: formData.get('style') as string, categoryId: categoryID };
            const result = await db.insert(styles).values(newStyle).returning({ insertedId: styles.id });

            styleId = result[0].insertedId;
        }

        if (colorId === 0) {
            const newColor: ColorInsert = { name: formData.get('color') as string, categoryId: categoryID };
            const result = await db.insert(colors).values(newColor).returning({ insertedId: colors.id });

            colorId = result[0].insertedId;
        }

        if (heightId === 0) {
            const newHeight: HeightInsert = { name: formData.get('height') as string, categoryId: categoryID };
            const result = await db.insert(heights).values(newHeight).returning({ insertedId: heights.id });

            heightId = result[0].insertedId;
        }

        if (lengthId === 0) {
            const newLength: LengthInsert = { name: formData.get('length') as string, categoryId: categoryID };
            const result = await db.insert(lengths).values(newLength).returning({ insertedId: lengths.id });

            lengthId = result[0].insertedId;
        }

        const newFence: FenceInsert = {
            categoryId: categoryID,
            styleId: styleId,
            heightId: heightId,
            colorId: colorId,
            lengthId: lengthId,
            panelPrice: formData.get('panelPrice')?.toString(),
            postPrice: formData.get('postPrice')?.toString(),
            lftPrice: formData.get('lftPrice')?.toString(),
            thirdFeetGatePrice: formData.get('thirdFeetGatePrice')?.toString(),
            foruthFeetGatePrice: formData.get('foruthFeetGatePrice')?.toString(),
            fifthFeetGatePrice: formData.get('fifthFeetGatePrice')?.toString(),
            eighthFeetGatePrice: formData.get('eighthFeetGatePrice')?.toString(),
            tenthFeetGatePrice: formData.get('tenthFeetGatePrice')?.toString(),
            heavyDutyEndPostPrice: formData.get('heavyDutyEndPostPrice')?.toString(),
            endPostPrice: formData.get('endPostPrice')?.toString(),
            cornerPostPrice: formData.get('cornerPostPrice')?.toString(),
            flatCapPrice: formData.get('flatCapPrice')?.toString(),
            gothicCapPrice: formData.get('gothicCapPrice')?.toString(),
            newEnglandCapPrice: formData.get('newEnglandCapPrice')?.toString(),
            federationCapPrice: formData.get('federationCapPrice')?.toString(),
        };

        await db.insert(fences).values(newFence);

        revalidatePath('/en/style');

        return {
            success: true, message: 'Successfully Created Style.',
        };
    } catch (error) {
        return {
            success: false, message: 'Failed to Create Style.',
        };
    }
};

export const getStyles = async (userId: number) => {
    try {
        const result = await db.query.categories.findMany({
            where: (categories, { eq }) => eq(categories.userId, userId),
            with: {
                styles: true,
                colors: true,
                heights: true,
                lengths: true,
                fences: true,
            },
        });

        return result;
    } catch (error) {
        throw new Error('Failed to Get Styles.');
    }
}

