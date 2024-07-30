import "./App.css";
import Basket from "./components/Basket.js";
import Clicker from './components/Clicker'
import Like from "./components/Like.js";
function App() {
const items = [
{
uid: "86ed58db-082d-45ab-aa81-5218059349cb",
title: "Товар1",
description: "описание товара 1",
price: 1200,
qty: 1,
},
{
uid: "@5542e59-7a90-4e80-bf9d-78967F272049",
title: "Товар2",
description: "описание товара 2",
price: 800,
qty: 1,
},
{
uid: "7793е4+0-1е86-47сс-98+6-е0166БееБЗа+" ,
title: "Товар3",
description: "описание товара 3",
price: 250,
qty: 2,
},]
return (
<div className="App">
<header className="App-header" >
<h1>Корзина</h1>

<Clicker value={2}/>
<Like value={1}/>
<Basket items={items} />
</header>
</div>


)

 }
export default App; 
