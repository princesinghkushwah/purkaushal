import React from 'react'
import { Collapse } from 'react-collapse'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'



const Accordian = ({ open, tittle, desc, toggle }) => {
    return (
        <>
            <div className='pt-3'>
                <div className='bg-white px-3 flex justify-between items-center cursor-pointer' onClick={toggle}>
                    <p className=' font-semibold py-2'>{tittle}</p>
                    <div className='text-[30px]'>
                        {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </div>
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className='bg-white px-[50px]  pb-[20px]'>
                    {desc}
                </div>
            </Collapse>
        </>
    )
}

export default Accordian