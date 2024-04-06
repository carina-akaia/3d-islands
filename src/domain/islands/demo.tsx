"use client";

import { Button } from "@/common/ui/components";
import { Canvas } from "@react-three/fiber";
import { Container, Root } from "@react-three/uikit";
import { createRoot } from "react-dom/client";

const elementName = "x-demo";
const elementRoot = document.createElement("div");

export interface DemoElementRegistry {
	[elementName]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
		heading?: string;
		subHeading?: string;
		size?: string;
	};
}

customElements.define(
	elementName,

	class DemoWebComponent extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: "open" }).appendChild(elementRoot);
		}

		connectedCallback() {
			createRoot(elementRoot).render(
				<Canvas>
					<Root flexDirection="column">
						<Button>Test</Button>
					</Root>
				</Canvas>,
			);
		}
	},
);

export const Demo: React.FC<DemoElementRegistry["x-demo"]> = (props) => <x-demo {...props} />;
