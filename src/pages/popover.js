import React, { useRef, useState, useEffect } from 'react'

export default function Popover() {
    const [isOpen, setIsOpen] = useState(false)
    const modalRef = useRef(null)

    useEffect(() => {
        const outSideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", outSideClick)
        }

        return () => {
            document.removeEventListener("mousedown", outSideClick)
        }
    }, [isOpen])


    return (
        <>
            <div>popover</div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen && (
                <div className='outer'>
                    <div className='modal-inner' ref={modalRef}>
                        <h2>Modal</h2>
                        <button onClick={() => setIsOpen(false)}>close</button>
                        <p>ndusnionoi</p>
                        <div>
                            <button>No</button>
                            <button>Yes</button>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}
