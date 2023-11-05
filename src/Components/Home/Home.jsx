import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
<div>
 <div className="h-[100vh]">

       {/* <Navbar></Navbar> */}

<div className=""><Banner></Banner></div>


</div>
<div className="max-w-7xl mx-auto ">

<h1 className="text-4xl font-semibold text-center mt-20 mb-5">Meet Our Brands</h1>
<Brands></Brands>

</div>
<Featured></Featured>
<div className="mt-10"><Footer></Footer></div>

</div>
    );
};

export default Home;