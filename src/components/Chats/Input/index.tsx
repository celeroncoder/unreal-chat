import { ActionIcon, Container, Textarea } from "@mantine/core";
import { Send } from "tabler-icons-react";
import useStyles from "./Input.styles";

const Input: React.FC = () => {
	const { classes } = useStyles();
	return (
		<Container className={classes.root}>
			<Textarea
				placeholder="Type a message..."
				autosize
				minRows={1}
				my="sm"
				radius="md"
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
				<Send size={20} />
			</ActionIcon>
		</Container>
	);
};

export default Input;
