'use client'

import { Dispatch, SetStateAction } from "react";

interface propTypes {
    name: string,
    secondary?: boolean,
    reference: string,
    active?: boolean,
    state?: boolean,
    setState?: Dispatch<SetStateAction<boolean>>;
}

const button = (props: propTypes) => {

    let activeStyle = props.active ? "bg-active text-background" : ""
    let secondary = props.secondary ? "bg-active hover:bg-hover text-background" : "hover:bg-hover"

    const onClick = () => {
        document.getElementById(props.reference)?.scrollIntoView({
            behavior: 'smooth'
        })
        props.setState && props.state && props.setState(!props.state);
    };

    return (
        <button onClick={onClick} className={`rounded-lg py-2 px-8 truncate min-w-fit ${secondary} ${activeStyle}`}>{props.name}</button>
    );
}

export default button;