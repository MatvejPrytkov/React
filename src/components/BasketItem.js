import React from 'react'
import "./css/BasketItem.css"
import ItemInfo from './ItemInfo'
import ItemPrice from './ItemPrice'
import Counter from './Counter'
const BasketItem = ({
uid,
title,
description,
price,
qty,
}) => {
return (
<div className='BasketItem' >
<ItemInfo title={title} description={description} />
<ItemPrice value={price} currency={'P'} />
<Counter value={qty} uid={uid} />
<ItemPrice value={qty * price} currency={'P'} />
</div>)}
export default BasketItem 
