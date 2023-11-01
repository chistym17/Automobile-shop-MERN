import { Link } from "react-router-dom";

const BrandProdDEetail = ({ product }) => {
    const {  name, image } = product




    return (
        <div className="max-w-5xl mx-auto mt-10 h-[100vh]">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="h-[600px]">
                    <img src={image} alt="Album" className="object-cover" />
                </figure>
                <div className="card-body flex items-center justify-center">
                    <h2 className="card-title text-2xl font-semibold">{name}</h2>
                    <div className="card-actions">
                        <Link to={`/${name}`}>

                            <button
                                className="w-full mt-5 bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600" >
                                See Details
                            </button>
                        </Link>

                            <Link to={`/update/${name}`}>

                                <button
                                    className="w-full mt-5 bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600" >
                                    Update Details
                                </button>

                            </Link>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProdDEetail;