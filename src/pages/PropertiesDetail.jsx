import React from "react";
// import data
import { housesData } from "../data";
import { useParams } from "react-router";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";
const PropertiesDetail = () => {
  const { id } = useParams();
  // get the house based on the id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  console.log(house);
  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-semibold text-2xl">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:md-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-violet-600">
              ${house.price}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="" />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2">
                <BiBed className="text-2xl"/>
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2">
                <BiBath className="text-2xl"/>
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2">
                <BiArea className="text-2xl"/>
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-2 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" />
              </div>
              <div className="mt-4">
                <div className="font-bold text-lg">
                  {house.agent.name}
                </div>
                <Link to ='' className="text-violet-700 text-sm">
                  View Listings
                </Link>
              </div>
            </div>
            {/* form */}
            <form action="" className="flex flex-col gap-y-2" >
              <input type="text" className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm" placeholder="Name*"/>
              <input type="text" className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm" placeholder="Email*"/>
              <input type="text" className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm" placeholder="Phone*"/>
              <textarea className="border border-gray-300 outline-none rounded w-full resize-none focus:border-violet-700 p-4 h-36 text-sm text-gray-400" 
              placeholder="Message*"
              defaultValue="Hello I am interested in [Modern apartment]"
              ></textarea>
              <div className="flex gap-x-2">
                <button className="bg-violet-500 hover:bg-violet-700 text-sm rounded px-4 py-3 text-white w-full">Send message</button>
                <button className="border px-4 py-3 rounded w-full">Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesDetail;
