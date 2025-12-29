const FilterSidebar = ({
    setGender,
    setCategory,
    setPrice,
    setBrand,
    setDiscount,
    setColor,
    setSize
}) => {
    // CATEGORY TOGGLE
    const handleCategory = (value) => {
        setCategory((prev) =>
            prev.includes(value)
                ? prev.filter((c) => c !== value)
                : [...prev, value]
        );
    };

    // BRAND TOGGLE
    const handleBrand = (value) => {
        setBrand((prev) =>
            prev.includes(value)
                ? prev.filter((b) => b !== value)
                : [...prev, value]
        );
    };
    const handleSize = (value) => {
        setSize((prev) =>
            prev.includes(value)
                ? prev.filter((s) => s !== value)
                : [...prev, value]
        );
    };

    return (
        <div className="w-64 h-fit border rounded-xl p-4 space-y-6 text-sm ">

            {/* GENDER */}
            <div>
                <h3 classNamei className="font-semibold mb-2">Gender</h3>
                <div className="space-y-2">
                    <label className="flex gap-2">
                        <input type="radio" name="gender" defaultChecked onChange={() => setGender("All")} />
                        All
                    </label>
                    <label className="flex gap-2">
                        <input type="radio" name="gender" onChange={() => setGender("Women")} />
                        Women
                    </label>
                    <label className="flex gap-2">
                        <input type="radio" name="gender" onChange={() => setGender("Men")} />
                        Men
                    </label>
                </div>
            </div>

            {/* CATEGORY */}
            <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <div className="space-y-2">
                    <label className="flex gap-2">
                        <input type="checkbox" onChange={() => handleCategory("Tshirts")} />
                        Tshirts
                    </label>
                    <label className="flex gap-2">
                        <input type="checkbox" onChange={() => handleCategory("Dresses")} />
                        Dresses
                    </label>
                </div>
            </div>

            {/* PRICE */}
            <div>
                <h3 className="font-semibold mb-2">Price</h3>
                <div className="space-y-2 flex flex-col">
                    <label>
                        <input type="radio" name="price" onChange={() => setPrice([0, 500])} /> Under ₹500
                    </label>
                    <label>
                        <input type="radio" name="price" onChange={() => setPrice([500, 1000])} /> ₹500 – ₹1000
                    </label>
                    <label>
                        <input type="radio" name="price" onChange={() => setPrice([1000, 5000])} /> Above ₹1000
                    </label>
                </div>
            </div>

            {/* BRAND */}
            <div>
                <h3 className="font-semibold mb-2">Brand</h3>
                <div className="space-y-2 flex flex-col">
                    <label><input type="checkbox" onChange={() => handleBrand("H&M")} /> H&M</label>
                    <label><input type="checkbox" onChange={() => handleBrand("Shein")} /> Shein</label>
                    <label><input type="checkbox" onChange={() => handleBrand("Only")} /> Only</label>
                    <label><input type="checkbox" onChange={() => handleBrand("Zara")} /> Zara</label>
                    <label><input type="checkbox" onChange={() => handleBrand("Roadster")} /> Roadster</label>
                </div>
            </div>

            {/* DISCOUNT */}
            <div>
                <h3 className="font-semibold mb-2">Discount</h3>
                <div className="space-y-2 flex flex-col">
                    <label><input type="radio" name="discount" onChange={() => setDiscount(30)} /> 30% & above</label>
                    <label><input type="radio" name="discount" onChange={() => setDiscount(40)} /> 40% & above</label>
                </div>
            </div>

            {/* SIZE */}
            <div>
                <h3 className="font-semibold mb-2">Size</h3>
                <div className="flex gap-2 flex-wrap">
                    <button
                        onClick={() => handleSize("S")}
                        className="border px-3 py-1 rounded-md hover:bg-black hover:text-white"
                    >
                        S
                    </button>
                    <button
                        onClick={() => handleSize("M")}
                        className="border px-3 py-1 rounded-md hover:bg-black hover:text-white"
                    >
                        M
                    </button>
                    <button
                        onClick={() => handleSize("L")}
                        className="border px-3 py-1 rounded-md hover:bg-black hover:text-white"
                    >
                        L
                    </button>
                    <button
                        onClick={() => handleSize("XL")}
                        className="border px-3 py-1 rounded-md hover:bg-black hover:text-white"
                    >
                        XL
                    </button>
                </div>
            </div>


            {/* COLOR */}
            <div>
                <h3 className="font-semibold mb-2">Color</h3>
                <div className="flex gap-2">
                    <span onClick={() => setColor("Black")} className="w-6 h-6 bg-black rounded-full cursor-pointer"></span>
                    <span onClick={() => setColor("White")} className="w-6 h-6 bg-white border rounded-full cursor-pointer"></span>
                    <span onClick={() => setColor("Blue")} className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></span>
                    <span onClick={() => setColor("Green")} className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></span>
                </div>
            </div>

        </div>
    );
};

export default FilterSidebar;
