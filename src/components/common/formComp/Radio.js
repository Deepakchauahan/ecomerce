import { placeholderCaptilize } from './commonFn'

export default function Radio({ label, type, placeholder, name, onChangeHandle, value }) {
    const data = ["Active", "Inactive"]

    return (
        <div className='form-item'>
            <label>{label} :</label>
            {data.map(item => (
                <div className='radio-btn' key={item}>
                    <label>{item}</label>
                    <input type={"radio"} placeholder={placeholderCaptilize(placeholder)} name={name} onChange={onChangeHandle} checked={value === item} value={item} />
                </div>
            ))}

        </div>
    )
}
