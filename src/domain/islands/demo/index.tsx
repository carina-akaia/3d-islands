"use client";

import { useEffect } from "react";
import { DemoLayout, type DemoLayoutProps } from "./layout";

const tagName = "x-demo";

declare global {
	namespace JSX {
		export interface IntrinsicElements {
			[tagName]: DemoLayoutProps;
		}
	}
}

export const Demo: React.FC<DemoLayoutProps> = (props) => {
	useEffect(() => {
		if (customElements.get(tagName) === undefined) customElements.define(tagName, DemoLayout);
	}, []);

	return <x-demo {...props} />;
};
