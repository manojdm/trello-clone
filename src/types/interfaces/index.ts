import { ColTypes } from "../col-types";

export interface iUserData {
	_id?: string;
	username?: string;
	email?: string;
	token?: string;
	password?: string;
}

export interface iTasksType {
	_id?: string;
	title?: string;
	description?: string;
	status?: ColTypes;
}