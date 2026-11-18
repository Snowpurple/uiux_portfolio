# Sneha Yadav – Portfolio

Plain HTML, CSS and JavaScript. No install or build step: open `index.html` in a browser.

```
portfolio/
├── index.html    page content, links and text
├── style.css     colors, fonts, layout, hover and mobile styles
├── script.js     mobile menu + active menu highlight
└── assets/       all images (see list below)
```

## 1. Add your images (`assets/` folder)

Export each layer from Figma (right-click the layer, Export, PNG, 2x) and save it with exactly this name:

| File name          | Figma layer                       | Where it appears                     |
|--------------------|-----------------------------------|--------------------------------------|
| `profile.png`      | Rectangle 1110                    | Home photo                           |
| `kisan-verse.png`  | Rectangle 1111                    | Kisan-Verse card                     |
| `ishavarya.png`    | Rectangle 1113                    | Ishavarya card                       |
| `closet.png`       | Rectangle 1112                    | Closet + "Coming soon" cards         |
| `about.png`        | Rectangle 1114                    | About photo                          |
| `tool-1.png`       | Rectangle 1121 (leftmost icon)    | Tool icon row, 1st                   |
| `tool-2.png`       | Rectangle 1120                    | Tool icon row, 2nd                   |
| `tool-3.png`       | Rectangle 1117                    | Tool icon row, 3rd                   |
| `tool-4.png`       | Rectangle 1118                    | Tool icon row, 4th                   |
| `tool-5.png`       | Rectangle 1119 (rightmost icon)   | Tool icon row, 5th                   |

## 2. Paste your links (`index.html`)

Search for these placeholders:

- `behance.net/YOUR-USERNAME/...` : Behance case study link of each project
- `figma.com/proto/YOUR-...`      : prototype link of each project
- `PASTE-YOUR-RESUME-LINK-HERE`   : Resume button
- `linkedin.com/in/PASTE-YOUR-LINKEDIN` : LinkedIn button

Each project's case-study link appears three times (image, title, "Case Study" button). Use find and replace to change all three at once.

## 3. Common edits

- **Add a project:** copy one `<article class="project">` block in `index.html`.
- **Change colors / fonts:** edit the `:root` block at the top of `style.css`.
- **Change how much photos rotate on hover:** edit the `.tilt:hover` rules in section 9 of `style.css`.
- **Change the arrow speed:** edit `1.4s` in the `.scroll-arrow` rule.
