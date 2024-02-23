import { Link, Outlet } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import { Spatial } from "~/components/spatial.client";

export function clientLoader () {
    return { data: ['1']}
} 

export default function MapRoute () {
    return <>
        <ClientOnly>{() => <Spatial />}</ClientOnly>
        <div style={{ position: "absolute"}}>
            <Link to="/">Profile</Link>
            <Link to=".">Main map</Link>
            <Link to="tax-lots">Tax Lots</Link>
            <Link to="zoning-districts">Zoning Districts</Link>
            <Outlet />
        </div>
    </>
}