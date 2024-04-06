import { Demo, type DemoElementRegistry, type DemoProps } from "@/domain/islands";

declare global {
	namespace JSX {
		export interface IntrinsicElements extends DemoElementRegistry {}
	}
}
