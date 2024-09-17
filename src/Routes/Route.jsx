import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AddServices from "../pages/Dashboard/AddServices/AddServices";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllServices from "../pages/AllServices/AllServices";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import OrderList from "../pages/Dashboard/OrderList/OrderList";
import UserBookingLists from "../pages/Dashboard/UserBookingLists/UserBookingLists"
import BookingForm from "../pages/BookingForm/BookingForm";
import Teams from "../pages/Teams/Teams";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import NotFound from "../pages/NotFound/NotFound";
import SimpleRoute from "./SimpleRoute";

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
                path: '/allServices',
                element: <AllServices />
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
                element: <PrivateRoute><BookingForm /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://blossom-bliss-server-site.vercel.app/service/${params.id}`)
            },
            {
                path: "addReviews",
                element: <AddReview />
            },
            {
                path: "bookingLists",
                element: <UserBookingLists />
            },
            {
                path: "payment",
                element: <Payment />
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory />
            },

        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])
