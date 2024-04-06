"use client";

import { Button } from "@/common/ui/components";
import { Canvas } from "@react-three/fiber";
import { createRoot } from "react-dom/client";

export const demoElementName = "x-demo";
const elementRoot = document.createElement("div");

export type DemoProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
	heading?: string;
	subHeading?: string;
	size?: string;
};

customElements.define(
	demoElementName,

	class DemoWebComponent extends HTMLElement {
		constructor() {
			super();

			this.attachShadow({ mode: "open" }).appendChild(elementRoot);
		}

		connectedCallback() {
			createRoot(elementRoot).render(
				<Canvas>
					<Button>Test</Button>
				</Canvas>,
			);
		}
	},
);

export const Demo: React.FC<DemoProps> = (props) => <x-demo {...props} />;
