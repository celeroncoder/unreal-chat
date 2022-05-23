import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { states } from "../store";

const Home: React.FC = () => {
	const setUser = useSetRecoilState(states.userState);
	const navigate = useNavigate();

	useEffect(() => {
		let user = localStorage.getItem("user");
		user ? setUser(JSON.parse(user)) : navigate("/login");
	}, []);

	return <div>'asd'</div>;
};

export default Home;
