import { Paper } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "@/components";
import { Home, Login, Signup } from "@/pages";

const App: React.FC = () => {
	return (
		<Paper
			sx={(theme) => ({ height: "100vh", padding: theme.spacing.sm })}
			radius={0}
		>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path={"/signup"} element={<Signup />} />
					<Route path={"/login"} element={<Login />} />
				</Routes>
			</BrowserRouter>
		</Paper>
	);
};

export default App;
