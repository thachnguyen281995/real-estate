import React, { useState, useEffect, useContext } from "react";
import { RiWallet3Line,RiHome5Line,RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
const PropertyDropdown = () => {
  const {price, setPrice} = useContext(HouseContext);
 
  const [isOpen, setIsOpen] = useState(false);
  const prices = [
    {
      value:'100000 - 130000'
    },
    {
      value:'200000 - 530000'

    },
    {
      value:'300000 - 430000'

    }
  ]
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button className='dropdown-btn w-full text-left' onClick={() =>setIsOpen(!isOpen)}>
       <RiWallet3Line className="dropdown-icon-primary"/>
        <div>
            <div className="text-[15px] font-medium">{price}</div>
            <div className="text-[13px]">Choose range price</div>
         
        </div>
      {
                isOpen ? (
                    <RiArrowUpSLine className="dropdown-icon-secondary"/>
                ):(
                    <RiArrowDownSLine className="dropdown-icon-secondary"/>
                )
            }
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
      {prices.map((price,index) =>{
        return (
            <Menu.Item className="cursor-pointer hover:text-violet-700 transition" onClick={() =>setPrice(price.value)} as='li' key={index}>
                {price.value}
            </Menu.Item>
        )
      })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
