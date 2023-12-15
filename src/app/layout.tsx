'use client'
import React from 'react';
import Navbar from './navbar'
import Content from './card';
import './globals.css';
import Graph from './taulukko';



const Home: React.FC = () => {
  const chartData = {
    labels: ['1', '2', '3', '4'],
    datasets: [
      {
        label: 'Data',
        data: [12, 19, 3, 5],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      
      <Navbar />
      <Content />
      <Graph data={chartData} />
      
    </div>
  );
};

export default Home;