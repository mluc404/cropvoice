import { MapView } from "./MapView";
import { Filters } from "./Filters";
import { mockData } from "../data/mockData";
import { useState, useMemo } from "react";

export const DashBoard = () => {

    const [selectedCrop, setSelectedCrop] = useState('All')
    const [selectedSignal, setSelectedSignal] = useState('All')

    // Filter data by crop and signal type
    const filteredData = useMemo(() => {
        if (selectedCrop === 'All' && selectedSignal === 'All') return mockData
        else if (selectedCrop !== 'All' && selectedSignal !== 'All') {
            return mockData.filter(field => field.crop === selectedCrop && field.signalType === selectedSignal)
        }
        else if (selectedCrop === "All") {
            return mockData.filter(field => field.signalType === selectedSignal)
        }
        else {
            return mockData.filter(field => field.crop === selectedCrop)

        }
    }, [selectedCrop, selectedSignal])

    return (
        <>
            <Filters
                selectecCrop={selectedCrop}
                onCropChange={setSelectedCrop}
                selectedSignal={selectedSignal}
                onSignalChange={setSelectedSignal}
            />
            <MapView
                data={filteredData}
            />
        </>
    )
}