# Dropwatch — SaaS landing page (demo)

A conversion-focused landing page for a fictional price and stock monitoring
SaaS. Hand-coded as a static site: semantic HTML, one CSS file, and a small
vanilla JavaScript file. No framework, no build step, no dependencies.

Live: https://dropwatch.helban.dev

## What it shows

The full anatomy of a SaaS landing page, built to convert and to load fast:

- Sticky header with a mobile menu
- Hero with a CSS/SVG product visual (no heavy image)
- "How it works" in three steps
- Feature grid with inline SVG icons
- Pricing with an interactive monthly/annual toggle
- FAQ as a native accordion
- Closing call to action and footer

## Performance

Real PageSpeed on mobile is 100 for Performance, Accessibility, Best Practices,
and SEO. The product visual is drawn with HTML, CSS and inline SVG instead of a
raster hero image, fonts are self-hosted and subset to the glyphs used, and there
is no JavaScript framework to slow the first paint.

## Stack

HTML, CSS, vanilla JavaScript. Fonts: Space Grotesk and DM Sans, self-hosted as
subset woff2 with `font-display: swap`. Deployed on Cloudflare Pages.

This is a demo. Dropwatch is not a real service.
