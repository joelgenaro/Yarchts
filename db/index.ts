import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as categories from './schemas/categories';
import * as colors from './schemas/colors';
import * as heights from './schemas/heights';
import * as lengths from './schemas/lengths';
import * as roles from './schemas/roles';
import * as styles from './schemas/styles';
import * as subscription_items from './schemas/subscription_items';
import * as subscriptions from './schemas/subscriptions';
import * as users from './schemas/users';

config({ path: '.env' });

export const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema: { ...categories, ...colors, ...heights, ...lengths, ...roles, ...styles, ...subscription_items, ...subscriptions, ...users } });