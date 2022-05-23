import { Models } from "appwrite";
import { atom } from "recoil";

export const states = {
	isLoggedInState: atom<boolean>({
		key: "isLoggedIn",
		default: false,
	}),
	sessionState: atom<Models.Session | null>({
		key: "session",
		default: null,
	}),
	userState: atom<Models.User<Models.Preferences> | null>({
		key: "user",
		default: null,
	}),
};
