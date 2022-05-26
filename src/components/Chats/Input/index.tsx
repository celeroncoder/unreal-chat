import { ActionIcon, Container, Textarea } from "@mantine/core";
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
		await appwrite?.sendMessage({ message, name: user?.name! });
		setMessage("");
	};

	return (
		<Container className={classes.root}>
			<Textarea
				placeholder="Type a message..."
				autosize
				minRows={1}
				my="sm"
				radius="md"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				style={{ flex: 1 }}
			/>
			<ActionIcon
				ml="xs"
				color="orange"
				size="lg"
				radius="md"
				variant="hover"
				style={{ transform: "translateX(-4em)" }}
			>
				<Send onClick={() => sendMessage()} size={20} />
			</ActionIcon>
		</Container>
	);
};

export default Input;
