import React, { useState,useEffect, useMemo } from "react";
import InputsAndButtons from "./textsOne";
import Quote from "./texts"
import Nums from "./nums"
import { v4 as uuidv4 } from 'uuid'
uuidv4()
function Head() {
  const [texts, setTexts] = useState([])
  const [nums, setNum] = useState()
    
  const addTexts = (texto) => {
    setTexts([...texts, { text: texto, id: uuidv4(), num: parseInt(nums) }])
  }
  // console.log(texts)
  // console.log("nums" +nums)
  const remove = (id) => {
    setTexts(texts.filter(text => text.id !== id))
  }
  
  const amount = texts.map(text => text.num)
 
    
  const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
  
  
  return (
    <div>
      
      <Quote income={income} expense={expense} />
      <p className="re">note: duble click to remove the transaction</p>
      
      {texts.map((acc, index) => (
        <Nums key={index} text={acc} remove={remove}/>
      ))}
    
      <InputsAndButtons addTexts={addTexts} setNum={setNum}/>
    </div>
    
);
}

export default Head