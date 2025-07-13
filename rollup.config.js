import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { glob } from 'glob';

const external = ['commander', 'handlebars', 'node-fetch', 'xml2js'];

// Get all dialect entry points
const dialectEntries = glob.sync('src/generated/dialects/*/index.ts').reduce((acc, file) => {
  const dialectName = file.split('/')[3]; // Extract dialect name from path
  acc[`dialects/${dialectName}/index`] = file;
  return acc;
}, {});

export default [
  // ESM bundle
  {
    input: 'src/browser.ts',
    output: {
      file: 'dist/mavlink.esm.js',
      format: 'es',
      sourcemap: true,
      banner: '// @aircast-4g/mavlink - Bundled ESM\n// Generated from TypeScript sources'
    },
    plugins: [
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false
      })
    ]
  },
  
  // CommonJS bundle
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/mavlink.cjs.js',
      format: 'cjs',
      sourcemap: true,
      banner: '// @aircast-4g/mavlink - Bundled CommonJS\n// Generated from TypeScript sources'
    },
    external,
    plugins: [
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false
      })
    ]
  },
  
  // IIFE bundle
  {
    input: 'src/browser.ts',
    output: {
      file: 'dist/mavlink.iife.js',
      format: 'iife',
      name: 'AircastMAVLink',
      sourcemap: true,
      banner: '// @aircast-4g/mavlink - Bundled IIFE\n// Generated from TypeScript sources\n// Usage: window.AircastMAVLink'
    },
    plugins: [
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false
      })
    ]
  },
  
  // Individual dialect bundles
  {
    input: dialectEntries,
    output: {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
      entryFileNames: '[name].js',
      banner: '// @aircast-4g/mavlink - Dialect bundle\n// Generated from TypeScript sources'
    },
    plugins: [
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        compilerOptions: {
          module: 'esnext'
        }
      })
    ]
  },
  
  // Main types bundle
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  },
  
  // Individual dialect types
  {
    input: dialectEntries,
    output: {
      dir: 'dist',
      format: 'es',
      entryFileNames: '[name].d.ts'
    },
    plugins: [dts()]
  }
];
