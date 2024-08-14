"use server"

import { db } from '@/db';
import { users } from '@/db/schemas/users';
import { eq, not } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export const updateCompanyActiveStateAction = async (key: string, id: number) => {
    try {
        await db.update(users)
            .set(key === 'isActive' ? { isActive: not(users.isActive) } : { isFav: not(users.isFav) })
            .where(eq(users.id, id));

        revalidatePath('/en/projects');

        return {
            success: true, message: 'Successfuly Updated Company Status!',
        };
    } catch (error) {
        return {
            success: false, message: 'Failed to Update Company Status.',
        };
    }
};

export const deleteCompanyAction = async (id: number) => {
    try {
        await await db.delete(users).where(eq(users.id, id));

        revalidatePath('/en/projects');

        return {
            success: true, message: 'Successfuly Deleted Company!',
        };
    } catch (error) {
        return {
            success: false, message: 'Failed to Delete Company.',
        };
    }
};