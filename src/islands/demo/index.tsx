"use client";

import { useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { DemoLayout } from "./layout";
import { type DemoLayoutParams, layoutParams, updateLayoutParams } from "./model";

const tagName = "masonry-demo";

type DemoAttributes = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
	DemoLayoutParams;

export class DemoElement extends HTMLElement {
	static get observedAttributes() {
		return ["heading"];
	}

	attributeChangedCallback(key: "heading", prev: string, next: string) {
		if (next !== prev) updateLayoutParams({ [key]: next });
	}

	connectedCallback() {
		layoutParams.subscribe(({ heading }) => this.setAttribute("heading", heading ?? ""));

		createRoot(
			this.attachShadow({ mode: "closed" }).appendChild(document.createElement("main")),
		).render(
			<>
				<style>{"main { width: 100%; height: 100% }"}</style>
				<DemoLayout />
			</>,
		);
	}
}

declare global {
	namespace JSX {
		export interface IntrinsicElements {
			[tagName]: DemoAttributes;
		}
	}
}

export const Demo: React.FC<DemoAttributes> = ({ style, ...props }) => {
	const htmlAttributes = useMemo(
		() => ({ style: { display: "flex", ...style }, ...props }),
		[style, props],
	);

	useEffect(() => {
		if (customElements.get(tagName) === undefined) customElements.define(tagName, DemoElement);
	}, []);

	return <masonry-demo {...htmlAttributes} />;
};
