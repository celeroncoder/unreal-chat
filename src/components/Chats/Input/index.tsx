import { ActionIcon, Container, TextInput } from "@mantine/core";
import { useContext, useState } from "react";
import { Send } from "tabler-icons-react";
import { AppwriteContext } from "@/components/Appwrite";

import useStyles from "./Input.styles";
import { useRecoilValue } from "recoil";
import { states } from "@/store";

const Input: React.FC = () => {
	const { classes } = useStyles();
	const appwrite = useContext(AppwriteContext);
	const user = useRecoilValue(states.userState);

	const [message, setMessage] = useState<string>("");

	const sendMessage = async () => {
		if (message !== "") {
			await appwrite?.sendMessage({ message, name: user?.name! });
			setMessage("");
		}
	};

	return (
		<Container className={classes.root}>
			<TextInput
				placeholder="Type a message..."
				my="sm"
				radius="md"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				style={{ flex: 1 }}
				styles={{ input: { width: "105%" } }}
			/>
			<ActionIcon
				ml="xs"
				color="orange"
				size="md"
				radius="md"
				variant="hover"
				onClick={() => sendMessage()}
			>
				<Send size={20} />
			</ActionIcon>
		</Container>
	);
};

export default Input;
