import React from 'react';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
 
export default function Faqs() {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Why would I need to save my receipts?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Receipt Tracker is perfect when there is need to refer to expenses at a later date. Need to track business expenses for tax time? We've got you covered. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What are the benefits of going paperless?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Besides being Marie Kondo Tidy Up friendly, you can recycle all of that paper and who doesn't want to help Planet Earth. Amirite?
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}