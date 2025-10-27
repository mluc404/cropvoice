import './AlertPanel.css'

export const AlertPanel = ({ data, selectedAlertType, onAlertTypeChange }) => {
    const alertTypes = ['Warning', 'Critical', 'Active', 'Resolved']

    return (
        <div className='alert-panel-container'>
            <h2>Alert</h2>
            <div>
                <select
                    value={selectedAlertType}
                    onChange={(e) => onAlertTypeChange(e.target.value)}
                >
                    <option>All</option>
                    {alertTypes.map(alertType => (
                        <option>{alertType}</option>
                    ))}
                </select>
            </div>
            <div>
                {data.map(alert => (
                    <div className="alert-card">
                        <div className='alert-card_top'>
                            <span>{alert.type}</span>
                            <span>{alert.timestamp}</span>
                        </div>
                        <h4>{alert.fieldName}</h4>
                        <p>{alert.message}</p>
                        <p>Action: {alert.action}</p>
                        <p>{alert.status}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}