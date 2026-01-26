# /
# My personal landing page

This project is built with Vue.

## Follow along with the progress
[Figma 2024-2025 project](https://www.figma.com/design/PmxHjTSPd169MTszaWe6ql/Site?node-id=0-1&t=FVnq9c7RyTfQZ1Mc-1)
<br>
The plan is to build this in phases as I have time.
* Phase 1 - New landing page skeleton
* Phase 2 - Introduce some extra content
* Phase 3 - Add project blocks
* Phase 4 - Add CV to SPA
* Phase 5 - Move project content to individual pages in the app instead of linking out

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup
## Dev logistics
### Project Setup

```sh
yarn
```

#### Compile and Hot-Reload for Development

```sh
yarn dev
```

#### Type-Check, Compile and Minify for Production

```sh
yarn build
```

#### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
