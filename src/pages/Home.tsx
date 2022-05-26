import { showNotification } from "@mantine/notifications";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { X } from "tabler-icons-react";
import { Chats } from "@/components";
import { states } from "@/store";

const Home: React.FC = () => {
	const setUser = useSetRecoilState(states.userState);
	const navigate = useNavigate();

	useEffect(() => {
		let user = localStorage.getItem("user");

		try {
			user ? setUser(JSON.parse(user)) : navigate("/login");
		} catch (err: any) {
			console.error(err);
			showNotification({
				title: "[ERROR] Some error occurred while parsing user data",
				message: "Could not parse user data",
				color: "red",
				icon: <X />,
			});
			navigate("/login");
		}
	}, []);

	return <Chats />;
};

export default Home;
