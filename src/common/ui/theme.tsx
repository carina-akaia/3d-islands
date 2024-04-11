import { DefaultProperties } from "@react-three/uikit";
import { Color, MeshPhongMaterial } from "three";

export class GlassMaterial extends MeshPhongMaterial {
	constructor() {
		super({
			specular: "#555",
			shininess: 100,
		});
	}
}

function hsl(h: number, s: number, l: number) {
	return new Color().setHSL(h / 360, s / 100, l / 100, "srgb");
}

const fromHslString = (input: string) => {
	const values = input
		.match(/hsl\((\d+) \s*(\d+)% \s*(\d+)%\)/)
		?.slice(1)
		.map((value) => Number.parseInt(value));

	return hsl(values?.at(0) ?? 0, values?.at(1) ?? 0, values?.at(2) ?? 0);
};

export const colors: Record<string, Color> = {
	background: fromHslString("hsl(0 0% 0%)"),
	primary: fromHslString("hsl(39 72% 36%)"),
	primaryForeground: fromHslString("hsl(0 0% 100%)"),
	secondary: fromHslString("hsl(216, 78%, 39%)"),
	secondaryForeground: fromHslString("hsl(0 0% 100%)"),
	accent: fromHslString("hsl(210 100% 52%)"),
	accentForeground: fromHslString("hsl(0 0% 100%)"),
	destructive: fromHslString("hsl(336 96% 52%)"),
	destructiveForeground: fromHslString("hsl(0 0% 100%)"),
	card: fromHslString("hsl(199 33% 16%)"),
	cardForeground: fromHslString("hsl(0 0% 100%)"),
};

export const Defaults = (props: React.ComponentPropsWithoutRef<typeof DefaultProperties>) => (
	<DefaultProperties
		scrollbarColor={colors.background}
		scrollbarBorderRadius={4}
		scrollbarOpacity={0.3}
		color={colors.background}
		fontWeight="medium"
		{...props}
	/>
);
