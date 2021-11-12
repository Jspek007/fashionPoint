import React, { useState } from "react";

const Accordion = ({ title, content }) => {
    
    const [isActive, setIsActive] = useState(false);
    
    return (
        <section className="accordion-item">
            <section className="accordion-title"
                    onClick={() => setIsActive(!isActive)}>
                        <section>{title}</section>
                        <section>{isActive ? '-' : '+'}</section>
                    </section>
                    {isActive && <section className="accordion-content">{content}</section>}
        </section>
        
        
    )
}

export default Accordion;