import { placeholderCaptilize } from './commonFn';

export default function Date({ label, type, placeholder, name, onChangeHandle, value }) {
    console.log(value, "value");


    return (
        <div className='form-item'>
            <label>{label} :</label>
            <input type={type} placeholder={placeholderCaptilize(placeholder)} name={name} onChange={onChangeHandle} value={value} />
        </div>
    )
}
