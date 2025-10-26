import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapView.css'
import 'leaflet/dist/leaflet.css'
import { mockData } from '../data/mockData';
import { markerRed, markerGreen, markerYellow } from '../assets/customIcons';

export const MapView = () => {
    const initialLoc = [39.2828, -95.3103] // center at Jefferson, KS

    const markerChoice = {
        "Healthy": markerGreen,
        "Warning": markerYellow,
        "Critical": markerRed
    }

    return (
        <>
            <MapContainer center={initialLoc} zoom={5}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='OpenStreetmap contributions' />
                {mockData.map(field => (
                    <Marker
                        position={[field.coordinates.lat, field.coordinates.long]}
                        key={field.id}
                        icon={markerChoice[field.signalType]}
                    >
                        <Popup>
                            <div>
                                <h4>{field.name}</h4>
                                <p>Plant: {field.crop}</p>
                                <p>Size: {field.acreage} acres</p>
                                <p>Status: {field.signalType}</p>
                                <p>Note: {field.notes}</p>
                            </div>

                        </Popup>
                    </Marker>
                ))}
            </MapContainer >
        </>
    )

}