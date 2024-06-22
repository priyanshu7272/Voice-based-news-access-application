import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/Newcards.jsx';
import logo from './images/logo.jpg';

const API_KEY = '7f7801b1cd1cebf9a3f256a8f33560532e956eca572e1d8b807a3e2338fdd0dc/stage';

function wordsToNumbers(word) {
  const numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'for':4,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  };

  return numbers[word];
}

const App = () => {
  const [articles, setArticles] = useState([]);
  const [activeArticle,setactiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: API_KEY,
      onCommand: (commandData) => {
        if(commandData.command === 'newHeadlines') {
          setArticles(commandData.articles);
          setactiveArticle(-1);
        }
        else if(commandData.command === 'highlight') {
          setactiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }else if(commandData.command === 'open') {
          const parsedNumber = commandData.number.length > 2 ? wordsToNumbers(commandData.number) : commandData.number;
          const article = commandData.articles[parsedNumber - 1];

          if (parsedNumber > commandData.articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      }
    });

    return () => {
      alanInstance.remove(); // cleanup: remove the Alan button and its listeners
    };

  },[]);


  return (
    <div style={{margin: '20px 40px'}}>
      <div>
        {/* {newsArticles.length ? (
          <div>
            <div><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null} */}
        <img style={{ width:'100vw',height:'40vh',filter:'invert(1) hue-rotate(180deg)'}}src={logo} alt="logo" />
      </div>
      <NewsCards articles={articles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;