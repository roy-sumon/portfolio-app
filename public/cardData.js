// data/cardData.js
import { CiGlobe } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { SiAmazonapigateway } from "react-icons/si";
import { MdOutlinePayment } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

const cardData = {
    cards: [
      {
        id: 1,
        title: "Web Development",
        icon: <CiGlobe />,
        description: "Modern and mobile ready website that will help you reach all of your marketing."
        
      },
      {
        id: 2,
        title: "UX / UI Desige",
        icon: <FaLaptopCode />,
        description: "Create intutive interfaces and delightful user experiences by blending asethetics with usability."
      },
      {
        id: 3,
        title: "App Development",
        icon: <IoIosPhonePortrait />,
        description: "Modern and mobile ready application that will help you reach all of your marketing."
      },
      {
        id: 4,
        title: "API Integration",
        icon: <SiAmazonapigateway />,
        description: "Developing a highly secure, fast and scalable APIs both REST and GraphQL."
      },
      {
        id: 5,
        title: "Payment Integration",
        icon: <MdOutlinePayment />,
        description: "Automate the process of payments to allow users pay right on your platform."
      },
      {
        id: 6,
        title: "Mentorship",
        icon: <IoIosPeople />,
        description: "Finds great joy in sharing my knowledge with others. As a technical mentor this allows me to give to the community."
      }
    ]
  };
  
  export default cardData;
  