import React from "react";
import './JokesItems.css';



const JokesItem = ({ data }) => {
    
  return (
    data.result.map((i, index) =>(
        <div className="joke__card" key={index}>
      <p className="joke__text">{i.value}</p>
      <p className="joke__id">ID: {i.id}</p>
      <p className="joke__id">{i.created_at}</p>
    </div>
    ))
    
  );
};

export default JokesItem;

