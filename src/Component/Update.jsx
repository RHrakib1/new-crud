import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadder = useLoaderData()
    const hendleupdate = e => {
        e.preventDefault()
        const base = e.target
        const name = base.name.value
        const email = base.email.value
        const user = { name, email }
        console.log(user);
        fetch(`http://localhost:1000/headphone/${loadder._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                base.reset()
                if (data.modifiedCount > 0){
                    alert['hoiise re vai']
                }
            })
    }
    return (
        <div>
            <form onSubmit={hendleupdate}>
                <input type="text" name='name' defaultValue={loadder.name} /><br />
                <input type="email" name='email' defaultValue={loadder.email} /><br />
                <input type="submit" value='Update' />
            </form>
        </div>
    );
};

export default Update;