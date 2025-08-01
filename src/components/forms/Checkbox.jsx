/**
 * 
 * @param {function} onChange - Callback function to handle input changes 
 * @param {boolean} checked - Indicates if the checkbox is checked
 * @param {string} label - Label for the checkbox 
 * @param {string} id
 * @returns 
 */
export function Checkbox({ checked, onChange, label, id }) {
    return (
        <div className="form-control labelled-checkbox">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="checkbox-field"
            />
            <label htmlFor={id} className="checkbox-label">{label}</label>
        </div>
    );
}