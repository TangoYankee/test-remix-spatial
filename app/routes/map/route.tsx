import { Link, Outlet } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import { LayersControl } from "./layers-control";
import { Spatial } from "./spatial.client";

export const loader = async () => {
    const baseApiUrl = process.env.API_URL;
    console.log("load layers data");
    const zoningDistrictClassesRes = await fetch(`${baseApiUrl}/zoning-district-classes`)
    return await zoningDistrictClassesRes.json()
}

export default function MapRoute () {
    return <>
        <div style={{ display: "grid", gridTemplateRows: "repeat(32, 1fr)", gridTemplateColumns: "repeat(32, 1fr)", height: "100%", width: "100%" }}>
            <div style={{ gridArea: "1 / 1 / 2 / 33", zIndex: "1", display: "flex", justifyContent: "space-around", backgroundColor: "grey", opacity: 0.8 }}>
                <Link to=".">Main map</Link>
                <Link to="tax-lots/1008250052">Tax Lot 1008250052 details</Link>
                <Link to="zoning-districts">Zoning Districts</Link>
            </div>
            <div style={{ gridArea: "4 / 2 / 17 / 11", zIndex: "1", backgroundColor: "grey", opacity: 0.75, overflow: "scroll" }}>
                <LayersControl />
            </div>
            <div style={{ gridArea: "1 / 1 / 33 / 33"}}>
                <ClientOnly fallback={<p>Loading map...</p>}>{() => <Spatial />}</ClientOnly>
            </div>
            <Outlet />
        </div>
    </>
}