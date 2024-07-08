import React, { useEffect } from 'react'
// import { useAddProductMutation, useDeleteProductMutation, useGetAllProductsQuery, useUpdateProductMutation } from '../redux/apis/adminApi'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAddproductMutation, useDeleteProductMutation, useGetAllProuctsQuery, useUpdateProductMutation } from '../redux/apis/admin'

const AdminProduct = () => {
    const { data } = useGetAllProuctsQuery()

    const [addProduct, { isLoading: addLoading, isSuccess: addSuccess, }] = useAddproductMutation()
    const [updateProduct, { isLoading: updateLoading, isSuccess: updateSuccess, }] = useUpdateProductMutation()
    const [deleteProduct, { isLoading: deleteLoading, isSuccess: deleteSuccess, }] = useDeleteProductMutation()

    const formik = useFormik({
        initialValues: {
            name: "",
            desc: "",
            stock: "",
            price: "",
            thumb: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            desc: yup.string().required("Enter desc"),
            stock: yup.string().required("Enter stock"),
            price: yup.string().required("Enter price"),
            // thumb: yup.string().required("Enter thumb"),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            const fd = new FormData()
            fd.append("name", values.name)
            fd.append("desc", values.desc)
            fd.append("stock", values.stock)
            fd.append("price", values.price)
            fd.append("thumb", values.thumb)
            addProduct(fd)
            resetForm()
        }
    })

    useEffect(() => {
        if (addSuccess) {
            toast.success("Product Add Success")
            window.addModal.close()
        }
    }, [addSuccess])
    useEffect(() => {
        if (updateSuccess) {
            toast.success("Product Add Success")

        }
    }, [updateSuccess])
    useEffect(() => {
        if (deleteSuccess) {
            toast.success("Product Delete Success")
        }
    }, [deleteSuccess])
    return <div >
        <div className='text-right' >
            <button
                className='btn btn-primary'
                onClick={() => {
                    window.addModal.showModal()
                }}>+ Add Product

            </button>
        </div>

        <table className='table'>
            <thead>
                <tr>
                    <th>name</th>
                    <th>desc</th>
                    <th>price</th>
                    <th>stock</th>
                    <th>image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map(item => <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.desc}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        <td>
                            <img
                                height={50}
                                width={50}
                                src={`${import.meta.env.VITE_BACKEND_URL}/${item.image}`} alt="" />
                        </td>
                        <td>
                            <button className='btn btn-sm btn-warning' >Edit</button>
                            <button className='btn btn-sm btn-error' onClick={e =>deleteProduct(item._id)} >Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

        {/* add modal */}
        {/* <button className="btn" onClick={()=>window.addmodal.showModal()}>open modal</button> */}
        <dialog id="addModal" className="modal">
            <form method="dialog" className="modal-box" onSubmit={formik.handleSubmit}>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Add Product</h3>
                <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
                <input
                    {...formik.getFieldProps("name")}
                    type="text"
                    placeholder="Enter Product name"
                    className={`input my-2 input-bordered w-full ${formik.errors.name && formik.touched.name && "input-error"}`}
                />
                <input
                    {...formik.getFieldProps("desc")}
                    type="text"
                    placeholder="Enter Product desc"
                    className={`input my-2 input-bordered w-full ${formik.errors.desc && formik.touched.desc && "input-error"}`}
                />
                <input
                    {...formik.getFieldProps("stock")}
                    type="number"
                    placeholder="Enter Product stock"
                    className={`input my-2 input-bordered w-full ${formik.errors.stock && formik.touched.stock && "input-error"}`}
                />
                <input
                    {...formik.getFieldProps("price")}
                    type="number"
                    placeholder="Enter Product price"
                    className={`input my-2 input-bordered w-full ${formik.errors.price && formik.touched.price && "input-error"}`}
                />
                <input
                    onChange={e => formik.setFieldValue("thumb", e.currentTarget.files[0])}
                    // {...formik.getFieldProps("thumb")}
                    type="file"
                    placeholder="Enter Product Image"
                    className={`input my-2 input-bordered w-full ${formik.errors.thumb && formik.touched.thumb && "input-error"}`}
                />
                <button type="submit" class="btn btn-primary w-full">Add Product</button>
            </form>
        </dialog>

        {/* end modal */}
    </div>
}

export default AdminProduct