import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function ServerPagination() {
    const page_size = 5
    const [productList, setProductList] = useState([])
    const controlllerRef = useRef(null)
    const [totalPage, setTotalPage] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    const [loading, setLoading] = useState(false)
    const fetchData = useCallback(async () => {
        let skip = pageNumber * page_size
        setLoading(true)
        try {
            if (controlllerRef.current) controlllerRef.current.abort()
            controlllerRef.current = new AbortController()
            const signal = controlllerRef.current.signal;
            const res = await fetch(`https://dummyjson.com/products?limit=${page_size}&skip=${skip}`, { signal })
            const data = await res.json()
            setProductList(data.products)
            setTotalPage(Math.ceil(data.total / page_size))
        } catch (error) {
            if (error.name == "AbortError") {
                console.log("Abort Api");
            } else {
                console.log(error, "something went wrong");
            }

        } finally {
            setLoading(false)
        }
    }, [pageNumber])

    useEffect(() => {
        fetchData()

        return (() => {
            if (controlllerRef.current) controlllerRef.current.abort()
        })
    }, [fetchData])

    const handlePage = (index) => {
        setPageNumber(index)
    }
    const handlePrev = () => {
        setPageNumber(prev => prev - 1)
    }
    const handleNext = () => {
        setPageNumber(prev => prev + 1)
    }

    // const renderPaginationButtons = () => {
    //     const buttons = [];

    //     // Always show the first page
    //     if (pageNumber > 2) {
    //         buttons.push(
    //             <button key={0} onClick={() => handlePage(0)} className={pageNumber === 0 ? "active" : ""}>
    //                 1
    //             </button>
    //         );
    //         if (pageNumber > 3) {
    //             buttons.push(<span key="start-ellipsis" style={{ margin: '0 6px' }}>...</span>);
    //         }
    //     }

    //     // Show 2 pages before and after the current page
    //     for (
    //         let i = Math.max(0, pageNumber - 2);
    //         i <= Math.min(totalPage - 1, pageNumber + 2);
    //         i++
    //     ) {
    //         if (i === 0 || i === totalPage - 1) continue; // already added
    //         buttons.push(
    //             <button key={i} onClick={() => handlePage(i)} className={i === pageNumber ? "active" : ""}>
    //                 {i + 1}
    //             </button>
    //         );
    //     }

    //     // Always show the last page
    //     if (pageNumber < totalPage - 3) {
    //         if (pageNumber < totalPage - 4) {
    //             buttons.push(<span key="end-ellipsis" style={{ margin: '0 6px' }}>...</span>);
    //         }
    //         buttons.push(
    //             <button
    //                 key={totalPage - 1}
    //                 onClick={() => handlePage(totalPage - 1)}
    //                 className={pageNumber === totalPage - 1 ? "active" : ""}
    //             >
    //                 {totalPage}
    //             </button>
    //         );
    //     }

    //     return buttons;
    // };


    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {loading && <div>Loading More</div>}
                {
                    productList.length > 0 && productList.map((product) => (
                        <div key={product.id} style={{ border: "1px solid #000", padding: 8, width: "23%", }}>
                            <img src={product.thumbnail} alt={product.title} width={100} />
                            <h3 style={{ fontSize: 16 }}>Name: {product.title} {product.id}</h3>
                        </div>
                    ))
                }
            </div>
            {totalPage > 0 &&
                <div>
                    <button onClick={handlePrev} disabled={pageNumber === 0}>Prev</button>
                    {Array.from(Array(totalPage)).map((page, index) => (
                        <button key={index} className={`${index == pageNumber ? "active" : ""}`} onClick={() => handlePage(index)}>{index + 1}</button>
                    ))}
                    {/* {renderPaginationButtons()} */}
                    {/* {Array.from(Array(totalPage)).map((_, index) => {
                        if (index < 2) {
                            return <button key={index} className={`${index == pageNumber ? "active" : ""}`} onClick={() => handlePage(index)}>{index + 1}</button>
                        }
                        else if (index > 2 && index < totalPage - 2) {
                            return <span>...</span>
                        } else {
                            return <button key={index} className={`${index == pageNumber ? "active" : ""}`} onClick={() => handlePage(index)}>{index + 1}</button>

                        }
                    })} */}
                    <button onClick={handleNext} disabled={pageNumber === totalPage - 1}>Next</button>
                </div>
            }
        </>
    )
}
