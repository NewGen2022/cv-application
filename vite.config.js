import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/cv-application/',
    plugins: [react()],
    server: {
        hot: true,  // Enable Hot Module Replacement
        open: true, // Automatically open the browser on server start
        hmr: {
            // Enable fast-refresh, which performs React-specific updates without full reloads
            fastRefresh: true
        },
    }
});