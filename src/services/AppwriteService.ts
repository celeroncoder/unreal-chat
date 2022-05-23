import { Appwrite } from "appwrite";

const config = {
	projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
	endpoint: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
};

const appwrite = new Appwrite();

class AppwriteService {
	private readonly appwrite: Appwrite;
	private readonly account;

	constructor() {
		appwrite.setEndpoint(config.endpoint).setProject(config.projectId);
		this.appwrite = appwrite;
		this.account = appwrite.account;
	}

	createAccount(email: string, name: string, password: string) {
		return this.account.create("unique()", email, password, name);
	}

	loginUser(email: string, password: string) {
		return this.account.createSession(email, password);
	}

	logOutUser() {
		return this.account.deleteSession("current");
	}

	getAccount() {
		return this.account.get();
	}
}

export default AppwriteService;
