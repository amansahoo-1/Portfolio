import { FaCertificate, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export const experienceData = [
  {
    title: "Graduate Trainee",
    company: "TATA Consultancy Services Ltd.",
    location: "Kolkata, India",
    description: [
      "Designed, Developed, and Maintained robust software applications, ensuring high performance and scalability.",
    ],
    date: "Jan 2026 - Present",
  },
  {
    title: "Fresher Software Developer",
    company: "Self-Employed",
    location: "Remote",
    description: [
      // "Designed and Developed web applications using modern technologies like Next.js, TypeScript, and Tailwind CSS.",
      // "Configured AWS services, such as EC2, S3, and Amplify, to streamline development and deployment processes.",
    ],
    date: "",
  },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/amansahoo-1",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amansahoo03/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:amansahoo4567@gmail.com",
    icon: MdMail,
  },
  {
    label: "Twitter",
    href: "https://x.com/amannn_11",
    icon: FaTwitter,
  },
] as const;

export const projects = [
  {
    title: "Diabetic Prediction System",
    description:
      "A web application that predicts the risk of diabetes using machine learning algorithms.",
    tags: [
      "JavaScript",
      "python + Flask",
      "Express.js + Node.js",
      "EJS",
      "Tailwind CSS",
    ],
    github: "https://github.com/amansahoo-1/Diabetic-Prediction",
    demo: "https://diabetic-prediction-system.vercel.app",
    icon: "🌟",
  },
  {
    title: "SwarnKart - Your jewelery-on-demand App",
    description:
      "A web application that provides a platform for renting various jewelry items.",
    tags: [
      "JavaScript",
      "TypeScript",
      "kotlin",
      "Express.js + Node.js",
      "Next.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/amansahoo-1/SwarnKart",
    demo: "https://swarnkart.vercel.app",
    icon: "🌟",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive portfolio website with modern animations, dark theme, and optimized performance built with Next.js.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"],
    github: "https://github.com/amansahoo-1/portfolio",
    demo: "",
    icon: "🌟",
  },
] as const;

export const certificates = [
  {
    id: 1,
    title: "Java Certificate",
    institution: "Internship Studio",
    duration: "Issued: June 2024",
    description:
      "Demonstrated proficiency in JAVA by completing foundational training and Project.",
    link: "https://drive.google.com/file/d/1pLObDRJFiL0BN_RZKRYDXCcyAcYwTkph/view?usp=sharing",
    icon: FaCertificate,
  },
  {
    id: 2,
    title: "Github Training",
    institution: "Great Learning",
    duration: "Issued: July 2024",
    description:
      "Completed comprehensive training on Github use-cases and best practices.",
    link: "https://drive.google.com/file/d/1Qbibdl37UjuzAHtA-ggPKf6gWlb2dMQa/view?usp=drive_link",
    icon: FaCertificate,
  },
  {
    id: 3,
    title: "Networking",
    institution: "Great Learning",
    duration: "Issued: July 2024",
    description: "Completed Learning Networking.",
    link: "https://drive.google.com/file/d/1ijkpQn7POV85p1azWdBHUGBn4ZSs7OX4/view?usp=drive_link",
    icon: FaCertificate,
  },
  {
    id: 4,
    title: "Webdev Internship",
    institution: "Eazy Byts",
    duration: "Issued: March 2024",
    description:
      "Completed Webdev Internship working with EazyByts with NEXT.js Tech.",
    link: "https://drive.google.com/file/d/1ZKsf6SiTicD-vd1kUQ0ypn1xxYgBvKj9/view?usp=drive_link",
    icon: FaCertificate,
  },
];

type EducationItem = {
  id: number;
  title: string;
  institution: string;
  duration: string;
  description: string;
};

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "Secondary Schooling",
    institution: "ST. John Mary Vianney English Medium School",
    duration: "2010 - 2020",
    description:
      "Pursuing comprehensive studies in Primary and Secondary education.",
  },
  {
    id: 2,
    title: "Higher Secondary School",
    institution: "Municipal College Rourkela",
    duration: "2020 - 2022",
    description:
      "Completed Science stream education with strong foundation in Physics, Chemistry, and Mathematics.",
  },
  {
    id: 3,
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Rourkela Institute of Management Studies",
    duration: "2022 - 2025",
    description:
      "Completed comprehensive studies in computer applications, software development, and information technology.",
  },
  {
    id: 4,
    title: "Master of Computer Applications (MCA)",
    institution: "Indira Gandhi Institute of Technology",
    duration: "2025 - 2027",
    description:
      "Completed Advanced studies in computer applications, software development, and information technology.",
  },
];
