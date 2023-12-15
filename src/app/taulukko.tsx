'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';

interface GraphProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  };
}

const Graph: React.FC<GraphProps> = ({ data }) => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default Graph;