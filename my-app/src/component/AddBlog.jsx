import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { db } from '../Firebase';
import { addDoc, collection } from 'firebase/firestore';
import './AddBlog.css';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: '',
        shortDesc: '',
        logDesc: '',
        imgUrl: '',
        authorName: auth.currentUser.displayName,
        authorImg: auth.currentUser.photoURL,
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const colleRef = collection(db, "blog");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(colleRef, data);
            
            toast.success('Your blog is added!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });

            console.log("Form submitted");
            navigate('/blogs');

            // Reset form but keep author details
            setData({
                title: '',
                shortDesc: '',
                logDesc: '',
                imgUrl: '',
                authorName: auth.currentUser.displayName,
                authorImg: auth.currentUser.photoURL,
            });
        } catch (error) {
            toast.error('Error adding blog!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
            console.error("Error adding blog:", error);
        }
    };
    // setTimeout(()=>{
    //     navigate('blogs');
    // },2500);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={4998}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Navbar />
            <div className="container my-3">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            value={data.title}
                            name="title"
                            type="text"
                            required
                            onChange={handleChange}
                            className="form-control"
                            id="title"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="shortDesc" className="form-label">Short Description</label>
                        <input
                            value={data.shortDesc}
                            name="shortDesc"
                            type="text"
                            required
                            onChange={handleChange}
                            className="form-control"
                            id="shortDesc"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="logDesc" className="form-label">Full Description</label>
                        <textarea
                            value={data.logDesc}
                            name="logDesc"
                            type="text"
                            required
                            onChange={handleChange}
                            className="form-control"
                            id="logDesc"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="imgUrl" className="form-label">Image URL</label>
                        <input
                            value={data.imgUrl}
                            name="imgUrl"
                            type="text"
                            required
                            onChange={handleChange}
                            className="form-control"
                            id="imgUrl"
                        />
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary btn-lg">Add Blog</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddBlog;
