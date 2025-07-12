import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function InfiniteScroll() {
    const page_size = 5
    const [pageNumber, setPageNumber] = useState(0)
    const [productList, setProductList] = useState([])
    const controllerRef = useRef(null)
    const observer = useRef(null)

    const fetchData = useCallback(async () => {
        const skip = pageNumber * page_size
        try {
            if (controllerRef.current) controllerRef.current.abort()
            controllerRef.current = new AbortController()
            const signal = controllerRef.current.signal;
            const res = await fetch(`https://dummyjson.com/products?limit=${page_size}&skip=${skip}`, { signal })
            const data = await res.json()
            setProductList([...productList, ...data.products])
        } catch (error) {
            console.log(error, "error");
        }
    }, [pageNumber])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const observerIntesection = useCallback((node) => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPageNumber(prev => prev + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, []
    )

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                productList.length > 0 && productList.map((product, index) => (
                    <div key={product.id} style={{ border: "1px solid #000", padding: 8, width: "23%", }} ref={index === productList.length - 1 ? observerIntesection : null}>
                        <img src={product.thumbnail} alt={product.title} width={100} />
                        <h3 style={{ fontSize: 16 }}>Name: {product.title} {product.id}</h3>
                    </div>
                )
                )
            }
        </div>
    )
}
