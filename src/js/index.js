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
  return (
    <div className="options">
    <span className="tooltip" aria-label="Generate PDF">
      <button className="btn-options" onClick={()=> alert('todo, u can help me to do this :)')}>
        <img src="https://png.icons8.com/metro/100/pdf.png" />
      </button>
    </span>
    </div>
  )
}

const ListCodes = props => {
  const { value, reason, digit } = props;
  return (
    <div className="item-desc">
      <div className="item-code" data-color={digit}>
        {value}
      </div>
      <div className="item-code-title">
        {reason}
      </div>
    </div>
  )
}

const ListItems = props => {
  const { digit, reason, codes, index } = props;
  const classItem = `item${index + 1}-area item`;
  const listCodes = codes.map(item => 
    <ListCodes 
      value={item.value} 
      reason={item.reason} 
      description={item.description}
      digit={digit}
    />
  )
  return (
    <div className={classItem}>
      <p className="item-title">
        {digit} {reason}
      </p>
      {listCodes}
    </div>
  )
}

const StatusList = props => {
  const { list } = props;
  const listItems = list.map((item, index) => 
    <ListItems 
      digit={item.digit} 
      reason={item.reason} 
      description={item.description} 
      codes={item.codes} 
      index={index}
    />
  )
  return (
    <div>
      <HeaderTitles />
      <HeaderOptions />
      <div className="wrapper">
        {listItems}
      </div>
    </div>
  )
}

ReactDOM.render(
  <StatusList 
    list={data} 
  />,
  document.getElementById('root')
);