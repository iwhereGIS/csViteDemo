import { defineConfig, loadEnv } from 'vite'

import createPlugins from './vite/plugins'
import {fileURLToPath, URL} from "node:url";

// https://vite.dev/config/
export default defineConfig( ({mode, command}) => {
    const env = loadEnv(mode, process.cwd())
    // console.log(command,env)
    return {
        base: '/csViteDemo-web/',
        plugins: [createPlugins(env, command==='build')],
        server:{
            host: '127.0.0.1',
            port: 5173
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    }
})
