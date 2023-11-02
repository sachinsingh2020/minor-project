import React from 'react'

const TextField = ({ textLabel = "File Name", type = 'text' }) => {
    return (
        <div
            className='mt-4 flex flex-col '
        >
            <span>{textLabel}: </span>
            <input className='outline-none text-[#767474] pl-2 py-1'
                style={{
                    border: "2px solid #cad4df"
                }}
                type={type} />
        </div>
    )
}

export default TextField
