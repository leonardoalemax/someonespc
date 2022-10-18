import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import type { VitePWAOptions } from "vite-plugin-pwa";
import { VitePWA } from "vite-plugin-pwa";

const pwaOptions: Partial<VitePWAOptions> = {
	includeAssets: ["favicon.svg"],
	manifest: {
		name: "PWA Router",
		short_name: "PWA Router",
		theme_color: "#ffffff",
		icons: [
			{
				src: "pwa-192x192.png", // <== don't add slash, for testing
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/pwa-512x512.png", // <== don't remove slash, for testing
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "pwa-512x512.png", // <== don't add slash, for testing
				sizes: "512x512",
				type: "image/png",
				purpose: "any maskable",
			},
		],
	},
};

export default defineConfig({
	base: process.env.BASE_URL || "",
	build: {
		sourcemap: process.env.SOURCE_MAP === "true",
	},
	plugins: [
		reactRefresh(),
		VitePWA({
			...pwaOptions,
			registerType: "autoUpdate",
			injectRegister: "script",
			filename: "prompt-sw.js",
			workbox: {
				clientsClaim: true,
				skipWaiting: true,
			},
		}),
	],
});
