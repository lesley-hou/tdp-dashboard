import React from "react";
import Layout from "../components/layout/layout";

import Graph1 from "../assets/graphs/graph1.png";
import Graph2 from "../assets/graphs/graph2.png";
import Graph3 from "../assets/graphs/graph3.png";
import Graph4 from "../assets/graphs/graph4.png";
import Graph5 from "../assets/graphs/graph5.png";
import Graph6 from "../assets/graphs/graph6.png";
import Graph7 from "../assets/graphs/graph7.png";
import Graph8 from "../assets/graphs/graph8.png";

const graphs = [Graph1, Graph2, Graph3, Graph4, Graph5, Graph6, Graph7, Graph8];

const Dashboard: React.FC = () => {
    return (
      <Layout>
        <div className="p-8">
          <h1 className="text-2xl font-bold text-[#5C5C5D] mb-6">Tender Discovery Platform</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {graphs.map((graph, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg flex justify-center">
                <img src={graph} alt={`Graph ${index + 1}`} className="w-full max-h-[500px] object-contain rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  };

export default Dashboard;
