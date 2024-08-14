import { db } from '@/db';
import { users } from '../schemas/users';
import { usersToRoles, roles } from '../schemas/roles';
import { eq, desc, isNotNull, and, getTableColumns } from 'drizzle-orm';

export const getCompanies = async () => {
    const companies = await db.select({ ...getTableColumns(users) })
        .from(users)
        .leftJoin(usersToRoles, eq(users.id, usersToRoles.userId))
        .leftJoin(roles, eq(usersToRoles.roleId, roles.id))
        .where(and(eq(roles.name, 'company'), isNotNull(users.emailVerifiedAt)))
        .orderBy(desc(users.createdAt));
    return companies;
};