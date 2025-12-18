This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Technologies Used

### Next.js 16
Next.js is the core framework for this project because it’s fast by default: it supports server-side rendering (SSR) and static generation (SSG), efficient routing, and modern rendering patterns that help pages load quickly and scale well as the app grows.

It also gives a strong “batteries included” developer experience (App Router, API routes/route handlers, image/font optimizations, and first-class TypeScript support), which reduces setup time and helps keep the codebase consistent and maintainable.

### Tailwind CSS
Tailwind CSS is used for styling because its utility-first approach makes it quick to build and iterate on UI without constantly switching between files or inventing one-off class names.

It also helps enforce visual consistency (spacing, typography, colors) and typically ships lean CSS in production via build-time optimizations, while making responsive design and theming (including dark mode) straightforward.

### shadcn/ui
shadcn/ui is used to accelerate UI development with a solid set of accessible, well-designed components that can be composed into more complex features.

Because the components are added directly to the codebase (instead of being a locked-in dependency), it’s easy to customize behavior and styling with Tailwind, keep full ownership of the UI, and evolve the design system as the project changes.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
