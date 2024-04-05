import { colors } from "@/common/ui/theme";
import { Container } from "@react-three/uikit";

export function Progress({
	value = 0,
	...props
}: React.ComponentPropsWithoutRef<typeof Container> & {
	value?: number;
}) {
	return (
		<Container
			width="100%"
			height={4}
			borderRadius={2}
			backgroundColor={colors.foreground}
			backgroundOpacity={0.2}
			{...props}
		>
			<Container
				backgroundColor={colors.foreground}
				backgroundOpacity={0.8}
				minWidth={4}
				width={`${value * 100}%`}
				height={4}
				borderRadius={2}
			/>
		</Container>
	);
}
