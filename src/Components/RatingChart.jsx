import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
} from "recharts";

const RatingChart = ({ ratings }) => {
  // Color scheme for each rating level
  const colors = {
    "5 star": "#00D390",
    "4 star": "#4CAF50",
    "3 star": "#FFC107",
    "2 star": "#FF9800",
    "1 star": "#F44336",
  };

  // Check if ratings exists and is an array
  if (!ratings || !Array.isArray(ratings)) {
    return <div className="text-gray-500">No rating data available</div>;
  }

  // Transform data for horizontal bar chart (reverse order so 5 stars is on top)
  const chartData = [...ratings].reverse();

  // Format large numbers (e.g., 12500000 -> 12.5M)
  const formatCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count;
  };

  return (
    <div className="w-full mt-4">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
        >
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fontSize: 12 }}
            width={50}
          />
          <Bar
            dataKey="count"
            radius={[0, 4, 4, 0]}
            label={{ position: "right", formatter: formatCount, fontSize: 12 }}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[entry.name]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
