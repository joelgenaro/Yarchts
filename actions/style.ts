"use server"

import { db } from '@/db';
import { eq, not, inArray } from 'drizzle-orm';
import { categories } from '@/db/schemas/categories';
import { styles } from '@/db/schemas/styles';
import { colors } from '@/db/schemas/colors';
import { heights } from '@/db/schemas/heights';
import { lengths } from '@/db/schemas/lengths';
import { FenceInsert, fences } from '@/db/schemas/fences';
import { revalidatePath } from 'next/cache';

const insertIfNotExists = async (id: number, data: any, table: any) => {
    if (id === 0) {
        const result = await db.insert(table).values(data).returning({ insertedId: table.id });
        return result[0].insertedId;
    }
    return id;
};

export const createStyle = async (formData: FormData) => {
    try {
        let categoryID = await insertIfNotExists(Number(formData.get('categoryId')), { name: formData.get('category') as string, userId: Number(formData.get('userId')) }, categories);
        let styleId = await insertIfNotExists(Number(formData.get('styleId')), { name: formData.get('style') as string, categoryId: categoryID }, styles);
        let colorId = await insertIfNotExists(Number(formData.get('colorId')), { name: formData.get('color') as string, categoryId: categoryID }, colors);
        let heightId = await insertIfNotExists(Number(formData.get('heightId')), { name: formData.get('height') as string, categoryId: categoryID }, heights);
        let lengthId = await insertIfNotExists(Number(formData.get('lengthId')), { name: formData.get('length') as string, categoryId: categoryID }, lengths);

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

        return { success: true, message: 'Successfully Created Style.' };
    } catch (error) {
        return { success: false, message: 'Failed to Create Style.' };
    }
};

export const updateStyle = async (id: number, formData: FormData) => {
    try {
        let categoryID = await insertIfNotExists(Number(formData.get('categoryId')), { name: formData.get('category') as string, userId: Number(formData.get('userId')) }, categories);
        let styleId = await insertIfNotExists(Number(formData.get('styleId')), { name: formData.get('style') as string, categoryId: categoryID }, styles);
        let colorId = await insertIfNotExists(Number(formData.get('colorId')), { name: formData.get('color') as string, categoryId: categoryID }, colors);
        let heightId = await insertIfNotExists(Number(formData.get('heightId')), { name: formData.get('height') as string, categoryId: categoryID }, heights);
        let lengthId = await insertIfNotExists(Number(formData.get('lengthId')), { name: formData.get('length') as string, categoryId: categoryID }, lengths);

        const fence: FenceInsert = {
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

        await db.update(fences).set(fence).where(eq(fences.id, id));
        revalidatePath('/en/style');

        return { success: true, message: 'Successfully Updated Style.' };
    } catch (error) {
        return { success: false, message: 'Failed to Update Style.' };
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
};

export const deleteStyle = async (id: number) => {
    try {
        await db.delete(fences).where(eq(fences.id, id));
        revalidatePath('/en/style');

        return { success: true, message: 'Successfully Deleted Style!' };
    } catch (error) {
        return { success: false, message: 'Failed to Delete Style.' };
    }
};

export const deleteStyles = async (ids: number[]) => {
    try {
        await db.delete(fences).where(inArray(fences.id, ids));
        revalidatePath('/en/style');

        return { success: true, message: 'Successfully Deleted Styles!' };
    } catch (error) {
        return { success: false, message: 'Failed to Delete Styles.' };
    }
};

export const updateStyleState = async (id: number) => {
    try {
        const updatedStatus = await db.update(fences)
            .set({ isActive: not(fences.isActive) })
            .where(eq(fences.id, id))
            .returning({ status: fences.isActive });

        const status = updatedStatus[0].status ? 'Activated' : 'Deactivated';
        revalidatePath('/en/style');

        return { success: true, message: 'Successfully ' + status + ' Style!' };
    } catch (error) {
        return { success: false, message: 'Failed to Update Style.' };
    }
};