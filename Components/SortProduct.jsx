const SortProduct = ({ sort, setSort }) => {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Sort by</span>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option value="recommended">Recommended</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="discount">Best Discount</option>
        </select>
      </div>
    );
  };
  
  export default SortProduct;
  