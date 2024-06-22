import React ,{useEffect,useState,useRef, createRef} from 'react'
import {Card, CardActions, CardContent, Button, Typography, CardActionArea, Box} from '@material-ui/core';
import {CusCardMedia} from './style.jsx';

const source1 = {
  margin: '10px 40px',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
};

const headline = {
  margin: '10px 40px',
};

const description1 = {
  padding: '10px 40px',
}

const Newcard = ({article:{ description,publishedAt, source,title,url,urlToImage},i,activeArticle}) => {

  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <>
    <Card ref={elRefs[i]} style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      <CardActionArea >
          <CusCardMedia image={urlToImage}/>
          <div style={source1}>
              <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt).toDateString())}</Typography>
              <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
          </div>
          <Typography style={headline} gutterBottom variant="h5">{title}</Typography>
          <CardContent  style={description1}>
              <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
          </CardContent>
          <CardActions>
              <Button size="small" color="primary">Learn More</Button>
              <Typography variant="h5" color="textSecondary">{i+1}</Typography>
          </CardActions>
      </CardActionArea>
      {activeArticle === i ?
          (<div style={{backgroundColor:'blue',height:'10px'}}>
          </div>):null
          }
    </Card>
    </>
  )
}

export default Newcard;