# electron-correction

An Electron application with Preact

## Setup Electron-vite and Preact

### Init Electron-vite React Project

```bash
$ npm create @quick-start/electron my-app -- --template react

```
or

```bash
$ npm create @quick-start/electron my-app --template react
```

### Convert project to preact

#### Install Preact and librairies

```bash
$ npm install -D @preact/preset-vite 
```

```bash
$ npm i preact preact-router @mui/material @mui/icons-material @emotion/react @emotion/styled
```
### Config project

#### App.jsx :

```javascript

    export function App() {
        return (
            <h1>Hello world</h1>
        )
    }
```

#### main.jsx

```javascript
import { App } from './App.jsx';
import { render } from 'preact';


render(<App />, document.getElementById('app'));

```

you can add public folder in render folder

#### index.html

```html
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
```

#### electron.vite.config

```javascript
import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import preact from '@preact/preset-vite';


export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [preact()]
  }
})
```
#### Add jsconfig

add jsconfig.js file in root of folder

```javascript
{
	"compilerOptions": {
		"target": "ES2020",
		"module": "ESNext",
		"moduleResolution": "bundler",
		"noEmit": true,
		"allowJs": true,
		"checkJs": true,

		/* Preact Config */
		"jsx": "react-jsx",
		"jsxImportSource": "preact",
		"skipLibCheck": true,
		"paths": {
			"react": ["./node_modules/preact/compat/"],
			"react-dom": ["./node_modules/preact/compat/"]
		}
	},
	"include": ["node_modules/vite/client.d.ts", "**/*"]
}
```

### Uninstall useless library

```bash
$ npm uninstall eslint eslint-plugin-react prettier react react-dom

```



## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
