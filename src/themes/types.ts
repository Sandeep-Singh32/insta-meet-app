export type ColorTypeKeyName =
	| "primary"
	| "text"
	| "success"
	| "info"
	| "error";

export type ColorPaletteKeyName = any;

export type ColorType = string | (symbol & { __TYPE__: "Color" });

export type ColorPalette = Record<
	ColorTypeKeyName,
	Record<ColorPaletteKeyName, ColorType>
>;
