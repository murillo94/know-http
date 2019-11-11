import React from 'react';
import ReactDOM from 'react-dom';

import data from './status_code.json';

import twitterLogo from '../img/twitter.png';
import facebookLogo from '../img/facebook.png';

import '../css/style.css';

const COLORS = {
  "1xx": "#d0f9fe",
  "2xx": "#d4f7ae",
  "3xx": "#cdc8ff",
  "4xx": "#faf4b5",
  "5xx": "#fbb7b7"
};

const HeaderTitle = () => (
  <header>
    <h1>Learn the basics concepts about HTTP status code</h1>
    <h3>
      This is a list of HTTP status code that might be returned when a browser
      requests a service from a web service
    </h3>
  </header>
);

const HeaderButtons = () => {
  const windowOpen = (url, mode) => {
    window.open(
      url,
      mode,
      "left=20,top=20,width=600,height=400,toolbar=0,resizable=1"
    );
    return false;
  };

  const shareTwitter = () => {
    windowOpen(
      "http://twitter.com/intent/tweet?text=A visual guide explaining HTTP status code. https://murillo94.github.io/know-http/",
      "twitterwindow"
    );
  };
  const shareFacebook = () => {
    windowOpen(
      "https://www.facebook.com/sharer.php?u=https://murillo94.github.io/know-http/",
      "fbwindow"
    );
  };

  return (
    <div className="options">
      <span className="tooltip" aria-label="Share Twitter">
        <button onClick={shareTwitter}>
          <img
            alt="Share Twitter"
            src={twitterLogo}
          />
        </button>
      </span>
      <span className="tooltip" aria-label="Share Facebook">
        <button onClick={shareFacebook}>
          <img
            alt="Share Facebook"
            src={facebookLogo}
          />
        </button>
      </span>
    </div>
  );
};

const ListCodes = ({ codes, digit }) => (
  <>
    {codes.map(item => (
      <div key={item.value} className="item-desc">
        <input id={item.value} type="radio" name="item" tabIndex="0" />
        <label htmlFor={item.value}>
          <div className="item-code" style={{ backgroundColor: COLORS[digit] }}>
            {item.value}
          </div>
          <div>{item.reason}</div>
        </label>
        <div className="collapsible-content">
          <ul>
            <li>{item.description}</li>
          </ul>
        </div>
      </div>
    ))}
  </>
);

const ListItems = ({ data }) => (
  <main>
    {data.map((item, index) => (
      <section key={item.digit} className={`item${index + 1}-area`}>
        <p>
          {item.digit} {item.reason}
        </p>
        <ListCodes {...item} />
      </section>
    ))}
  </main>
);

const StatusList = ({ data }) => (
  <>
    <HeaderTitle />
    <HeaderButtons />
    <ListItems data={data} />
  </>
);

ReactDOM.render(<StatusList data={data} />, document.getElementById("root"));
