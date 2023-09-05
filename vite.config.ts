import { defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd() + '/env') };
  return defineConfig({
    plugins: [react()],
    css: {
      modules: {
        // 加上这个配置后，就可以在 scss 文件中使用蛇形类名，在 ts 文件中使用驼峰类型，会自动转换对应上
        localsConvention: 'camelCaseOnly',
      },
    },
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_API_HOST,
          changeOrigin: true,
        },
      },
    },
  });
};
