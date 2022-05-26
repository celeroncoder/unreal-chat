import { ActionIcon, Container, Textarea } from "@mantine/core";
import { Send } from "tabler-icons-react";

const Input: React.FC = () => {
	return (
		<Container
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
			p={0}
		>
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
