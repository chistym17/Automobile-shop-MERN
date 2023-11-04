
import { Link } from "react-router-dom";

const BrandCard = ({ name, image }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="border-blue-200 ">
        <Link to={`/brandPage/${name}`}>        <img src={image} alt={name} className=" " /></Link>
        <div className=" text-center">
          <div className="font-bold  ">{name}</div>

        </div>
      </div>
    </div>
  );
};

export default BrandCard;



