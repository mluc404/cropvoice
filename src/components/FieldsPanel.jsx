import './FieldsPanel.css'

export const FieldsPanel = ({ data }) => {
    const STATUS_COLORS = {
        'Healthy': "#26b326ff",
        'Critical': "#e82828ff",
        'Warning': "#f4c013ff",
    };

    return (
        <div className='field-panel-container'>
            <div className='field-panel_header'>
                <div>Fields ({data.length})</div>
            </div>
            <div className='field-panel'>
                {data.map(field => (
                    <div className="field-card">
                        <div className='field-card_name'>{field.name}</div>

                        <div className='field-card_middle'>
                            <div className='field-card_info'>
                                <div>🌱 {field.crop}</div>
                                <div>🔲 {field.acreage} acres</div>
                                <div>🕒 {field.lastScan}</div>
                            </div>
                            <div
                                className='field-card_status'
                                style={{ backgroundColor: STATUS_COLORS[field.signalType] }}
                            >
                                {field.signalType}
                            </div>
                        </div>
                        <hr className='field-card_line'></hr>
                        <div className='field-card_note'>{field.notes}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}