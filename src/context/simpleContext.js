import React from 'react'


const SimpleContext= React.createContext({
    persons:{},
    person:'',
    handleDeletePerson:()=>{},
    handleNameChange:()=>{},
    handleNewPerson:()=>{},
    setPerson:()=>{}
})
export default SimpleContext