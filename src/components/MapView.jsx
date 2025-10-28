import { MapContainer, TileLayer } from 'react-leaflet';
import './MapView.css'
import 'leaflet/dist/leaflet.css'
import { markerRed, markerGreen, markerYellow } from '../assets/customIcons';
import { FieldMarker } from './FieldMarker';

export const MapView = ({ data }) => {
    const initialLoc = [39.2828, -95.3103]; // center at Jefferson, KS

    const markerChoice = {
        "Healthy": markerGreen,
        "Warning": markerYellow,
        "Critical": markerRed
    };

    return (
        <MapContainer center={initialLoc} zoom={5}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="OpenStreetmap contributions"
            />
            {data.map(field => (
                <FieldMarker
                    key={field.id}
                    field={field}
                    markerChoice={markerChoice}
                />
            ))}
        </MapContainer>
    );
};
