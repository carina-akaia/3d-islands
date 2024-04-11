import { Button } from "@/common/ui/components";
import { Canvas } from "@react-three/fiber";
import { Container, Root, Text } from "@react-three/uikit";
import { createRoot } from "react-dom/client";

export type DemoLayoutProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLElement>,
	HTMLElement
> & {
	heading?: string;
};

export const DemoLayout: React.FC<DemoLayoutProps> = ({ heading }) => (
	<Canvas style={{ height: "100%" }}>
		<Root minWidth="100%" minHeight="100%" flexDirection="column">
			<Text fontSize={200}>{heading ?? "no heading"}</Text>

			<Container padding={16}>
				<Button>Button</Button>
			</Container>

			<Container flexGrow={1} width={100} margin={48} backgroundColor="green" />
			<Container flexGrow={1} margin={48} backgroundColor="blue" />
		</Root>
	</Canvas>
);
