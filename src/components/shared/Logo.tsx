import { Title, Text, TitleOrder } from "@mantine/core";

interface LogoProps {
	order?: TitleOrder;
}

const Logo: React.FC<LogoProps> = ({ order = 3 }) => {
	return (
		<Title order={order} style={{ userSelect: "none" }}>
			<Text
				inherit
				variant="gradient"
				gradient={{
					from: "red",
					to: "orange",
					deg: 277,
				}}
			>
				Unreal Chat
			</Text>
		</Title>
	);
};

export default Logo;
