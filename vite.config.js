import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		ghPages({
			onBeforePublish: ({ outDir }) => {
				console.log(`📦 Starting deployment from ${outDir}...`);
			},
			onPublish: ({ branch }) => {
				console.log(`🎉 Successfully deployed to ${branch}!`);
			},
			onError: (error) => {
				console.error("❌ Deployment failed:", error);
			},
		}),
	],
	base: "/portfolio/",
});
