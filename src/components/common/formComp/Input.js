import { forwardRef } from 'react'
import { placeholderCaptilize } from './commonFn'

function Input({ label, type, placeholder, name, onChangeHandle, value,required = false }, ref) {


    return (
        <div className='form-item'>
            <label>{label} :</label>
            <input ref={ref} required={required} type={type} placeholder={placeholderCaptilize(placeholder)} name={name} onChange={onChangeHandle} value={value} />
        </div>
    )
}


export default forwardRef(Input)