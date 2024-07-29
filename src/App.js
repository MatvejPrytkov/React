import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello';
const exp1 = <div className="some">2 + 3 = {2 + 3}</div>
const date = new Date();
const odd = <div>нечётный</div>
const even = <div>чётный</div>
const result = date.getHours() % 2 ? odd : even
const imageURL = 'https://placekitten.com/100/100';
const image = <img src={imageURL} />;
// const jsxItems = [
//   <h1>Заголовок1</h1>,
//   <h2>Заголовок2</h2>,
//   <h3>Заголовок3</h3>,
//   image,
//   result
// ]

const users = [
  {
    id:1235,
    name:'Efim',
    job:'Efim'
  },
  {
    id:1236,
    name:'Matvej',
    job:'Python-programmer'
  },
  {
    id:1238,
    name:'Alina',
    job:'House'
  },
]
const jsxItems = users.map( user =>{
return <div className='user' key={user.id}>

  <h3>{user.name}</h3>
  <p>{user.job}</p>
</div>
})



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        {jsxItems}
        {image}
        <h1>Привет, мир!</h1>
        <Hello name ='Матвей' text="Привет" />
        <Hello name ='Артём' text="Hello"></Hello>
        <Hello name ='Геннадий' />
        <Hello onClickHandler={()=> alert('Ура')}></Hello>
        {exp1}
        {date.toLocaleTimeString()}
 {result}

      </header>
    </div>
  );
}

export default App;
