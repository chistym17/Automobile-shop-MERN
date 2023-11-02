import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Navbar from "../Navbar/Navbar";

const UpdateInfo = () => {

  const { _id,name, brandName, price, rating, Description } = useLoaderData()

  const navigate = useNavigate()

  const UpdateData = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const brandName = form.brandName.value
    const price = form.price.value
    const rating = form.rating.value
    const Description = form.shortDescription.value
    const product = { name, brandName, price, Description, rating }
    form.reset()
    fetch(`http:/localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(product),

    })

      .then(res => res.json())
      .then(data => {

        if (data.acknowledged)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product Info Updated',
            showConfirmButton: false,
            timer: 1500
          })
        navigate('/')

      })



  }





    return (
    <div>

<Navbar></Navbar>

  <div className="w-96 mx-auto p-4 bg-white rounded shadow mt-5">
        <h2 className="text-xl font-semibold mb-4">Update Details of: {name}</h2>
        <form onSubmit={UpdateData}>

          <div className="mb-3">
            <label htmlFor="name" className="block text-black-600">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="brandName" className="block text-gray-600">Brand Name</label>
            <input
              type="text"
              id="brandName"
              name="brandName"
              defaultValue={brandName}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="shortDescription" className="block text-gray-600">Short Description</label>
            <textarea
              id="shortDescription"
              name="shortDescription"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              defaultValue={Description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="block text-gray-600">Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              defaultValue={rating}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="block text-gray-600">Price</label>
            <input
              type="number"
              id="rating"
              name="price"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              defaultValue={price}
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600"
            >
              Update Details
            </button>
          </div>
        </form>

      </div>







</div>
    );
  };


export default UpdateInfo;