export const isUserLogged = state => {
  return !!state.session.user;
};


export const getUser = state => {
  return state.session.user;
};


