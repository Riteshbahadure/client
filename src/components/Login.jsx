import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import * as yup from 'yup'
import { useLoginMutation, useRegisterMutation } from '../redux/apis/authApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Login = () => {
    const { user } = useSelector(state => state.auth)
    const [login, { data, isSuccess, isLoading, isError, error }] = useLoginMutation()
    const formik = useFormik({
        initialValues: {
            // name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            // name: yup.string().required("Enter Name"),
            email: yup.string().email().required("Enter email"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            login(values)
            resetForm()
        }
    })
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            toast.success("user login success")
            if (user.role === "admin") {
                navigate("/admin")
            } else if (user.role === "customer") {
                navigate("/")
            }
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error(error.message || "unable to login user")
        }
    }, [isError])
    useEffect(() => {
        if (user) {
            if (user.role === "admin") {
                navigate("/admin")
            } else if (user.role === "customer")
                navigate("/cart")
        }


    }, [])
    return <>

        <div className='h-screen flex justify-center items-center'>
            <div className="card card-compact w-96  shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Login User</h2>
                    <form onSubmit={formik.handleSubmit}>


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
                            {
                                isLoading
                                    ?
                                    <div>
                                        <div className='loading loading-spinner'></div>
                                        <span>verifyin please wait</span>
                                    </div>
                                    : "login"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Login

// Authentication
//verify email
//verify password

//Autharization
// token
// token  generate