This is a [Next.js](https://nextjs.org/) project bootstrapped with [`npx create-next-app@latest --typescrip`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installing From Scratch

### Install Chakra UI
```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### Install Chakra UI Pro
```
yarn add @chakra-ui/pro-theme # or npm install @chakra-ui/pro-theme
```

### Add Font
The Chakra UI Pro Theme uses [Google Font Inter](https://fonts.google.com/specimen/Inter)
by default, but can be configured otherwise. Since Inter is only a suggestion,
we have not bundled the font with it. The easiest way to install the font is as follows:

```
yarn add @fontsource/inter # or npm install @fontsource/inter
```

```
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'
import '@fontsource/inter/variable.css'

export const App = () => {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.purple },
    },
    theme,
  )
  return (
    <ChakraProvider theme={myTheme}>
      <MyAwesomeProject />
    </ChakraProvider>
  )
}
```

### Add Chakra Provider
/pages/_app.tsx
https://chakra-ui.com/getting-started/nextjs-guide

```
import { theme as chakraTheme } from "@chakra-ui/pro-theme";

const theme = extendTheme(
  {
    colors: { ...chakraTheme.colors, brand: chakraTheme.colors.blue },
  },
  chakraTheme
);


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
  
}

export default MyApp
```

## Additional Depedencies

Install chakra-icons
npm install @chakra-ui/icons --save

We try to avoid extra dependencies wherever possible. If a component requires
an additional dependency, this is highlighted in the source code.
A lot of components use `react-icons` to pep up the visual appearance.
Feel free to replace them with your own icons.
https://react-icons.github.io/react-icons/

```
npm install react-icons --save
```

Icon Usage
```
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
