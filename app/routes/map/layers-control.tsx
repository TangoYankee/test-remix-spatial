import { useLoaderData } from "@remix-run/react";
import { FindZoningDistrictClassesQueryResponse } from "~/types/FindZoningDistrictClasses";

export function LayersControl () {
    const { zoningDistrictClasses } = useLoaderData<FindZoningDistrictClassesQueryResponse>();
    return <div>
        {
            zoningDistrictClasses && zoningDistrictClasses.map(zoningDistrictClass => (
                <div key={zoningDistrictClass.id}>
                    <p>{ zoningDistrictClass.description }</p>
                </div>
            ))
        }
    </div>
}