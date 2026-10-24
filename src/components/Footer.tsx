const links = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-black/10 bg-beige">
      <div className="mx-auto flex w-[90%] max-w-[1350px] flex-col items-center gap-6 py-8 md:flex-row md:justify-between">

        <h3 className="text-2xl font-bold text-heading">
          Product<span className="text-main">Store</span>
        </h3>


        <ul className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="transition hover:text-main">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* السوشال (اختياري) */}
        <div className="flex gap-4 text-xl">
          <a href="#" aria-label="Facebook" className="transition hover:text-main">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram" className="transition hover:text-main">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter" className="transition hover:text-main">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-black/10 py-4 text-center text-sm text-gray-600">
        © {year} ProductStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;