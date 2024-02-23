import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Spatial } from "./spatial.client";

const router = createBrowserRouter([ 
    {
        path: "/land-use",
        element: <Spatial />
    }
    
 ]);

export function LandUsePage () {
    return <Spatial />
    // return <RouterProvider router={router} />
}