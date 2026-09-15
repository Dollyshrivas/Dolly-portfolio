✦ Dolly  — Developer Portfolio

A modern, interactive developer portfolio built to showcase my projects, technical skills, AI experiments, and creative web experiences.

🌐 Live Portfolio

Domain: https://dolly-portfolio-phi.vercel.app/

👩‍💻 About

Hi, I'm Dolly, a developer passionate about building modern web applications, AI-powered tools, and interactive digital experiences.

I enjoy transforming ideas into functional products using technologies across frontend development, backend development, databases, and AI.

My current focus is on combining Web Development + AI + Creative Interfaces.
## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build for deployment

```bash
npm run build
npm run preview
```

## GitHub setup

Create an empty repository on GitHub, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repository>.git
git push -u origin main
```

Replace the remote URL with your repository URL. Do not commit generated files in `dist/` or dependencies in `node_modules/`; they are already excluded by `.gitignore`.

## Customize

Open `src/main.jsx`:
- Change the name and bio
- Replace the project list
- Change the email address
- Add GitHub / LinkedIn links

The main 3D scene is in the `Scene`, `HeroObject`, and `FloatingShape` components.
