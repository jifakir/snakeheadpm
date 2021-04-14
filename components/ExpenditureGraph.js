import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';



const ExpenditureGraph = () => {
    const data = [
        {
          "name": "January",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "February",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "March",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "April",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "May",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "June",
          "uv": 2390,
          "pv": 3800
        },
      ];

    return (
        <div className="w-full md:w-7/12 mb-2 rounded-xl bg-gray-800">
            <div className="p-5">
                <h1 className="text-xl text-white font-bold">Total Expense Graph</h1>
                <h3 className="text-gray-500 text-sm font-bold leading-10">All Projects</h3>
            </div>
            <div className="w-full overflow-x-auto">
                <BarChart width={500} height={300} data={data}>
                    <XAxis dataKey="name" stroke="#999" />
                    <YAxis />
                    <Tooltip  wrapperStyle={{ width: 100, backgroundColor: "#777", borderRadius: 15  }} />
                    <Bar dataKey="uv" fill="#3B82F6" barSize={50} />
                    <CartesianGrid stroke="#777" strokeDasharray="1 5"/>
                </BarChart>
            </div>
        </div>
    )
};


export default ExpenditureGraph;