export const isUserLogged = state => {
	return !!state.session.user;
};

export const getUser = state => {
	return state.session.user;
};

export const getChampionshipId = state => {
	return state.session.user.championship;//
};

export const getNumberOfTeams = state => {
	return state.session.teams.length;
};

export const isChampionshipConfirmed = state => {
	return !!state.session.user.championship.isConfirmed;
};
