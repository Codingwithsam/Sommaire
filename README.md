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

**Icons:** **Lucide** is used for icons because it pairs nicely with shadcn/ui and React, stays visually consistent across the app, and keeps icon usage simple and lightweight.

### Warp
Warp is used for AI-assisted coding and documentation to speed up development tasks like scaffolding features, refining copy, explaining code, and generating small utilities or snippets while staying in the same workflow.

It also helps keep iteration fast by combining a modern terminal experience with reusable commands and a more streamlined way to run, debug, and document changes as the project evolves.

### Junie
Junie is also used as an additional AI assistant to help with coding and documentation work, providing another option for drafting changes, clarifying implementation details, and improving written project docs.

Using multiple assistants makes it easier to cross-check ideas, unblock tricky parts faster, and keep momentum when building and polishing features.

### Clerk
Clerk is used for authentication and user validation so users can sign in with Google and other authentication methods without us having to build and maintain the entire auth system from scratch.

It also simplifies common auth flows (sign up, sign in, session management) and helps keep authentication consistent and secure across the app.

### UploadThing
UploadThing is used to manage PDF uploads with a simple, developer-friendly upload flow while storing files in an S3 bucket under the hood.

It gives us a clean layer on top of Amazon S3 (handling upload endpoints and client/server integration), which reduces boilerplate and makes file uploads easier to build and maintain.

### LangChain
LangChain is used to extract and load the content of uploaded PDFs so we can turn documents into structured text that’s ready for downstream processing (search, summarization, or other AI-powered features).

It also provides a flexible set of loaders and utilities that make it easier to evolve the document pipeline over time (chunking strategies, metadata handling, and swapping components as requirements change).

### OpenAI
OpenAI is used to process the text and metadata produced by LangChain and generate high-quality summaries using a customized prompt tailored to the project’s needs.

It allows us to reliably produce consistent outputs (tone, structure, and key takeaways) while keeping the summarization logic centralized in prompts that can be iterated on without rewriting large parts of the pipeline.

### Gemini AI
Gemini can also be used as a fallback provider if we hit OpenAI usage limits, giving us a quick toggle to keep summarization and other AI features running without downtime.

It can also be a more cost-effective option for certain workloads, so having Gemini available lets us optimize spend while keeping the same overall pipeline and prompt-driven approach.

### NeonDB (PostgreSQL)
NeonDB is used as the primary database for this project, providing a managed PostgreSQL backend that works well with modern Next.js apps.

It’s a good fit for rapid development and deployment, with a serverless-friendly setup that makes it easier to scale and manage database access as the application grows.

### Zod
Zod is used for schema definition and validation so we can enforce consistent data shapes at runtime (forms, API inputs, and responses) while keeping validation logic close to the types.

It helps catch invalid data early with clear error messages and reduces duplication by letting us reuse the same schemas across client and server.

### date-fns
date-fns is a modern JavaScript date utility library we use to format and manipulate dates consistently across the app (for example, turning raw date stamps into human-friendly timestamps).

It keeps date handling readable and predictable with small, focused functions, which helps reduce bugs around formatting, time calculations, and displaying dates in the UI. It’s also modular, so we can import only what we need and avoid bloating the JavaScript bundle.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
