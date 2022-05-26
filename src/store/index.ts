import { Models } from "appwrite";
import { atom } from "recoil";
import { Chat } from "../interfaces";

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
					} else {
						localStorage.setItem("user", "");
					}
				});
			},
		],
	}),
	chatsState: atom<Set<Chat>>({
		key: "chats",
		default: new Set([]),
	}),
};
