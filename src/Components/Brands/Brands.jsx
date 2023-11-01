import Marquee from "react-fast-marquee";
import BrandCard from "./BrandCard";

const brands = [
  {
    name: "Ford",
    image: "https://i.ibb.co/j304VGq/robin-mathlener-qd-Qt-Hp1v-Wt-I-unsplash.jpg"
  },
  {
    name: "BMW",
    image: "https://i.ibb.co/T0zS9RN/philippe-oursel-Zopo-Sy-TT-GM-unsplash.jpg"
  },
  {
    name: "Honda",
    image: "https://i.ibb.co/vmMr8PD/hiroshi-tsubono-5-BTq-L1-K6-Uc-I-unsplash.jpg"
  },
  {
    name: "Mercedes",
    image: "https://i.ibb.co/rkc5zsq/doruk-bayram-gs3duh5iqkw-unsplash.jpg"
  },
  {
    name: "Tesla ",
    image: "https://i.ibb.co/W07cWRN/chandler-cruttenden-CUJj-R4-J-Bl-M-unsplash.jpg"
  },
  {
    name: "Toyota ",
    image: "https://i.ibb.co/ZX741rM/alexander-shatov-Cys3-W7-MXDU-unsplash.jpg"
  }
];

const Brands = () => (
 <Marquee>

 <div className="flex ">
    {brands.map((brand, index) => (

<BrandCard key={index} {...brand} />

    ))}
  </div>

</Marquee>
);
export default Brands;
