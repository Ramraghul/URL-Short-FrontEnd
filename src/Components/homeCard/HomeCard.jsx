import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { API } from '../../Config';
import './HomeCard.css';
import Swal from 'sweetalert2';

function HomeCard() {
    const [short,setShort] = useState('');

    //Alert function;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    //Formik Method
    let formik = useFormik({
        initialValues: {
            origUrl: ""
        },
        validate: (value) => {
            let errors = {}
            //Password;
            if (value.origUrl === "") {
                errors.origUrl = "border border-danger"
            }
            return errors
        },
        onSubmit: async (User) => {
            try {
                let status = await axios.post(`${API.URL}/Short`, User);
                setShort(status.data)
                Toast.fire({ icon: 'success', title: `Done` })
            } catch (error) {
                console.log(error);
            }
        }
    });
    return (
        <>
            <span className='cent'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="card text-center URL p-3">
                        <div>
                            <h4>Welcome to URL Shortener</h4>
                        </div>
                        <div className="card-body">
                            <div>
                                <input type='url' className={`form-control trans ${formik.errors.origUrl}`} list="datalistOptions" id="exampleDataList" placeholder="Enter your Long URL" value={formik.values.origUrl} onChange={formik.handleChange} name="origUrl" required />
                            </div>
                            <div className='mt-4'>
                                <h4><a className='ana' target='_blank' href={`${short}`}>{short}</a></h4>
                            </div>
                        </div>
                        <div className="text-muted">
                            <button type='submit' className='btn btn-primary'>Click to  shrink</button>
                        </div>
                    </div>
                </form>
            </span>
        </>
    )
}

export default HomeCard