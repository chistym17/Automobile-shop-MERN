
const CartItem = ({item}) => {
const {name,image}=item
    return (
       <div className="card w-128 bg-base-100 shadow-xl">
  <figure className=" px-10 pt-10 ">
    <img src={image} alt="Shoes" className="rounded-xl h-[300px] object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions">
      <button className="btn btn-primary">Remove Product</button>
    </div>
  </div>
</div>
    );
};

export default CartItem;