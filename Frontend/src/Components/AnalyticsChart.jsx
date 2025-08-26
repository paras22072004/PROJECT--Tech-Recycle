import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#4CAF50", "#FFC107", "#2196F3"];

function AnalyticsChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label={({ name, value }) => `${name}: ${value}`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Legend
          verticalAlign="bottom"
          height={36}
          wrapperStyle={{ color: "#333", fontSize: "14px" }}
        />

        <Tooltip
          contentStyle={{ background: "#fff", borderRadius: "8px", border: "1px solid #ddd" }}
          itemStyle={{ color: "#333" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default AnalyticsChart;
