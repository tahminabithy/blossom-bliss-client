# Blossom & Bliss Parlour

Blossom & Bliss is a web application designed for a beauty and wellness parlour. It allows customers to browse services, book appointments, and make online payments. The platform is built with modern technologies to ensure responsiveness, performance, and a seamless user experience.

Live Site: https://blossom-bliss-parlour.web.app/

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Folder Structure](#folder-structure)
5. [Usage](#usage)
6. [Contributing](#contributing)

## Features

- **Service Listing**: Users can view all available services like facials, waxing, and other beauty treatments.
- **Responsive Design**: The app is designed to work across devices (mobile, tablet, and desktop).
- **Authentication**: Secure login and registration through Firebase Authentication.
- **Appointment Booking**: Users can book appointments for specific services.
- **Payment Integration**: Online payments via an integrated Payment Gateway.
- **Admin Panel**: Admins can add, update, or delete services and manage bookings.
- **Real-time Updates**: Changes and updates in service availability and user bookings are reflected in real-time.

## Tech Stack

### Frontend
- **ReactJS**: For building the user interface.
- **Vite**: For a faster development experience.
- **Tailwind CSS**: For responsive and utility-first styling.
- **Daisy UI**: UI components built on Tailwind CSS.
- **Axios**: For handling HTTP requests.
- **Tanstack React Query**: For data fetching and caching.
- **Swiper.js**: For responsive sliders.
- **Firebase Authentication**: For managing user login and registration.

### Backend
- **Node.js**: Server-side logic and RESTful API.
- **Express.js**: Lightweight web framework for Node.js.
- **MongoDB**: NoSQL database to manage user bookings, services, and payments.
- **JWT (JSON Web Tokens)**: For secure user authentication and authorization.
- **Payment Gateway**: Integrated for secure online payments.
  
### Deployment
- **Frontend**: Hosted on Firebase.
- **Backend**: Deployed using Vercel.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tahminabithy/blossom-bliss-client.git
   cd blossom-bliss-client
   ```

2. **Install dependencies**:
   Ensure you have Node.js installed. Run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file at the root of the project and add your Firebase and backend API keys:
   ```bash
   REACT_APP_API_URL=<your-backend-api-url>
   REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
   REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   To create a production-ready build, run:
   ```bash
   npm run build
   ```

## Folder Structure

```
blossom-bliss-client/
│
├── public/               # Public assets like images, icons, and index.html
├── src/                  # Main source code
│   ├── assets/           # Images and other static files
│   ├── components/       # Reusable components (Navbars, Footers, etc.)
│   ├── pages/            # Individual pages (Home, Booking, etc.)
│   ├── services/         # API calls and service handling (Axios)
│   ├── context/          # Global state and context
│   ├── styles/           # Global styles and Tailwind configurations
│   └── App.jsx           # Main App component
│
├── .env                  # Environment variables (not included in repo)
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration file
```

## Usage

1. **Booking a Service**: Users can select from a list of services and book appointments by specifying the date and time.
2. **Admin Access**: Admins have access to manage services and appointments through a secure admin panel.
3. **Payments**: Users can securely pay for their services online.
4. **Authentication**: Users must log in via Firebase Authentication to access the booking and payment features.

## Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
