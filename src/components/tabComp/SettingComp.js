
export default function SettingComp({ formData, handleChange, handlePrev, handleSubmit,err }) {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            {err.theme && <span style={{color:"red"}}>{err.theme}</span>}
            <input type="radio" name="theme" value="dark" id="dark" checked={formData.theme === "dark"} onChange={handleChange} />
            <label htmlFor="dark">Dark</label>

            <br />
            <input type="radio" name="theme" value="light" id="light" checked={formData.theme === "light"} onChange={handleChange} />
            <label htmlFor="light">Light</label>
            <div>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
