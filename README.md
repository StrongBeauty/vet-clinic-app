# Pet Clinic

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Read DOC.md

## Getting Started

First, install dependencies:

```bash
yarn install
```

Copy .env.example to .env.local

```bash
cp .env.example .env.local
```

or 

Manually create .env.local and paste content from .env.example

Start project 

```bash
yarn  build-start
```

Then, run the development server:

```bash
yarn dev
```

run lint fix

```bash
yarn lint-fix
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/patients](http://localhost:3000/api/pateints). This endpoint can be edited in `pages/api/pateints.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
