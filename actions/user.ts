"use server"

import { db } from '@/db';
import { users } from '@/db/schemas/users';
import { usersToRoles, roles } from '@/db/schemas/roles';
import { eq, getTableColumns, not, and, isNotNull, desc } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export const RetrieveUser = async (email: string) => {
    try {
        const retrieveUser = await db.query.users.findFirst({
            where: eq(users.email, email),
        });
        return retrieveUser!;
    } catch (error) {
        throw new Error('Failed.');
    }
};