import "./App.css";
import items from "./ExampleData.js";

// render an item
const Item = (item) => (
  <div style={{clear: 'both'}}>
    <img src={item.productImageUrl} alt="ProductImage" style={{margin: 5, float: 'left'}} />
    {item.contentString()}{' '}
    {item.name}<br />
    <ul>
    {item.itemSet.map(set => {
      console.log(set)
      return <li>{`${set.count}x with date ${set.date.toISOString().slice(0,10).replace(/-/g,"/")}`}</li>
    })}
    </ul>
    
  </div>
);

// Main App
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pantry Overview</h1>{" "}
        <ul style={{  listStyleType: 'none'}}>
          <li>{items.map((item) => Item(item))}</li>
        </ul>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
