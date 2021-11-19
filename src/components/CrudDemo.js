import React, { useEffect, useState } from 'react';
import PersonService from '../service/PersonService';

const CrudDemo = () => {
    const [persons,setPersons] = useState([]);

    // useEffect 
    useEffect(()=>{
        // call API
        const personService = new PersonService();
        personService.findAll().then((res)=>{
            console.log(res);
            if(res.status === 200){
                setPersons(res.data);
            } else {
                // display error message
            }
        });

        // update the state
    },[]);

    const Table = () => {

        const TableHeader = ()=> {
            return (
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                )
        };

        const TableAction = ()=> {
            return (
            <div>
                <button type="button" className="btn btn-primary">Details</button>
                <button type="button" className="btn btn-danger m-2">Delete</button>
                <button type="button" className="btn btn-warning">Edit</button>
            </div>)
        };

        const TableRow = ()=> {
            return (
                <tbody>
                   {
                    persons.map( (person)=> (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.firstName} {person.lastName}</td>
                            <td>{person.email}</td>
                            <td><TableAction /></td>
                        </tr>
                    ))   
                   }                     
                </tbody>
            )
        };

        return(
            <div className="container">
                <table className="table table-striped">
                    <TableHeader/>
                    <TableRow />
                </table>
            </div>
            );
    };

    return (
        <div className="container">
            <Table />
        </div>
    );
};

export default CrudDemo;