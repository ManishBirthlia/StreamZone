# Project Summary:

I have developed a streaming web application designed to broadcast content simultaneously to multiple social media platforms using RTMP (Real-Time Messaging Protocol). The application leverages a robust tech stack to ensure efficient, high-quality streaming and a seamless user experience.

# Key Technologies Used:

- **Frontend:** Built with Vite, React.js, and TypeScript for a fast, modern, and type-safe development environment.
- **State Management:** Utilized Redux for managing application state effectively.
- **UI Components:** Implemented Radix UI for accessible and customizable interface components.
- **Media Processing:** Employed FFmpeg for handling video and audio processing tasks.
- **Real-Time Communication:** Used Socket.io to enable real-time, bidirectional communication between the server and clients.
- **Containerization:** Deployed the application using Docker to ensure consistency across different environments.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
