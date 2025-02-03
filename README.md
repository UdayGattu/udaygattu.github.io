# Uday Shankar Gattu Portfolio

This is a dynamic, data-driven portfolio website built with Next.js, React, Tailwind CSS, Framer Motion, and React Icons. The website uses a centralized data file (`data.js`) so that you can easily update all your content—work experiences, projects, studies, skills, certifications, and contact information—by editing a single file. The site is designed with a rich dark theme (red, black/grey, white, and grey) and includes smooth animations throughout.

## Table of Contents

- [Uday Shankar Gattu Portfolio](#uday-shankar-gattu-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Project Structure](#project-structure)
  - [How to Update Content](#how-to-update-content)
    - [Updating Work Experiences](#updating-work-experiences)

---

## Overview

This portfolio website is built using:

- **Next.js 13 (App Router)**
- **React**
- **Tailwind CSS**
- **Framer Motion**
- **React Icons**

All content is driven by the `data.js` file. To update your portfolio, simply modify the data in that file and then push your changes to GitHub. When you pull and deploy these updates, your website will update automatically.

---

## Project Structure

udaygattu.github.io/ ├── data.js // Centralized data for work, projects, studies, skills, certifications, and contact ├── app/ │ ├── layout.js // Global layout (contains metadata, ContactBar, Navbar) │ ├── page.js // Home page (hero, introduction, recent Work & Projects previews) │ ├── studies/ │ │ └── page.js // Studies page (education timeline) │ ├── work/ │ │ └── page.js // Work page (all work experiences) │ ├── skills/ │ │ └── page.js // Skills page (with React Icons for skills and certifications) │ ├── projects/ │ │ └── page.js // Projects page (all projects) │ ├── cv/ │ │ └── page.js // CV/Resume page (embedded PDF with download link) │ └── contact/ │ └── page.js // Contact page (with React Icons) ├── components/ │ ├── ContactBar.js // Top bar with email and LinkedIn links │ └── Navbar.js // Navigation bar with links (Home, Studies, Work, Skills, Projects, Resume, Contact) ├── public/ │ ├── hero.jpg // Hero image for the Home page │ ├── cv.pdf // Your CV/Resume file (PDF) │ └── images/ // Logos, project screenshots, tech icons, etc. │ ├── tcs-logo.png │ ├── eduskills-logo.png │ ├── xaneai-logo.png │ ├── travel-chatbot.png │ ├── text-to-video.png │ ├── script2skin.png │ └── cloud-native.png ├── styles/ │ └── globals.css // Global CSS (Tailwind directives) ├── next.config.mjs // Next.js configuration ├── tailwind.config.mjs // Tailwind CSS configuration (rich dark theme) ├── postcss.config.mjs // PostCSS configuration └── package.json // Project dependencies and scripts

markdown
Copy

---

## How to Update Content

All content is stored in the `data.js` file. Update this file to change the data across your portfolio.

### Updating Work Experiences

1. Open `data.js`.
2. Locate the `workExperiences` array.
3. Add a new object with the following properties:
   - `id`: A unique numeric identifier.
   - `company`: The company name.
   - `role`: Your job title.
   - `location`: The company location.
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
Locate the projects array.
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
Locate the studies array.
Add a new object with:
id: A unique numeric identifier.
institution: The name of the university or college.
degree: The degree or program name.
period: The period of study.
details: Additional details (e.g., courses, achievements).
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
Locate the skills object. It has four properties: programming, ai, cloud, and certifications.
For each category, add new objects with:
name: The name of the skill or certification.
icon: (Optional) The relative URL to a custom icon image. If omitted, a fallback React Icon will be used.
Example (for skills):

js
Copy
{
  name: "Azure",
  icon: "/images/icons/azure.png"  // Optional: if not provided, a fallback icon is used.
}
Example (for certifications):

js
Copy
{
  name: "Google Cloud Certification",
  icon: "/images/icons/gcloud.png"
}
Updating Contact Information
Open data.js.
Locate the contactData array.
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
Install Dependencies:

Open your terminal in the project root and run:

bash
Copy
npm install
Run the Development Server:

Start the Next.js development server:

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
Your site will be available at https://yourusername.github.io/.
Automatic Updates from Git
Whenever you need to update your portfolio:

Pull the latest changes from your repository (if working on multiple machines):

bash
Copy
git pull
Update data.js:
Modify or add new entries in the arrays for work experiences, projects, studies, skills, certifications, or contact data.

Test Locally:
Run npm run dev to verify that your changes appear correctly.

Commit and Push:
After verifying the changes, commit and push them to your GitHub repository:

bash
Copy
git add .
git commit -m "Updated data.js with new content"
git push
Rebuild and Deploy:
If you’re using GitHub Pages, run:

bash
Copy
npm run build
npm run deploy
Your website will update automatically once the new build is deployed.

Dependencies
Next.js: Framework for building server-rendered React applications.
React: UI library.
Tailwind CSS: Utility-first CSS framework.
Framer Motion: Animation library for React.
React Icons: Library for popular icons.
Ensure these dependencies are installed by running:

bash
Copy
npm install
License
This project is licensed under the MIT License.

Summary
Data-Driven Content: Update your portfolio by editing data.js. All sections (Work, Projects, Studies, Skills, Certifications, Contact) update automatically.
Separate Pages: The website includes pages for Home, Studies, Work, Skills, Projects, Resume, and Contact. Navigation is via the Navbar.
React Icons & Fallbacks: The Skills and Contact sections use React Icons. If you supply a custom icon URL in data.js, it will be used; otherwise, a fallback icon is displayed.
Publishing: Build your site using npm run build and deploy it on GitHub Pages using the gh-pages package.
Automatic Updates: When you pull the repo, update data.js, and push your changes, your website will update after you rebuild and deploy.
Happy coding!

pgsql
Copy

---

This `README.md` file now contains a full documentation of the project, how to update each section using `data.js`, how to run the project locally, and step-by-step instructions for publishing on GitHub Pages. Customize any placeholder links or text as needed.





