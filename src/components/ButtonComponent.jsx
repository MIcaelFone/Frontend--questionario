import React from "react";
import Button from "react-bootstrap/Button";
function ButtonComponent(props){
    return(
        <Button variant={props.variant} onClick={props.onClick}>
            {props.text}
        </Button>
    )
}
export default ButtonComponent;