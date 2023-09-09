export const contactsSelector = state => state.contacts.items;

export const isLoadingSelector = state => state.contacts.isLoading;

export const errorSelector = state => state.contacts.error;

export const filterSelector = state => state.filter.filter;

export const errorUserSelector = state => state.user.error;

export const authenticatedSelector = state => state.user.authenticated;

export const userEmailSelector = state => state.user.userData.email;
 
export const userDataSelector = state => state.user.userData;