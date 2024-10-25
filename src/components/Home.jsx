// List.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.users);

    const handleDelete = id => {
        dispatch({ type: 'DELETE_USER', payload: id });
    };

    return (
        <table className="table table-hover table-striped mt-3">
            <thead className="bg-dark text-light">
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link  className='btn btn-outline-success me-2' to={`/edit/${user.id}`}>Edit</Link>
                            <button className='btn btn-outline-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                            <button className='btn btn-outline-primary' onClick={() => navigate(`/view/${user.id}`)}>View Details</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Home;
