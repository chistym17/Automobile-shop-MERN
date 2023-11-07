import BrandCard from "./BrandCard";
import './Brands.css'; // Import the CSS file

const brands = [
  {
    name: "Audi",
    image: "https://i.ibb.co/mb2XVjd/audi.webp"
  },
  {
    name: "BMW",
    image: "https://i.ibb.co/6gP0np6/bmw.webp"
  },
  {
    name: "Honda",
    image: "https://i.ibb.co/9rydXw6/hyundai.webp"
  },
  {
    name: "Mercedes",
    image: "https://i.ibb.co/M9FwR6Y/mercedes-benz.webp"
  },
  {
    name: "Land Rover",
    image: "https://i.ibb.co/m6RXkrk/land-rover.webp"
  },
  {
    name: "Toyota",
    image: "https://i.ibb.co/PzVW6BZ/toyota.webp"
  }
];

const Brands = () => {
 

  return (
    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
      {brands.map((brand, index) => (
        <BrandCard
          key={index}
          {...brand}
        />
      ))}
    </div>
  );
};

export default Brands;
