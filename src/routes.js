import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About"
import Products from "./Pages/Products/Products"
import Contact from "./Pages/Contact/Contact"



const routes = [
    {
        name: "home",
        path: "/",
        children: [
            {
                name:"index",
                index: true,
                element: <HomePage />
            },
            {
                name:"about",
                path:"/about",
                element:<About/>
            },
            {
                name:"products",
                path:"products",
                element:<Products/>
            },
            {
                name:"contact",
                path:"contact",
                element:<Contact/>
            }

        ]
    }


]

export default routes
