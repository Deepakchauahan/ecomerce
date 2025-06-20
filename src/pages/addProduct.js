import { useState, useRef, useEffect, useContext } from 'react'
import Input from '../components/common/formComp/Input'
import TextArea from '../components/common/formComp/TextArea'
import Radio from '../components/common/formComp/Radio'
import Date from '../components/common/formComp/Date'
import { CreateProduct } from '../components/context/productContext'
import { useParams } from 'react-router-dom'

export default function AddProduct() {
    const { id } = useParams()
    const { productList, setProductList } = useContext(CreateProduct)
    const [addData, setAddData] = useState({
        name: "",
        category: "",
        description: "",
        status: "Active",
        published: "",
        update: "",
        mrp: "",
        discount: "",
    })
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus(); // sets focus when component mounts
        if (id) {
            setAddData(
                productList.find(product => product.id == id)
            )
        }
    }, []);
    const onChangeHandle = (e) => {
        setAddData(prev => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }
    const reset = () => {
        setAddData({
            name: "",
            category: "",
            description: "",
            status: "Active",
            published: "",
            update: "",
            mrp: "",
            discount: "",
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (!addData.name || !addData.category || !addData.mrp) {
            console.log("Enter required filed");
        }
        if (id) {
            const editList = productList.map((product) => (
                product.id == id ? { ...product, ...addData } : product
            ))
            setProductList(editList)
        }
        else {
            setProductList(prev => ([...prev,
            { id: Math.random(), ...addData }
            ]
            ))
            reset()
        }
    }



    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={submitHandler}>
                <Input reqiured={true} ref={inputRef} label={"Name"} type={"text"} placeholder={"enter product name"} onChangeHandle={onChangeHandle} name={"name"} value={addData.name} />
                <Input reqiured={true} label={"Category"} type={"text"} placeholder={"enter category name"} onChangeHandle={onChangeHandle} name={"category"} value={addData.category} />
                <TextArea label={"Description"} type={"text"} placeholder={"enter description name"} onChangeHandle={onChangeHandle} name={"description"} value={addData.description} />
                <Radio label={"Status"} type={"text"} placeholder={"enter status name"} onChangeHandle={onChangeHandle} name={"status"} value={addData.status} />
                {/* <Date label={"Published By"} type={"date"} placeholder={"enter published by"} onChangeHandle={onChangeHandle} name={"published"} value={addData.published} />
                <Date label={"Update By"} type={"date"} placeholder={"enter update by"} onChangeHandle={onChangeHandle} name={"update"} value={addData.update} /> */}
                <Input reqiured={true} label={"MRP"} type={"text"} placeholder={"enter mrp"} onChangeHandle={onChangeHandle} name={"mrp"} value={addData.mrp} />
                <Input label={"Discount"} type={"text"} placeholder={"enter discount"} onChangeHandle={onChangeHandle} name={"discount"} value={addData.discount} />
                <button type='submit'>{id ? "Update" : "Add"} Product</button>
                <button type='reset' onClick={reset}>Reset</button>
            </form>
        </div>
    )
}
