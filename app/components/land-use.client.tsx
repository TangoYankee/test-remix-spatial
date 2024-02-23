import { RouterProvider, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { Spatial } from "./spatial.client";
import { Outlet } from "@remix-run/react";

const rootRoute = createRootRoute({
    component: () => (
        <>
            <Spatial />
            <div style={{ position: "absolute" }}>
                <Outlet />
            </div>
        </>
    )
})

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/land-use',
    component: function Index() {
        return <h1>Land Use Index</h1>
    }
})

const routeTree = rootRoute.addChildren([indexRoute]);
const router = createRouter({routeTree})

export function LandUsePage() {
    return <RouterProvider router={router} />
}