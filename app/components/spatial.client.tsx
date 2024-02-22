import DeckGL from '@deck.gl/react/typed';
import {LineLayer} from '@deck.gl/layers/typed';
import { Map } from 'react-map-gl/maplibre';
import "maplibre-gl/dist/maplibre-gl.css";

// Viewport settings
const INITIAL_VIEW_STATE = {
    longitude: -74.0008,
    latitude: 40.7018,
    zoom: 10,
    bearing: 0,
    pitch: 0,
};

// Data to be used by the LineLayer
const data = [
    {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

// DeckGL react component
export function Spatial () {
    const layers = [
    new LineLayer({id: 'line-layer', data})
    ];

    return <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}>
            <Map 
                style={{ width: "100vw", height: "100vh" }}
                mapStyle="https://raw.githubusercontent.com/NYCPlanning/equity-tool/main/src/data/basemap.json"
            />
        </DeckGL>;
}
