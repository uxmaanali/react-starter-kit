import axios from "axios";

axios.defaults.baseURL = "http://localhost:22000/api";

export const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
};

export const httpConfig = {
	headers: {
		"Content-Type": "application/json"
	}
};
