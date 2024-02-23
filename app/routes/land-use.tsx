import { ClientOnly } from "remix-utils/client-only";
import { LandUsePage } from "~/components/land-use-page.client";

export default function LandUseRoute (){
    return <div id="land-use"><ClientOnly>{() => <LandUsePage />}</ClientOnly></div>
  }