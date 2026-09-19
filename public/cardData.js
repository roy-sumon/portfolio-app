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
      description:
        "Building responsive, high-performance web applications using modern frameworks like React, Next.js, and Tailwind CSS.",
    },
    {
      id: 2,
      title: "UI / UX Design",
      icon: <FaLaptopCode />,
      description:
        "Crafting intuitive user interfaces and engaging experiences that harmoniously blend aesthetic design with seamless usability.",
    },
    {
      id: 3,
      title: "Full-Stack Applications",
      icon: <IoIosPhonePortrait />,
      description:
        "Developing end-to-end web and software solutions with robust frontends, scalable server logic, and clean APIs.",
    },
    {
      id: 4,
      title: "API Architecture",
      icon: <SiAmazonapigateway />,
      description:
        "Designing and integrating secure, scalable RESTful APIs with Node.js, Express, and modern database connectivity.",
    },
    {
      id: 5,
      title: "Database Management",
      icon: <MdOutlinePayment />,
      description:
        "Structuring and optimizing relational (MySQL, SQL) and NoSQL (MongoDB) databases for speed, reliability, and security.",
    },
    {
      id: 6,
      title: "Technical Mentorship",
      icon: <IoIosPeople />,
      description:
        "Passionate about sharing knowledge, collaborating in agile teams, and helping peers master modern software engineering practices.",
    },
  ],
};

export default cardData;
