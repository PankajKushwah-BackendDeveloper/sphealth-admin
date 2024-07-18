

import React, { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import BarChat from '../pages/BarChat'; // Corrected import name

import { HiTrendingUp, HiTrendingDown } from 'react-icons/hi';

function Dashboard() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["Midday: 34%", "Morning: 47%", "Unwind: 19%"],
        datasets: [
          {
            data: [25, 20, 15],
            backgroundColor: [
              'rgb(192, 57, 43)',
              'rgb(13, 71, 161)',
              'rgb(241, 196, 15)'
            ],
          }
        ]
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  // Function to dynamically adjust chart size based on screen width
  // const getChartSize = () => {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth > 768) {
  //     return 350; // Default size for larger screens
  //   } else {
  //     return screenWidth - 60; // Adjust size for smaller screens
  //   }
  // };

  return (
    
    <div className="bg-gray-100 lg:h-full  w-full   dark:bg-slate-900">
    <h1>dashboard</h1>
      <main className="h-full">
        <section className="flex flex-col mt-5 ml-2 mr-10 lg:ml-2 lg:mr-2 lg:grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 lg:p-10 lg:mt-5">
          <WidgetItem
            percent={10}
            amount={false}
            value={7}
            heading="Users"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={20}
            amount={false}
            value={1}
            heading="Admin"
            color="rgb(255,89,83)"
          />
          <WidgetItem
            percent={0}
            amount={false}
            value={0}
            heading="Revenue"
            color="rgb(16,185,129)"
          />
          <WidgetItem
            percent={0}
            amount={false}
            value={0}
            heading="Expenses"
            color="rgb(255,193,7)"
          />

          {/* BarChart component */}
          <div className="mt-10 col-span-4 lg:col-span-2">
            <BarChat />
          </div>

          {/* Chart.js Pie Chart */}
          <div className="col-span-4 lg:col-span-2">
            <div className="h-[550px] w-[300px] ml-[10px] mr-auto mt-5 lg:mt-[20px] lg:h-[350px] lg:w-[350px] lg:ml-[200px]">
              <canvas ref={chartRef} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// WidgetItem component definition (assuming it remains unchanged)
interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => (
  <article className="flex h-[80px] mr-[10px] w-[240px] lg:h-[100px] lg:mb-5 lg:flex lg:flex-row lg:p-4 lg:rounded lg:shadow bg-white">
    <div className="ml-8 mt-2 lg:ml-4">
      <p className="text-xs font-semibold text-gray-500 lg:text-sm">{heading}</p>
      <h4 className="font-bold text-2xl lg:text-1xl" style={{ color }}>
        {amount ? `$${value.toLocaleString()}` : value}
      </h4>
      <div className={`flex items-center lg:flex lg:items-center lg:text-sm ${percent > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {percent > 0 ? (
          <HiTrendingUp className="mr-1" />
        ) : (
          <HiTrendingDown className="mr-1" />
        )}
        {Math.abs(percent)}%
      </div>
    </div>
    <div className="flex ml-10 mt-8 lg:mt-0 lg:ml-10 lg:items-center lg:justify-center bg-blue-300 rounded-full" style={{
      background: `conic-gradient(
        from 0deg,
        ${color} ${Math.abs(percent) / 100 * 360}deg,
        rgba(255, 255, 255, 0) 0deg
      )`
    }}>
      <span className="text-black">{percent}%</span>
    </div>
  </article>
);

export default Dashboard;
