import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About"
import Products from "./Pages/Products/Products"
import Contact from "./Pages/Contact/Contact"
import HomeLayout from "./Components/HomeLayout";



const routes = [
    {
        name: "home",
        path: "/erdem-yuksel-metal-react/",
        element: <HomeLayout />,
        children: [
            {
                name: "index",
                index: true,
                element: <HomePage />
            },
            {
                name: "about",
                path: "/about",
                element: <About />
            },
            {
                name: "products",
                path: "products",
                element: <Products />
            },
            {
                name: "contact",
                path: "contact",
                element: <Contact />
            }

        ]
    }


]

export default routes
