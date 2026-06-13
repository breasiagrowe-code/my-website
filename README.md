# Breasia Growe Portfolio

A polished, mobile-responsive static portfolio website for Breasia Growe, a Tulane University Communications major and English minor interested in grant writing, persuasive communication, research, editing, nonprofit communication, and speechwriting.

## Site Sections

- **Home**: Professional headline, brief introduction, and calls to action.
- **About Me**: Communications and writing interests with an audience-focused professional summary.
- **Experience**: Grant writing internship, administrative support experience, and customer service experience from the provided resume text.
- **Skills**: Writing and research, digital tools, and professional strengths.
- **Education**: Tulane University School of Liberal Arts degree details, GPA, honors, and relevant coursework.
- **Resume**: Prominent links to view or download the PDF resume.
- **Contact**: Functional email and LinkedIn links.

## Files

```text
index.html
styles.css
script.js
assets/Breasia_Growe_Resume.pdf
README.md
```

## Resume PDF

The resume PDF lives at:

```text
assets/Breasia_Growe_Resume.pdf
```

The website links to the PDF with the relative URL `assets/Breasia_Growe_Resume.pdf`. Because Cloudflare Pages serves static files from the repository output directory, this relative link will work after deployment as long as `assets/Breasia_Growe_Resume.pdf` remains committed with the site files.

## Deploying to Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a project connected to this GitHub repository.
3. Use these settings for a plain static site:
   - **Framework preset**: None
   - **Build command**: Leave blank
   - **Build output directory**: `/` or leave as the repository root option shown by Cloudflare
4. Deploy the site.
5. After deployment, open the site and click **View Resume**. The PDF should open in a new browser tab at `/assets/Breasia_Growe_Resume.pdf`.

## Local Preview

You can preview the site with any simple static server, for example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in a browser.
