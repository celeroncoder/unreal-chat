import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	root: {
		width: "100%",
		flex: 1,
		marginTop: theme.spacing.sm,
	},
	container: {
		height: "79vh",
		position: "relative",
		paddingTop: theme.spacing.xs,
		paddingBottom: theme.spacing.xs,
	},
	message: {
		padding: `1px ${theme.spacing.sm}px`,
		marginBottom: theme.spacing.xs,
		width: "fit-content",
		backgroundColor: theme.colors.orange[3],
		color: theme.colors.dark[7],
		marginRight: theme.spacing.lg,
		marginLeft: theme.spacing.lg,
	},
	messageMe: {
		marginLeft: "auto",
	},
	messageName: {
		color: theme.colors.gray[9],
	},
}));

export default useStyles;
