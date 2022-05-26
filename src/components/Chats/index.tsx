import { Center, createStyles, Paper } from "@mantine/core";
import Input from "./Input";
import MessageList from "./List";

const ChatsContainer: React.FC = () => {
	const { classes } = useStyles();
	return (
		<Center className={classes.root}>
			<Paper withBorder radius="lg" className={classes.container}>
				<MessageList />
				<Input />
			</Paper>
		</Center>
	);
};

const useStyles = createStyles((theme) => ({
	root: {
		marginTop: theme.spacing.lg,
		minHeight: "90vh",
	},
	container: {
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
	},
}));

export default ChatsContainer;
