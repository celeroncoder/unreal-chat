import {
	Anchor,
	Button,
	Checkbox,
	Container,
	Group,
	Paper,
	PasswordInput,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { X } from "tabler-icons-react";
import { AppwriteContext } from "../components/Appwrite";
import { states } from "../store";

const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const setIsLoggedIn = useSetRecoilState(states.isLoggedInState);
	const setUser = useSetRecoilState(states.userState);
	// TODO: Do something with the remember me checkbox
	const appwrite = useContext(AppwriteContext);

	const handleLogin = async () => {
		if (email === "" || password === "") {
			showNotification({
				title: "Empty Fields",
				message: "All Fields are required",
				color: "red",
			});
			return;
		}

		try {
			const session = await appwrite?.loginUser(email, password);
			if (session) {
				setIsLoggedIn(true);
				let account = await appwrite?.getAccount();
				if (account) setUser(account);

				showNotification({
					title: `Welcome back, ${session?.providerUid!}`,
					message: "You logged in successfully",
					color: "green",
				});

				navigate("/");
			}
		} catch (err: any) {
			showNotification({
				title: err.name,
				message: err.message,
				color: "red",
				icon: <X />,
			});
			console.error("[ERROR]", err);
		}
	};

	const navigate = useNavigate();
	return (
		<Container size={420} my={40}>
			<Title
				align="center"
				sx={(theme) => ({
					fontFamily: `${theme.fontFamily}, monospace`,
					fontWeight: 900,
				})}
			>
				Welcome back!
			</Title>
			<Text color="dimmed" size="sm" align="center" mt={5}>
				Do not have an account yet?{" "}
				<Anchor<"a">
					size="sm"
					onClick={(event) => {
						event.preventDefault();
						navigate("/signup");
					}}
				>
					Create Account
				</Anchor>
			</Text>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<TextInput
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					label="Email"
					placeholder="you@chat.real"
					required
				/>
				<PasswordInput
					label="Password"
					placeholder="Your password"
					required
					mt="md"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Group position="apart" mt="md">
					<Checkbox label="Remember me" />
					<Anchor<"a">
						onClick={(event) => event.preventDefault()}
						href="#"
						size="sm"
					>
						Forgot password?
					</Anchor>
				</Group>
				<Button fullWidth mt="xl" onClick={() => handleLogin()}>
					Sign in
				</Button>
			</Paper>
		</Container>
	);
};

export default Login;
