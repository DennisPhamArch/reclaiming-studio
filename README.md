# Reclaimed Kitchen Module — Dennis Pham

A complete static project page matching your portfolio's cream background, black rules, oversized uppercase headings and monospaced captions. No installation or build step is required.

## Preview on your computer

Extract this ZIP, then open `index.html` in your browser. Keep the assets folder beside it. This index is a local preview only; do not replace your portfolio homepage with it.

## Add to your existing GitHub portfolio

1. Open the `dennisphamarch/architectural-portfolio` repository in GitHub.
2. Upload the complete `assets/kitchen-module/` folder into the repository's existing `assets/` folder.
3. Replace `projects/2-kitchen-module.html` with the file in this package.
4. Commit the changes to the branch your existing GitHub Pages site publishes.
5. Once the repository's deployment finishes, visit your existing kitchen-module page.

Upload only the project HTML and assets folder when updating the existing portfolio. Leave the repository's root `index.html`, `styles.css`, other projects and Pages configuration unchanged. Use a new branch and a pull request if you want to review the changes before they go live.

The page uses a private copy of your portfolio stylesheet (`portfolio-base.css`) and scoped additions (`project.css`), so updating it does not restyle your other pages. Navigation links return to your current live portfolio.

## Files to edit

- `projects/2-kitchen-module.html`: project copy, sections, images and captions.
- `assets/kitchen-module/project.css`: project layout and responsive styles.
- `assets/kitchen-module/project.js`: assembly stages and image lightbox. Edit the `steps` array to change stage descriptions.
- `assets/kitchen-module/portfolio-base.css`: stylesheet copied from your reference page.
- `index.html`: standalone local preview; it duplicates the project content with adjusted asset paths. If changing text, update both copies or preview the project HTML directly.

## Content

Includes all 14 uploaded photographs and assembly drawings as optimised WebP images, a five-stage assembly viewer, component details, credits, and a wider Reframing Studio context section. The complete 32-slide presentation is displayed directly below the studio context, at full page width. Visitors scroll through it without opening a file or clicking a viewer. Images load progressively as visitors scroll. The PDF download is optional.

`reframing-studio-screen.pdf` contains all 32 presentation pages as screen-resolution images. It is a lightweight reading copy, not a replacement for your original high-resolution/vector PDF. Text in that screen edition is not selectable.

The supplied video replaces the right-hand opening photograph. It plays muted in a loop with visible playback and sound controls. Reduced-motion preferences disable autoplay. The video is optimised for web playback and displayed with a centred square crop, filling the frame without side bars. Early sketch/source photographs are not bundled.

## Verification

- Checked the page in a desktop browser.
- Verified changing the assembly stage and opening/closing an enlarged drawing.
- Checked local asset links and JavaScript syntax.
- Responsive CSS is included; a physical mobile device has not been tested.

No changes have been pushed to GitHub. This is an upload-ready source package.
