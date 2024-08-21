"use server"

import { db } from '@/db';
import { FenceInsert, fences } from '@/db/schemas/fences';
import { usersToRoles, roles } from '@/db/schemas/roles';
import { eq, getTableColumns, not, and, isNotNull, desc } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export const createStyle = async (formData: FormData) => {
    try {

        // const newFence: FenceInsert = { ...formData };
        // await db.insert(fences).values(newFence);

        revalidatePath('/en/style');

        return {
            success: true, message: 'Successfuly Create Style!',
        };
    } catch (error) {
        return {
            success: false, message: 'Failed to Create Style.',
        };
    }
};