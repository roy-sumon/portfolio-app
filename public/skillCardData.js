import Image from 'next/image';

const skillCardData = {
    cards: [
        {
            id: 1,
            title: "JavaScript",
            icon: <Image src="/skill_icons/js.png" alt="JavaScript Icon" width={50} height={50} />,
        },
        {
            id: 2,
            title: "React JS",
            icon: <Image src="/skill_icons/react.png" alt="React JS Icon" width={50} height={50} />,
        },
        {
            id: 3,
            title: "Next JS",
            icon: <Image src="/skill_icons/nextjs.png" alt="Next JS Icon" width={50} height={50} />, // Add appropriate image
        },
        {
            id: 4,
            title: "TypeScript",
            icon: <Image src="/skill_icons/typescript.svg" alt="TypeScript Icon" width={50} height={50} />, // Add appropriate image
        },
        {
            id: 5,
            title: "Node JS",
            icon: <Image src="/skill_icons/nodejs.png" alt="Node JS Icon" width={50} height={50} />, // Add appropriate image
        },
        {
            id: 6,
            title: "Express JS",
            icon: <Image src="/skill_icons/express.png" alt="Express JS Icon" width={50} height={50} />, // Add appropriate image
        },
        {
            id: 7,
            title: "Java",
            icon: <Image src="/skill_icons/java.png" alt="Java Icon" width={60} height={60} />, // Add appropriate image
        },
        {
            id: 8,
            title: "C / C++",
            icon: <Image src="/skill_icons/c++.png" alt="C/C++ Icon" width={50} height={50} />, // Add appropriate image
        },
        {
            id: 9,
            title: "Python",
            icon: <Image src="/skill_icons/python.png" alt="Python Icon" width={50} height={50} />, // Add appropriate image
        },
        {
            id: 10,
            title: "CSS",
            icon: <Image src="/skill_icons/css.png" alt="CSS Icon" width={50} height={50} />, // Add appropriate image
        },
        {
            id: 11,
            title: "Tailwind CSS",
            icon: <Image src="/skill_icons/tailwind.png" alt="Tailwind CSS Icon" width={50} height={50} />, // Add appropriate image
        },
        {
            id: 12,
            title: "Bootstrap",
            icon: <Image src="/skill_icons/bootstrap.png" alt="Bootstrap Icon" width={50} height={50} />, // Add appropriate image
        },
        {
            id: 13,
            title: "SQL",
            icon: <Image src="/skill_icons/sql.png" alt="SQL Icon" width={60} height={60} />, // Add appropriate image
        },
        {
            id: 14,
            title: "Figma",
            icon: <Image src="/skill_icons/figma.png" alt="Figma Icon" width={50} height={50} />, // Add appropriate image
        },
        {
            id: 15,
            title: "Git & GitHub",
            icon: <Image src="/skill_icons/github.svg" alt="Git & GitHub Icon" width={50} height={50} />, // Add appropriate image
        }
    ]
};

export default skillCardData;
