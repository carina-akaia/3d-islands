"use client";

import { Button } from "@/common/ui/components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Container, Root } from "@react-three/uikit";
import { createRoot } from "react-dom/client";

export const demoTagName = "x-demo";

export type DemoProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
	heading?: string;
};

customElements.define(
	demoTagName,

	class DemoWebComponent extends HTMLElement {
		// constructor() {
		// 	super();
		// }

		connectedCallback() {
			const elementRoot = document.createElement("div");

			this.attachShadow({ mode: "open" }).appendChild(elementRoot);

			createRoot(elementRoot).render(
				<Canvas>
					<OrbitControls />

					<Root flexDirection="column">
						<Container padding={16} backgroundColor="black">
							<Button>Test</Button>
						</Container>

						<Container flexGrow={1} margin={48} backgroundColor="green" />
						<Container flexGrow={1} margin={48} backgroundColor="blue" />
					</Root>
				</Canvas>,
			);
		}
	},
);

export const Demo: React.FC<DemoProps> = (props) => <x-demo {...props} />;
