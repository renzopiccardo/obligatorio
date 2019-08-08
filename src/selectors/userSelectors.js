export const isUserLogged = state => {
  return !!state.session.user;
};
