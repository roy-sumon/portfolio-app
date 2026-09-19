import Image from 'next/image';

const skillCardData = {
  cards: [
    {
      id: 1,
      title: "JavaScript",
      category: "Frontend",
      icon: <Image src="/skill_icons/js.png" alt="JavaScript Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 2,
      title: "React JS",
      category: "Frontend",
      icon: <Image src="/skill_icons/react.png" alt="React JS Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 3,
      title: "Next JS",
      category: "Frontend",
      icon: <Image src="/skill_icons/nextjs.png" alt="Next JS Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 4,
      title: "TypeScript",
      category: "Frontend",
      icon: <Image src="/skill_icons/typescript.svg" alt="TypeScript Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 5,
      title: "Tailwind CSS",
      category: "Frontend",
      icon: <Image src="/skill_icons/tailwind.png" alt="Tailwind CSS Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 6,
      title: "CSS3",
      category: "Frontend",
      icon: <Image src="/skill_icons/css.png" alt="CSS Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 7,
      title: "Bootstrap",
      category: "Frontend",
      icon: <Image src="/skill_icons/bootstrap.png" alt="Bootstrap Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 8,
      title: "Node JS",
      category: "Backend",
      icon: <Image src="/skill_icons/nodejs.png" alt="Node JS Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 9,
      title: "Express JS",
      category: "Backend",
      icon: <Image src="/skill_icons/express.png" alt="Express JS Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 10,
      title: "SQL & Databases",
      category: "Backend",
      icon: <Image src="/skill_icons/sql.png" alt="SQL Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 11,
      title: "Java",
      category: "Languages",
      icon: <Image src="/skill_icons/java.png" alt="Java Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 12,
      title: "C / C++",
      category: "Languages",
      icon: <Image src="/skill_icons/c++.png" alt="C/C++ Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 13,
      title: "Python",
      category: "Languages",
      icon: <Image src="/skill_icons/python.png" alt="Python Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 14,
      title: "Git & GitHub",
      category: "Tools",
      icon: <Image src="/skill_icons/github.svg" alt="Git & GitHub Icon" width={44} height={44} className="object-contain" />,
    },
    {
      id: 15,
      title: "Figma",
      category: "Tools",
      icon: <Image src="/skill_icons/figma.png" alt="Figma Icon" width={44} height={44} className="object-contain" />,
    },
  ],
};

export default skillCardData;
