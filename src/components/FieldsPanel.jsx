import './FieldsPanel.css'

export const FieldsPanel = ({ data }) => {

    return (
        <div className='field-panel-container'>
            <h2>Fields</h2>
            <div className='field-panel'>
                {data.map(field => (
                    <div className="field-card">
                        <h4>{field.name}</h4>
                        <p>Plant: {field.crop}</p>
                        <p>Size: {field.acreage} acres</p>
                        <p>Status: {field.signalType}</p>
                        <p>Note: {field.notes}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}