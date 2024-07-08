import React, { useEffect, useState } from 'react'
// import { useGetAllUsersQuery } from '../redux/apis/authApi'
import { useAddUserMutation, useDeleteUserMutation, useGetUsersQuery, useUpdateUserMutation } from '../redux/apis/admin'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as yup from 'yup'

const AdminUsers = () => {
    const [selectedUser, setSelectedUser] = useState({})
    const formik = useFormik({
        initialValues: {
            name: selectedUser.name,
            email: selectedUser.email,
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            email: yup.string().required("Enter Email"),
        }),
        onSubmit: (values, { resetForm }) => {
            updateUser({ ...values, _id: selectedUser._id })
            resetForm()
        }
    })
    const { data } = useGetUsersQuery()
    const [addUser, { isSuccess: addUserSuccess, isError: isAddError, error: AddError }] = useAddUserMutation()
    const [updateUser, { isSuccess: updateUserSuccess, isError: isupdateError, error: updateError }] = useUpdateUserMutation()
    const [deleteUser, { isSuccess: deleteUserSuccess, isError: isdeleteAddError, error: deleteError }] = useDeleteUserMutation()

    useEffect(() => {
        if (deleteUserSuccess) {
            toast.error("User Delegte Success")
        }
    }, [deleteUserSuccess])
    useEffect(() => {
        if (updateUserSuccess) {
            toast.warn("User update Success")
            window.editModal.close()
        }
    }, [updateUserSuccess])
    // useEffect(() => {
    //     if (addUserSuccess) {
    //         toast.success("User add Success")

    //     }
    // }, [addUserSuccess])

    return <>
        <div className='text-right my-4'>
            <button className="btn btn-primary">+Add User</button>
        </div>
        <div className='overflow-x-auto'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(item => <tr key={item._id}>
                            <td>{item.name} </td>
                            <td>{item.email} </td>
                            <td>{item.role} </td>
                            <td>
                                <button onClick={() => {
                                    setSelectedUser(item)
                                    window.editModal.showModal()
                                }} type="button" class="btn btn-warning">Edit</button>

                                <button onClick={e => deleteUser(item._id)} type="button" class="btn btn-error">Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

        {/* {edit model start} */}
        <button className="btn" onClick={() => window.editmodal.showModal()}>open modal</button>
        <dialog id="editmodal" className="modal">
            <form method="dialog" className="modal-box" onSubmit={formik.handleChange}>
                <input
                    {...formik.getFieldProps("name")}
                    type="text"
                    placeholder="Type here"
                    className={`input my-2 input-bordered w-full ${formik.errors.name && formik.touched.name && "input-error"}`}
                />

                <input
                    {...formik.getFieldProps}
                    type="email"
                    placeholder="Type here"
                    className={`input my-2 input-bordered w-full ${formik.errors.email && formik.touched.email && "input-error"}`}
                />
                <button
                    type=''
                    className="btn btn-outline btn-primary">Update User</button>
            </form>
        </dialog>
        {/* {edit model end} */}

    </>
}

export default AdminUsers

// multer crud
// product crud
// img upload fronend to backend