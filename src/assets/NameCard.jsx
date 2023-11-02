import React from 'react'

const NameCard = ({ name, addToBucketList }) => {

    const handleNameCardClick = () => {
        addToBucketList(name);
    };

    return (
        <div
            className='bg-[#5f9dff] px-4 py-2 font-medium text-[19px] rounded-lg text-white inline-block mx-2 my-2 cursor-pointer'
            onClick={handleNameCardClick}
        >
            {name}
        </div>
    )
}

export default NameCard
