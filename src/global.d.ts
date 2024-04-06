import { Demo, type DemoProps } from "@/domain/islands";
import { demoElementName } from "./domain/islands/demo";

declare global {
	namespace JSX {
		export interface IntrinsicElements {
			[demoElementName]: DemoProps;
		}
	}
}
