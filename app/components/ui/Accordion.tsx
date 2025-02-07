"use client"
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';

interface AccordionProps {
    title: string;
    content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-border rounded-xl overflow-hidden">
            <div
                className="p-4 cursor-pointer flex justify-between items-center accordion-bg"
                onClick={toggleAccordion}
            >
                <h3 className="font-medium text-white">{title}</h3>
                <span className="transition-transform duration-200">
                    {isOpen ? (
                        <MinusIcon className="w-5 h-5 text-white" />
                    ) : (
                        <PlusIcon className="w-5 h-5 text-white" />
                    )}
                </span>
            </div>
            {isOpen && (
                <div className="p-4 transition-max-height duration-300 overflow-hidden accordion-bg" style={{ maxHeight: isOpen ? '500px' : '0' }}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Accordion;
