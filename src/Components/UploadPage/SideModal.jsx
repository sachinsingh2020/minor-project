import React, { useState } from 'react'
import NameCard from '../../assets/NameCard'
import { BsArrowRight } from "react-icons/bs";

const SideModal = ({ onClose }) => {
    const [bucketList, setBucketList] = useState([])
    // const bucketList = ["SOICT Office", "Dean Office", "Registrar Office", "Vice Chancellor Office", "Accounts Office", "SOLJG Office", "Finance Office", "Admission Cell", "SOVSAS Office"]

    const defaultBucketList = ["SOICT Office", "Dean Office", "Registrar Office", "Vice Chancellor Office", "Accounts Office", "SOLJG Office", "SOE Office", "SOM Office", "Library", "Finance Office", "Admission Cell", "SOVSAS Office"]

    const addToBucketList = (name) => {
        if (!bucketList.includes(name)) {
            setBucketList([...bucketList, name]);
        }
    };


    return (
        <div className="side-modal fixed top-0 left-0 h-[100vh] w-[100vw] flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-content bg-white rounded-lg shadow-md w-[80%] h-[80%]">
                <div
                    className='flex w-full h-full'
                >
                    <div
                        className='w-[50%]  font-medium text-[20px]  p-4 '
                        style={{
                            borderRight: "4px solid #5f9dff"
                        }}
                    >
                        <div
                            className='flex flex-wrap'
                        >
                            {
                                bucketList.map((name, index) => (
                                    <div
                                        className='flex items-center'
                                    >
                                        <NameCard name={name} key={index} />
                                        <BsArrowRight />
                                    </div>
                                ))
                            }
                            <NameCard name="END" />
                        </div>
                    </div>
                    <div
                        className='w-[50%]  font-medium text-[20px] p-4'
                    >
                        <div
                            className='w-full'
                        >
                            <input
                                className='outline-none text-[#767474] pl-2 py-1 w-full rounded-lg'
                                style={{
                                    border: "2px solid #767474 "
                                }}
                                placeholder='Search Here...'
                                type="search" />
                        </div>
                        <div
                            className='mt-4 h-[83%] overflow-y-auto'
                        >
                            {
                                defaultBucketList.map((name, index) => (
                                    <NameCard name={name} key={index} addToBucketList={addToBucketList} />
                                )
                                )
                            }
                        </div>
                        <div
                            className='flex justify-end w-full mt-2'
                        >
                            <button
                                className='bg-[#5f9dff] px-4 py-2 font-medium text-[20px] rounded-lg text-white  flex justify-center items-center'
                                onClick={onClose}>Close </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideModal
