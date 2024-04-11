"use client";

import { useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { DemoLayout } from "./layout";
import { type DemoLayoutParams, updateLayoutParams } from "./model";

const tagName = "x-demo";

type DemoAttributes = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
	DemoLayoutParams;

export class DemoElement extends HTMLElement {
	static get observedAttributes() {
		return ["heading"];
	}

	attributeChangedCallback(key: "heading", prev: string, next: string) {
		console.log({ key, prev, next });

		if (next !== prev) updateLayoutParams({ [key]: next });
	}

	connectedCallback() {
		createRoot(
			this.attachShadow({ mode: "open" }).appendChild(document.createElement("main")),
		).render(
			<>
				<style>{"main { width: 100% }"}</style>
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
		() => ({ style: { display: "flex", height: "100%", ...style }, ...props }),
		[style, props],
	);

	useEffect(() => {
		if (customElements.get(tagName) === undefined) customElements.define(tagName, DemoElement);
	}, []);

	return <x-demo {...htmlAttributes} />;
};
