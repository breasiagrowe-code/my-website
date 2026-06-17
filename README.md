# Breasia Growe Portfolio

A polished, mobile-responsive static portfolio website for Breasia Growe, a Tulane University Communications major and English minor interested in grant writing, persuasive communication, research, editing, nonprofit communication, and speechwriting.

## Site Sections

- **Home**: Professional headline, brief introduction, and calls to action.
- **About Me**: Communications and writing interests with an audience-focused professional summary.
- **Experience**: Grant writing internship, administrative support experience, and customer service experience from the provided resume text.
- **Grant Writing Sample**: Public-safe Victory Over Vision program excerpt summarizing grant-writing work without linking or publishing confidential proposal documents.
- **Skills**: Writing and research, digital tools, and professional strengths.
- **Education**: Tulane University School of Liberal Arts degree details, GPA, honors, and relevant coursework.
- **Resume**: Prominent links to view or download the PDF resume.
- **Contact**: Functional email, LinkedIn, and GitHub links.

## Files

```text
index.html
styles.css
script.js
assets/Breasia_Growe_Resume.pdf
assets/images/Breasia_Growe_Headshot.jpg
assets/favicon.svg
README.md
```

## Resume PDF

The resume PDF lives at:

```text
assets/Breasia_Growe_Resume.pdf
```

The website links to the PDF with the relative URL `assets/Breasia_Growe_Resume.pdf`. Because Cloudflare Pages serves static files from the repository output directory, this relative link will work after deployment as long as `assets/Breasia_Growe_Resume.pdf` remains committed with the site files.

## Headshot Image

The professional headshot is referenced at:

```text
assets/images/Breasia_Growe_Headshot.jpg
```

The hero section uses the relative URL `assets/images/Breasia_Growe_Headshot.jpg`, which will load correctly through Cloudflare Pages as long as the image remains committed at that path.

## Favicon

The site includes a simple SVG favicon with the initials “BG” at:

```text
assets/favicon.svg
```

`index.html` links this favicon with `rel="icon"`, so browsers and Cloudflare Pages can serve it directly as a static asset.

## Professional Links

The Contact section and footer include email, LinkedIn, and GitHub links where appropriate. The GitHub profile is labeled **GitHub** and opens in a new browser tab at `https://github.com/breasiagrowe-code`.

## Deploying to Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a project connected to this GitHub repository.
3. Use these settings for a plain static site:
   - **Framework preset**: None
   - **Build command**: Leave blank
   - **Build output directory**: `/` or leave as the repository root option shown by Cloudflare
4. Deploy the site.
5. After deployment, open the site and click **View Resume**. The PDF should open in a new browser tab at `/assets/Breasia_Growe_Resume.pdf`.
6. Confirm the headshot displays in the hero section and is available at `/assets/images/Breasia_Growe_Headshot.jpg`.

## Local Preview

You can preview the site with any simple static server, for example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in a browser.
