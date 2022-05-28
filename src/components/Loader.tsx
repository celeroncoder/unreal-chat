import {
	Center,
	createStyles,
	Loader as MantineLoader,
	Paper,
	Text,
} from "@mantine/core";
import { Logo } from "./shared";
import Wrapper from "./Wrapper";

const useStyles = createStyles((theme) => ({
	root: {
		padding: theme.spacing.sm,
		height: "100vh",
	},
	container: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

const Loader: React.FC = () => {
	const { classes } = useStyles();
	return (
		<Wrapper>
			<Paper className={classes.root} radius={0}>
				<Center className={classes.container}>
					<Logo order={1} />
					<Text color="dimmed" inherit mb="lg">
						Loading Awesomeness
					</Text>
					<MantineLoader size="lg" variant="bars" />
				</Center>
			</Paper>
		</Wrapper>
	);
};

export default Loader;
