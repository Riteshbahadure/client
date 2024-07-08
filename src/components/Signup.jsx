import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import * as yup from 'yup'
import { useRegisterMutation } from '../redux/apis/authApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [Register, { isSuccess, isLoading, isError, error }] = useRegisterMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            email: yup.string().email().required("Enter email"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            Register(values)
            resetForm()
        }
    })
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            toast.success("user Register success")
            navigate("/login")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error(error.message || "unable to register user")
        }
    }, [isError])
    return <>

        <div className='h-screen flex justify-center items-center'>
            <div className="card card-compact w-96  shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Register User</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <input {...formik.getFieldProps("name")}
                            type="text"
                            placeholder="enter name"
                            className={`input input-bordered w-full my-2 ${formik.errors.name && formik.touched.name && "input-error"}`} />

                        <input  {...formik.getFieldProps("email")}
                            type="email"
                            placeholder="enter email"
                            className={`input input-bordered w-full my-2 ${formik.errors.email && formik.touched.email && "input-error"}`} />

                        <input  {...formik.getFieldProps("password")}
                            type="password"
                            placeholder="enter pass"
                            className={`input input-bordered w-full my-2 ${formik.errors.password && formik.touched.password && "input-error"}`} />
                        <button
                            disabled={isLoading}
                            type='submit'
                            className='btn btn-primary'>
                            {isLoading ? <div className='loading loading-spinner'>please wait...</div> : "Register"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Signup