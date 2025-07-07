import React, { useState } from "react";
import { products } from "../../data/ComparisonData";
import type { Product } from "../../data/ComparisonData";
import { CheckCircle } from "lucide-react";

const SmartComparison: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((pid) => pid !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  const selected = products.filter((p) => selectedIds.includes(p.id));

  const featureKeys = Array.from(
    new Set(
      selected.flatMap((p) => Object.keys(p.features)) as (keyof Product["features"])[]
    )
  );

  const getHighlight = (key: keyof Product["features"], value: string | undefined) => {
    if (!value) return null;
    const vals = selected
      .map((p) => p.features[key] || "")
      .filter(Boolean);
    // Minimal example: highlight numerically highest interestRate
    return key === "interestRate"
      ? Math.max(
          ...vals.map((v) => parseFloat(v.replace(/[^0-9.]/g, "")))
        ) === parseFloat(value.replace(/[^0-9.]/g, ""))
      : null;
  };

  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-20">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-blue-900 text-center">
          Product Comparison
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelect(p.id)}
              className={`p-4 border rounded-lg flex items-center justify-between transition ${
                selectedIds.includes(p.id)
                  ? "bg-blue-100 border-blue-600"
                  : "bg-white border-gray-300"
              }`}
            >
              <span>{p.name}</span>
              {selectedIds.includes(p.id) && (
                <CheckCircle className="w-5 h-5 text-blue-600" />
              )}
            </button>
          ))}
        </div>

        {selected.length >= 2 && (
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full bg-white text-sm border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">Feature</th>
                  {selected.map((p) => (
                    <th key={p.id} className="p-3">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureKeys.map((key) => (
                  <tr key={key} className="border-t">
                    <td className="p-3 font-medium capitalize">{key}</td>
                    {selected.map((p) => {
                      const val = p.features[key] ?? "–";
                      const highlight = getHighlight(key, val);
                      return (
                        <td
                          key={p.id}
                          className={`p-3 ${highlight ? "bg-yellow-100" : ""}`}
                        >
                          {val}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 p-6 border border-blue-200 bg-blue-50 rounded">
              <p className="font-medium text-blue-800">
                {selected.length} product(s) selected — choose the best fit!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SmartComparison;
