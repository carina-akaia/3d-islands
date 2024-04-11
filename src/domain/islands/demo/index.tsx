"use client";

import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { DemoCanvas, type DemoCanvasProps } from "./canvas";

const tagName = "x-demo";

export class DemoLayout extends HTMLElement {
	// constructor() {
	// 	super();
	// }

	static get observedAttributes() {
		return ["heading"];
	}

	get props(): DemoCanvasProps {
		return { heading: this.getAttribute("heading") };
	}

	connectedCallback() {
		createRoot(
			this.attachShadow({ mode: "open" }).appendChild(document.createElement("main")),
		).render(
			<>
				<style>{"main { width: 100% }"}</style>
				<DemoCanvas {...this.props} />
			</>,
		);
	}
}

declare global {
	namespace JSX {
		export interface IntrinsicElements {
			[tagName]: DemoCanvasProps;
		}
	}
}

export const Demo: React.FC<DemoCanvasProps> = (props) => {
	useEffect(() => {
		if (customElements.get(tagName) === undefined) customElements.define(tagName, DemoLayout);
	}, []);

	return <x-demo style={{ display: "flex", height: "100%" }} {...props} />;
};
