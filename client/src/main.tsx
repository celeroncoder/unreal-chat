import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import { Wrapper } from "./components";
import Appwrite, { AppwriteContext } from "./components/Appwrite";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Wrapper>
			<RecoilRoot>
				<AppwriteContext.Provider value={new Appwrite()}>
					<App />
				</AppwriteContext.Provider>
			</RecoilRoot>
		</Wrapper>
	</React.StrictMode>
);
