
import { Link } from "react-router-dom";

const BrandCard = ({ name, image }) => {
  return (
    <div>
      <div className="w-[300px] rounded-xl shadow-lg ml-4">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{name}</div>
       <Link to={`/brandPage/${name}`}><button className="btn btn-primary mt-2 ml-14"> See products</button></Link>

        </div>
      </div>
    </div>
  );
};

export default BrandCard;



