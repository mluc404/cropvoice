import { MapView } from "./MapView";
import { Filters } from "./Filters";
import { AlertPanel } from "./AlertPanel";
import { FieldsPanel } from "./FieldsPanel";
import { mockData } from "../data/mockData";
import { useState, useMemo } from "react";
import './DashBoard.css'

export const DashBoard = () => {

    const [selectedCrop, setSelectedCrop] = useState('All')
    const [selectedSignal, setSelectedSignal] = useState('All')
    const [selectedState, setSelectedState] = useState('All')
    const [selectedAlertType, setSelectedAlertType] = useState('All')

    // Filter field data by crop and signal type
    const filteredData = useMemo(() => {
        if (selectedCrop === 'All' && selectedSignal === 'All' && selectedState === 'All') {
            return mockData.fields
        }
        else if (selectedCrop !== 'All' && selectedSignal !== 'All' && selectedState !== 'All') {
            return mockData.fields.filter(field => field.crop === selectedCrop && field.signalType === selectedSignal && field.location_state === selectedState)
        }
        else if (selectedCrop === "All" && selectedSignal === 'All') {
            return mockData.fields.filter(field => field.location_state === selectedState)

        }
        else if (selectedCrop === "All" && selectedState === 'All') {
            return mockData.fields.filter(field => field.signalType === selectedSignal)

        }
        else if (selectedSignal === "All" && selectedState === 'All') {
            return mockData.fields.filter(field => field.crop === selectedCrop)

        }
        else if (selectedCrop === "All") {
            return mockData.fields.filter(field => field.signalType === selectedSignal && field.location_state === selectedState)
        }
        else if (selectedSignal === "All") {
            return mockData.fields.filter(field => field.crop === selectedCrop && field.location_state === selectedState)
        }
        else {
            return mockData.fields.filter(field => field.crop === selectedCrop && field.signalType === selectedSignal)

        }
    }, [selectedCrop, selectedSignal, selectedState])

    // Filter alert data by alert type and status
    const filteredAlerts = useMemo(() => {
        if (selectedAlertType === 'All') {
            return mockData.alerts
        } else if (selectedAlertType === 'Active' || selectedAlertType === 'Resolved') {
            return mockData.alerts.filter(alert => alert.status === selectedAlertType)
        }
        else {
            return mockData.alerts.filter(alert => alert.type === selectedAlertType)
        }
    }, [selectedAlertType])

    return (
        <div className="dashboard">
            <div className="dashboard-left">
                <FieldsPanel data={filteredData} />
            </div>
            <div className="dashboard-center">
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
            </div>
            <div className="dashboard-right">
                <AlertPanel
                    data={filteredAlerts}
                    selectedAlertType={selectedAlertType}
                    onAlertTypeChange={setSelectedAlertType}
                />

            </div>
        </div>
    )
}