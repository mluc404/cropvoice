import './AlertPanel.css'

export const AlertPanel = ({ data, selectedAlertType, onAlertTypeChange }) => {
    const alertTypes = ['Warning', 'Critical', 'Active', 'Resolved']
    const STATUS_COLORS = {
        'Healthy': "#26b326ff",
        'Critical': "#e82828ff",
        'Warning': "#f4c013ff",
    };

    const STATUS_SYMBOL = {
        'Critical': "🚨",
        'Warning': "⚠️",
    }

    const ACTIVE_RESOLVE_BG_COLOR = {
        'Active': "#ffebeb",
        'Resolved': "#dfffef",
    }
    const ACTIVE_RESOLVE_FONT_COLOR = {
        'Active': "#e82828ff",
        'Resolved': "#00984c",
    }
    return (
        <div className='alert-panel-container'>
            <div className='alert-panel_header'>
                <h2>Alerts ({data.length})</h2>
                <div className='alert-panel_filter'>
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
            </div>

            <div className='alert-card_container'>
                {data.map(alert => (
                    <div
                        className="alert-card"
                        style={{ borderLeftColor: STATUS_COLORS[alert.type] }}
                    >
                        <div className='alert-card_top'>
                            <span>
                                <span className='alert-card_symbol'>{STATUS_SYMBOL[alert.type]}</span>
                                <span
                                    className='alert-card_label'
                                    style={{ backgroundColor: STATUS_COLORS[alert.type] }}
                                >{alert.type.toUpperCase()}</span>
                            </span>
                            <span className='alert-card_time'>{alert.timestamp}</span>
                        </div>
                        <div className='alert-card_name'>{alert.fieldName}</div>
                        <div className='alert-card_info'>
                            <div>{alert.message}</div>
                            <div><strong>Action:</strong> <em>{alert.action}</em></div>
                        </div>
                        <hr className='alert-card_line'></hr>
                        <div
                            className='alert-card_status'
                            style={{
                                backgroundColor: ACTIVE_RESOLVE_BG_COLOR[alert.status],
                                color: ACTIVE_RESOLVE_FONT_COLOR[alert.status]
                            }}
                        >{alert.status.toUpperCase()}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}