import React from 'react';
import {useState, createContext} from 'react';
import ComponentB from './ComponentB';

export const userContext =createContext();

function ComponentA() {
const [user, setUser] = useState("Peter");
  return (
    <div>
        <h2>This is useContext hook</h2>
        <userContext.Provider value ={user}>
            <ComponentB user ={user}/>
        </userContext.Provider>
    </div>
  )
}

export default ComponentA