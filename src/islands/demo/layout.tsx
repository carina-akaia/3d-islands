import { Button } from "@/common/ui/3d/components";
import { colors } from "@/common/ui/3d/theme";
import { Canvas } from "@react-three/fiber";
import { Container, Input, Root, Text } from "@react-three/uikit";
import { useCallback } from "react";
import { updateLayoutParams, useLayoutParams } from "./model";

export const DemoLayout = () => {
	const { heading } = useLayoutParams();

	const onInputChange = useCallback((value: string) => updateLayoutParams({ heading: value }), []);

	return (
		<Canvas style={{ height: "100%" }}>
			<Root minWidth="100%" minHeight="100%" flexDirection="column">
				{heading.value.length > 0 ? <Text fontSize={64}>{heading}</Text> : null}

				<Container width="100%" padding={16} flexDirection="column" gap={16}>
					<Input
						value={heading}
						onValueChange={onInputChange}
						border={2}
						borderColor={colors.foreground}
						borderRadius={12}
						padding={6}
						height={36}
					/>

					<Button platter>
						<Text>{"Test"}</Text>
					</Button>
				</Container>
			</Root>
		</Canvas>
	);
};
