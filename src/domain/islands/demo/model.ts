import { useSignal } from "@preact/signals";
import { computed, signal } from "@preact/signals-core";
import { createContext, useContext, useMemo } from "react";

export type DemoLayoutParams = {
	heading: string | null;
};

const layoutParams = signal<DemoLayoutParams>({
	heading: null,
});

export const updateLayoutParams = (update: DemoLayoutParams) => {
	layoutParams.value = { ...layoutParams.value, ...update };
};

export const useLayoutParams = () => {
	return useMemo(() => ({ heading: computed(() => layoutParams.value.heading ?? "") }), []);
};

// export const layoutContext = createContext(params);

// export const useLayoutContext = () => useContext(layoutContext);
