import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
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