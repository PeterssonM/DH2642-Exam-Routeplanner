import React from 'react'


const field = React.forwardRef(({label, type}, ref) => {
    return (
        <div className="field">
            <label>{label}</label>
            <input ref={ref} type={type} />
        </div>
    );
})

export default function Field() {
    return field;
}
