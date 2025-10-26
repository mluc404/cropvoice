import iconRed from './marker-red.png'
import iconGreen from './marker-green.png'
import iconYellow from './marker-yellow.png'
import { Icon } from 'leaflet'

export const markerRed = new Icon({
    iconUrl: iconRed,
    iconSize: [38, 38]
})
export const markerGreen = new Icon({
    iconUrl: iconGreen,
    iconSize: [38, 38]
})
export const markerYellow = new Icon({
    iconUrl: iconYellow,
    iconSize: [38, 38]
})

// export const markerChoice = {
//     "Healthy": markerGreen,
//     "Warning": markerYellow,
//     "Critical": markerRed
// }