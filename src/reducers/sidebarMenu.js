const initialState = {
	isCollapsed: false
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case "COLLAP_MENU":
			return {
				...state,
				isCollapsed: payload
			};
		default:
			return state;
	}
}
