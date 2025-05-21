import React from "react";

const products = [
  {
    id: 1,
    name: "Coconut Oil Bottle",
    description: "100% pure, coconut oil packed with nutrients.",
    price: "₹450 / 1L",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4yul6z0lo885joPasKLV6tMa1WhSxptoz4g&s",
    url: "https://www.amazon.in/Sadans-Double-Filtered-Coconut-Oil/dp/B09D9VKCK7",
  },
  {
    id: 2,
    name: "Coconut Oil Pouch",
    description: "100% pure, coconut oil packed with nutrients.",
    price: "₹420 / 500ml",
    image:
      "https://greensshopping.com/images/product/1738837651i4YQrX2PhjqD5zuiWV8MVvPCf2wF0vOR9Hssqlq2.jpeg",
    url: "https://greensshopping.com/en/product/sadan-s-coconut-oil-pouch-1ltr-164852793729",
  },
  {
    id: 3,
    name: "Coconut Oil Can",
    description: "Certified organic coconut oil for maximum purity.",
    price: "₹500/ kg",
    image: "https://m.media-amazon.com/images/I/71b4E6mFsYL.jpg",
    url: "https://www.amazon.in/Sadans-Double-Filtered-Coconut-Oil/dp/B09D9WSXBW",
  },
];

const Products = () => {
  function handleClick(url) {
    window.open(url, "_blank");
  }

  return (
    <section className="bg-[#fff9f0] py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-yellow-800 mb-12 text-center">
        Our Products
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map(({ id, name, description, price, image, url }) => (
          <div
            key={id}
            className="bg-yellow-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-2">
                {name}
              </h3>
              <p className="text-yellow-600 mb-4">{description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-yellow-800">{price}</span>
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition"
                  onClick={() => handleClick(url)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
