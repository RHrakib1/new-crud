import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const loadder = useLoaderData()
    const [user, setuser] = useState(loadder)

    const hendledelete = (id) => {
        fetch(`http://localhost:1000/headphone/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remining = user.filter(c => c._id !== id)
                setuser(remining)
            })

    }

    return (
        <div>
            <h1>head ase {user.length}</h1>
            {
                user.map(copy => <li key={copy._id}>{copy.name}:   {copy.email} <button onClick={() => hendledelete(copy._id)}>X</button> <Link to={`/update/${copy._id}`}><button>Update</button></Link></li>)

            }
        </div>
    );
};

export default User;