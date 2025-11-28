<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1l6w71gYe_EQHg3pAO5UQ-THLrn8FlMZw

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Pushing changes to GitHub

This environment cannot authenticate with GitHub over the default CONNECT tunnel, which causes `git push` to fail with HTTP 403. To push to `https://github.com/boardindiaresult-ai/SelfStudys-Vels-Partnership-Proposal`, configure the `origin` remote to use an HTTPS URL that includes a Personal Access Token (PAT):

```bash
# Set the remote (replace <TOKEN> with a PAT that has repo scope)
git remote add origin https://<TOKEN>@github.com/boardindiaresult-ai/SelfStudys-Vels-Partnership-Proposal.git

# Push the current branch to main
git push origin work:main
```

If a remote already exists, update it instead:

```bash
git remote set-url origin https://<TOKEN>@github.com/boardindiaresult-ai/SelfStudys-Vels-Partnership-Proposal.git
```

Rotate the PAT after use or inject it via a credential helper/`GIT_ASKPASS` script to avoid persisting the secret in your shell history.

## Deploying to GitHub Pages

An automated workflow builds the site with Vite (compiling the TypeScript/JSX to browser-ready JavaScript) and deploys the contents of `dist/` to GitHub Pages. To publish:

1. In the GitHub repository, enable **Pages** with the "GitHub Actions" source.
2. Push to `main`. The workflow at `.github/workflows/deploy.yml` will install dependencies, run `npm run build`, and deploy the built assets.

This ensures Pages serves compiled JavaScript instead of raw `.tsx` files, preventing MIME-type errors such as `Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream"`.

If Pages is configured to serve directly from the repository rather than the workflow artifact, run `npm run sync:docs` to regenerate the prebuilt bundle under `docs/` and set the Pages source to `docs/` on the `main` branch. That directory contains the compiled `index.html`, `assets/index.js`, and `assets/index.css` that browsers expect.
