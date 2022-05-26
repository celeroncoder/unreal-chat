import { Container, Paper, ScrollArea, Text } from "@mantine/core";
import { useContext, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Chat } from "../../interfaces";
import { states } from "../../store";
import { AppwriteContext } from "../Appwrite";

const MessageList: React.FC = () => {
	const [messages, setMessages] = useRecoilState(states.chatsState);
	const appwrite = useContext(AppwriteContext);
	const viewport = useRef<HTMLDivElement>(null);
	const user = useRecoilValue(states.userState);

	useEffect(() => {
		viewport.current?.scrollTo({
			top: viewport.current?.scrollHeight,
			behavior: "smooth",
		});
	}, []);

	useEffect(() => {
		const unsubscribe = appwrite?.appwrite?.subscribe(
			`collections.${appwrite.collectionId}.documents`,
			(response) => {
				// @ts-ignore
				if (response.event === "database.documents.create") {
					setMessages(
						(messages) =>
							new Set([
								...Array.from(messages),
								response.payload as Chat,
							])
					);
				}
			}
		);

		return () => {
			unsubscribe!();
		};
	}, []);

	useEffect(() => {
		(async () => {
			setMessages(await appwrite?.getChats()!);
		})();
	}, []);
	return (
		<Container style={{ width: "100%", flex: 1 }} mt="sm">
			<ScrollArea
				py="xs"
				style={{
					height: "79vh",
					position: "relative",
				}}
				viewportRef={viewport}
			>
				{Array.from(messages).map((message) => (
					<Paper
						key={message.id}
						withBorder
						px="sm"
						py={1}
						mb="xs"
						sx={(theme) => ({
							width: "fit-content",
							backgroundColor: theme.colors.orange[3],
							color: theme.colors.dark[7],
							marginLeft:
								message.name === user?.name
									? "auto"
									: theme.spacing.lg,
							marginRight: theme.spacing.lg,
						})}
					>
						<Text size="md">{message.message}</Text>
						<Text
							size="xs"
							sx={(theme) => ({ color: theme.colors.gray[9] })}
						>
							{message.name}
						</Text>
					</Paper>
				))}
			</ScrollArea>
		</Container>
	);
};

export default MessageList;
