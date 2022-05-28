import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
const App = React.lazy(() => import("@/App"));
import { Wrapper, Loader } from "@/components";
import Appwrite, { AppwriteContext } from "@/components/Appwrite";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Wrapper>
			<RecoilRoot>
				<AppwriteContext.Provider value={new Appwrite()}>
					<Suspense fallback={<Loader />}>
						<App />
					</Suspense>
				</AppwriteContext.Provider>
			</RecoilRoot>
		</Wrapper>
	</React.StrictMode>
);
