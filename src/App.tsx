import { useState } from "react";
import Header from "./components/Header";
import market from "./assets/market.jpg";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { BrowserRouter , Route, Routes } from "react-router-dom";
function App() {
  const [search ,setSearch] = useState("");
  return (
  
    <BrowserRouter>
 
          <Header onSearch={setSearch} />

      <div className="relative h-[calc(100vh-149px)]">
        <img
          src={market}
          alt="Market"
          className="h-full w-full object-cover object-center blur-sm"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 ">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Welcome to Our Store
          </h1>
        </div>
      </div>
         <Routes>
      <Route path="/" element={<ProductList search={search} />} />
    </Routes>
      {/* <main id="products" className="flex-1">
        <ProductList search={search}/>
      </main> */}
      <Footer />
    </BrowserRouter>


  );
}

export default App;
