# James Hurley's Blog

The source for [blog.jameshurley.ie](https://blog.jameshurley.ie), a personal site for writing, photography, and useful referral links.

Built with [Next.js](https://nextjs.org/) and [Nextra](https://nextra.site/) so most of the site can be maintained as Markdown or MDX. The site also includes responsive photo albums, an automatically generated RSS feed, dark mode, and Vercel Analytics and Speed Insights.

## What's inside

- **Blog posts** written in Markdown, with front matter for dates, tags, descriptions, and authors
- **Photo albums** served from CloudFront and rendered with optimized Next.js images
- **Tag pages** generated dynamically from post metadata
- **Referral links** presented in a dedicated card-based page
- **RSS feed** generated from published posts during every production build
- **Social metadata**, local Inter fonts, favicons, and light/dark themes

## Tech stack

- Next.js (Pages Router)
- React 18
- Nextra 3 with `nextra-theme-blog`
- TypeScript for the Next.js entry points
- CSS Modules and global CSS
- Vercel Analytics and Speed Insights

## Getting started

### Prerequisites

- [Node.js 24](https://nodejs.org/)
- npm (included with Node.js)

### Run locally

```bash
git clone git@github.com:jhurl3y/personal-blog.git
cd personal-blog
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Generate `public/feed.xml` and create a production build |
| `npm start` | Serve the production build |

## Project structure

```text
components/          React components for albums, images, and referrals
pages/               Pages, posts, tags, and dynamic photo-album routes
public/              Fonts, icons, referral images, and the generated RSS feed
scripts/gen-rss.js   RSS feed generator
styles/              Global site styles
utils/               Album data, strings, and shared helpers
next.config.mjs      Nextra and remote-image configuration
theme.config.js      Nextra blog theme configuration
```

## Publishing content

### Add a post

Create a Markdown or MDX file in `pages/posts/`. Each post should include the metadata used by Nextra and the RSS generator:

```md
---
title: Post title
date: 2026-08-07
description: A short summary of the post
tag: engineering, travel
author: James Hurley
---

# Post title

Your content goes here.
```

The filename becomes the URL slug. For example, `pages/posts/hello-world.md` is published at `/posts/hello-world`.

### Add a photo album

Album images are hosted outside the repository. To register a new album:

1. Upload numbered JPEGs to the configured CloudFront path, using `1.jpeg`, `2.jpeg`, and so on.
2. Add the slug and image count to `ALBUM_IMAGES` in `utils/constants.js`.
3. If the display name needs custom punctuation or capitalization, add it to `ALBUM_TITLES`.
4. Add an album card to `components/AlbumsPage.js`.

The dynamic route at `pages/photos/[album].mdx` renders the album automatically.

## RSS

`npm run build` runs `scripts/gen-rss.js` before compiling the site. The script reads the front matter from every post in `pages/posts/` and writes the result to `public/feed.xml`.

The published feed is available at [blog.jameshurley.ie/feed.xml](https://blog.jameshurley.ie/feed.xml).

## Deployment

The site is designed for deployment on [Vercel](https://vercel.com/). Connect the repository to a Vercel project and use the default Next.js settings; pushes to the production branch will build and deploy the site automatically.
