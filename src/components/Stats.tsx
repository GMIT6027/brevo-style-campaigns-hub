
import React from 'react';

const Stats = () => {
  const stats = [
    { number: "300K+", label: "Active Customers" },
    { number: "500M+", label: "Emails Sent Daily" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "4.8/5", label: "Customer Rating" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
