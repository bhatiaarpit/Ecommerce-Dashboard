# Ecommerce Dashboard
A modern, feature-rich ecommerce dashboard application built with React and Vite. It offers a sleek, responsive design with both dark and light mode themes that adapt seamlessly across devices. This dashboard includes essential ecommerce management features like analytics, product and customer management, user profiles, settings, and notifications.

## Live Link: https://ecom-dashboard-by-arpit.vercel.app/
<img width="1918" height="905" alt="Screenshot 2025-09-21 230738" src="https://github.com/user-attachments/assets/4518647a-f691-4914-9ea5-69ca632db7a6" />



## Features
- Fully responsive design optimized for desktop, tablet, and mobile devices
- Dark mode and light mode support with smooth theme toggling
- Sidebar navigation for desktop and a mobile-friendly collapsible menu
- Dynamic dashboard analytics and interactive charts powered by Recharts
- Comprehensive management for products, orders, customers, and projects
- User profile overview with social links and quick actions
- Configurable settings modal for theme preferences and notifications
- Real-time notification drawer with easy access
- Intuitive UX with accessibility and performance best practices

## Technology Stack
- **React** – Frontend framework for building UI components
- **Vite** – Fast build and development tooling for React
- **Tailwind CSS** – Utility-first CSS framework for styling and responsive design
- **Lucide React** – Modern, customizable SVG icon library
- **Recharts** – Responsive charting library built on React

## Getting Started
Follow the steps below to set up and run the project locally.

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation
```bash
npm install
# or
yarn install
```

### Running in Development Mode
```bash
npm run dev
# or
yarn dev
```
Navigate to http://localhost:5173 to view the app.

### Building for Production
```bash
npm run build
# or
yarn build
```
The build artifacts will be stored in the dist/ directory.

## Project Structure
```
src/
  components/
    layout/           # Layout components: Sidebar, Header, MobileMenu, Topbar, RightSidebar
    dashboard/        # Dashboard widgets, charts, and analytics
    modals/           # Modal components for settings and preferences
    tables/           # Reusable table components for listing data
  pages/              # Main application pages: dashboard, products, orders, customers, projects, etc.
  data/               # Mock and static data files used for development and testing
```

## Customization
- Tailor the color scheme by modifying the Tailwind CSS config or component-specific styles.
- Extend functionality by adding new pages, widgets, or components in the pages/ and components/ directories.
- Update mock data or integrate real API endpoints in the src/data/ folder or via new services.
- Adjust layout, navigation, or theme preferences as per your branding and user needs.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests for improvements, bug fixes, or new features.

## License
This project is licensed under the MIT License.

---
This improved README clarifies the project purpose, usage, and structure with a consistent style and useful links. Let me know if it should include additional sections like testing, deployment, or FAQs!
