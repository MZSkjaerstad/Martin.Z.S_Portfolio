import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['lodash'],
      output: {
        globals: {
          lodash: '_'
        }
      }
    }
  }
};
