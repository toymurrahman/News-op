import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Category from "../pages/Category";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      children: [
        {
          path: "",
          element: <Navigate to = "/category/01" />,
        },
        {
          path: "/category/:id",
          element: <Category/> ,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        },
      ]
    },
    {
      path: "/news",
      element: <div>News Layouts</div>,
    },
    {
      path: "auth",
      element: <div>Login Layouts</div>,
    },
    {
      path: "*",
      element: <div>Error</div>,
    },
]);
export default router;