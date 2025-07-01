import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "NENCY PATEL",
    course: "Python+Django",
    feedback:
      "My experience as an intern at Code Vibe Innovation has been amazing. The team is really supportive, and the mentors take the time to guide you through real-world projects.",
    stars: 5,
    image: "https://via.placeholder.com/60",
  },
  {
    name: "RAHUL SHAH",
    course: "React.js",
    feedback:
      "I learned a lot during this internship. The environment was very friendly, and I got exposure to real client projects.",
    stars: 4,
    image: "https://via.placeholder.com/60",
  },
  {
    name: "PRIYA MEHTA",
    course: "MERN Stack",
    feedback:
      "An amazing internship with professional guidance. Highly recommended for freshers.",
    stars: 5,
    image: "https://via.placeholder.com/60",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">
        What Our Students Say
      </h2>

      <div className="relative max-w-xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
            width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((item, i) => (
            <div key={i} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center mx-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-600"
                />
                <p className="text-gray-600 italic mb-4">"{item.feedback}"</p>
                <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                <p className="text-sm text-blue-600">{item.course}</p>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full ${
                index === i ? "bg-blue-700" : "bg-gray-400"
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
