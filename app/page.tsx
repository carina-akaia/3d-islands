"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Demo = dynamic(() => import("@/islands/demo").then((mod) => mod.Demo), { ssr: false });

export default function Page() {
	return (
		<Suspense>
			<Demo heading="Hello, world!" style={{ minWidth: 480 }} />
		</Suspense>
	);
}
