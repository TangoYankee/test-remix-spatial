import { Outlet } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import { Spatial } from "~/components/spatial.client";

export function clientLoader () {
    return { data: ['1']}
} 

export default function MapRoute () {
    return <>
        <ClientOnly>{() => <Spatial />}</ClientOnly>
        <div style={{ position: "absolute"}}>
            <Outlet />
        </div>
    </>
}