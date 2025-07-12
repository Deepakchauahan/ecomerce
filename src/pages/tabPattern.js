import { useState } from "react"
import ProfileComp from "../components/tabComp/ProfileComp"
import LanguageComp from "../components/tabComp/LanguageComp"
import SettingComp from "../components/tabComp/SettingComp"


export default function TabPattern() {
    const [showTab, setShowTab] = useState(1)
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        course: [],
        theme: ""
    })
    const [err, setErr] = useState({
        name: "",
        age: "",
        email: "",
        course: "",
        theme: ""
    })


    const handleNext = () => {
        const currentTab = tabData.find(item => item.key === showTab)
        if (currentTab.validate()) {
            setShowTab(prev => prev + 1)
        }
    }
    const handlePrev = () => {
        setShowTab(prev => prev - 1)
    }
    const handleSubmit = () => {
        const currentTab = tabData.find(item => item.key === showTab)
        if (currentTab.validate()) {
            console.log("submit", formData);
        }
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === "checkbox" && name === "course") {
            const newCourse = checked ? [...formData.course, value] : formData.course.filter(item => item !== value);
            setFormData(prev => ({
                ...prev,
                course: newCourse
            }))
            setErr(prev => ({
                ...prev,
                [name]: ""
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
            setErr(prev => ({
                ...prev,
                [name]: ""
            }))
        }
    }


    const tabData = [{
        key: 1,
        tabName: "Profile",
        content: <ProfileComp formData={formData} handleChange={handleChange} handleNext={handleNext} err={err} />,
        validate: () => {
            if (!formData.name) {
                setErr(prev => ({
                    ...prev,
                    name: "Enter Name"
                }))
            } if (!formData.age) {
                setErr(prev => ({
                    ...prev,
                    age: "Enter Age"
                }))
            }
            if (!formData.email) {
                setErr(prev => ({
                    ...prev,
                    email: "Enter Email"
                }))
            }
            if (formData.name && formData.age && formData.email) {

                return true
            }

        }
    },
    {
        key: 2,
        tabName: "Language",
        content: <LanguageComp formData={formData} handleChange={handleChange} handleNext={handleNext} handlePrev={handlePrev} err={err} />,
        validate: () => {
            if (formData.course.length === 0) {
                setErr(prev => ({
                    ...prev,
                    course: "Select 1 course"
                }))
            } else {

                return true
            }
        }
    },
    {
        key: 3,
        tabName: "Setting",
        content: <SettingComp formData={formData} handleChange={handleChange} handlePrev={handlePrev} handleSubmit={handleSubmit} err={err} />,
        validate: () => {
            if (!formData.theme) {
                setErr(prev => ({
                    ...prev,
                    theme: "Select 1 mode"
                }))
            } else {

                return true
            }
        }
    }
    ]

    const handleTabChange = (id) => {
        if (id < showTab) {
            setShowTab(id);
        } else if (id === showTab + 1) {
            const currentTab = tabData.find(item => item.key === showTab);
            if (currentTab.validate()) {
                setShowTab(id);
            }
        }

    };

    return (
        <>
            <div style={{ display: "flex", gap: 10 }}>
                {tabData.map((tab) => (
                    <div key={tab.key} onClick={() => handleTabChange(tab.key)}>
                        <h4>{tab.tabName}</h4>
                    </div>
                ))}
            </div>
            <div style={{ display: "flex" }}>
                {tabData.map((tab) => <div key={tab.key}>{
                    (tab.key === showTab) &&
                    <div>{tab.content}</div>
                }</div>)}
            </div>
        </>
    )
}
