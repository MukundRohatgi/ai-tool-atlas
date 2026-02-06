# AI Tool Atlas

## 1. Project Overview

AI Tool Atlas is a **dataset‑driven web application** built using **Next.js (App Router)** that showcases a curated directory of popular AI tools. The primary goal of this project is to demonstrate how a **structured static dataset (JSON)** can be used to programmatically generate pages, routes, and UI views in a modern frontend framework — without relying on any backend database or external APIs.

The project was developed as part of an **SDE Intern Assessment** and focuses strongly on:

* Clean architecture
* Data‑to‑UI mapping
* Scalability
* Defensive UI handling
* Real‑world frontend development practices

The application includes:

* A tools listing page
* Individual tool detail pages
* Category‑based listings
* Pricing‑based listings

---

## 2. Problem Statement

With the rapid growth of AI tools across domains such as productivity, design, and development, users often struggle to:

* Discover relevant tools
* Understand pricing models
* Compare tools across categories

AI Tool Atlas addresses this problem by organizing AI tools into a structured, searchable, and easy‑to‑navigate interface powered entirely by a static dataset.

---

## 3. Key Features

* Static JSON‑based dataset (single source of truth)
* Programmatically generated pages using Next.js App Router
* Individual tool detail pages via dynamic routing
* Category‑based navigation (Productivity, Design)
* Pricing‑based views (Freemium, Paid)
* Responsive UI using Tailwind CSS
* SEO‑friendly URLs and metadata
* Defensive UI handling for edge cases
* Scalable structure for adding more tools

---

## 4. Dataset Used

### Dataset Description

The dataset consists of **10 curated AI tools**, where each tool is represented as a JSON object with the following fields:

* `id`: Unique identifier
* `name`: Tool name
* `slug`: URL‑friendly unique identifier
* `category`: Tool category (e.g., Productivity, Design)
* `pricing`: Pricing model (Freemium / Paid)
* `description`: Short description
* `website`: Official website URL
* `tags`: Keywords related to the tool

### Dataset Location

```
src/data/tools.json
```

### Dataset Source URL

The dataset was **manually curated and generated**, inspired by popular AI tool directories and official product websites:

* [https://www.futurepedia.io](https://www.futurepedia.io)
* [https://theresanaiforthat.com](https://theresanaiforthat.com)
* [https://www.producthunt.com](https://www.producthunt.com)

These platforms were used **only as references**. No automated scraping or private data was used.

---

## 5. How the Dataset Was Generated

The dataset was created using a **controlled, semi‑automated approach**:

1. Well‑known and widely used AI tools were shortlisted manually.
2. AI‑assisted prompts were used to draft concise and professional descriptions.
3. Tool metadata such as pricing model, category, and website was manually verified.
4. All entries were normalized into a consistent JSON structure.

This approach ensures:

* High data quality
* Ethical data usage
* No dependency on external APIs
* Easy extensibility

---

## 6. Tech Stack and Design Inspiration

### Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Data Source:** Static JSON
* **Deployment:** Vercel

### Why This Stack?

* Next.js App Router enables clean, file‑based routing
* Static generation improves performance and SEO
* Tailwind CSS allows rapid UI development
* TypeScript improves maintainability and reduces runtime errors

### Design Inspiration

The UI design draws inspiration from modern SaaS and directory‑style platforms such as:

* Product Hunt
* Notion
* Vercel documentation

The focus is on **clarity, readability, and usability**, rather than heavy animations.

---

## 7. Routing & Page Generation

* Tool detail pages are generated dynamically using the App Router
* Each tool is uniquely identified using its `slug`
* Pages read directly from `tools.json`, ensuring a single source of truth

Example route:

```
/tools/chatgpt
```

---

## 8. AI Prompt Examples Used

AI tools were used responsibly to assist with ideation and content creation. Examples include:

1. **Dataset Generation**
   "Generate a JSON list of 10 AI tools with name, category, pricing, description, and website."

2. **Homepage Content**
   "Write a professional homepage description explaining the purpose of an AI tools directory."

3. **Project Architecture**
   "Suggest a scalable folder structure for a Next.js App Router project using static JSON data."

All outputs were manually reviewed and refined.

---

## 9. Project Folder Structure

```
src/
 ├── app/
 │   ├── page.tsx
 │   ├── layout.tsx
 │   ├── tools/
 │   │   └── [slug]/page.tsx
 │   ├── categories/
 │   │   └── [category]/page.tsx
 │   ├── productivity/page.tsx
 │   ├── design/page.tsx
 │   ├── freemium/page.tsx
 │
 ├── components/
 │   ├── Navbar.tsx
 │   ├── Footer.tsx
 │
 ├── data/
 │   └── tools.json
```

---

## 10. Defensive UI Handling

During development, defensive rendering was implemented to handle edge cases where route parameters may not be immediately available during build or hydration.

Instead of crashing or showing an error page, the UI gracefully informs the user when content is unavailable or loading.

This improves:

* User experience
* Production stability
* Deployment reliability

---

## 11. How to Run the Project Locally

1. Clone the repository
2. Install dependencies

```
npm install
```

3. Start the development server

```
npm run dev
```

4. Open in browser:

```
http://localhost:3000
```

---

## 12. What I Would Improve With 2 More Days

If given additional time, the following enhancements would be implemented:

1. **Advanced Filtering & Sorting**

   * Multi‑filter support (category + pricing)
   * Alphabetical and popularity‑based sorting

2. **Richer Tool Pages**

   * Tool logos and screenshots
   * Use cases and comparisons
   * Similar tools recommendations

3. **UI & UX Improvements**

   * Skeleton loaders
   * Improved animations
   * Fully polished dark mode

4. **Scalability Enhancements**

   * Expand dataset to 50+ tools
   * Dataset validation schema

---

## 13. Assignment Compliance Summary

* ✔ Uses a structured static dataset (JSON)
* ✔ No backend or database dependency
* ✔ Pages generated programmatically
* ✔ Clean and maintainable architecture
* ✔ Production‑ready deployment

---

## 14. Conclusion

AI Tool Atlas demonstrates how a static dataset can power a scalable, production‑ready web application using modern frontend technologies. The project emphasizes clean architecture, maintainability, and real‑world engineering practices, making it well‑suited for an SDE Intern‑level assessment.

---

## 15. Author

**Mukund Rohatgi**
