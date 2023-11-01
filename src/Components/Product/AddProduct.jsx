
const AddProduct = () => {
 

 

  const handleSubmit = (e) => {
    e.preventDefault();
     const form=e.target
    const name=form.name.value
    const brandName=form.brandName.value
    const price=form.price.value
    const rating=form.rating.value
    const image=form.image.value
    const Description=form.shortDescription.value
    const product={name,brandName,price,Description,rating,image}
form.reset()
fetch('http://localhost:5000/addProduct',{

   method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },

  body: JSON.stringify(product),

})

.then(res=>res.json())
.then(data=>console.log(data))
  };

  return (
    <div className="w-96 mx-auto p-4 bg-white rounded shadow mt-5">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-600">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
      
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="block text-gray-600">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
      
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
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="block text-gray-600">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="block text-gray-600">Price</label>
          <input
            type="number"
            id="rating"
            name="price"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
