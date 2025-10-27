export const mockData = {
    fields: [
        {
            id: 1,
            name: "Jefferson, KS - Field A",
            location_city: "Jefferson",
            location_state: "Kansas",
            coordinates: { lat: 39.2828, long: -95.3103 },
            crop: "Corn",
            acreage: 20,
            signalType: "Healthy",
            signalColor: "Green",
            notes: "Healthy field. No stress signal detected",
            lastScan: '2025-10-27'

        },

        {
            id: 2,
            name: "Grand Island, NE - Field C",
            location_city: "Grand Island",
            location_state: "Nebraska",
            coordinates: { lat: 40.9260, long: -98.3420 },
            crop: "Corn",
            acreage: 15,
            signalType: "Warning",
            signalColor: "Yellow",
            notes: "Possible early fungal signal. Monitor closely",
            lastScan: '2025-10-26'

        },

        {
            id: 3,
            name: "Ames, IA - Field K",
            location_city: "Ames",
            location_state: "Iowa",
            coordinates: { lat: 42.0170, long: -93.6480 },
            crop: "Corn",
            acreage: 35,
            signalType: "Critical",
            signalColor: "Red",
            notes: "Confirmed white mold infection. Imediate action required",
            lastScan: '2025-10-25'

        },
        {
            id: 4,
            name: "Stuttgart, AR - Field A",
            location_city: "Stuttgart",
            location_state: "Arkansas",
            coordinates: { lat: 34.5000, long: -91.5500 },
            crop: "Soy",
            acreage: 85,
            signalType: "Healthy",
            signalColor: "Green",
            notes: "Healthy field. No stress signal detected",
            lastScan: '2025-10-25'

        },
        {
            id: 5,
            name: "Albert Lea, MN - Field E",
            location_city: "Albert Lea",
            location_state: "Minnesota",
            coordinates: { lat: 43.6480, long: -93.3680 },
            crop: "Soy",
            acreage: 60,
            signalType: "Warning",
            signalColor: "Yellow",
            notes: "Possible early fungal signal. Monitor closely",
            lastScan: '2025-10-25'


        },
        {
            id: 6,
            name: "Decatur, IL - Field A",
            location_city: "Decatur",
            location_state: "Illinois",
            coordinates: { lat: 39.8400, long: -88.9540 },
            crop: "Soy",
            acreage: 40,
            signalType: "Critical",
            signalColor: "Red",
            notes: "Rust infection detected - spray recommended",
            lastScan: '2025-10-25'

        },
        {
            id: 7,
            name: "Cedar Rapids, IA - Field A",
            location_city: "Cedar Rapids",
            location_state: "Iowa",
            coordinates: { lat: 41.9830, long: -91.6680 },
            crop: "Soy",
            acreage: 40,
            signalType: "Critical",
            signalColor: "Red",
            notes: "Confirmed white mold infection. Immediate action required",
            lastScan: '2025-10-25'

        },
        {
            id: 8,
            name: "Dalton, IL - Field B",
            location_city: "Dalton",
            location_state: "Illinois",
            coordinates: { lat: 39.7107, long: -88.6778 },
            crop: "Soy",
            acreage: 50,
            signalType: "Healthy",
            signalColor: "Green",
            notes: "Healthy field. No stress signal detected",
            lastScan: '2025-10-25'

        },
        {
            id: 9,
            name: "Pottawatomie, KS - Field C",
            location_city: "Pottawatomie",
            location_state: "Kansas",
            coordinates: { lat: 39.285858, long: -96.3691 },
            crop: "Soy",
            acreage: 50,
            signalType: "Warning",
            signalColor: "Yellow",
            notes: "Possible early fungal signal. Monitor closely.",
            lastScan: '2025-10-25'

        },
    ],
    alerts: [
        {
            id: 1,
            fieldId: 2,
            fieldName: "Grand Island, NE - Field C",
            type: "Warning",
            message: "Possible early fungal signal.",
            timestamp: "2025-10-24",
            action: "Monitor field closely, consider preventive treatment.",
            status: "Active"
        },
        {
            id: 2,
            fieldId: 3,
            fieldName: "Ames, IA - Field K",
            type: "Critical",
            message: "Confirmed white mold infection.",
            timestamp: "2025-10-25",
            action: "Apply fungicide within 48 hours.",
            status: "Active"
        },
        {
            id: 3,
            fieldId: 6,
            fieldName: "Decatur, IL - Field A",
            type: "Critical",
            message: "Confirmed white mold infection.",
            timestamp: "2025-10-25",
            action: "Apply rust-specific fungicide immediately",
            status: "Resolved"
        },
    ]
}

export const states = [...new Set(mockData.fields.map(field => field.location_state))].sort()
