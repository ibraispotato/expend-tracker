/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
uuidv4()
function Quote({income,expense}) {

  return (
    <div>
      <div className="texts">
        <p>expense</p>
        <p>${expense< -1 ? income : income - expense}</p>
      </div>
    
    <div className="numbers">
      <div className="income">
        <p>INCOME</p>
        <p className="numINCOME">${income}</p>
        </div>
        <div className="stick"></div>
      <div className="expense">
        <p>EXPENSE</p>
        <p className="numEXPENSE">{expense}</p>
        </div>
        
      </div>
      <h3 className="his">History</h3>
      <div className="widths"></div>
  </div>
    )
    
  }

export default Quote