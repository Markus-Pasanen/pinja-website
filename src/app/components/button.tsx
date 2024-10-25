'use client'

import { Dispatch, SetStateAction } from "react";

interface propTypes {
    name: string,
    reference: string,
    state?: boolean,
    setState?: Dispatch<SetStateAction<boolean>>;
    active?: boolean;
    color: string;
}

const button = (props: propTypes) => {

    let activeStyle = props.active ? "hue-rotate-180" : ""

    const onClick = () => {
        document.getElementById(props.reference)?.scrollIntoView({
            behavior: 'smooth'
        })
        props.setState && props.state && props.setState(!props.state);
    };

    return (
        <button onClick={onClick} className={`rounded-lg py-2 px-8 truncate min-w-fit ${props.color} ${activeStyle} hover:scale-105 ease-out duration-300`}>{props.name}</button>
    );
}

export default button;