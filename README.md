# 📦 Next Frontend Assignment

## 🛠️ Project Setup

This project is built using **Vite** for fast and modern frontend development.

### Project setup instructions


```bash
git clone https://github.com/your-username/Blacksof-Assignmen
cd your-repo-name
npm install

npm run dev

🧱 Component Architecture
This project follows a modular and reusable component structure:

components/: Reusable and shared UI components.

pages/: Route-level components for different views/screens.

layouts/: Shared layout components like header, footer, etc.

Approach:
Each component is isolated and self-contained with its own styling and logic, promoting scalability and maintainability.

🎨 Design Adherence
Tailwind CSS (or your design system) was used to ensure accuracy and consistency.

📱 Responsive Design Strategy
Responsive design was implemented using Tailwind CSS (or CSS media queries, if applicable).

Devices covered:
Mobile (320px+)
Tablet (768px+)
Laptop (1024px+)
Desktop (1440px+)

♿ Accessibility Considerations
✅ Semantic HTML elements (<main>, <section>, <nav>, etc.)
✅ aria-labels, aria-expanded, and aria-controls for interactive elements.
✅ Keyboard navigability for all focusable elements.
✅ Color contrast ensured via Figma + Lighthouse testing.

🎞️ Animations
Animations are implemented using Framer Motion to enhance user experience.
Entrance/Exit transitions for pages and modals.

📦 Third-Party Libraries Used
Vite – Build tool

Tailwind CSS – Utility-first CSS framework
Framer Motion – Animation library

🧗 Challenges & Solutions
Challenge	Solution
Ensuring pixel-perfect match	Used Figma inspect mode + dev tools for alignment
Responsive layout for complex grids	Used CSS Grid + Tailwind breakpoints effectively
Performance on image-heavy pages	Used loading="lazy" and optimized image formats


