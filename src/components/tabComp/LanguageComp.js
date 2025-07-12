
export default function LanguageComp({ formData, handleChange, handleNext, handlePrev,err }) {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {err.course && <span style={{color:"red"}}>{err.course}</span>}
            <input type="checkbox" name="course" value="js" id="js" checked={formData.course.includes("js")} onChange={handleChange} />
            <label htmlFor="js">Javascript</label>

            <br />
            <input type="checkbox" name="course" value="python" id="python" checked={formData.course.includes("python")} onChange={handleChange} />
            <label htmlFor="python">Phython</label>

            <br />
            <input type="checkbox" name="course" value="c+" id="c+" checked={formData.course.includes("c+")} onChange={handleChange} />
            <label htmlFor="c+">C++</label>
            <br />
            <input type="checkbox" name="course" value="java" id="java" checked={formData.course.includes("java")} onChange={handleChange} />
            <label htmlFor="java">Java</label>
            <div>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}
