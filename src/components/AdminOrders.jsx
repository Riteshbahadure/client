import React from 'react'
import { useGetAllOrdersQuery } from '../redux/apis/admin'

const AdminOrders = () => {
    const { data } = useGetAllOrdersQuery()

    return <>
        <table className='table'>
            <thead>
                <tr>
                    <th>name</th>
                    <th>desc</th>
                    <th>stock</th>
                    <th>price</th>
                    <th>image</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map(item => <tr>
                        <td>{item.name} </td>
                        <td>{item.desc} </td>
                        <td>{item.stock} </td>
                        <td>{item.price} </td>
                        <td>
                            <img src={`${import.meta.env.VITE_BACKEND_URL}/${item.image}`} alt="" />

                        </td>
                        <td>
                            <button className="btn btn-warning">edit</button>
                            <button className="btn btn-error">delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>


    </>
}

export default AdminOrders