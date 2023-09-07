export const contactsSelector = state => state.contacts.items;

export const isLoadingSelector = state => state.contacts.isLoading;

export const errorSelector = state => state.contacts.error;

export const filterSelector = state => state.filter.filter;

export const errorUserSelector = state => state.user.error;