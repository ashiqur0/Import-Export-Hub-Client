# Import Export Hub

**Live Site:** `https://import-export-hub-by-ashiqur.web.app/`

A modern web platform designed for seamless global trade management. Import Export Hub enables users to explore international products, manage exports efficiently, and build their personal import collection with real-time synchronization and secure authentication.

## ✨ Key Features

- **Global Product Marketplace** - Browse and discover the latest exported products from around the world with detailed filtering and search capabilities
- **One-Click Import System** - Instantly add any product to your personal imports collection with intelligent quantity management and real-time inventory updates
- **Export Management** - Create and manage your own product listings for export with full CRUD operations and availability tracking
- **Secure User Authentication** - Login and registration with Firebase authentication, including Google OAuth integration and password validation
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices with consistent UI patterns across all pages
- **Real-Time Data Sync** - Immediate synchronization between client and server ensuring up-to-date product availability and user imports

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with Vite
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Authentication
- **HTTP Client:** Axios
- **State Management:** React Context API / Custom Hooks
- **Routing:** React Router v6
- **Notifications:** Toast notifications for user feedback

## 📋 Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # Page components (Home, Login, Products, etc.)
├── routes/           # Route configuration and private route guards
├── context/          # React Context for state management
├── hooks/            # Custom React hooks
├── services/         # API calls and external service integration
└── assets/           # Images, icons, and static resources
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/ashiqur0/Import-Export-Hub-Client.git
cd import-export-hub-client
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env.local` file with your Firebase configuration
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📦 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## 🔐 Authentication

- **Login:** Email and password authentication
- **Registration:** Create new account with email, password, name, and photo URL
- **Password Validation:** Minimum 6 characters, must contain uppercase and lowercase letters
- **Google OAuth:** Sign in with Google for quick authentication
- **Private Routes:** Protected pages require user authentication; users remain logged in on page reload

## 📄 Pages Overview

- **Home** - Featured products carousel and latest 6 products showcase
- **All Products** - Complete product catalog with search and filtering
- **Product Details** - Full product information with import functionality
- **My Imports** - User's imported products with removal option
- **My Exports** - User's exported products with edit and delete capabilities
- **Add Export** - Form to create and list new products for export
- **Login/Register** - User authentication pages

## 🌟 Additional Features

- Dark mode / Light mode toggle
- Dynamic page titles
- Search functionality on All Products page
- CSV export for My Exports data
- User role management (Exporter/Importer)
- Quantity limit validation on imports
- Toast notifications for user actions

## 📱 Responsive Design

The application is fully responsive and tested on:
- Mobile devices (320px and above)
- Tablets (768px and above)
- Desktop screens (1024px and above)

## 🔗 API Integration

Backend API base URL: [Your Server URL]

Key endpoints:
- `GET /products` - Fetch all products
- `POST /products` - Add new export product
- `GET /products/:id` - Get product details
- `POST /imports` - Add product to imports
- `GET /imports` - Fetch user imports
- `DELETE /imports/:id` - Remove import

## 📝 Git Commits

This project includes 15+ meaningful commits documenting the development process:
- Initial project setup with Vite and React
- Component architecture implementation
- Firebase authentication integration
- Product listing and details pages
- Import/Export functionality
- Responsive design implementation
- And more...

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Ashiqur Rahman**
- GitHub: github.com/ashiqur0
- Email: ashiqurrahmans2018@gmail.com

---

**Last Updated:** November 2025