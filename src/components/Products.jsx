import React from 'react'

const Products = () => {
  return <div className='bg-white'>
    <div className='flex justify-between ' >
      <div>
        <h1 className='font-extrabold text-black'>Products</h1>
        <h6 className='text-black'>dashboard <span className='text-gray-400'> / Product</span></h6>
      </div>

      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-success" onClick={() => document.getElementById('my_modal_4').showModal()}>Add Product</button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-full  max-w-5xl">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

    </div>

    <div className="container">
      <div className="row">
        <div className="col-sm-3 offset-sm-3">
          <div class="card">

            <div class="card-header">
              <div className='flex justify-between' >
                <input type="text" placeholder="Searce Product" className="input input-bordered input-accent w-full max-w-xs" />

                <select className="select select-accent w-full max-w-xs">
                  <option disabled selected>status</option>
                  <option>Active</option>
                  <option> Deactive</option>
                  <option> Draft</option>
                </select>
              </div>

              <div class="card-body">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead className='table-border  '>
                      <tr className='bg-gray-00'>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Create At</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr className='hover:bg-gray-100'>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>

                          <img height={50} width={50} src="https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg" alt="" />

                        </td>
                        <td>Haldiram's shev Bhujya</td>
                        <td>Snack & Munchies</td>
                        <th><div className="badge badge-accent bg-green-500">Active</div></th>
                        <td>$18.00</td>
                        <td>24 NOV 2022</td>
                      </tr>
                      {/* row 2 */}
                      <tr className='hover:bg-gray-100'>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>

                          <img height={50} width={50} src="https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg" alt="" />

                        </td>
                        <td>NutriChoice Digestive</td>
                        <td>Bakery & Biscuits</td>
                        <th>
                          <div className="badge badge-accent bg-green-500">Active</div>
                        </th>
                        <td>$24.00</td>
                        <td>20 NOV 2022</td>
                      </tr>
                      {/* row 3 */}
                      <tr className='hover:bg-gray-100'>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>

                          <img height={50} width={50} src="https://freshcart.codescandy.com/assets/images/products/product-img-3.jpg" alt="" />

                        </td>
                        <td> Cadbury 5 Star Chocolate</td>
                        <td>Snack & Munchies</td>
                        <th>
                          <div className="badge badge-accent bg-green-500">Active</div>
                        </th>
                        <td>$3.00</td>
                        <td>14 NOV 2022</td>
                      </tr>
                      {/* row 4 */}
                      <tr className='hover:bg-gray-100'>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>

                          <img height={50} width={50} src="https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg" alt="" />

                        </td>
                        <td>Onion Flavour Potato</td>
                        <td>Snack & Munchies</td>
                        <th>
                          <div className="badge badge-accent bg-yellow-300">Draft</div>
                        </th>
                        <td>$13.00</td>
                        <td>08 NOV 2022</td>
                      </tr>
                      {/* row 5 */}
                      <tr className='hover:bg-gray-100'>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>

                          <img height={50} width={50} src="https://freshcart.codescandy.com/assets/images/products/product-img-5.jpg" alt="" />

                        </td>
                        <td>Salted Instant Popcorn</td>
                        <td>Instant Food</td>
                        <th>
                          <div className="badge badge-accent bg-green-500">Active</div>
                        </th>
                        <td>$9.00</td>
                        <td>09 NOV 2022</td>
                      </tr>
                      {/* row 6 */}
                      <tr className='hover:bg-gray-100'>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>

                          <img height={50} width={50} src="https://freshcart.codescandy.com/assets/images/products/product-img-6.jpg" alt="" />

                        </td>
                        <td>Blueberry Greek Yogurt </td>
                        <td>Dairy, Bread & Eggs</td>
                        <th>
                          <div className="badge badge-accent bg-green-500">Active</div>
                        </th>
                        <td>$11.00</td>
                        <td>02 NOV 2022</td>
                      </tr>
                      {/* row 7 */}
                      <tr className='hover:bg-gray-100'>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>

                          <img height={50} width={50} src="https://freshcart.codescandy.com/assets/images/products/product-img-7.jpg" alt="" />

                        </td>
                        <td>Britannia Cheese Slices</td>
                        <td>Dairy, Bread & Eggs</td>
                        <th>
                          <div className="badge badge-accent bg-green-500">Active</div>
                        </th>
                        <td>$24.00</td>
                        <td>15 OCT 2022</td>
                      </tr>
                      {/* row 8 */}
                      <tr className='hover:bg-gray-100'>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>

                          <img height={50} width={50} src="https://freshcart.codescandy.com/assets/images/products/product-img-8.jpg" alt="" />

                        </td>
                        <td>Blueberry Greek Yogurt</td>
                        <td>Instant Food</td>
                        <th>
                          <div className="badge badge-accent bg-green-500">Active</div>
                        </th>
                        <td>$12.00</td>
                        <td>24 OCT 2022</td>
                      </tr>
                      {/* row 9 */}
                      <tr className='hover:bg-gray-100'>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>

                          <img height={50} width={50} src="https://freshcart.codescandy.com/assets/images/products/product-img-9.jpg" alt="" />

                        </td>
                        <td>Slurrp Millet Chocolate </td>
                        <td>Instant Food</td>
                        <th>
                          <div className="badge badge-accent bg-green-500">Active</div>
                        </th>
                        <td>$8.00</td>
                        <td>08 NOV 2022</td>
                      </tr>
                      {/* row 10 */}
                      <tr className='hover:bg-gray-100'>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>

                          <img height={50} width={50} src="https://freshcart.codescandy.com/assets/images/products/product-img-10.jpg" alt="" />

                        </td>
                        <td>Amul Butter - 500 g </td>
                        <td>Instant Food</td>
                        <td>
                          <div className="badge badge-accent bg-green-500">Active</div>
                        </td>
                        <td>$8.00</td>
                        <td>09 OCT 2022</td>
                      </tr>
                    </tbody>
                    {/* foot
            <tfoot>
              <tr >
              
                <th>Showing 1 to 8 of 12 entries</th>
                <th className=''>
                    <button className="btn btn-primary">1</button>
                    <button className="btn btn-primary">2</button>
                    <button className="btn btn-primary">3</button>
                </th>
            
              </tr>
            </tfoot> */}

                  </table>
                </div>
              </div>

              <div class="card-footer">
                <div className='flex  justify-between'>
                  <div>
                    <h1>Showing 1 to 8 of 12 entries</h1>
                  </div>
                  <div>

                    <button className="btn btn-success bg-green-600">1</button>
                    <button className="btn btn-success">2</button>
                    <button className="btn btn-white hover:bg-green-600">3</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
}

export default Products