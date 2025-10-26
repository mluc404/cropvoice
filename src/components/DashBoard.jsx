import { MapView } from "./MapView";
import { Filters } from "./Filters";
import { mockData } from "../data/mockData";
import { useState, useMemo } from "react";

export const DashBoard = () => {

    const [selectedCrop, setSelectedCrop] = useState('All')
    const [selectedSignal, setSelectedSignal] = useState('All')
    const [selectedState, setSelectedState] = useState('All')

    // Filter data by crop and signal type
    const filteredData = useMemo(() => {
        if (selectedCrop === 'All' && selectedSignal === 'All' && selectedState === 'All') {
            return mockData
        }
        else if (selectedCrop !== 'All' && selectedSignal !== 'All' && selectedState !== 'All') {
            return mockData.filter(field => field.crop === selectedCrop && field.signalType === selectedSignal && field.location_state === selectedState)
        }
        else if (selectedCrop === "All" && selectedSignal === 'All') {
            return mockData.filter(field => field.location_state === selectedState)

        }
        else if (selectedCrop === "All" && selectedState === 'All') {
            return mockData.filter(field => field.signalType === selectedSignal)

        }
        else if (selectedSignal === "All" && selectedState === 'All') {
            return mockData.filter(field => field.crop === selectedCrop)

        }
        else if (selectedCrop === "All") {
            return mockData.filter(field => field.signalType === selectedSignal && field.location_state === selectedState)
        }
        else if (selectedSignal === "All") {
            return mockData.filter(field => field.crop === selectedCrop && field.location_state === selectedState)
        }
        else {
            return mockData.filter(field => field.crop === selectedCrop && field.signalType === selectedSignal)

        }
    }, [selectedCrop, selectedSignal, selectedState])

    return (
        <>
            <Filters
                selectecCrop={selectedCrop}
                onCropChange={setSelectedCrop}
                selectedSignal={selectedSignal}
                onSignalChange={setSelectedSignal}
                selectedState={selectedState}
                onStateChange={setSelectedState}
            />
            <MapView
                data={filteredData}
            />
        </>
    )
}