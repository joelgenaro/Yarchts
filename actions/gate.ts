"use server"

import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { gates } from '@/db/schemas/gates';
import { GateLabor, UserProfit } from '@/lib/types';
import { revalidatePath } from 'next/cache';
import { users } from '@/db/schemas/users';

export const getGates = async (userId: number) => {
    try {
        const result = await db.query.gates.findMany({
            where: (gates, { eq }) => eq(gates.userId, userId),
            with: {
                user: true,
            },
        });

        return result;
    } catch (error) {
        throw new Error('Failed to Get Gates.');
    }
};

export const updateGateLabor = async (data: GateLabor) => {
    try {
        await db.update(gates)
            .set({ laborPrice: data?.laborPrice })
            .where(eq(gates.id, Number(data?.gate?.id)))

        revalidatePath('/en/style');

        return { success: true, message: 'Successfully Updated Gate Labor!' };
    } catch (error) {
        return { success: false, message: 'Failed to Update Gate Labor.' };
    }
};

export const getProfitByUser = async (userId: number) => {
    try {
        const result = await db.select({
            minProfit: users.minProfit,
            holePrice: users.holePrice,
        }).from(users).where(eq(users.id, userId))

        return result[0];
    } catch (error) {
        throw new Error('Failed to Get Styles.');
    }
};

export const updateUserProfit = async (id: number, data: UserProfit) => {
    try {
        await db.update(users)
            .set({ minProfit: data?.minProfit, holePrice: data?.holePrice })
            .where(eq(users.id, id))

        revalidatePath('/en/style');

        return { success: true, message: 'Successfully Updated Common Settings!' };
    } catch (error) {
        return { success: false, message: 'Failed to Update Common Settings.' };
    }
};
