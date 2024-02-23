import { Link, Outlet } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import { Spatial } from "~/components/spatial.client";

export default function MapRoute () {
    return <>
        <div style={{ display: "grid", gridTemplateRows: "repeat(32, 1fr)", gridTemplateColumns: "repeat(32, 1fr)", height: "100%", width: "100%" }}>
            <div style={{ gridArea: "1 / 1 / 2 / 33", zIndex: "1", display: "flex", justifyContent: "space-around", backgroundColor: "grey", opacity: 0.8 }}>
                <Link to=".">Main map</Link>
                <Link to="tax-lots/123">Tax Lot details</Link>
                <Link to="zoning-districts">Zoning Districts</Link>
            </div>
            <div style={{ gridArea: "1 / 1 / 33 / 33"}}>
                <ClientOnly fallback={<p>Loading map...</p>}>{() => <Spatial />}</ClientOnly>
            </div>
            <Outlet />
        </div>
    </>
}