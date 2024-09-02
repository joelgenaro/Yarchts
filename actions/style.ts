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
import { createClient } from '@/config/supabase';
import { CategoryRemoval, OurStyleFormState, StyleLaborForm } from '@/lib/types';

const insertIfNotExists = async (id: number, data: any, table: any) => {
    try {
        if (id === 0) {
            const result = await db.insert(table).values(data).returning({ insertedId: table.id });
            return result[0].insertedId;
        }
        return id;
    } catch (error) {
        throw new Error('Failed to Create Styles.');
    }
};

export const uploadFile = async (file: File, folder: string) => {
    try {
        if (file) {
            const supabase = createClient();

            await supabase.storage
                .from('fence')
                .upload(`${folder}/${file.name}`, file);

            const { data } = await supabase.storage
                .from('fence')
                .getPublicUrl(`${folder}/${file.name}`);

            return data.publicUrl
        }
        return null
    } catch (error) {
        throw new Error('Failed to Upload Files.');
    }
}

export const deleteFile = async (fileUrl: string) => {
    try {
        const supabase = createClient();
        const filePath = fileUrl.match(/\/storage\/v1\/object\/public\/fence\/(.+)/);

        if (filePath && filePath[1]) {
            await supabase.storage
                .from('fence')
                .remove([filePath[1]]);
            return true
        }

        return false;
    } catch (error) {
        throw new Error('Failed to Delete Files.');
    }
};

export const createStyle = async (formData: FormData) => {
    try {
        const image = formData.get("image") ? await uploadFile(formData.get("image") as File, 'styles') : null;
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
            ourPanelPrice: formData.get('panelPrice')?.toString(),
            ourPostPrice: formData.get('postPrice')?.toString(),
            ourLftPrice: formData.get('lftPrice')?.toString(),
            ourThirdFeetGatePrice: formData.get('thirdFeetGatePrice')?.toString(),
            ourForuthFeetGatePrice: formData.get('foruthFeetGatePrice')?.toString(),
            ourFifthFeetGatePrice: formData.get('fifthFeetGatePrice')?.toString(),
            ourEighthFeetGatePrice: formData.get('eighthFeetGatePrice')?.toString(),
            ourTenthFeetGatePrice: formData.get('tenthFeetGatePrice')?.toString(),
            ourHeavyDutyEndPostPrice: formData.get('heavyDutyEndPostPrice')?.toString(),
            ourEndPostPrice: formData.get('endPostPrice')?.toString(),
            ourCornerPostPrice: formData.get('cornerPostPrice')?.toString(),
            ourFlatCapPrice: formData.get('flatCapPrice')?.toString(),
            ourGothicCapPrice: formData.get('gothicCapPrice')?.toString(),
            ourNewEnglandCapPrice: formData.get('newEnglandCapPrice')?.toString(),
            ourFederationCapPrice: formData.get('federationCapPrice')?.toString(),
            image: image
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
        const file = formData.get("image") as File;
        const image = file.size !== 0 ? await uploadFile(file, 'styles') : null;

        if (image) {
            const result = await db.select({
                imagePath: fences.image,
            }).from(fences).where(eq(fences.id, id));;
            const { imagePath } = result[0];

            if (imagePath) await deleteFile(imagePath);
        }

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

        let updatedFence: FenceInsert = {
            categoryId: 0,
            styleId: 0,
            heightId: 0,
            colorId: 0,
            lengthId: 0,
        }

        if (image) {
            updatedFence = { ...fence, image: image }
        }

        await db.update(fences).set(image ? updatedFence : fence).where(eq(fences.id, id));
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
        const result = await db.select({
            imagePath: fences.image,
        }).from(fences).where(eq(fences.id, id));;
        const { imagePath } = result[0];

        if (imagePath) await deleteFile(imagePath);

        await db.delete(fences).where(eq(fences.id, id));
        revalidatePath('/en/style');

        return { success: true, message: 'Successfully Deleted Style!' };
    } catch (error) {
        return { success: false, message: 'Failed to Delete Style.' };
    }
};

export const deleteStyles = async (ids: number[]) => {
    try {
        const result = await db.select({
            imagePath: fences.image,
        }).from(fences).where(inArray(fences.id, ids));
        const images = result.map((item: any) => item.imagePath);

        for (let index = 0; index < images.length; index++) {
            await deleteFile(images[index])
        }

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

export const updateStyleLabor = async (data: StyleLaborForm) => {
    try {
        await db.update(styles)
            .set({ laborPrice: data?.laborPrice, minProfit: data?.minProfit })
            .where(eq(styles.id, Number(data?.style?.id)))

        revalidatePath('/en/style');

        return { success: true, message: 'Successfully Updated Style Labor!' };
    } catch (error) {
        return { success: false, message: 'Failed to Update Style Labor.' };
    }
};

export const updateCategoryRemoval = async (data: CategoryRemoval) => {
    try {
        await db.update(categories)
            .set({ removalCharge: data?.removalCharge })
            .where(eq(categories.id, Number(data?.category?.id)))

        revalidatePath('/en/style');

        return { success: true, message: 'Successfully Updated Removal Charge!' };
    } catch (error) {
        return { success: false, message: 'Failed to Update Removal Charge.' };
    }
};


export const updateOurPrice = async (data: OurStyleFormState) => {
    try {
        const fence = {
            ourPanelPrice: data?.ourPanelPrice.toString(),
            ourPostPrice: data?.ourPostPrice.toString(),
            ourLftPrice: data?.ourLftPrice.toString(),
            ourThirdFeetGatePrice: data?.ourThirdFeetGatePrice.toString(),
            ourForuthFeetGatePrice: data?.ourForuthFeetGatePrice.toString(),
            ourFifthFeetGatePrice: data?.ourFifthFeetGatePrice.toString(),
            ourEighthFeetGatePrice: data?.ourEighthFeetGatePrice.toString(),
            ourTenthFeetGatePrice: data?.ourTenthFeetGatePrice.toString(),
            ourHeavyDutyEndPostPrice: data?.ourHeavyDutyEndPostPrice.toString(),
            ourEndPostPrice: data?.ourEndPostPrice.toString(),
            ourCornerPostPrice: data?.ourCornerPostPrice.toString(),
            ourFlatCapPrice: data?.ourFlatCapPrice.toString(),
            ourGothicCapPrice: data?.ourGothicCapPrice.toString(),
            ourNewEnglandCapPrice: data?.ourNewEnglandCapPrice.toString(),
            ourFederationCapPrice: data?.ourFederationCapPrice.toString(),
        };

        await db.update(fences).set(fence).where(eq(fences.id, Number(data?.id)));
        revalidatePath('/en/style');

        return { success: true, message: 'Successfully Updated Our Price.' };
    } catch (error) {
        return { success: false, message: 'Failed to Update Our Price.' };
    }
};