"use client";

import { createRoot } from "react-dom/client";
import { DemoLayout, type DemoLayoutProps } from "./layout";

export const tagName = "x-demo";

customElements.define(
	tagName,

	class DemoElement extends HTMLElement {
		// constructor() {
		// 	super();
		// }

		connectedCallback() {
			const elementRoot = document.createElement("div");

			this.attachShadow({ mode: "open" }).appendChild(elementRoot);
			createRoot(elementRoot).render(<DemoLayout />);
		}
	},
);

export const Demo: React.FC<DemoLayoutProps> = (props) => <x-demo {...props} />;
