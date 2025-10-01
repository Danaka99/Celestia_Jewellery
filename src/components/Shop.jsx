import { useState } from "react";

const categories = {
  "Necklaces": ["Diamond", "Gold", "Pearl", "Platinum"],
  "Rings": ["Engagement", "Wedding", "Casual"],
  "Earrings": ["Studs", "Hoops", "Dangling"],
  "Bracelets": ["Gold", "Silver", "Gemstone"],
};

const products = [
  { id: 1, name: "Diamond Necklace", price: "$999", img: "https://via.placeholder.com/200" },
  { id: 2, name: "Gold Ring", price: "$499", img: "https://via.placeholder.com/200" },
  { id: 3, name: "Pearl Earrings", price: "$299", img: "https://via.placeholder.com/200" },
  { id: 4, name: "Platinum Bracelet", price: "$1299", img: "https://via.placeholder.com/200" },
];

const Shop = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar */}
      <aside className="w-64 bg-neutral-900 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-4">
          {Object.keys(categories).map((category) => (
            <li key={category} className="group relative">
              <span className="cursor-pointer hover:text-yellow-400 transition">{category}</span>
              {/* Subcategories */}
              <ul className="absolute left-56 top-0 bg-neutral-800 p-4 rounded shadow-lg opacity-0 group-hover:opacity-100 transition">
                {categories[category].map((sub) => (
                  <li
                    key={sub}
                    className="hover:text-yellow-300 cursor-pointer whitespace-nowrap"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for jewelry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-neutral-900 rounded-xl p-4 shadow-lg hover:scale-105 transition"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-yellow-400 font-bold">{product.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No products found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Shop;
