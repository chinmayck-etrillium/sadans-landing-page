import React from "react";

const testimonials = [
  {
    name: "Asha Kumar",
    feedback: "Sadans coconut oil has transformed my hair and skin! Highly recommend.",
  },
  {
    name: "Rohit Menon",
    feedback: "The purity and fragrance are unmatched. Perfect for cooking as well.",
  },
  {
    name: "Meera Nair",
    feedback: "I love the eco-friendly packaging and how fresh the oil feels every time.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-yellow-50 py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-yellow-800 mb-12 text-center">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {testimonials.map(({ name, feedback }) => (
          <div key={name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="italic text-yellow-700 mb-4">“{feedback}”</p>
            <h4 className="font-semibold text-yellow-900">{name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
