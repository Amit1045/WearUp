import { useState, useMemo } from "react";
import { products } from "../../Data/products";
import ProductCard from "../../Components/ProductCard";
import SortProduct from "../../Components/SortProduct";
import FilterSidebar from "../../Components/FilterSidebar";

const Products = () => {
  // FILTER STATES
  const [gender, setGender] = useState("All");
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([0, Infinity]);
  const [brand, setBrand] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState([]);

  // SORT STATE
  const [sort, setSort] = useState("recommended");

  // FILTER LOGIC
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      return (
        (gender === "All" || p.gender === gender) &&
        (category.length === 0 || category.includes(p.category)) &&
        p.price >= price[0] &&
        p.price <= price[1] &&
        (brand.length === 0 || brand.includes(p.brand)) &&
        p.discount >= discount &&
        (!color || p.color === color) &&
        (size.length === 0 || size.some((s) => p.size.includes(s)))
      );
    });
  }, [gender, category, price, brand, discount, color,size]);

  // SORT LOGIC
  const sortedProducts = useMemo(() => {
    const data = [...filteredProducts];
    if (sort === "low-high") return data.sort((a, b) => a.price - b.price);
    if (sort === "high-low") return data.sort((a, b) => b.price - a.price);
    if (sort === "discount") return data.sort((a, b) => b.discount - a.discount);
    return data;
  }, [sort, filteredProducts]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">All Products</h1>
          <p className="text-gray-500">
            {sortedProducts.length} items found
          </p>
        </div>
        <SortProduct sort={sort} setSort={setSort} />
      </div>

      {/* CONTENT */}
      <div className="flex gap-6">
        <FilterSidebar
          setGender={setGender}
          setCategory={setCategory}
          setPrice={setPrice}
          setBrand={setBrand}
          setDiscount={setDiscount}
          setColor={setColor}
          setSize={setSize}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
