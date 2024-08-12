import {
    categories,
    categoriesUsersRelations,
    categoriesStylesRelations,
} from './models/categories';
import {
    colors,
    colorsUsersRelations,
} from './models/colors';
import {
    heights,
    heightsUsersRelations,
} from './models/heights';
import {
    lengths,
    lengthsUsersRelations,
} from './models/lengths';
import {
    roles,
    rolesRelations,
    usersToRoles,
    usersToRolesRelations,
} from './models/roles';
import {
    styles,
    stylesCategoriesRelations,
} from './models/styles';
import {
    subscriptionItems,
} from './models/subscription_items';
import {
    subscriptions,
} from './models/subscriptions';
import {
    users,
    usersRolesRelations,
    usersColorsRelations,
    usersHeightsRelations,
    usersLengthsRelations,
    usersCategoriesRelations,
} from './models/users';

type Models = {
    categories: typeof categories;
    categoriesUsersRelations: typeof categoriesUsersRelations;
    categoriesStylesRelations: typeof categoriesStylesRelations;
    colors: typeof colors;
    colorsUsersRelations: typeof colorsUsersRelations;
    heights: typeof heights;
    heightsUsersRelations: typeof heightsUsersRelations;
    lengths: typeof lengths;
    lengthsUsersRelations: typeof lengthsUsersRelations;
    roles: typeof roles;
    rolesRelations: typeof rolesRelations;
    usersToRoles: typeof usersToRoles;
    usersToRolesRelations: typeof usersToRolesRelations;
    styles: typeof styles;
    stylesCategoriesRelations: typeof stylesCategoriesRelations;
    subscriptionItems: typeof subscriptionItems;
    subscriptions: typeof subscriptions;
    users: typeof users;
    usersRolesRelations: typeof usersRolesRelations;
    usersColorsRelations: typeof usersColorsRelations;
    usersHeightsRelations: typeof usersHeightsRelations;
    usersLengthsRelations: typeof usersLengthsRelations;
    usersCategoriesRelations: typeof usersCategoriesRelations;
};

export const models: Models = {
    categories,
    categoriesUsersRelations,
    categoriesStylesRelations,
    colors,
    colorsUsersRelations,
    heights,
    heightsUsersRelations,
    lengths,
    lengthsUsersRelations,
    roles,
    rolesRelations,
    usersToRoles,
    usersToRolesRelations,
    styles,
    stylesCategoriesRelations,
    subscriptionItems,
    subscriptions,
    users,
    usersRolesRelations,
    usersColorsRelations,
    usersHeightsRelations,
    usersLengthsRelations,
    usersCategoriesRelations,
};
