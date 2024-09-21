# Blossom & Bliss Parlour

Blossom & Bliss is a web application designed for a beauty and wellness parlour. It allows customers to browse services, book appointments, and make online payments. The platform is built with modern technologies to ensure responsiveness, performance, and a seamless user experience.

Live Site: [Blossom & Bliss Parlour](https://blossom-bliss-parlour.web.app/)

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Folder Structure](#folder-structure)
5. [Usage](#usage)
6. [Contributing](#contributing)

## Features

- **Service Listing**: Users can view beauty treatments like facials, waxing, and more.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Authentication**: Secure login via Firebase Authentication.
- **Appointment Booking**: Schedule appointments directly from the platform.
- **Payment Integration**: Make secure online payments.
- **Admin Panel**: Admins can manage services and appointments.
- **Real-time Updates**: Service and booking updates are instant.

## Tech Stack

### Frontend
- **ReactJS**: For building the user interface.
- **Vite**: For faster development.
- **Tailwind CSS**: For styling.
- **Daisy UI**: Tailwind UI components.
- **Axios**: For handling API requests.
- **Tanstack React Query**: For data fetching and caching.
- **Swiper.js**: For responsive sliders.
- **Firebase Authentication**: For user login and registration.

### Backend
- **Node.js**: Server-side logic.
- **Express.js**: Lightweight web framework.
- **MongoDB**: NoSQL database for booking and service management.
- **JWT**: For secure user authentication.
- **Payment Gateway**: Stripe integration for payments.

### Deployment
- **Frontend**: Deployed on Firebase.
- **Backend**: Deployed on Vercel.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tahminabithy/blossom-bliss-client.git
   cd blossom-bliss-client
   ```

2. **Install dependencies**:
   Ensure you have Node.js installed. Run:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file at the project root with the following keys:
   ```bash
   VITE_FIREBASE_API_KEY=your-firebase-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-firebase-app-id

   VITE_IMAGE_API_KEY=your-image-api-key
   VITE_EMAILJS_SERVICE_ID=your-emailjs-service-id
   VITE_EMAILJS_TEMPLATE_ID=your-emailjs-template-id
   VITE_EMAILJS_USER_ID=your-emailjs-user-id

   VITE_STRIPE_PUBLIC_TEST_KEY=your-stripe-public-test-key
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## Folder Structure

```
blossom-bliss-client/
│
├── public/               # Public assets like images, icons, and index.html
├── src/                  # Main source code
│   ├── Routes/           # Application routes and navigation setup
│   ├── assets/           # Images and other static files
│   ├── context/          # Auth provider through React Context API
│   ├── components/       # Reusable components (Navbars, Footers, etc.)
│   ├── hooks/            # Custom hooks for shared logic
│   ├── layouts/          # Layout components for different page structures
│   ├── pages/            # Individual pages (Home, Booking, etc.)
│   ├── shared/           # Shared utilities or components used across pages
│   ├── styles/           # Global styles and Tailwind configurations
│   └── main.jsx          # Entry point of the React application
│
├── .env                  # Environment variables (not included in repo)
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration file
```

## Usage

1. **Booking a Service**: Users can choose a service and schedule an appointment.
2. **Admin Access**: Admins can log in to manage services and bookings.
3. **Payments**: Users can pay for services online via Stripe.
4. **Authentication**: Login is required for booking and payment features.

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
