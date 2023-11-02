import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url('https://i.ibb.co/0BnGyk1/chris-barbalis-9ql-SGW-Lg-Ks-unsplash.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="p-4 flex items-center justify-between text-white">
        <div className="flex items-center">
          <img src="https://i.ibb.co/fkxjLWC/Car-Shop-Logo-Made-with-Poster-My-Wall.jpg" alt="Logo" className="h-10 w-12" />
          <h1 className="ml-2 text-2xl">AutoMOB</h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/products" className="hover:text-blue-400">Products</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/login" className="hover:text-blue-400">Login</Link>
          <Link to="/register" className="hover:text-blue-400">Register</Link>
        </div>
      </div>

      <div className="w-1/2 h-full p-8 mt-16 space-y-1">
        <h1 className="text-5xl font-bold text-white">Welcome to AutoMOB Showcase</h1>
        <p className="py-6 text-white text-xl">
          Step into a realm of innovation, performance, and style<br />as we showcase the most exceptional vehicles<br />on the market.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
