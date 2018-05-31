const data = data;

const ListCodes = props => {
  const { value, reason, digit } = props;
  return (
    <div class="item-desc">
      <div class="item-code" data-color={digit}>
        {value}
      </div>
      <div class="item-code-title">
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
    <div class={classItem}>
      <p class="item-title">
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
      <h1 class="title">
        Learn the basics concepts about HTTP status code
      </h1>
      <h3 class="sub-title">
        This is a list of HTTP status code that might be returned when a browser requests a service from a web service
      </h3>
      <div class="wrapper">
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