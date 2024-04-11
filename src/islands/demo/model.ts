import { computed, signal } from "@preact/signals-core";
import { useMemo } from "react";

export type DemoLayoutParams = {
	heading: string | null;
};

export const layoutParams = signal<DemoLayoutParams>({
	heading: null,
});

export const updateLayoutParams = (update: DemoLayoutParams) => {
	layoutParams.value = { ...layoutParams.value, ...update };
};

export const useLayoutParams = () => {
	return useMemo(() => ({ heading: computed(() => layoutParams.value.heading ?? "") }), []);
};
