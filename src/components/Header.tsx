import { Group, Header as MantineHeader } from "@mantine/core";
import { ColorSchemeToggle, Logo } from "./shared";

const Header: React.FC = () => {
	return (
		<MantineHeader height={40}>
			<Group align="stretch" direction="row" position="apart">
				<Logo />
				<ColorSchemeToggle />
			</Group>
		</MantineHeader>
	);
};

export default Header;
