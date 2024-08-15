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
      name: "Topwear",
      subcategories: [
        { name: "T-Shirts", href: "/dashboard" },
        { name: "Casual Shirts", href: "#" },
        { name: "Formal Shirts", href: "#" },
        { name: "Sweatshirts", href: "#" },
        { name: "Sweaters", href: "#" },
        { name: "Jackets", href: "#" },
        { name: "Blazers & Coats", href: "#" },
        { name: "Suits", href: "#" },
        { name: "Rain Jackets", href: "#" },
      ],
    },
    {
      name: "Indian & Festive Wear",
      subcategories: [
        { name: "Kurtas & Kurta Sets", href: "#" },
        { name: "Sherwanis", href: "#" },
        { name: "Nehru Jackets", href: "#" },
        { name: "Dhotis", href: "#" },
      ],
    },
    {
      name: "Bottomwear",
      subcategories: [
        { name: "Jeans", href: "#" },
        { name: "Casual Trousers", href: "#" },
        { name: "Formal Trousers", href: "#" },
        { name: "Shorts", href: "#" },
        { name: "Track Pants & Joggers", href: "#" },
      ],
    },
    {
      name: "Innerwear & Sleepwear",
      subcategories: [
        { name: "Briefs & Trunks", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Vests", href: "#" },
        { name: "Sleepwear & Loungewear", href: "#" },
        { name: "Thermals", href: "#" },
      ],
    },

    {
      name: "Footwear",
      subcategories: [
        { name: "Casual Shoes", href: "#" },
        { name: "Sports Shoes", href: "#" },
        { name: "Formal Shoes", href: "#" },
        { name: "Sneakers", href: "#" },
        { name: "Sandals & Floaters", href: "#" },
        { name: "Flip Flops", href: "#" },
        { name: "Socks", href: "#" },
      ],
    },
    {
      name: "Fashion Accessories",
      subcategories: [
        { name: "Wallets", href: "#" },
        { name: "Belts", href: "#" },
        { name: "Perfumes & Body Mists", href: "#" },
        { name: "Trimmers", href: "#" },
        { name: "Deodorants", href: "#" },
        { name: "Ties, Cufflinks & Pocket Squares", href: "#" },
        { name: "Accessory Gift Sets", href: "#" },
        { name: "Caps & Hats", href: "#" },
        { name: "Mufflers, Scarves & Gloves", href: "#" },
        { name: "Phone Cases", href: "#" },
        { name: "Rings & Wristwear", href: "#" },
        { name: "Helmets", href: "#" },
      ],
    },
    {
      name: "Personal Care & Grooming",
      subcategories: [
        { name: "Sunglasses & Frames", href: "#" },
        { name: "Watches", href: "#" },
      ],
    },
    {
      name: "Sports & Active Wear",
      subcategories: [
        { name: "Sports Shoes", href: "#" },
        { name: "Sports Sandals", href: "#" },
        { name: "Active T-Shirts", href: "#" },
        { name: "Track Pants & Shorts", href: "#" },
        { name: "Tracksuits", href: "#" },
        { name: "Jackets & Sweatshirts", href: "#" },
        { name: "Sports Accessories", href: "#" },
        { name: "Swimwear", href: "#" },
      ],
    },
    {
      name: "Gadgets",
      subcategories: [
        { name: "Smart Wearables", href: "#" },
        { name: "Fitness Gadgets", href: "#" },
        { name: "Headphones", href: "#" },
        { name: "Speakers", href: "#" },
      ],
    },

    {
      name: "Bags & Backpacks",
      subcategories: [
        { name: "Bags & Backpacks", href: "#" },
        { name: "Luggages & Trolleys", href: "#" },
      ],
    },
  ],

  Women: [
    {
      name: "Indian & Fusion Wear",
      href: "#",
      subcategories: [
        { name: "Kurtas & Suits", href: "#" },
        { name: "Kurtis, Tunics & Tops", href: "#" },
        { name: "Sarees", href: "#" },
        { name: "Ethnic Wear", href: "#" },
        { name: "Leggings, Salwars & Churidars", href: "#" },
        { name: "Skirts & Palazzos", href: "#" },
        { name: "Dress Materials", href: "#" },
        { name: "Lehenga Cholis", href: "#" },
        { name: "Dupattas & Shawls", href: "#" },
        { name: "Jackets", href: "#" },
        { name: "Belts, Scarves & More", href: "#" },
        { name: "Watches & Wearables", href: "#" },
      ],
    },
    {
      name: "Western Wear",
      href: "#",
      subcategories: [
        { name: "Dresses", href: "#" },
        { name: "Tops", href: "#" },
        { name: "Tshirts", href: "#" },
        { name: "Jeans", href: "#" },
        { name: "Trousers & Capris", href: "#" },
        { name: "Shorts & Skirts", href: "#" },
        { name: "Co-ords", href: "#" },
        { name: "Playsuits", href: "#" },
        { name: "Jumpsuits", href: "#" },
        { name: "Shrugs", href: "#" },
        { name: "Sweaters & Sweatshirts", href: "#" },
        { name: "Jackets & Coats", href: "#" },
        { name: "Blazers & Waistcoats", href: "#" },
      ],
    },

    {
      name: "Footwear",
      href: "#",
      subcategories: [
        { name: "Flats", href: "#" },
        { name: "Casual Shoes", href: "#" },
        { name: "Heels", href: "#" },
        { name: "Boots", href: "#" },
        { name: "Sports Shoes & Floaters", href: "#" },
      ],
    },
    {
      name: "Sports & Active Wear",
      href: "#",
      subcategories: [
        { name: "Clothing", href: "#" },
        { name: "Footwear", href: "#" },
        { name: "Sports Accessories", href: "#" },
        { name: "Sports Equipment", href: "#" },
      ],
    },
    {
      name: "Lingerie & Sleepwear",
      href: "#",
      subcategories: [
        { name: "Bra", href: "#" },
        { name: "Briefs", href: "#" },
        { name: "Shapewear", href: "#" },
        { name: "Sleepwear & Loungewear", href: "#" },
        { name: "Swimwear", href: "#" },
        { name: "Camisoles & Thermals", href: "#" },
      ],
    },
    {
      name: "Beauty & Personal Care",
      href: "#",
      subcategories: [
        { name: "Makeup", href: "#" },
        { name: "Skincare", href: "#" },
        { name: "Premium Beauty", href: "#" },
        { name: "Lipsticks", href: "#" },
        { name: "Fragrances", href: "#" },
      ],
    },
    {
      name: "Gadgets",
      href: "#",
      subcategories: [
        { name: "Smart Wearables", href: "#" },
        { name: "Fitness Gadgets", href: "#" },
        { name: "Headphones", href: "#" },
        { name: "Speakers", href: "#" },
      ],
    },
    {
      name: "Jewellery",
      href: "#",
      subcategories: [
        { name: "Fashion Jewellery", href: "#" },
        { name: "Fine Jewellery", href: "#" },
        { name: "Earrings", href: "#" },
      ],
    },
    {
      name: "Backpacks",
      href: "#",
    },
    {
      name: "Handbags, Bags & Wallets",
      href: "#",
    },
    {
      name: "Luggages & Trolleys",
      href: "#",
    },
    {
      name: "Maternity",
      href: "#",
    },
    {
      name: "Sunglasses & Frames",
      href: "#",
    },
  ],

  Kids: [
    {
      name: "Clothing",
      subcategories: [
        { name: "T-Shirts", href: "#" },
        { name: "Shirts", href: "#" },
        { name: "Shorts", href: "#" },
        { name: "Jeans", href: "#" },
        { name: "Trousers", href: "#" },
        { name: "Clothing Sets", href: "#" },
        { name: "Ethnic Wear", href: "#" },
        { name: "Track Pants & Pyjamas", href: "#" },
        { name: "Jacket, Sweater & Sweatshirts", href: "#" },
        { name: "Party Wear", href: "#" },
        { name: "Innerwear & Thermals", href: "#" },
        { name: "Nightwear & Loungewear", href: "#" },
        { name: "Value Packs", href: "#" },
      ],
    },

    {
      name: "Clothing",
      subcategories: [
        { name: "Dresses", href: "#" },
        { name: "Tops", href: "#" },
        { name: "Tshirts", href: "#" },
        { name: "Clothing Sets", href: "#" },
        { name: "Lehenga choli", href: "#" },
        { name: "Kurta Sets", href: "#" },
        { name: "Party wear", href: "#" },
        { name: "Dungarees & Jumpsuits", href: "#" },
        { name: "Skirts & Shorts", href: "#" },
        { name: "Tights & Leggings", href: "#" },
        { name: "Jeans, Trousers & Capris", href: "#" },
        { name: "Jacket, Sweater & Sweatshirts", href: "#" },
        { name: "Innerwear & Thermals", href: "#" },
        { name: "Nightwear & Loungewear", href: "#" },
        { name: "Value Packs", href: "#" },
      ],
    },

    {
      name: "Footwear",
      subcategories: [
        { name: "Casual Shoes", href: "#" },
        { name: "Flipflops", href: "#" },
        { name: "Sports Shoes", href: "#" },
        { name: "Flats", href: "#" },
        { name: "Sandals", href: "#" },
        { name: "Heels", href: "#" },
        { name: "School Shoes", href: "#" },
        { name: "Socks", href: "#" },
      ],
    },

    {
      name: "Brands",
      subcategories: [
        { name: "H&M", href: "#" },
        { name: "Max Kids", href: "#" },
        { name: "Pantaloons", href: "#" },
        { name: "United Colors Of Benetton Kids", href: "#" },
        { name: "YK", href: "#" },
        { name: "U.S. Polo Assn. Kids", href: "#" },
        { name: "Mothercare", href: "#" },
        { name: "HRX", href: "#" },
      ],
    },

    {
      name: "Infants",
      subcategories: [
        { name: "Bodysuits", href: "#" },
        { name: "Rompers & Sleepsuits", href: "#" },
        { name: "Clothing Sets", href: "#" },
        { name: "Tshirts & Tops", href: "#" },
        { name: "Dresses", href: "#" },
        { name: "Bottom wear", href: "#" },
        { name: "Winter Wear", href: "#" },
        { name: "Innerwear & Sleepwear", href: "#" },
        { name: "Infant Care", href: "#" },
        { name: "Home & Bath", href: "#" },
        { name: "Personal Care", href: "#" },
      ],
    },

    {
      name: "Kids Accessories",
      subcategories: [
        { name: "Bags & Backpacks", href: "#" },
        { name: "Watches", href: "#" },
        { name: "Jewellery & Hair accessory", href: "#" },
        { name: "Sunglasses", href: "#" },
        { name: "Masks & Protective Gears", href: "#" },
        { name: "Caps & Hats", href: "#" },
      ],
    },

    {
      name: "Toys & Games",
      subcategories: [
        { name: "Learning & Development", href: "#" },
        { name: "Activity Toys", href: "#" },
        { name: "Soft Toys", href: "#" },
        { name: "Action Figure / Play set", href: "#" },
      ],
    },
  ],

  "Home & Living": [
    {
      name: "Bed Linen & Furnishing",
      subcategories: [
        { name: "Bed Runners", href: "#" },
        { name: "Mattress Protectors", href: "#" },
        { name: "Bedsheets", href: "#" },
        { name: "Bedding Sets", href: "#" },
        { name: "Blankets, Quilts & Dohars", href: "#" },
        { name: "Pillows & Pillow Covers", href: "#" },
        { name: "Bed Covers", href: "#" },
        { name: "Diwan Sets", href: "#" },
        { name: "Chair Pads & Covers", href: "#" },
        { name: "Sofa Covers", href: "#" },
      ],
    },
    {
      name: "Flooring",
      subcategories: [
        { name: "Floor Runners", href: "#" },
        { name: "Carpets", href: "#" },
        { name: "Floor Mats & Dhurries", href: "#" },
        { name: "Door Mats", href: "#" },
      ],
    },
    {
      name: "Bath",
      subcategories: [
        { name: "Bath Towels", href: "#" },
        { name: "Hand & Face Towels", href: "#" },
        { name: "Beach Towels", href: "#" },
        { name: "Towels Set", href: "#" },
        { name: "Bath Rugs", href: "#" },
        { name: "Bath Robes", href: "#" },
        { name: "Bathroom Accessories", href: "#" },
        { name: "Shower Curtains", href: "#" },
      ],
    },
    {
      name: "Lamps & Lighting",
      subcategories: [
        { name: "Floor Lamps", href: "#" },
        { name: "Ceiling Lamps", href: "#" },
        { name: "Table Lamps", href: "#" },
        { name: "Wall Lamps", href: "#" },
        { name: "Outdoor Lamps", href: "#" },
        { name: "String Lights", href: "#" },
      ],
    },

    {
      name: "Brands",
      subcategories: [
        { name: "H&M", href: "#" },
        { name: "Marks & Spencer", href: "#" },
        { name: "Home Centre", href: "#" },
        { name: "Spaces", href: "#" },
        { name: "D'Decor", href: "#" },
        { name: "Story@Home", href: "#" },
        { name: "Pure Home & Living", href: "#" },
        { name: "Swayam", href: "#" },
        { name: "Raymond Home", href: "#" },
        { name: "Maspar", href: "#" },
        { name: "My Trident", href: "#" },
        { name: "Cortina", href: "#" },
        { name: "Random", href: "#" },
        { name: "Ellementry", href: "#" },
        { name: "ROMEE", href: "#" },
        { name: "SEJ by Nisha Gupta", href: "#" },
      ],
    },
    {
      name: "Home Décor",
      subcategories: [
        { name: "Plants & Planters", href: "#" },
        { name: "Aromas & Candles", href: "#" },
        { name: "Clocks", href: "#" },
        { name: "Mirrors", href: "#" },
        { name: "Wall Décor", href: "#" },
        { name: "Festive Decor", href: "#" },
        { name: "Pooja Essentials", href: "#" },
        { name: "Wall Shelves", href: "#" },
        { name: "Fountains", href: "#" },
        { name: "Showpieces & Vases", href: "#" },
        { name: "Ottoman", href: "#" },
        { name: "Cushions & Cushion Covers", href: "#" },
        { name: "Curtains", href: "#" },
        { name: "Home Gift Sets", href: "#" },
      ],
    },
    {
      name: "Kitchen & Table",
      subcategories: [
        { name: "Table Runners", href: "#" },
        { name: "Dinnerware & Serveware", href: "#" },
        { name: "Cups and Mugs", href: "#" },
        { name: "Bakeware & Cookware", href: "#" },
        { name: "Kitchen Storage & Tools", href: "#" },
        { name: "Bar & Drinkware", href: "#" },
        { name: "Table Covers & Furnishings", href: "#" },
      ],
    },
    {
      name: "Storage",
      subcategories: [
        { name: "Bins", href: "#" },
        { name: "Hangers", href: "#" },
        { name: "Organisers", href: "#" },
        { name: "Hooks & Holders", href: "#" },
        { name: "Laundry Bags", href: "#" },
      ],
    },
  ],

  Beauty: [
    {
      name: "Makeup",
      subcategories: [
        { name: "Lipstick", href: "#" },
        { name: "Lip Gloss", href: "#" },
        { name: "Lip Liner", href: "#" },
        { name: "Mascara", href: "#" },
        { name: "Eyeliner", href: "#" },
        { name: "Kajal", href: "#" },
        { name: "Eyeshadow", href: "#" },
        { name: "Foundation", href: "#" },
        { name: "Primer", href: "#" },
        { name: "Concealer", href: "#" },
        { name: "Compact", href: "#" },
        { name: "Nail Polish", href: "#" },
      ],
    },
    {
      name: "Skincare, Bath & Body",
      subcategories: [
        { name: "Face Moisturiser", href: "#" },
        { name: "Cleanser", href: "#" },
        { name: "Masks & Peel", href: "#" },
        { name: "Sunscreen", href: "#" },
        { name: "Serum", href: "#" },
        { name: "Face Wash", href: "#" },
        { name: "Eye Cream", href: "#" },
        { name: "Lip Balm", href: "#" },
        { name: "Body Lotion", href: "#" },
        { name: "Body Wash", href: "#" },
        { name: "Body Scrub", href: "#" },
        { name: "Hand Cream", href: "#" },
        { name: "Baby Care", href: "#" },
        { name: "Masks", href: "#" },
      ],
    },
    {
      name: "Haircare",
      subcategories: [
        { name: "Shampoo", href: "#" },
        { name: "Conditioner", href: "#" },
        { name: "Hair Cream", href: "#" },
        { name: "Hair Oil", href: "#" },
        { name: "Hair Gel", href: "#" },
        { name: "Hair Color", href: "#" },
        { name: "Hair Serum", href: "#" },
        { name: "Hair Accessory", href: "#" },
      ],
    },
    {
      name: "Fragrances",
      subcategories: [
        { name: "Perfume", href: "#" },
        { name: "Deodorant", href: "#" },
        { name: "Body Mist", href: "#" },
      ],
    },
    {
      name: "Appliances",
      subcategories: [
        { name: "Hair Straightener", href: "#" },
        { name: "Hair Dryer", href: "#" },
        { name: "Epilator", href: "#" },
      ],
    },
    {
      name: "Top Brands",
      subcategories: [
        { name: "Lakme", href: "#" },
        { name: "Maybelline", href: "#" },
        { name: "L'Oreal", href: "#" },
        { name: "Philips", href: "#" },
        { name: "Bath & Body Works", href: "#" },
        { name: "THE BODY SHOP", href: "#" },
        { name: "Biotique", href: "#" },
        { name: "Mamaearth", href: "#" },
        { name: "MCaffeine", href: "#" },
        { name: "Nivea", href: "#" },
        { name: "Lotus Herbals", href: "#" },
        { name: "L'Oreal Professionnel", href: "#" },
        { name: "KAMA AYURVEDA", href: "#" },
        { name: "M.A.C", href: "#" },
        { name: "Forest Essentials", href: "#" },
      ],
    },
    {
      name: "Men's Grooming",
      subcategories: [
        { name: "Trimmers", href: "#" },
        { name: "Beard Oil", href: "#" },
        { name: "Hair Wax", href: "#" },
      ],
    },
    {
      name: "Beauty Gift & Makeup Set",
      subcategories: [
        { name: "Beauty Gift", href: "#" },
        { name: "Makeup Kit", href: "#" },
      ],
    },
    {
      name: "Premium Beauty",
      subcategories: [],
    },
    {
      name: "Wellness & Hygiene",
      subcategories: [],
    },
  ],
};

export { people, navigation, data };
