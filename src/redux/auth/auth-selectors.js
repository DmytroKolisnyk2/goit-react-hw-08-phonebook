export const getAuthError = (state) => state.auth.error;
export const getAuthLoading = (state) => state.auth.loading;
export const getAuthName = (state) => state.auth.user.name;
export const getToken = (state) => state.auth.token;
export const getIsAuthenticated = (state) => state.auth.isAuthenticated;