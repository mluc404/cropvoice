import { Marker, Popup, Polygon, useMap } from 'react-leaflet';

export const FieldMarker = ({ field, markerChoice }) => {
    const map = useMap();

    const handleClick = () => {
        const latLng = [field.coordinates.lat + 0.2, field.coordinates.long];
        map.setView(latLng, 8, { animate: true });
    };

    const STATUS_COLORS = {
        'Healthy': "#00984c",
        'Critical': "#e82828ff",
        'Warning': "#f4c013ff",
    };

    return (
        <>
            <Marker
                position={[field.coordinates.lat, field.coordinates.long]}
                icon={markerChoice[field.signalType]}
                eventHandlers={{ click: handleClick }}
            >
                <Popup>
                    <div className='popup-card'>
                        <h4 className='popup-card_name'>{field.id}. {field.name}</h4>
                        <div className='popup-card_info'>
                            <div><strong>Plant:</strong> {field.crop}</div>
                            <div><strong>Size:</strong> {field.acreage} acres</div>
                            <div>
                                <strong>Status:</strong>
                                <span className='popup-card_info_status'>{field.signalType}</span>
                            </div>
                            <div><strong>Last Scan:</strong> {field.lastScan}</div>
                            <hr />
                            <div><em>Note: {field.notes}</em></div>
                        </div>
                    </div>
                </Popup>
            </Marker>

            {field.fieldBoundaries && field.fieldBoundaries.length > 0 && (
                <Polygon
                    positions={field.fieldBoundaries.map(boundary => [boundary.lat, boundary.lng])}
                    pathOptions={{
                        color: STATUS_COLORS[field.signalType],
                        weight: 2,
                        opacity: 0.8,
                        fillColor: STATUS_COLORS[field.signalType],
                        fillOpacity: 0.2
                    }}
                />
            )}
        </>
    );
};
