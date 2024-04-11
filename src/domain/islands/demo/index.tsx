"use client";

import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { DemoLayout, type DemoLayoutProps } from "./layout";

const tagName = "x-demo";

export class DemoCanvas extends HTMLElement {
	// constructor() {
	// 	super();
	// }

	static get observedAttributes() {
		return ["heading"];
	}

	connectedCallback() {
		createRoot(
			this.attachShadow({ mode: "open" }).appendChild(document.createElement("div")),
		).render(<DemoLayout heading={this.getAttribute("heading") ?? undefined} />);
	}
}

declare global {
	namespace JSX {
		export interface IntrinsicElements {
			[tagName]: DemoLayoutProps;
		}
	}
}

export const Demo: React.FC<DemoLayoutProps> = (props) => {
	useEffect(() => {
		if (customElements.get(tagName) === undefined) customElements.define(tagName, DemoCanvas);
	}, []);

	return <x-demo {...props} />;
};
