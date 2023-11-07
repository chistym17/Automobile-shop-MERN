
const Featured = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10 mb-2 space-y-5">
             <h1 className="text-center font-bold text-4xl"><span className="text-green-500">Featured</span> Products</h1>
            <div className="flex justify-center items-center">
                <div><img src="https://i.ibb.co/P5HBSJb/f2.webp" alt="" /></div>
                <div>
                <h1 className="font-semibold text-4xl">Mercedes-Z-Benz</h1>
                <p>The Mercedes-Z-Benz is a full-size luxury SUV offering a spacious and premium interior,</p>



               </div>


            </div>

           <div className="flex justify-center items-center flex-row-reverse ">;
             <div><img src="https://i.ibb.co/z7Qdt5t/f3.webp" alt="" /></div>
            <div>
               <h1 className="font-semibold text-4xl">Audi A3</h1>
              <p className="mt-2">The Audi A3 is a compact luxury sedan with a focus on performance and advanced technology</p>
           </div>



          </div>



        </div>
    );
};

export default Featured;