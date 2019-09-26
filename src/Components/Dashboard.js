import React from 'react';
import Jumbo from './Jumbo';

const Dashboard = () => {
  return (
    <div className='receipt-card'>
    <Jumbo />

    <h2>Receipt #1</h2>
     <h3>11/14/2016</h3>
     <h3>Food</h3>
     <h3>$83.03</h3>
     <img src = 'https://expressexpense.com/images/simple-receipt-sample2.jpg' />
    </div>
    
  );
}
export default Dashboard;