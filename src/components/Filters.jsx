import { states } from "../data/mockData"
import './Filters.css'

export const Filters = ({ selectecCrop, onCropChange, selectedSignal, onSignalChange, selectedState, onStateChange }) => {

    const cropTypes = ["Corn", "Soy"]
    const signalTypes = ["Healthy", "Warning", "Critical"]
    const clearFilters = () => {
        onCropChange('All')
        onSignalChange('All')
        onStateChange('All')
    }
    return (
        <div className="select-container">
            <div className="select-group">
                <label htmlFor="select-crop">🌾 Crop Type</label>
                <select
                    id="select-crop"
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
            <div className="select-group">
                <label htmlFor="select-signal">⚠️ Status</label>
                <select
                    id="select-signal"
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
            <div className="select-group">
                <label htmlFor="select-state">🗺️ State</label>
                <select
                    id="select-state"
                    value={selectedState}
                    onChange={(e) => onStateChange(e.target.value)}
                >
                    <option>All</option>
                    {states.map(state => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </div>
            <div className="select-group">
                <button
                    onClick={clearFilters}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}