import { placeholderCaptilize } from './commonFn'

export default function TextArea({ label, type, placeholder, name, onChangeHandle,value ,required = false}) {


    return (
        <div className='form-item'>
            <label>{label} :</label>
            <textarea type={type} required={required} placeholder={placeholderCaptilize(placeholder)} name={name} onChange={onChangeHandle} value={value}/>
        </div>
    )
}
