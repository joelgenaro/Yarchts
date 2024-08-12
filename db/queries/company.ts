import { db } from '@/db';
import { users } from '@/db/models/users';
import { desc, eq, isNotNull } from "drizzle-orm";

export const getCompanies = async () => {
    const companies = await db
        .select()
        .from(users)
        .where(isNotNull(users.emailVerifiedAt))
        .orderBy(desc(users.createdAt));
    return companies;
};