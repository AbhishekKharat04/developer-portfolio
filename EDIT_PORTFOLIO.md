# Edit Portfolio Quickly

## 1. Change the hero image

The easiest method is:

1. Replace this file:
   `public/images/hero-current.jpg`
2. Keep the same filename.
3. Rebuild or push to GitHub if auto-deploy is connected.

If you want to use a different image filename instead:

1. Put the new image inside:
   `public/images/`
2. Open:
   `src/content/portfolioContent.ts`
3. Change:
   `image: '/images/hero-current.jpg'`

## 2. Change hero text

Open:
`src/content/portfolioContent.ts`

Edit these values:

- `kicker`
- `lead`
- `ctaLabel`
- `ctaHref`
- `name`

## 3. Add, remove, or reorder featured projects

Open:
`src/content/portfolioContent.ts`

Inside `featuredProjects`:

- To add a project: copy one project block and edit it
- To remove a project: delete its block
- To reorder projects: move the blocks up or down

Each project supports:

- `title`
- `category`
- `description`
- `image`
- `url`
- `ghost`
- `tags`

## 4. Add the project image

Put the screenshot inside:
`public/images/`

Then use that path in the project block, for example:
`/images/my-new-project.png`

## 5. Auto-update after GitHub push

If you connect this portfolio repo to Netlify or Vercel:

- every push to GitHub can rebuild the site automatically
- that means hero image changes and project edits go live without touching your laptop

## 6. Best workflow later

Recommended setup:

1. Keep this portfolio in a GitHub repo
2. Connect the repo to Netlify
3. Buy a short custom domain
4. Point that domain to the Netlify site
5. Push updates from laptop or edit files directly in GitHub

That will make your site:

- live 24/7
- accessible from your phone anywhere
- independent of your laptop being on
