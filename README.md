# React + Vite

## Deploying to Netlify

1. Push your code to GitHub (or your preferred git host).
2. Go to [Netlify](https://app.netlify.com/) and create a new site from your repo.
3. Set build command to `npm run build` and publish directory to `dist`.
4. Netlify will auto-detect the `netlify.toml` config and handle SPA routing.

### Local build/test
```sh
npm install
npm run build
```

### Netlify CLI (optional)
Install Netlify CLI for local testing:
```sh
npm install -g netlify-cli
netlify dev
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
