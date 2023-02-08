import React from "react";

function Footer(){
    const date = new Date();
    return (<p><footer> &copy; {date.getFullYear()}</footer></p>)
}

export default Footer;