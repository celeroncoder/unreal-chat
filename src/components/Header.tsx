import { states } from "@/store";
import { Group, Header as MantineHeader } from "@mantine/core";
import { useRecoilValue } from "recoil";
import { ColorSchemeToggle, Logo, Logout } from "./shared";

const Header: React.FC = () => {
	const isLoggedIn = useRecoilValue(states.isLoggedInState);
	return (
		<MantineHeader height={40}>
			<Group align="stretch" direction="row" position="apart">
				<Logo />
				<Group>
					{isLoggedIn && <Logout />}
					<ColorSchemeToggle />
				</Group>
			</Group>
		</MantineHeader>
	);
};

export default Header;
