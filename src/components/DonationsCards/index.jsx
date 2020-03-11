import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './style.css'

export default function DonationsCards() {
  const cards=[{
    title:'Total Donations',
    value:'45'
},
{
    title:'Donations to El Basma',
    value:'30'
},
{
    title:'Donations to hekma',
    value:'15'
}]
  return (
    <React.Fragment>
        <div className='cardsDiv'>
        {cards.map((card)=>
        <div className='card'>
        <Typography component="h2" variant="h4" color="primary" gutterBottom>
        {card.title}
      </Typography>
      <Typography component="p" variant="h5">
      {card.value}
      </Typography>
      </div> 
           )}  
           </div>
    </React.Fragment>
  );
}
