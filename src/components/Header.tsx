import { useState } from "react";
import logo from "../assets/image.png";

const categories = [
  "Top 10 Offers",
  "Electronics & Digital",
  "Phones & Tablets",
  "Fashion & Clothing",
  "Television & Monitors",
  "Jewelry & Watches",
  "Toys & Hobbies",
];

const links = ["Home", "Accessories", "About", "Contact", "Blog"];

const Header = ({onSearch}:{onSearch:(q:string) => void}) => {
    const [text, setText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  return (
    <header className="sticky top-0  z-10 bg-beige shadow-md ">
   
      <div className="mx-auto flex w-[90%] max-w-[1350px] items-center justify-between gap-4 py-4">
     
        <a href="#" className="w-[140px] shrink-0 md:w-[175px]">
          <img
            src={logo}
            alt="productstor"
            className="h-14 w-full rounded-xl object-contain object-left"
          />
        </a>

   
        <form 
          onSubmit={(e) => {
    e.preventDefault();
    onSearch(text.trim());
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }}
        className="hidden flex-1 max-w-[610px] items-center overflow-hidden rounded-md md:flex">
          <select
            name="category"
            id="category"
            className="h-14 w-44 cursor-pointer border-r border-gray-300 bg-light px-3 outline-none"
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Garden</option>
            <option value="sports">Sports</option>
          </select>
          <input
            type="text"
            name="search"
            id="search"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search for products..."
            required
            className="h-14 min-w-0 flex-1 bg-light px-4 outline-none"
          />
          <button
            type="submit"
            className="h-14 w-[60px] bg-main text-lg text-white transition hover:bg-sale"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

      
        <div className="flex items-center gap-6">
          <a href="#" className="relative text-2xl transition hover:text-main">
            <i className="fa-regular fa-heart"></i>
            <span className="absolute -right-3 -top-2.5 h-5 w-5 rounded-full bg-main text-center text-xs leading-5 text-white">
              0
            </span>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="count count_item_header">0</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </div>

    
      <div className={`${menuOpen ? "block" : "hidden"} border-t border-line md:block`}>
        <nav className="mx-auto flex w-[90%] max-w-[1350px] flex-col gap-4 py-4 md:h-[60px] md:flex-row md:items-center md:justify-between md:gap-10 md:py-0">
  
          <div className="relative w-full md:h-full md:w-[220px]">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex h-12 w-full items-center justify-between bg-main px-4 text-white md:h-full"
            >
              <i className="fa-solid fa-bars"></i>
              <span className="font-medium">Browse category</span>
              <i className="fa-solid fa-angle-down"></i>
            </button>

            {catOpen && (
              <div className="absolute left-0 top-full z-20 flex w-full flex-col border border-t-0 border-gray-300 bg-white shadow-lg">
                {categories.map((cat) => (
                  <a
                    key={cat}
                    href="#"
                    className="border-b border-line px-3 py-3.5 text-sm last:border-b-0 hover:bg-gray-100"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            )}
          </div>

          <ul className="flex flex-col gap-3 md:flex-row md:gap-8">
            {links.map((link, i) => (
              <li key={link}>
                <a
                  href="#"
                  className={`transition hover:text-main ${
                    i === 0 ? "text-main" : ""
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 rounded-sm bg-main px-4 py-2.5 capitalize text-white transition hover:bg-sale"
            >
              Login <i className="fa-solid fa-right-to-bracket"></i>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-sm bg-main px-4 py-2.5 capitalize text-white transition hover:bg-sale"
            >
              Sign Up <i className="fa-solid fa-user-plus"></i>
            </a>
          </div>
        </nav>
      </div>
     
    </header>
  );
};

export default Header;