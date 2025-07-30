# Portfolio_Skanda

# Skanda's Portfolio - Data Engineer

This repository contains the source code for my personal portfolio website, built with React and styled with Tailwind CSS. The website showcases my professional experience, projects, and skills as a Data Engineer.

The live version can be hosted on platforms like Netlify or Vercel.

![Portfolio Screenshot](https://placehold.co/800x450/111827/7C3AED?text=Portfolio+Preview)

## Features

- **Modern UI:** A sleek, dark-themed design with a gradient background.
- **Responsive Design:** Fully optimized for viewing on desktop, tablet, and mobile devices.
- **Interactive Elements:** Smooth scrolling, hover effects, and a dynamic skills section.
- **Component-Based:** Built with reusable React components for easy maintenance.

## Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid styling.
- **Vite:** A modern frontend build tool that provides a faster and leaner development experience.
- **Git & GitHub:** For version control and code hosting.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (which includes npm) installed on your machine. Version 16.x or higher is recommended.

### Installation & Setup

1.  **Clone the repository (or create a new project):**
    If you have cloned this repository, just run `npm install`. If you are starting from scratch, first create a new React project using Vite:
    ```bash
    npm create vite@latest skanda-portfolio -- --template react
    cd skanda-portfolio
    ```

2.  **Install Tailwind CSS:**
    Follow the official guide to install Tailwind CSS for Vite: [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite). The main steps are:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

3.  **Configure Tailwind:**
    Update your `tailwind.config.js` to include the paths to all of your template files:
    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

4.  **Add Tailwind directives to your CSS:**
    Add the `@tailwind` directives for each of Tailwind’s layers to your main `./src/index.css` file.
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5.  **Replace the code:**
    Copy the code from `App.jsx` in this repository into your `./src/App.jsx` file.

6.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) (or whatever port is shown) to view it in your browser.

## Deployment

This app is ready to be deployed on any static site hosting service. My recommendations are:

- **Vercel:** Optimized for performance and very easy to use.
- **Netlify:** Excellent user interface and powerful features.

To deploy, simply connect your GitHub repository to one of these services and follow their on-screen instructions. The build command is `npm run build` and the publish directory is `dist`.
