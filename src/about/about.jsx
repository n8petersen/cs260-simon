import React from 'react';
import './about.css';

export function About(props) {
  const [imageURL, setImageUrl] = React.useState('');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');
        
        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(imgUrl);
      })
      .catch();

    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  let imgEl = '';

  if (imageURL) {
    imgEl = <img src={imageURL} alt='stock background' />;
  }


  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <div id="picture" className="picture-box"></div>

        <p>
          Simon is a repetitive memory game where you follow the demonstrated
          color sequence until you make a mistake. The longer the sequence you
          repeat, the greater your score.
        </p>

        <p>
          The name Simon is a registered trademark of Milton-Bradley. Our use of
          the name and the game is for non-profit educational use only. No part
          of this code or program should be used outside of that definition.
        </p>

        <div className="quote-box bg-light text-dark">
          <p className='quote'>{quote}</p>
          <p className='quoteAuthor'>{quoteAuthor}</p>
        </div>
      </div>
    </main>
  );
}