import React,{useState} from "react";
import { Button} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from './components/common/Header'
import NewPerson from "./components/Person/NewPerson";
import Persons from "./components/Person/Persons";
import SimpleContext from "./context/simpleContext";



function App() {


    // state = {
    //     persons: [],
    //     person: "",
    //     showPersons: true,
    //     appTitle:'Human Resource Management'
    // };

    const [getPersons,setPersons]=useState([])
    const[getSinglePerson,setSinglePerson]=useState('')
    const[getShowPersons,setShowPersons]=useState(true);

   const  handleShowPerson = () => {
        setShowPersons(!getShowPersons);
    };

   const  handleDeletePerson = id => {
        //filter
        const persons = [...getPersons];
        const filteredPersons = persons.filter(p => p.id !== id); //! = =
       setPersons(filteredPersons);

        const personIndex = persons.findIndex(p => p.id === id);
        const person = persons[personIndex];

        toast.error(`${person.fullname} Successfully deleted`, {
            position: "top-right",
            closeOnClick: true
        });
    };

   const  handleNameChange = (event, id) => {
        const { persons: allPersons } =getPersons;

        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;
        console.log(event);

        const persons = [...allPersons];

        persons[personIndex] = person;
        setPersons(persons);
    };

   const  handleNewPerson = () => {
        const persons = [...getPersons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullname: getSinglePerson
        };

        if (person.fullname !== "" && person.fullname !== " ") {
            persons.push(person);
            setPersons(persons);
            setSinglePerson("")
        
            toast.success("Successfully added", {
                position: "bottom-right",
                closeButton: true,
                closeOnClick: true
            });
        }
    };

   const  setPerson = event => {
        setSinglePerson( event.target.value);
    };


    let person = null;

    
    if (getShowPersons) {
        person = (
            <Persons />
        );
    }
    
    return (
        <div>
            <SimpleContext.Provider value={{
                                            persons:getPersons,
                                            person:getSinglePerson,
                                            handleDeletePerson:handleDeletePerson,
                                            handleNameChange:handleNameChange,
                                            handleNewPerson:handleNewPerson,
                                            setPerson:setPerson}}>
            <div className="text-center">
                <Header appTitle='Human Resource Management'/>
                    <NewPerson />
                <Button
                    onClick={handleShowPerson}
                    variant={getShowPersons ? "info" : "danger"}>
                    Show 
                </Button>

                {person}
                <ToastContainer />
            </div>
            </SimpleContext.Provider>
        </div>
    )
}








export default App;
