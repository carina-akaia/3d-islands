import { Button } from "@/common/ui/components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Container, Root, Text } from "@react-three/uikit";

export type DemoLayoutProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLElement>,
	HTMLElement
> & {
	heading?: string;
};

export const DemoLayout: React.FC<DemoLayoutProps> = ({ heading }) => (
	<Canvas>
		<OrbitControls />

		<Root flexDirection="column">
			<Text>{heading ?? "Welcome"}</Text>

			<Container padding={16} backgroundColor="black">
				<Button>Test</Button>
			</Container>

			<Container flexGrow={1} margin={48} backgroundColor="green" />
			<Container flexGrow={1} margin={48} backgroundColor="blue" />
		</Root>
	</Canvas>
);
