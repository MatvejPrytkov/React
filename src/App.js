import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello';
import { Currenttime } from './components/Currenttime.js';
import { Mortgage } from './components/Mortgage.js';
import Button from './components/Button.js';


const buttons = [
  {value: 'Кнопка1', fn: ()=> console.log(1)},
  {value: 'Кнопка2', fn: ()=> console.log(2)},
  {value: 'Кнопка3', fn: ()=> console.log(3)},
  {value: 'Кнопка4', fn: ()=> console.log(4)},
 ]
 const mybuttons = [
  {value: 'Привет', fn: ()=> alert('Привет')},
  {value: 'Пока', fn: ()=> alert('Пока')},
  {value: 'Как дела?', fn: ()=> alert('Нормально')},
  {value: 'Что делаешь?', fn: ()=> alert('Учу react')},
 ]
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

// const users = [
//   {
//     id:1235,
//     name:'Efim',
//     job:'Efim'
//   },
//   {
//     id:1236,
//     name:'Matvej',
//     job:'Python-programmer'
//   },
//   {
//     id:1238,
//     name:'Alina',
//     job:'House'
//   },
// ]
// const jsxItems = users.map( user =>{
// return <div className='user' key={user.id}>



//   <h3>{user.name}</h3>
//   <p>{user.job}</p>
// </div>
// })

const buttonmap = buttons.map(button =>{
  return <Button value={button.value} onClickHandler={button.fn}></Button>
})
const my_buttons = mybuttons.map(button =>{
  return <Button value={button.value} onClickHandler={button.fn}></Button>
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
       
        {/* {jsxItems} */}
        {image}
        {my_buttons}
        <h1>Привет, мир!</h1>
        <Hello name ='Матвей' text="Привет" />
        <Hello name ='Артём' text="Hello"></Hello>
        <Hello name ='Геннадий' />
        <Hello onClickHandler={()=> alert('Ура')}></Hello>
        <Currenttime></Currenttime> <br />
        <Mortgage S={10_000_000} p={10} n={20}></Mortgage><br />
        <Mortgage S={10_000_000} p={10} n={15}></Mortgage><br />
        <Mortgage S={10_000_000} p={10} n={10}></Mortgage><br />
        <Button value={'Моя кнопка!'} onClickHandler={()=>alert('Ура!')} /><br />
        <Button value={'Button'} onClickHandler={()=>alert('Yes!')} /><br />
        <Button value={'Button3'} onClickHandler={()=>alert('Круто!')} /><br />
         {buttonmap}
  
        {exp1}
        {date.toLocaleTimeString()}
 {result}

      </header>
    </div>
  );
}

export default App;
