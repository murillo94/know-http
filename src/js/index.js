const data = data;

const colors = {
  '1xx': '#d0f9fe',
  '2xx': '#d4f7ae',
  '3xx': '#cdc8ff',
  '4xx': '#faf4b5',
  '5xx': '#fbb7b7'
};

const HeaderTitle = () => (
  <>
    <h1 className="title">Learn the basics concepts about HTTP status code</h1>
    <h3 className="sub-title">
      This is a list of HTTP status code that might be returned when a browser
      requests a service from a web service
    </h3>
  </>
);

const HeaderButtons = () => {
  const popupOptions =
    'left=20,top=20,width=600,height=400,toolbar=0,resizable=1';
  const shareTwitter = () => {
    window.open(
      'http://twitter.com/intent/tweet?text=A visual guide explaining HTTP status code. https://murillo94.github.io/know-http/',
      'twitterwindow',
      popupOptions
    );
    return false;
  };
  const shareFacebook = () => {
    window.open(
      'https://www.facebook.com/sharer.php?u=https://murillo94.github.io/know-http/',
      'fbwindow',
      popupOptions
    );
    return false;
  };
  return (
    <div className="options">
      <span className="tooltip" aria-label="Share Twitter">
        <button className="btn-options shadow" onClick={shareTwitter}>
          <img
            alt="Share Twitter"
            src="https://png.icons8.com/metro/100/twitter.png"
          />
        </button>
      </span>
      <span className="tooltip" aria-label="Share Facebook">
        <button className="btn-options shadow" onClick={shareFacebook}>
          <img
            alt="Share Facebook"
            src="https://png.icons8.com/metro/100/facebook.png"
          />
        </button>
      </span>
    </div>
  );
};

const ListCodes = ({ codes, digit }) => (
  <>
    {codes.map(item => (
      <div className="item-desc">
        <input id={item.value} class="toggle" type="radio" name="item" />
        <label for={item.value} class="lbl-toggle">
          <div className="item-code" style={{ backgroundColor: colors[digit] }}>
            {item.value}
          </div>
          <div>{item.reason}</div>
        </label>
        <div class="collapsible-content">
          <ul class="collapsible-item">
            <li>{item.description}</li>
          </ul>
        </div>
      </div>
    ))}
  </>
);

const ListItems = ({ data }) => (
  <div className="wrapper">
    {data.map((item, index) => (
      <div className={`item${index + 1}-area item`}>
        <p className="item-title">
          {item.digit} {item.reason}
        </p>
        <ListCodes {...item} />
      </div>
    ))}
  </div>
);

const StatusList = ({ data }) => (
  <>
    <HeaderTitle />
    <HeaderButtons />
    <ListItems data={data} />
  </>
);

ReactDOM.render(<StatusList data={data} />, document.getElementById('root'));
