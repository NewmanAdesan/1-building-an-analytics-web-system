
import { useState } from "react";
import { AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import "./Card.css"

const Card = (props) => {

    // this ui has 2 forms
    // the compact form & the expanded form
    // we can animate between this 2 forms using the AnimatedSharedLayout concept of framer motion

    const [expanded, setExpanded] = useState(false);
    
    return (
        <AnimateSharedLayout>
            {
                expanded ? (
                    <ExpandedCard />
                ): (
                    <CompactCard param = {props} />
                )
            }
        </AnimateSharedLayout>
    );
    
}
export default Card


function CompactCard ({param}) {
    const Png = param.png;
    return (
        <div 
            className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}

        >
            <div className="radialBar">
                <CircularProgressbar 
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
            </div>
            <div className="detail">
                <Png />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )
}


function ExpandedCard ({param}) {
    return "Expanded"
}