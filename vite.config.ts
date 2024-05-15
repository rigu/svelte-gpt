import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit() as unknown as Promise<undefined>],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
