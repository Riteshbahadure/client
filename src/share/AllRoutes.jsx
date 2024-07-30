import { Suspense, lazy } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Route, Routes } from "react-router-dom"
import Error from "../components/Error"
import Loading from "../components/Loading"
import Errorpage from "../components/Errorpage"
import AdminProtected from "./AdminProtected"
import UserProtected from "./UserProtected"
import Signup from "../components/Signup"
// import Checkout from "../components/Checkout"
// import Cart from "../components/Cart"
// import Products from "./../components/products"

// import AdminUsers from "../components/AdminUsers"
// import Products from "../pages/Products"
// import Order from "../components/Order"

const Home = lazy(() => import("./../pages/Home"))
const UserCart = lazy(() => import("./../pages/UserCart"))
const Dashboard = lazy(() => import("./../pages/Dashboard"))
const Login = lazy(() => import("./../components/Login"))
const Articles = lazy(() => import("./../components/Articles"))
const ChefGuide = lazy(() => import("./../components/ChefGuide"))
const Location = lazy(() => import("./../components/Location"))
const FAQS = lazy(() => import("./../components/FAQS"))
const About = lazy(() => import("./../components/About"))
const Contact = lazy(() => import("./../components/Contact"))

const AdminUsers = lazy(() => import("./../components/AdminUsers"))
const Products = lazy(() => import("./../components/AdminProduct"))
const Order = lazy(() => import("../components/AdminOrders"))
const Checkout = lazy(() => import("../components/Checkout"))
const Success = lazy(() => import("../components/Success"))
const Account = lazy(() => import("../components/Account"))


const AllRoutes = () => {
    const ROUTES = [
        { path: "/", element: <Home /> },
        { path: "/cart", element: <UserProtected compo={<UserCart />} /> },
        { path: "/checkout", element: <UserProtected compo={<Checkout />} /> },
        { path: "/success", element: <UserProtected compo={<Success />} /> },
        { path: "/account", element: <UserProtected compo={<Account />} /> },
        { path: "/login", element: <Login /> },
        { path: "/location", element: <Location /> },
        { path: "/article", element: <Articles /> },
        { path: "/about", element: <About /> },
        { path: "/chefGuide", element: <ChefGuide /> },
        { path: "/faqs", element: <FAQS /> },
        { path: "/contact", element: <Contact /> },
        { path: "/register", element: <Signup /> },
    ]
    const AdminRoutes = [
        { path: "users", element: <AdminUsers /> },
        { path: "products", element: <Products /> },
        { path: "orders", element: <Order /> },

    ]
    return <Routes>
        {
            ROUTES.map(item => <Route
                path={item.path}
                kay={item.path}
                element={<ErrorBoundary FallbackComponent={Error}>
                    <Suspense fallback={Loading}>
                        {item.element}
                    </Suspense>
                </ErrorBoundary>}
            ></Route>)
        }
        <Route path="/admin" element={<AdminProtected compo={<Dashboard />} />}>
            {
                AdminRoutes.map(item => <Route
                    path={item.path}
                    kay={item.path}
                    element={<ErrorBoundary FallbackComponent={Error}>
                        <Suspense fallback={Loading}>
                            {item.element}
                        </Suspense>
                    </ErrorBoundary>}
                ></Route>)
            }
        </Route>
        <Route path="*" element={<Errorpage />} />
    </Routes>
}

export default AllRoutes