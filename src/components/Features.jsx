import React from "react";

const features = [
  {
    title: "100% Organic",
    description:
      "Our coconut oil is made from carefully selected copra, dried and cold-pressed in a hygienic environment to retain maximum purity and natural goodness. Experience the true essence of nature with every drop.",
  },
  {
    title: "Multipurpose",
    description:
      "Ideal for cooking, skincare, haircare, and beyond—our pure coconut oil nourishes your body and delights your senses naturally.",
  },
  {
    title: "Pure Coconut Oil, Generations Strong",
    description:
      "Crafted with care and tradition passed down through three generations, our coconut oil delivers authentic, natural quality perfect for cooking, skincare, haircare, and everyday wellness. Experience the heritage of purity in every drop.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#fff9f0] py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-yellow-800 mb-12 text-center">
        Why Choose Sadans?
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {features.map(({ title, description }) => (
          <div
            key={title}
            className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
              {title}
            </h3>
            <p className="text-yellow-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
