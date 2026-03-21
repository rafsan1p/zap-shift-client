import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import EnterCode from "../pages/Auth/EnterCode/EnterCode";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/sendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'rider', element: <PrivateRoute><Rider></Rider></PrivateRoute>},
      { path: 'send-parcel', element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>},
      { path: "coverage", Component: Coverage, loader: () => fetch('/serviceCenters.json').then(res => res.json()) },
      { path: "about", Component: About },
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "forgot-password", Component: ForgotPassword },
      { path: "enter-code", Component: EnterCode },
      { path: "reset-password", Component: ResetPassword },
    ]
  }
]);
