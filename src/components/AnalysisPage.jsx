import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function ProgressCard({ value, target, unit, color, label }) {
  const chartData = [{ name: label, value }];
  const percentage = Math.round((value / target) * 100);

  return (
    <div className="bg-white border-1 border-solid rounded-xl shadow p-4 flex flex-col items-center relative">
      <RadialBarChart
        width={120}
        height={120}
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="100%"
        barSize={10}
        data={chartData}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, target]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          minAngle={0}
          background
          clockWise
          dataKey="value"
          fill={color}
        />
      </RadialBarChart>

      {/* Center text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      </div>

      <p className="text-lg font-bold" style={{ color }}>
        {value} {unit}
      </p>
      <p className="font-medium">{label}</p>
      <p className="text-gray-500 text-sm">Target: {target}{unit}</p>
    </div>
  );
}

function WeeklyChart({ title, data, color, unit }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex-1">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default function AnalysisPage() {
  const calorieData = [
    { day: "Mon", value: 2000 },
    { day: "Tue", value: 1700 },
    { day: "Wed", value: 2200 },
    { day: "Thu", value: 1900 },
    { day: "Fri", value: 2100 },
    { day: "Sat", value: 1800 },
    { day: "Sun", value: 1600 },
  ];

  const carbonData = [
    { day: "Mon", value: 0.6 },
    { day: "Tue", value: 0.4 },
    { day: "Wed", value: 0.7 },
    { day: "Thu", value: 0.5 },
    { day: "Fri", value: 0.6 },
    { day: "Sat", value: 0.5 },
    { day: "Sun", value: 0.3 },
  ];

  const meals = [
    { name: "Lunch: Grilled Chicken Salad", calories: 400 },
    { name: "Dinner: Spaghetti Bolognese", calories: 700 },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500">Monday, September 15, 2025</p>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProgressCard
          value={750}
          target={2000}
          unit="kcal"
          color="#22c55e"
          label="Calories"
        />
        <ProgressCard
          value={55}
          target={150}
          unit="g"
          color="#a855f7"
          label="Protein"
        />
        <ProgressCard
          value={0.8}
          target={5}
          unit="kg"
          color="#3b82f6"
          label="Carbon"
        />
      </div>

      {/* Weekly Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <WeeklyChart
          title="Weekly Calorie Intake"
          data={calorieData}
          color="#22c55e"
          unit="kcal"
        />
        <WeeklyChart
          title="Weekly Carbon Footprint"
          data={carbonData}
          color="#3b82f6"
          unit="kg"
        />
      </div>
    </div>
  );
}
