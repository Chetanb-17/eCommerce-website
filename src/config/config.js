import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Chetan Biradar",
    role: "Frontend Developer",
    description: "I am a frontend developer",
    imageUrl:
      "	https://avatars.githubusercontent.com/u/151716204?…00&u=9aa810109a13dc6a0c80476111d8e2d496bc19f9&v=4",
  },
  {
    name: "Navya MK",
    role: "Frontend Developer",
    description: "I am a frontend developer",
    imageUrl: " ",
  },

  // More people...
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Men", href: "#" },
  { name: "Women", href: "#" },
  { name: "Kids", href: "#" },
  { name: "Home & Living", href: "/about" },
  { name: "Beauty", href: "#" },
];

const data = {
  Men: [
    {
      name: "T shirt",
      href: "/dashboard",
    },
    {
      name: "Casual Shirts",
      href: "#",
    },
    {
      name: "Formal Shirts",
      href: "#",
    },
    {
      name: "Sweatshirts",
      href: "#",
    },
    {
      name: "Jackets",
      href: "#",
    },
    {
      name: "Blazers & Coats",
      href: "#",
    },
    {
      name: "Suits",
      href: "#",
    },
    {
      name: "Rain Jackets",
      href: "#",
    },
  ],
  Women: [
    {
      name: "Women's Solution 1",
      description: "Description for Women 1",
      href: "#",
      icon: SquaresPlusIcon,
    },
    {
      name: "Women's Solution 2",
      description: "Description for Women 2",
      href: "#",
      icon: SquaresPlusIcon,
    },
  ],
  Kids: [
    {
      name: "Kids' Solution 1",
      description: "Description for Kids 1",
      href: "#",
      icon: SquaresPlusIcon,
    },
    {
      name: "Kids' Solution 2",
      description: "Description for Kids 2",
      href: "#",
      icon: SquaresPlusIcon,
    },
  ],
  "Home & Living": [
    {
      name: "Home & Living Solution 1",
      description: "Description for Home & Living 1",
      href: "#",
      icon: SquaresPlusIcon,
    },
    {
      name: "Home & Living Solution 2",
      description: "Description for Home & Living 2",
      href: "#",
      icon: SquaresPlusIcon,
    },
  ],
  Beauty: [
    {
      name: "Beauty Solution 1",
      description: "Description for Beauty 1",
      href: "#",
      icon: SquaresPlusIcon,
    },
    {
      name: "Beauty Solution 2",
      description: "Description for Beauty 2",
      href: "#",
      icon: SquaresPlusIcon,
    },
  ],
};

export { people, navigation, data };
