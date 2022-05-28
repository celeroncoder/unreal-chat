import { states } from "@/store";
import { ActionIcon } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Logout as LogoutIcon } from "tabler-icons-react";
import { AppwriteContext } from "../Appwrite";

const Logout: React.FC = () => {
	const appwrite = useContext(AppwriteContext);
	const navigate = useNavigate();
	const setIsLoggedIn = useSetRecoilState(states.isLoggedInState);
	const logoutUser = async () => {
		await appwrite?.logOutUser();
		setIsLoggedIn(false);
		showNotification({
			title: "Logged out",
			message: "You have been logged out, hope you come back soon!",
			icon: <LogoutIcon />,
			color: "yellow",
		});
		navigate("/login");
	};
	return (
		<ActionIcon
			onClick={() => logoutUser()}
			radius="xs"
			variant="hover"
			color="orange"
			size="md"
		>
			<LogoutIcon size={24} />
		</ActionIcon>
	);
};

export default Logout;
