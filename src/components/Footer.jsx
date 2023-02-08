import React from "react";

function Footer(){
    const date = new Date();
    return (<p><footer> &copy; {date.getFullYear()} @ Mukul Padwal</footer></p>)
}

export default Footer;