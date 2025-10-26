

export const Filters = ({ selectecCrop, onCropChange, selectedSignal, onSignalChange }) => {

    const cropTypes = ["Corn", "Soy"]
    const signalTypes = ["Healthy", "Warning", "Critical"]
    return (
        <div>
            <div>
                <label htmlFor="crop-type">Crop Type:</label>
                <select
                    id="crop-type"
                    value={selectecCrop}
                    onChange={(e) => onCropChange(e.target.value)}
                >
                    <option>All</option>
                    {cropTypes.map(crop => (
                        <option key={crop} value={crop}>
                            {crop}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="signal-type">Signal Type:</label>
                <select
                    id="signal-type"
                    value={selectedSignal}
                    onChange={(e) => onSignalChange(e.target.value)}
                >
                    <option>All</option>
                    {signalTypes.map(signal => (
                        <option key={signal} value={signal}>
                            {signal}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}