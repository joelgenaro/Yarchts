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
    } catch (error) {
        return {
            message: 'Database Error: Failed to Update Company.',
        };
    }
    revalidatePath('/en/projects');
};