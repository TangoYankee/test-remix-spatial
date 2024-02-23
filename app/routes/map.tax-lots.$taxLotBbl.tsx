import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react"
import { FindTaxLotByBblQueryResponse } from "~/types/FindTaxLotByBbl";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const baseApiUrl = process.env.API_URL;
    console.log("load tax lots");
    const res = await fetch(`${baseApiUrl}/tax-lots/${params.taxLotBbl}`)
    return await res.json();
}

export default function TaxLotRoute () {
    const taxLot = useLoaderData<FindTaxLotByBblQueryResponse>();
    const navigate = useNavigate();
    return <div style={{overflow: "clip", gridArea: "4 / 24 / 29 / 32", backgroundColor: "gray", opacity: 0.75, zIndex: "1"}}>
        <button onClick={() => navigate("/map")}>X</button>
        <p>BBL: {taxLot.bbl}</p>
        <p>Block: {taxLot.block}</p>
        <p>Lot: {taxLot.lot}</p>
        <p>Address: {taxLot.address}</p>
        {
            taxLot.borough && Object.entries(taxLot.borough).map(([key, value]) => (
                <p key={`${key}:${value}`}>{key}: {value}</p>
            ))
        }
        {
            taxLot.landUse && Object.entries(taxLot.landUse).map(([key, value]) => (
                <p key={`${key}:${value}`}>{key}: {value}</p>
            ))
        }
    </div>
}