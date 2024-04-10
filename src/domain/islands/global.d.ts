import { type Demo, tagName as demo } from "./demo";

declare global {
	namespace JSX {
		export interface IntrinsicElements {
			[demo]: React.ComponentProps<typeof Demo>;
		}
	}
}
