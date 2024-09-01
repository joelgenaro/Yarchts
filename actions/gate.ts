"use server"

import { db } from '@/db';
import { eq, desc } from 'drizzle-orm';
import { gates } from '@/db/schemas/gates';
import { GateLabor } from '@/lib/types';
import { revalidatePath } from 'next/cache';

export const getGates = async (userId: number) => {
    try {
        const result = await db.query.gates.findMany({
            where: (gates, { eq }) => eq(gates.userId, userId)
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
