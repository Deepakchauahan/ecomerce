import React from 'react'

export default function FileName({ items }) {
    return (
        <>
            {items.map((item) => (
                <div>
                    <div>{item.name}</div>
                    <div style={{ paddingLeft: 10 }}>{item.isFolder && <FileName items={item.items} />}</div>
                </div>
            ))}
        </>
    )
}
