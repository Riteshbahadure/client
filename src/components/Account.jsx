import React, { useEffect } from 'react'
import { useCancelOrderMutation, useGetUsersOrdersQuery } from '../redux/apis/orderApi'
import { useSelector } from 'react-redux'
import { useLogoutMutation } from '../redux/apis/authApi'
import { toast } from 'react-toastify'

const Account = () => {
    const { user } = useSelector(state => state.auth)
    const { data } = useGetUsersOrdersQuery(user)
    const [logout] = useLogoutMutation()
    const [cancel, { isSuccess }] = useCancelOrderMutation()
    useEffect(() => {
        if (isSuccess) {
            toast.success("order cancel success")
        }
    }, [isSuccess])
    return <>
        {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
        {/* <h1>Account page</h1> */}
        <div className='bg-primary flex gap px20 items-center text-black'>
            <strong className='text-2xl'>{user && user.name} Account </strong>
            <button onClick={logout} className='btn btn-error my-3'>Logout</button>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>order Id</th>
                    <th>products</th>
                    <th>status</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    data && data.map(item => <tr key={item._id} className={`
                    ${item.status === "placed" && "bg-orange-400 text-black"}
                    ${item.status === "delivered" && "bg-green-300 text-black"}
                    ${item.status === "cancel" && "bg-red-300 text-black"}`}>

                        <td>{item._id} </td>
                        <td>{item.products.map(p => <div className='flex justify-between my-2'>
                            <strong>{p.name} {p.price} </strong>
                            <img src={`${import.meta.env.VITE_BACKEND_URL}/${p.image}`} height={50} width={50} alt="" />
                        </div>)} </td>
                        <td>{item.status} </td>
                        <td>
                            {item.status === "placed" && <button className="btn btn-outline btn-error" onClick={e => cancel(item)}>cancel</button>}
                            {item.status === "cancel" && <strong className="text-red-600">cancel</strong>}

                            {item.status === "delivered" && <strong className="text-green-600">cancel</strong>}

                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Account