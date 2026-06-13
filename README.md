# sachin raja — portfolio

Personal portfolio site. Built with Astro 4, Tailwind CSS v4, TypeScript. Deployed to GitHub Pages.

**Live:** https://kindcli.github.io/profile

## Stack

- [Astro 4](https://astro.build) — static site generation
- [Tailwind CSS v4](https://tailwindcss.com) — utility styles via Vite plugin
- [Geist Mono](https://vercel.com/font) — typography
- GitHub Actions — CI/CD to GitHub Pages

## Dev

```sh
npm install
npm run dev       # localhost:4321
npm run build     # production build → ./dist
npm run preview   # preview build locally
```

## Deploy

Pushes to `main` trigger the GitHub Actions workflow which builds and deploys to GitHub Pages automatically.
Requires **Settings → Pages → Source → GitHub Actions** enabled on the repo.
