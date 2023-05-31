# Profile Navigator

A simple dashboard with only 2 routes:
 - Home
   - Renders all the customers
 - Customer profile
   - Renders individual customer details 

Data fetched from [Free fake API{JSON} placeholder](https://jsonplaceholder.typicode.com/users "read docs")

Visit the [Profile Navigator site here](https://profile-navigator.vercel.app)

## Styling

Project styled with [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/ "read docs")

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Convert to `Typescript`

To get started, create an empty tsconfig.json file in the root of your project:

```js
touch tsconfig.json
```

Start the development server by running `npm run dev`

Next.js will automatically detect TypeScript usage and install the required packages

Follow the steps at [convert your app to Typescript](https://nextjs.org/learn/excel/typescript/create-tsconfig "read docs")

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### How to fix cannot find module css/scss

[Declare a new module](https://linguinecode.com/post/how-to-fix-cannot-find-module-css-scss-nextjs "follow link") in the `next-env.d.ts file`

```js
- error ./pages/_app.tsx:2:0
Module not found: Can't resolve '@/styles/globals.css'
  1 | import 'bootstrap/dist/css/bootstrap.css';
> 2 | import '@/styles/globals.css'
https://nextjs.org/docs/messages/module-not-found

```

### `getStaticProps` OR `getServerSideProps`

The choice to use either of the mentioned functions above depends on the requirements of the application and the nature of the data being fetched

### A simple distinction

**`getServerSideProps`**: Use getServerSideProps when you need to fetch data on each request or when the data is frequently updated

This function runs on the server-side and generates the page on each request, providing fresh data every time

It's useful when you have dynamic data that needs to be fetched at the time of the request, such as personalized content, user-specific data, or real-time data.

**`getStaticProps`**: Use getStaticProps when you have data that can be pre-rendered at build time and does not change frequently

This function runs at build time and fetches data to generate static HTML pages

The generated HTML pages can be cached and served to multiple users, improving performance.

It's suitable for content that does not require frequent updates like:

- blog posts
- marketing pages
- OR static data

**_Conclusion_**

Choose `getServerSideProps` for dynamic data that needs to be fetched on each request and `getStaticProps` for pre-rendering static data that doesn't change often and can be cached for improved performance
