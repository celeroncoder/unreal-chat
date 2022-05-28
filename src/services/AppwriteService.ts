import { Appwrite } from "appwrite";
import { Chat } from "@/interfaces";

const config = {
	projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
	endpoint: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
};

const appwrite = new Appwrite();

class AppwriteService {
	public readonly appwrite: Appwrite;
	private readonly account;
	public readonly collectionId: string = import.meta.env
		.VITE_APPWRITE_COLLECTION_ID;

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

	async getChats(): Promise<Set<Chat>> {
		try {
			const documents = (
				await this.appwrite.database.listDocuments(
					this.collectionId,
					[],
					100
				)
			).documents;
		let chats = new Set<Chat>([]);
		documents.forEach((document) => {
			chats.add({
				// @ts-ignore
				message: document.message,
				// @ts-ignore
				name: document.name,
				id: document.$id,
			});
		});

		return chats;
	}

	async sendMessage(message: Chat): Promise<Chat> {
		const res = await this.appwrite.database.createDocument(
			this.collectionId,
			"unique()",
			{
				name: message.name,
				message: message.message,
			}
		);

		return { id: res.$id, ...message };
	}
}

export default AppwriteService;
