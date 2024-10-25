// View.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const View = () => {
    const { id } = useParams();
    const user = useSelector(state => state.users.find(user => user.id === parseInt(id)));

    return user ? (
        <div className="container mt-3 border rounded">
            <h2 className='my-3 text-center'>{user.name}</h2>
            <hr></hr>
            <p> <strong>Username: </strong>{user.username}</p>
            <p><strong>Email: </strong>{user.email}</p>
        </div>
    ) : (
        <p>user not found.</p>
    );
};

export default View;
