import { useNavigate } from "@remix-run/react"

export default function ZoningDistrict () {
    const navigate = useNavigate();
    return <div style={{ gridArea: "4 / 24 / 29 / 32", backgroundColor: "gray", opacity: 0.75, zIndex: "1"}}>
        <button onClick={() => navigate("/map")}>X</button>
        <p>Zoning Districts</p>
    </div>
}