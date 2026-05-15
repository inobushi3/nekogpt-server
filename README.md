# NekoGPT Server

Static landing page scaffold for the NekoGPT website.

## Structure

- `index.html` - main page markup
- `src/styles.css` - layout, animations, responsive design
- `src/main.js` - particles, menu, reveal animations, interactive hero tilt, Live2D preview
- `assets/images` - local NekoGPT visual assets
- `assets/live2d/catgpt` - CatGPT Live2D model used in the hero preview
- `assets/provider-icons` - provider icons used by the providers section
- `assets/vendor` - bundled PixiJS and Live2D runtime files

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```powershell
npx --yes http-server . -p 4173 -c-1
```

Then visit `http://127.0.0.1:4173`.

## Deploy

Upload the full folder contents to any static hosting provider. The page uses relative paths, so it can live at the domain root or inside a subfolder.
