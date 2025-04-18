import React from "react";

const QualityCompliance = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">Quality & Compliance</h1>
      <p className="text-gray-600 mb-6">Global Standards, Guaranteed Safety Content:</p>
      
      <div className="space-y-4">
        <div className="pl-4 border-l-4 border-blue-500">
          <h2 className="text-lg font-semibold text-gray-800">Certifications:</h2>
          <p className="text-gray-600">FDA GRAS, EU Directive 95/2/EC, ISO 22000.</p>
        </div>
        
        <div className="pl-4 border-l-4 border-green-500">
          <h2 className="text-lg font-semibold text-gray-800">Testing Protocols:</h2>
          <p className="text-gray-600">Rigorous microbiological, heavy metal, pesticides and allergen testing.</p>
        </div>
        
        <div className="pl-4 border-l-4 border-purple-500">
          <h2 className="text-lg font-semibold text-gray-800">Traceability:</h2>
          <p className="text-gray-600">Batch-wise documentation for supply chain transparency.</p>
        </div>
      </div>
    </div>
  );
};

export default QualityCompliance;