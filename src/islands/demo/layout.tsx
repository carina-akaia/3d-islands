import { Button } from "@/common/ui/components";
import { Canvas } from "@react-three/fiber";
import { Container, Input, Root, Text } from "@react-three/uikit";
import { colors } from "../../common/ui/theme";
import { useLayoutParams } from "./model";

export const DemoLayout = () => {
	const { heading } = useLayoutParams();

	return (
		<Canvas style={{ height: "100%" }}>
			<Root minWidth="100%" minHeight="100%" flexDirection="column">
				{heading.value.length > 0 ? <Text fontSize={64}>{heading}</Text> : null}

				<Container padding={16} flexDirection="column" gap={16}>
					<Input
						border={2}
						borderColor={colors.foreground}
						borderRadius={12}
						padding={6}
						height={36}
					/>

					<Button platter>
						<Text>{"Button"}</Text>
					</Button>
				</Container>
			</Root>
		</Canvas>
	);
};
