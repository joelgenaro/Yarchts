"use server"

import { db } from '@/db';
import { users } from '@/db/schemas/users';
import { usersToRoles, roles } from '@/db/schemas/roles';
import { eq, getTableColumns, not, and, isNotNull, desc } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export const updateCompanyActiveStateAction = async (key: string, id: number) => {
    try {
        await db.update(users)
            .set(key === 'isActive' ? { isActive: not(users.isActive) } : { isFav: not(users.isFav) })
            .where(eq(users.id, id));

        revalidatePath('/en/companies');

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
        await db.delete(users).where(eq(users.id, id));

        revalidatePath('/en/companies');

        return {
            success: true, message: 'Successfuly Deleted Company!',
        };
    } catch (error) {
        return {
            success: false, message: 'Failed to Delete Company.',
        };
    }
};

export const getCompanies = async () => {
    try {
        const companies = await db.select({ ...getTableColumns(users) })
            .from(users)
            .leftJoin(usersToRoles, eq(users.id, usersToRoles.userId))
            .leftJoin(roles, eq(usersToRoles.roleId, roles.id))
            .where(and(eq(roles.name, 'company'), isNotNull(users.emailVerifiedAt)))
            .orderBy(desc(users.createdAt));
        return companies;
    } catch (error) {
        throw new Error('Failed to Get Companies.');
    }
};