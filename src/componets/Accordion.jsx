import React, { useState } from 'react'

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className="accordionitem acc-bg my-2">
                <button className="accordiontitle bg-transparent p-2 align-items-center col-12 d-flex justify-content-between acc-bg " onClick={() => setIsActive(!isActive)}>
                    <p className='m-0 text-uppercase text-white'>{title}</p>
                    <p className='m-0 text-white fs-5'>{isActive ? '-' : '+'}</p>
                </button>
                {isActive && <div className="accordioncontent text-start p-1 text-white">{content}</div>}
            </div>
        </>
    )
}

export default Accordion