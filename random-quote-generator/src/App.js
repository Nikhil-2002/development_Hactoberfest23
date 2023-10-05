import "./style.css";
import { useState } from "react";
import { Icon } from "@iconify/react";
import bxCopyright from "@iconify/icons-bx/bx-copyright";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const getQuote = () => {
    setLoading(true);
    fetch("https://api.quotable.io/random/")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setQuote(res.content);
        setAuthor(res.author);
        setLoading(false);
      });
  };
  const showQuote = () => {
    if (quote) {
      return (
        <div className='main'>
          <div className='quote'>" {quote} "</div>
          <div className='author'>~ {author}</div>
        </div>
      );
    }
  };

  return (
    <div className='outer'>
      <div className='inner'>
        <div className='header'>
          <h1>Random Quote Generator</h1>
        </div>
        <div className='btn-div'>
          <button className='btn' onClick={getQuote}>
            Get Quote
          </button>
        </div>
        <ClipLoader class='loader' loading={loading} color='#28527a' />
        {showQuote()}
      </div>
      <div className='copyright'>
        <Icon icon={bxCopyright} id='icon' />
        <a href='https://github.com/TanvNaik' target='_blank'>
          Tanvi Naik
        </a>
      </div>
    </div>
  );
}

export default App;
