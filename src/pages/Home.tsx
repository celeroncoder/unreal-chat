import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { states } from "../store";

const Home: React.FC = () => {
	const isLoggedIn = useRecoilValue(states.isLoggedInState);
	const session = useRecoilValue(states.sessionState);
	const user = useRecoilValue(states.userState);

	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoggedIn || !session || !user) {
			navigate("/login");
		}
	}, []);

	return <div>'asd'</div>;
};

export default Home;
