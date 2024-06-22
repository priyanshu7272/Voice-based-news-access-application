import React from 'react'
import Newcard from '../Newcard/Newcard';
import {Grid, Grow, Typography} from '@material-ui/core';
import { Customgrid } from './style.jsx';

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const style = {
  display: 'flex',
};

const Newcards = ({articles,activeArticle}) => {

  if (!articles.length) {
    return (
      <Grow in>
        <Grid container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid style={style} item xs={12} sm={6} md={4} lg={3} >
              <div style={
                {
                  backgroundColor: infoCard.color,
                  height:'45vh',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '10px',
                  justifyContent: 'space-between',
                }
                }>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography style={{display:'flex',flexDirection: 'column',alignItems:'center'}} variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}:</strong><br /><div style={{display:'flex',flexDirection: 'column',alignItems:'center',justifyContent:'center',padding:'10px'}}>{infoCard.info}</div></Typography> : null}
                <Typography style={{display:'flex',flexDirection: 'column',alignItems:'center'}} variant="h6" component="h6">Try saying: <br /> <i style={{display:'flex',flexDirection: 'column',alignItems:'center',justifyContent:'center'}}>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid container alignItems="stretch" spacing={3}>
         {articles.map((article, i) => (
          <Customgrid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
            <Newcard article={article} i={i} activeArticle={activeArticle}/>
          </Customgrid>
         ))
         }
      </Grid>
    </Grow>
  )
}

export default Newcards;