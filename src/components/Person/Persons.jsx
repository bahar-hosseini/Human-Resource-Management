import React,{useContext} from "react";
import SimpleContext from "../../context/simpleContext";
import Person from "./Person";

const Persons = () => {
    const context = useContext(SimpleContext)
    
    return (

            <div>
            {context.persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() => context.handleDeletePerson(person.id)}
                    changed={event => context.handleNameChange(event, person.id)}
                />
            ))}
        </div>
        )}



export default Persons;
