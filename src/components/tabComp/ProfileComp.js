
export default function ProfileComp({ formData, handleChange, handleNext, err }) {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {err.name && <span style={{ color: "red" }}>{err.name}</span>}
            <br />
            <label>Age</label>
            <input type="text" name="age" value={formData.age} onChange={handleChange} />
            {err.age && <span style={{ color: "red" }}>{err.age}</span>}
            <br />
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {err.email && <span style={{ color: "red" }}>{err.email}</span>}
            <div>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}
