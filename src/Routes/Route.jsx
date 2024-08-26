import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AddServices from "../pages/Dashboard/AddServices/AddServices";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllServices from "../pages/AllServices/AllServices";
import PrivateRoute from "./PrivateRoute";
import BookingModal from "../components/BookingModal/BookingModal";
import Dashboard from "../layouts/Dashboard";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import OrderList from "../pages/Dashboard/OrderList/OrderList";
import BookingForm from "../pages/BookingForm/BookingForm";
import Teams from "../pages/Teams/Teams";
import AddReview from "../pages/Dashboard/AddReview/AddReview";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: 'allServices',
                element: <PrivateRoute><AllServices /></PrivateRoute>
            },
            {
                path: "/protectedRoute",
                element: <PrivateRoute><BookingModal /></PrivateRoute>
            },
            {
                path: "/teams",
                element: <Teams />
            },

        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "addService",
                element: <AddServices />
            },
            {
                path: "makeAdmin",
                element: <MakeAdmin />

            },
            {
                path: "orderLists",
                element: <OrderList />
            },
            {
                path: "bookingForm/:id",
                element: <BookingForm />,
                loader: ({ params }) => fetch(`http://localhost:3002/service/${params.id}`)
            },
            {
                path: "addReviews",
                element: <AddReview />
            },
        ]
    }
])
