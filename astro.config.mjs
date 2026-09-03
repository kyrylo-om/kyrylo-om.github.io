// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://kyrylo-om.github.io/",

	vite: {
		plugins: [tailwindcss()],
	},

	fonts: [
		{
			provider: fontProviders.local(),
			name: "DefaultFont",
			cssVariable: "--font-default",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/Default.ttf"],
						weight: "normal",
						style: "normal",
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: "GamesFont",
			cssVariable: "--font-games",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/Games.ttf"],
						weight: "normal",
						style: "normal",
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: "MusicFont",
			cssVariable: "--font-music",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/Music.ttf"],
						weight: "normal",
						style: "normal",
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: "CodeFont",
			cssVariable: "--font-code",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/Code.ttf"],
						weight: "normal",
						style: "normal",
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: "ArtFont",
			cssVariable: "--font-art",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/Art.ttf"],
						weight: "normal",
						style: "normal",
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: "TextsFont",
			cssVariable: "--font-texts",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/Texts.ttf"],
						weight: "normal",
						style: "normal",
					},
				],
			},
		},
	],
});
