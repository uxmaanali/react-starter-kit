import { combineReducers } from "redux";
import sidebarMenu from "../reducers/sidebarMenu";

const rootReducer = combineReducers({
	sidebarMenu: sidebarMenu
});

export default rootReducer;
