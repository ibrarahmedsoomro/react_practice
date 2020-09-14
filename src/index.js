import React from 'react';
import ReactDom from 'react-dom';

const name = "ibrar"
const img = "https://picsum.photos/id/1/250/300"
const img2 = "https://picsum.photos/id/100/300/300"
const img3 = "https://picsum.photos/id/700/300/300"
const img4 = "https://picsum.photos/id//500/300"
const link = "https://github.com/ibrarsoomro"


ReactDom.render(<>
  <h1 contentEditable="true">my name is {name}</h1>


  <img src={img} alt="RandomImages" />
  <img src={img2} alt="RandomImages" />
  <img src={img3} alt="RandomImages" />

  <a href={link} target="_github">
  <img src={img4} alt="RandomImages" />
  </a>

</>
  ,
  document.getElementById("root"))


// const name = "ibrar ahmed";

// const currentDate = new Date().toLocaleDateString;
// const currentTime = new Date().toLocaleTimeString;
// ReactDom.render( <>
//   <h1>{`My name is ${name} ${surname}`}</h1> 
// <p>there is a sum of {5*5} </p>
// </>
// , document.getElementById("root"));

// ReactDom.render(
//   <>
//     <h2>hellow world my name is {name}</h2>

//     <h3>current date = {currentDate}</h3>
//     <p>current time = {currentTime}</p>

//   </>, document.getElementById('root'));
