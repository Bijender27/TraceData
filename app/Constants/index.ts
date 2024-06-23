import { IconType } from "react-icons"
import animalCare from '../../public/animal-care.jpg'
import agriculture from '../../public/agriculture.jpg'
import banking from "../../public/banking.jpg";
import security from "../../public/security.jpg";
import oilGas from "../../public/oilGas.jpg";
import healthcare from "../../public/healthcare.jpg";
import media from "../../public/media.jpg";
import automotive from "../../public/automotive.jpg";
import shipping from "../../public/shipping.jpg";
import retail from "../../public/retail.jpg";
import education from "../../public/education.jpg";
import food from "../../public/food.jpg";
import construction from "../../public/construction.jpg";
import mining from "../../public/mining.jpg";
import technology from "../../public/technology.jpg";
import { BsTruck, BsBank } from "react-icons/bs";
import { FaCow, FaOilWell, FaUserDoctor } from "react-icons/fa6";
import {
  MdOutlineAgriculture,
  MdOutlineMovieFilter,
  MdOutlineFastfood,
} from "react-icons/md";
import {
  PiSecurityCamera,
  PiShoppingBagThin,
  PiBookOpenUserLight,
  PiDesktopTower,
} from "react-icons/pi";
import { BiSolidCarMechanic } from "react-icons/bi";
import { LuConstruction } from "react-icons/lu";
import { GiMining } from "react-icons/gi"


type CategoryDataType = {
  i: IconType,
  name:string,
  url:string,
  imgUrl:string

};

export const CategoryData: CategoryDataType[] = [
  {
    i: MdOutlineAgriculture,
    name: "Agriculture",
    url: "",
    imgUrl: `${agriculture.src}`,
  },
  {
    i: FaCow,
    name: "Animal Health",
    url: "",
    imgUrl: `${animalCare.src}`,
  },
  {
    i: BsBank,
    name: "BFSI",
    url: "",
    imgUrl: `${banking.src}`,
  },
  {
    i: PiSecurityCamera,
    name: "Security",
    url: "",
    imgUrl: `${security.src}`,
  },
  {
    i: FaOilWell,
    name: "Oil and Gas",
    url: "",
    imgUrl: `${oilGas.src}`,
  },
  {
    i: FaUserDoctor,
    name: "Healthcare",
    url: "",
    imgUrl: `${healthcare.src}`,
  },
  {
    i: MdOutlineMovieFilter,
    name: "Media & Entertainment",
    url: "",
    imgUrl: `${media.src}`,
  },
  {
    i: BiSolidCarMechanic,
    name: "Automotive and Automotive Components",
    url: "",
    imgUrl: `${automotive.src}`,
  },
  {
    i: BsTruck,
    name: "Logistics and Shipping",
    url: "",
    imgUrl: `${shipping.src}`,
  },
  {
    i: PiShoppingBagThin,
    name: "Retail and Consumer Goods",
    url: "",
    imgUrl: `${retail.src}`,
  },
  {
    i: PiBookOpenUserLight,
    name: "Education",
    url: "",
    imgUrl: `${education.src}`,
  },
  {
    i: MdOutlineFastfood,
    name: "Food and Beverage",
    url: "",
    imgUrl: `${food.src}`,
  },
  {
    i: LuConstruction,
    name: "Manufacturing and Construction",
    url: "",
    imgUrl: `${construction.src}`,
  },
  {
    i: GiMining,
    name: "Chemicals and Mining",
    url: "",
    imgUrl: `${mining.src}`,
  },
  {
    i: PiDesktopTower,
    name: "Technology, Media and Telecom",
    url: "",
    imgUrl: `${technology.src}`,
  },
];