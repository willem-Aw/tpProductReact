/**
 * 
 * @param {string} type - The type of input (e.g., text, number, email) 
 * @param {string} placeholder - Placeholder text for the input field
 * @param {string} value - The current value of the input field
 * @param {string} min - Minimum value for the input field (optional)
 * @param {string} max - Maximum value for the input field (optional) 
 * @param {function} onChange - Callback function to handle input changes 
 * @returns 
 */
export function Input({ type, placeholder, value, onChange, min=null, max=null, step=null }) {
    return (
        <div className="form-control">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="input-field"
                min={min ? min : null}
                max={max ? max : null}
                step={step ? step : null}
            />
        </div>
    );
}