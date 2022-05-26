import { Container, Paper, ScrollArea, Text } from "@mantine/core";
import { useContext, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Chat } from "@/interfaces";
import { states } from "@/store/index";
import { AppwriteContext } from "@/components/Appwrite";
import useStyles from "./List.style";

const MessageList: React.FC = () => {
	const [messages, setMessages] = useRecoilState(states.chatsState);
	const appwrite = useContext(AppwriteContext);
	const viewport = useRef<HTMLDivElement>(null);
	const user = useRecoilValue(states.userState);

	const { classes, cx } = useStyles();

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
		<Container className={classes.root}>
			<ScrollArea className={classes.container} viewportRef={viewport}>
				{Array.from(messages).map((message) => (
					<Paper
						key={message.id}
						withBorder
						className={cx(classes.message, {
							[classes.messageMe]: user?.name === message.name,
						})}
					>
						<Text size="md">{message.message}</Text>
						<Text size="xs" className={classes.messageName}>
							{message.name}
						</Text>
					</Paper>
				))}
			</ScrollArea>
		</Container>
	);
};

export default MessageList;
