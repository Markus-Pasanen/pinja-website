# Jalkaterapia Pinja Website

> Official website for Jalkaterapia Pinja - Professional foot therapy services in Varkaus, Finland.

**Live Website:** [jalkaterapiapinja.fi](https://jalkaterapiapinja.fi)

## Overview

This is a modern, responsive, fully static website built for Jalkaterapia Pinja, showcasing professional foot therapy services. The website provides comprehensive information about services, enables easy contact and appointment booking, and maintains a professional online presence.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3 (vanilla)** - All styling in `style.css`, no framework
- **Vanilla JavaScript** - Interactive components and functionality
- **Web3Forms** - Contact form backend with hCaptcha spam protection
- **Open Graph / Twitter Cards** - Social media sharing metadata
- **JSON-LD Schema** - LocalBusiness structured data for SEO

## Project Structure

```
pinja-website/
├── index.html              # Homepage
├── palvelut.html           # Services
├── esittely.html           # About
├── yhteystiedot.html       # Contact
├── hinnasto.html           # Pricing
├── maksutavat.html         # Payment methods
├── toimitusehdot.html      # Terms of service
├── tietosuojaseloste.html  # Privacy policy
├── main.js                 # JavaScript logic
├── style.css               # Custom styles
├── dev/
│   ├── server.js            # Local dev server (Node, zero deps)
│   └── out.txt              # Dev server log
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/             # All image assets
└── README.md
```

## Local Development

Since this is a fully static website with no build steps, any HTTP server works:

```bash
# Node dev server (zero dependencies)
node dev/server.js
# → http://localhost:3000

# Python
python -m http.server 8000
# → http://localhost:8000
```

Requires no npm install, no build step.

## Hosting

**Production:** Hosted on GitHub Pages. The live site is at [jalkaterapiapinja.fi](https://jalkaterapiapinja.fi).

SEO files (`robots.txt`, `sitemap.xml`) are located in the `public/` directory and should be served at the root of your domain. The sitemap includes all 22 site pages with clean URLs and priority rankings. Each page has `<link rel="canonical">`, Open Graph metadata, and Twitter Card tags for social sharing. The homepage includes JSON-LD structured data (`LocalBusiness` schema) with address, phone, email, social links, and service area.

## License

No open source license is granted. All rights reserved by Jalkaterapia Pinja. The source is publicly available for GitHub Pages hosting, but you may not copy, modify, or redistribute this code without permission.

---

## Support

For questions or support regarding this website:

- **Business Inquiries**: [jalkaterapia.pinja@gmail.com](mailto:jalkaterapia.pinja@gmail.com)

---

<div align="center">

**Built for Jalkaterapia Pinja**

[Website](https://jalkaterapiapinja.fi) • [Instagram](https://www.instagram.com/jalkaterapiapinja/) • [Facebook](https://www.facebook.com/profile.php?id=61573830269174)

</div>
