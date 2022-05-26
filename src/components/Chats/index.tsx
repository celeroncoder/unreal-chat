import { Center, Paper } from "@mantine/core";
import Input from "./Input";
import MessageList from "./MessageList";

const ChatsContainer: React.FC = () => {
	return (
		<Center
			mt="lg"
			style={{
				minHeight: "90vh",
			}}
		>
			<Paper
				withBorder
				radius="lg"
				sx={(theme) => ({
					background:
						theme.colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[1],
					height: "90vh",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "space-between",
				})}
			>
				<MessageList />
				<Input />
			</Paper>
		</Center>
	);
};

export default ChatsContainer;
