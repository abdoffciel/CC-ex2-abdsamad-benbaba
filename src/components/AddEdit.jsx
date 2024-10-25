// AddEdit.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const AddEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
    });

    useEffect(() => {
        if (id) {
            const userToEdit = users.find(user => user.id === parseInt(id));
            if (userToEdit) setFormData(userToEdit);
        }
    }, [id, users]);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (id) {
            dispatch({ type: 'UPDATE_USER', payload: { ...formData, id: parseInt(id) } });
        } else {
            dispatch({ type: 'ADD_USER', payload: { ...formData, id: Date.now() } });
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-3 container border rounded p-3">
            <label >
                Name:
            </label>
            <input name="name"  className=" my-3 form-control" placeholder="name" value={formData.name} onChange={handleChange}/>
            <label>
                Username:
            </label>
            <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} className=" my-3 form-control" />
            <label>
                Email:
            </label>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} autoComplete="off" className="form-control mt-3" />

            <button type="submit" className="btn btn-primary mt-3 w-100">{id ? 'Update' : 'Add'} USER</button>
        </form>
    );
};

export default AddEdit;
