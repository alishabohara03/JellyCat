import bear from './bear.jpg';
import blissfulbunny from './blissfulbunny.jpg';


import cross from './cross.png';
import download from './download.png';
import dropdown from './dropdown.png';
import furrypenguin from './furrypenguin.jpg';
import furymonkey from './furymonkey.jpg';
import penguin from './penguin.jpg';

import cartIcon from './cart.png';
import recycleBinIcon from './recycle.png';
import logo from './logo.png';
import search from './search.png';
import user from './user.png';
import menu from './menu.png';

const assets = {
  bear,
  blissfulbunny,
  

  cross,
  download,
  dropdown,
  furrypenguin,
  furymonkey,
  penguin,
 
  cartIcon,
  recycleBinIcon,
  logo,
  search,
  user,
  menu
};

export default assets;

export const products = [
  {
    _id: "p001",
    name: "Classic Teddy Bear",
    description: "A soft and cuddly teddy bear, perfect for snuggling.",
    price: 1200,
    image: [assets.bear],
    category: "Animals",
    subCategory: "Bears",
    sizes: ["Small", "Medium"],
    date: 1717634345448,
    bestseller: true
  },
  {
    _id: "p002",
    name: "Blissful Bunny",
    description: "A cheerful bunny plush with long floppy ears and soft fur.",
    price: 1000,
    image: [assets.blissfulbunny],
    category: "Animals",
    subCategory: "Bunnies",
    sizes: ["Medium"],
    date: 1716634345448,
    bestseller: true
  },
 
  {
    _id: "p004",
    name: "Furry Penguin",
    description: "An adorable penguin plush with fuzzy wings and feet.",
    price: 950,
    image: [assets.furrypenguin],
    category: "Animals",
    subCategory: "Birds",
    sizes: ["Small", "Large"],
    date: 1714634345448,
    bestseller: true
  },
  {
    _id: "p005",
    name: "Fury Monkey",
    description: "A playful purple monkey plush, soft and huggable.",
    price: 1150,
    image: [assets.furymonkey],
    category: "Animals",
    subCategory: "Monkeys",
    sizes: ["Medium"],
    date: 1713634345448,
    bestseller: false
  },
  {
    _id: "p006",
    name: "Happy Penguin",
    description: "A smiling penguin with a fuzzy texture, ideal for all ages.",
    price: 980,
    image: [assets.penguin],
    category: "Animals",
    subCategory: "Birds",
    sizes: ["Small"],
    date: 1712634345448,
    bestseller: true
  },
  
];
