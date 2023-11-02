import React, { useState } from 'react'
import "./UploadPage.css"
import { BsFillCloudUploadFill, BsFillForwardFill } from "react-icons/bs";
import TextField from '../../assets/TextField';
import SideModal from './SideModal';


const UploadPage = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [isSideModalOpen, setIsSideModalOpen] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    const openSideModal = () => {
        setIsSideModalOpen(true);
    };

    const closeSideModal = () => {
        setIsSideModalOpen(false);
    };

    return (
        <div
            className='flex flex-col justify-center  px-4 w-full'
        >
            <div className="mx-4 flex justify-center items-center">
                <div className="custom-file-input">
                    <input
                        type="file"
                        id="fileInput"
                        className="input-file"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="fileInput" className="file-label flex justify-center items-center">
                        <span>UPLOAD YOUR NEW FILE</span>
                        <span className="ml-2"><BsFillCloudUploadFill /></span>
                    </label>
                </div>
                {selectedFile && <p>File selected: {selectedFile.name}</p>}
            </div>
            <div
                className='mt-6 flex flex-col w-full bg-[#5f9dff] py-12'
            >
                <div
                    className='flex w-full justify-center items-center'
                >
                    <div
                        className='flex flex-col px-32 py-2 font-medium text-[20px] bg-[#5f9dff] text-white w-[50%]'
                    >
                        <TextField textLabel='File Name' />
                        <TextField textLabel='Starting Position' />
                        <div
                            className='flex flex-col mt-4'
                        >
                            <label htmlFor="">Can be updated by: </label>
                            <select
                                className='text-[#767474] pl-2 outline-none py-1'
                                name="" id=""
                                style={{
                                    border: "2px solid #cad4df"
                                }}
                            >
                                <option
                                    className='font-medium'
                                    value="">Anyone</option>
                                <option
                                    className='font-medium'
                                    value="">Only me</option>
                                <option
                                    className='font-medium'
                                    value="">Let me choose</option>
                            </select>
                        </div>
                    </div>
                    <div
                        className='flex flex-col px-32 py-2 font-medium text-[20px] bg-[#5f9dff] text-white w-[50%]'
                    >
                        <TextField textLabel='Faculty Name' />
                        <TextField textLabel='Destination' />
                        <TextField
                            textLabel='Destination' type='date' />
                    </div>
                </div>
                <div className='flex justify-center items-center mt-12 py-2 w-full font-medium'>
                    <button
                        className='bg-white px-4 py-2 text-[#767474] font-medium text-[20px] flex justify-center items-center'
                        onClick={openSideModal} // Open the side modal
                    >
                        Choose Route for the File
                    </button>
                </div>
            </div>
            <div
                className='flex justify-center items-center mt-4 py-2 w-full text-white font-medium'
            >
                <button
                    className='bg-[#5f9dff] px-4 py-2 font-medium text-[20px] flex justify-center items-center'
                >SUBMIT <span
                    className='ml-2'
                ><BsFillForwardFill /></span> </button>
            </div>
            {isSideModalOpen && (
                <div className="modal-overlay">
                    <SideModal onClose={closeSideModal} />
                </div>
            )}
        </div>
    )
}

export default UploadPage
