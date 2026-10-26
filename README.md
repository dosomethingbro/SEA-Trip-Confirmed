# The Pan Rack

A private cookware and home-cooking app for two. It plans a buy-once pan set together, reads a daily feed of cooking articles and cookware deals, and shares finds with each other.

**Live app:** hosted as a Claude artifact (private; share it from the artifact's Share menu).

## What's here

| Path | What it is |
|---|---|
| `app/index.html` | The full app: Feed, Set builder, Read, Saved, product details, sharing, Ask Claude. One self-contained HTML file. |
| `data/articles.json` | The 30 starter articles loaded into the app (titles, links, our own summaries, tags). |
| `data/feeds.json` | The 12 RSS/YouTube/Reddit/deal feeds the daily job reads, with what to keep from each. |
| `docs/v1-builder.html` | The first version: the PCPartPicker-style pan builder on its own. |

## How it works today

- **Hosting and saving:** the app runs as a Claude artifact. Shared state (your set, statuses, reactions, comments, saved items, shares) lives in the artifact's built-in database, so both people see the same thing live.
- **Daily feed:** a Claude scheduled task, "Pan Rack morning feed", runs every morning around 6:41 PT. It reads the feeds in `data/feeds.json`, adds up to 8 new articles, and rechecks prices on 16 products. Price drops of 3% or more show up in the feed.
- **Ask Claude:** each product's details panel can answer questions about that pan, using your set and how you cook.

### Database collections

`articles`, `prices`, `events`, `set`, `reactions`, `comments`, `saved`, `shares`. Field shapes are documented in the comments at the top of the script in `app/index.html`.

## Moving to Vercel later

`app/index.html` uses the Claude artifact runtime (`window.claude.use("db" | "user" | "sample")`) for saving, people and Ask Claude. To run it on Vercel, swap those for:

- **Database and sign-in:** Supabase (Postgres plus magic-link auth) with the same eight collections as tables.
- **Daily feed:** a Vercel Cron job that runs the same steps as the scheduled task.
- **Ask Claude:** a small API route that calls the Claude API.

The page works without those pieces too. It falls back to saving your set in the browser and hides the shared and AI features.
