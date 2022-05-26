import {
	Anchor,
	Button,
	Container,
	Paper,
	PasswordInput,
	TextInput,
	Title,
	Text,
	Center,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "tabler-icons-react";
import { AppwriteContext } from "@/components/Appwrite";
import { Logo } from "@/components/shared";

const Signup: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const appwrite = useContext(AppwriteContext);

	const handleSignup = async () => {
		if (name === "" || email === "" || password === "") {
			showNotification({
				title: "Empty Fields",
				message: "All Fields are required",
				color: "red",
			});
			return;
		}

		try {
			const res = await appwrite?.createAccount(email, name, password);
			showNotification({
				title: "Welcome to Unreal Chat!",
				message: "You signed up successfully",
				color: "green",
			});
			navigate("/login");
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

	return (
		<Container size={420} my={40}>
			<Title
				align="center"
				sx={(theme) => ({
					fontFamily: `${theme.fontFamily}, monospace`,
					fontWeight: 900,
				})}
			>
				Get Started with
			</Title>
			<Center>
				<Logo order={1} />
			</Center>

			<Text color="dimmed" size="sm" align="center" mt={5}>
				Already have an account?{" "}
				<Anchor<"a">
					size="sm"
					onClick={(event) => {
						event.preventDefault();
						navigate("/login");
					}}
				>
					Login
				</Anchor>
			</Text>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<TextInput
					value={name}
					onChange={(e) => setName(e.target.value)}
					label="Name"
					placeholder="alex"
					required
				/>
				<TextInput
					label="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="you@chat.real"
					mt="md"
					required
				/>
				<PasswordInput
					label="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Your password"
					required
					mt="md"
				/>
				<Button fullWidth mt="xl" onClick={() => handleSignup()}>
					Create Account
				</Button>
			</Paper>
		</Container>
	);
};

export default Signup;
