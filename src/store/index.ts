import { Models } from "appwrite";
import { atom } from "recoil";

export const states = {
	isLoggedInState: atom<boolean>({
		key: "isLoggedIn",
		default: false,
	}),
	userState: atom<Models.User<Models.Preferences> | null>({
		key: "user",
		default: null,
		effects: [
			({ onSet }) => {
				onSet((user) => {
					if (user) {
						localStorage.setItem("user", JSON.stringify(user));
					}
				});
			},
		],
	}),
};
