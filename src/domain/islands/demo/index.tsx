"use client";

import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { DemoLayout, type DemoLayoutProps } from "./layout";

export const tagName = "x-demo";

class DemoElement extends HTMLElement {
	// constructor() {
	// 	super();
	// }

	static get observedAttributes() {
		return ["heading"];
	}

	connectedCallback() {
		const elementRoot = document.createElement("div");

		this.attachShadow({ mode: "open" }).appendChild(elementRoot);
		createRoot(elementRoot).render(<DemoLayout heading={this.getAttribute("heading") ?? "test"} />);
	}
}

export const Demo: React.FC<DemoLayoutProps> = (props) => {
	useEffect(() => {
		if (customElements.get(tagName) === undefined) customElements.define(tagName, DemoElement);
	}, []);

	return <x-demo {...props} />;
};
