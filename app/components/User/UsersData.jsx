"use client"
import React, { useEffect, useState } from 'react';

const UsersData = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
    },[])
    

    return (
        <div>
            <h2 className='text-2xl font-bold my-4 text-center'>All Users : {users.length}</h2>
            {
                users?.map((user)=>{
                    return <div className="card bg-gray-100 shadow-xl w-[50%] mx-auto my-7">
                    <div className="card-body">
                      <h2 className="card-title">{user.name}</h2>
                      <p>{user.email}</p>
                      
                    </div>
                  </div>
                })
            }
        </div>
    );
};

export default UsersData;