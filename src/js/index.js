const data = data;

const HeaderTitles = () => (
  <div>
    <h1 className="title">
      Learn the basics concepts about HTTP status code
    </h1>
    <h3 className="sub-title">
      This is a list of HTTP status code that might be returned when a browser requests a service from a web service
    </h3>
  </div>
)

const HeaderOptions = () => {
  const popupOptions = 'left=20,top=20,width=600,height=400,toolbar=0,resizable=1';
  const shareTwitter = () => {
    const message = "http://twitter.com/intent/tweet?text=A visual guide explaining HTTP status code. https://murillo94.github.io/know-http/";
    window.open(message, 'twitterwindow', popupOptions); return false;
  }
  const shareFacebook = () => {
    window.open('https://www.facebook.com/sharer.php?u=https://murillo94.github.io/know-http/', 'fbwindow', popupOptions); return false;
  }
  const generetePDF = () => {
    var doc = new jsPDF('portrait', 'pt', 'a4');
    var source = window.document.getElementsByTagName("body")[0];
    doc.addHTML(source, function() {
      //doc.output("dataurlnewwindow");
      doc.save('http-status-code.pdf');
    });
  }
  return (
    <div id="ignorePDF" className="options">
      <span className="tooltip" aria-label="Share Twitter">
        <button className="btn-options shadow" onClick={shareTwitter}>
          <img alt="Share Twitter" src="https://png.icons8.com/metro/100/twitter.png" />
        </button>
      </span>
      <span className="tooltip" aria-label="Share Facebook">
        <button className="btn-options shadow" onClick={shareFacebook}>
          <img alt="Share Facebook" src="https://png.icons8.com/metro/100/facebook.png" />
        </button>
      </span>
      {/*<span className="tooltip" aria-label="Generate PDF">
        <button className="btn-options shadow" onClick={generetePDF}>
          <img alt="Generate PDF" src="https://png.icons8.com/metro/100/pdf.png" />
        </button>
      </span>*/}
    </div>
  )
}

const ListCodes = ({ codes, digit }) => (
  <div>
    {codes.map(item => 
      <div className="item-desc">
        <input id={item.value} class="toggle" type="radio" name="item" />
        <label for={item.value} class="lbl-toggle">
          <div className="item-code" data-color={digit}>
            {item.value}
          </div>
          <div className="item-code-title">
            {item.reason}
          </div>
        </label>
        <div class="collapsible-content">
          <ul class="collapsible-item">
            <li>
              {item.description}
            </li>
          </ul>
        </div>
      </div>
    )}
  </div>
)

const ListItems = ({ data }) => (
  <div className="wrapper">
    {data.map((item, index) => 
      <div className={`item${index + 1}-area item`}>
        <p className="item-title">
          {item.digit} {item.reason}
        </p>
        <ListCodes codes={item.codes} digit={item.digit} />
      </div>
    )}
  </div>
)

const StatusList = ({ data }) => (
  <div>
    <HeaderTitles />
    <HeaderOptions />
    <ListItems data={data} />
  </div>
)

ReactDOM.render(
  <StatusList 
    data={data} 
  />,
  document.getElementById('root')
);
