import React, { useState } from 'react'

function UseEffectcomponent() {
    console.log("compnent rendering ....")

    const [users, setUser]= useState('');

    useEffect (()=>{
        console.log("recahed here...")
        fetch ('https://fakestoreapi.com/users')
        .then((users)=>{
            console.log("users:",users);
            return users.json();
        })
        .then((users)=>{
           console.log("user parsed :",users);
           setUser(users);
        })
    },[]);
    console.log("users from state:",users);
  return (
    <>
      users?(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(()=>{
                     returm(
                        <tr key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.phone}</td>
                        </tr>
                     )
                    })
                }
            </tbody>
        </table>
      ):(
        <h1>loading</h1>
      )
      
    </>
  )
}

export default UseEffectcomponent
