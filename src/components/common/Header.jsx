import React,{useContext} from 'react';
import {Alert,Badge} from 'react-bootstrap';
import SimpleContext from '../../context/simpleContext';


function Header({appTitle}) {
const context = useContext(SimpleContext)
const{persons}=context;
    let badgeStyle = "";

        if (persons.length >= 3) badgeStyle = "success";
        if (persons.length<= 2) badgeStyle = "warning";
        if (persons.length <= 1) badgeStyle = "danger";

    return (
            <div>
            <Alert variant="info">
                    <h2>{appTitle}</h2>
                </Alert>
                <Alert variant="light">
                    The Number of Personels{" "}
                    <Badge pill variant={badgeStyle}>
                        {persons.length}
                    </Badge>
                    {" "}
                    Are :
                </Alert>  
                </div>   
    )
}

export default Header
