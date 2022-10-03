export const getAuthError = ({ auth }) => auth.error || {};
export const isAuth = ({ auth }) => auth.isAuthenticated;
export const getUser = ({ auth }) => auth.user;
