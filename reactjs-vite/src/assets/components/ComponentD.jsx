import React from 'react';
import {useContext} from 'react';
import {userContext} from 'ComponentA.jsx';

function ComponentD() {

    const user = useContext(userContext);
  return (
    <div>
        <h1>Hello {user}</h1>
    </div>
  )
}

export default ComponentD
//end
