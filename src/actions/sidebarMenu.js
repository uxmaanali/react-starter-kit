export const collapseMenu = (collap) => (dispatch) => {
	dispatch({
		type: "COLLAP_MENU",
		payload: collap
	});
};
