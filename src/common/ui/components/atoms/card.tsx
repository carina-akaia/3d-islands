import { GlassMaterial, colors } from "@/common/ui/theme";
import { Container, DefaultProperties } from "@react-three/uikit";

export function Card({ children, ...props }: React.ComponentPropsWithoutRef<typeof Container>) {
	return (
		<Container
			backgroundColor={colors.card}
			backgroundOpacity={0.8}
			borderColor={colors.card}
			borderOpacity={0.8}
			border={4}
			borderBend={0.3}
			panelMaterialClass={GlassMaterial}
			borderRadius={32}
			{...props}
		>
			<DefaultProperties color={colors.cardForeground}>{children}</DefaultProperties>
		</Container>
	);
}
