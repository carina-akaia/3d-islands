import { type DemoProps, demoTagName } from "./demo";

declare global {
	namespace JSX {
		export interface IntrinsicElements {
			[demoTagName]: DemoProps;
		}
	}
}
