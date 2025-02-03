# Uday Shankar Gattu Portfolio

This is a dynamic, data-driven portfolio website built with Next.js, React, Tailwind CSS, Framer Motion, and React Icons. The website uses a centralized data file (`data.js`) so that you can easily update all your content—work experiences, projects, studies, skills, certifications, and contact information—by editing a single file. The site is designed with a rich dark theme (red, black/grey, white, and grey) and includes smooth animations throughout.

## Table of Contents

- [Uday Shankar Gattu Portfolio](#uday-shankar-gattu-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Project Structure](#project-structure)
  - [How to Update Content](#how-to-update-content)
    - [Updating Work Experiences](#updating-work-experiences)
  - [Learn More](#learn-more)
  - [Deploy on Vercel](#deploy-on-vercel)

---

## Overview

This portfolio website is built using:

- **Next.js 13 (App Router)**
- **React**
- **Tailwind CSS**
- **Framer Motion**
- **React Icons**

All content is driven by the `data.js` file. To update your portfolio, you only need to modify the data in that file, and all related pages (Work, Projects, Studies, Skills, Certifications, Contact) will update automatically.

---

## Project Structure

udaygattu.github.io/ ├── data.js // Centralized data for work, projects, studies, skills, certifications, and contact ├── app/ │ ├── layout.js // Global layout (contains metadata, ContactBar, Navbar) │ ├── page.js // Home page (hero, introduction, recent Work & Projects previews) │ ├── studies/ │ │ └── page.js // Studies page (education timeline) │ ├── work/ │ │ └── page.js // Work page (all work experiences) │ ├── skills/ │ │ └── page.js // Skills page (with React Icons for skills and certifications) │ ├── projects/ │ │ └── page.js // Projects page (all projects) │ ├── cv/ │ │ └── page.js // CV/Resume page (embedded PDF with download link) │ └── contact/ │ └── page.js // Contact page (with React Icons) ├── components/ │ ├── ContactBar.js // Top bar with email and LinkedIn links │ └── Navbar.js // Navigation bar with links (Home, Studies, Work, Skills, Projects, Resume, Contact) ├── public/ │ ├── hero.jpg // Hero image for the Home page │ ├── cv.pdf // Your CV/Resume file (PDF) │ └── images/ // Logos, project screenshots, tech icons, etc. │ ├── tcs-logo.png │ ├── eduskills-logo.png │ ├── xaneai-logo.png │ ├── travel-chatbot.png │ ├── text-to-video.png │ ├── script2skin.png │ └── cloud-native.png ├── styles/ │ └── globals.css // Global CSS (Tailwind directives) ├── next.config.mjs // Next.js configuration ├── tailwind.config.mjs // Tailwind CSS configuration (rich dark theme) ├── postcss.config.mjs // PostCSS configuration └── package.json // Project dependencies and scripts



---

## How to Update Content

Since all content is driven by the centralized `data.js` file, updating your portfolio is as simple as editing that file.

### Updating Work Experiences

1. **Open `data.js`.**
2. Find the `workExperiences` array.
3. Add a new object with the following properties:
   - `id`: A unique numeric identifier.
   - `company`: The company name.
   - `role`: Your job title.
   - `location`: The location of the company.
   - `period`: The time period (e.g., "Jan 2020 – Dec 2020").
   - `description`: An array of strings describing your responsibilities and achievements.
   - `logo`: The relative URL to the company logo (e.g., `"/images/new-company-logo.png"`).

Example:
```js
{
  id: 4,
  company: "New Company",
  role: "Data Scientist",
  location: "City, Country",
  period: "Jan 2024 – Present",
  description: [
    "Implemented data pipelines increasing efficiency by 30%.",
    "Developed predictive models for key business insights."
  ],
  logo: "/images/new-company-logo.png"
}

Updating Projects
Open data.js.
Find the projects array.
Add a new object with the following properties:
id: A unique numeric identifier.
title: The project title.
techStack: A string listing the technologies used.
description: A description of the project.
image: The relative URL to the project screenshot.
github: (Optional) The GitHub repository URL.
Example:

js
Copy
{
  id: 5,
  title: "New Project Title",
  techStack: "React, Node.js, MongoDB",
  description: "A brief description of the new project.",
  image: "/images/new-project.png",
  github: "https://github.com/yourusername/new-project"
}
Updating Studies (Education)
Open data.js.
Find the studies array.
Add a new object with:
id: A unique numeric identifier.
institution: The name of the university or college.
degree: The degree or program name.
period: The period of study.
details: Additional details (courses, achievements, etc.).
logo: The relative URL to the institution’s logo.
Example:

js
Copy
{
  id: 3,
  institution: "Another University",
  degree: "Ph.D. in Computer Science",
  period: "2025 – 2029",
  details: "Research on advanced machine learning techniques.",
  logo: "/images/another-university.png"
}
Updating Skills and Certifications
Open data.js.
Find the skills object. It contains four properties: programming, ai, cloud, and certifications.
For each category, add a new object with:
name: The name of the skill or certification.
icon: (Optional) The relative URL to a custom icon image. If omitted, the page will use a fallback React Icon.
Example for a skill:

js
Copy
{
  name: "Azure",
  icon: "/images/icons/azure.png"  // Optional: if not provided, fallback is used.
}
Example for a certification:

js
Copy
{
  name: "Google Cloud Certification",
  icon: "/images/icons/gcloud.png"
}
Updating Contact Information
Open data.js.
Find the contactData array.
Add or update objects with:
label: The type of contact (e.g., "Email", "Phone", etc.).
value: The contact detail.
link: The URL (if applicable) for clickable links.
Example:

js
Copy
{
  label: "Twitter",
  value: "@yourtwitterhandle",
  link: "https://twitter.com/yourtwitterhandle"
}
Running Locally
Install Dependencies: Open your terminal in the project root and run:



bash
Copy
npm install
Run the Development Server: Start the Next.js development server with:

bash
Copy
npm run dev
Then, visit http://localhost:3000 in your browser to preview your website.

Publishing on GitHub Pages
Follow these steps to publish your portfolio on GitHub Pages:

Step 1: Build the Project
Run the following command to build the static version of your site. This will create an out/ folder:

bash
Copy
npm run build
Step 2: Create a GitHub Repository
Go to GitHub and create a new repository (e.g., udaygattu.github.io).
Follow GitHub’s instructions to push your local project to this repository.
Step 3: Deploy Using gh-pages
One common method to deploy is by using the gh-pages package:

Install gh-pages as a dev dependency:
bash
Copy
npm install gh-pages --save-dev
Add a deployment script in your package.json:
json
Copy
"scripts": {
  "deploy": "gh-pages -d out",
  "build": "next build && next export",
  "dev": "next dev",
  "start": "next start"
}
Deploy the site:
bash
Copy
npm run build
npm run deploy
Configure GitHub Pages:
In your GitHub repository, go to Settings > Pages.
Set the source to the gh-pages branch.
Your site should now be available at https://yourusername.github.io/.
Dependencies
Next.js: Framework for building React-based SSR/SSG applications.
React: UI library.
Tailwind CSS: Utility-first CSS framework.
Framer Motion: Animation library for React.
React Icons: Library for popular icons.
Ensure all dependencies are installed by running:

bash
Copy
npm install
License
This project is licensed under the MIT License.

Summary
Data-Driven Content: Update your portfolio by editing data.js. All sections (Work, Projects, Studies, Skills, Certifications, Contact) update automatically.
Separate Pages: The website includes pages for Home, Studies, Work, Skills, Projects, Resume, and Contact. Navigation is via the Navbar.
React Icons & Fallbacks: Skills and Contact sections use React Icons. If you provide a custom icon URL in data.js, it will be used; otherwise, a fallback icon is displayed.
Publishing: Build your site using npm run build and deploy it on GitHub Pages using gh-pages.
Happy coding!

yaml
Copy

---

You can now copy this entire content into your `README.md` file. Customize any placeholders as needed, and your documentation will guide you (and others) on how to update and publish your portfolio website.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
