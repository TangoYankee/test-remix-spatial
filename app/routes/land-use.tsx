import { ClientOnly } from "remix-utils/client-only";
import { LandUsePage } from "~/components/land-use.client";

export default function LandUseRoute () {
    return <>
        <ClientOnly>{() => <LandUsePage />}</ClientOnly>
    </>
}