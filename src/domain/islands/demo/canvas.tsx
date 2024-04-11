import { Button } from "@/common/ui/components";
import { Canvas } from "@react-three/fiber";
import { Container, Root, Text } from "@react-three/uikit";

export type DemoCanvasProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLElement>,
	HTMLElement
> & {
	heading: string | null;
};

export const DemoCanvas: React.FC<DemoCanvasProps> = ({ heading }) => (
	<Canvas style={{ height: "100%" }}>
		<Root minWidth="100%" minHeight="100%" flexDirection="column">
			<Text fontSize={64}>{heading ?? "no heading"}</Text>

			<Container padding={16}>
				<Button>
					<Text transformRotateY={32} transformRotateZ={32}>
						{"Button"}
					</Text>
				</Button>
			</Container>

			<Container flexGrow={1} width={100} margin={48} backgroundColor="green" />
			<Container flexGrow={1} margin={48} backgroundColor="blue" />
		</Root>
	</Canvas>
);
