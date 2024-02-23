import { useNavigate, useParams } from "@remix-run/react"

export default function TaxLotRoute () {
    const navigate = useNavigate();
    const params = useParams()
    return <div style={{overflow: "clip", gridArea: "4 / 24 / 29 / 32", backgroundColor: "gray", opacity: 0.75, zIndex: "1"}}>
        <button onClick={() => navigate("/map")}>X</button>
        <p>Tax Lot: {params.taxLotBbl}</p>
    </div>
}