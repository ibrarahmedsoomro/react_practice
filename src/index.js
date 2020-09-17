import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


const name = "ibrar"
const img = "https://picsum.photos/id/1/200/300"
const img2 = "https://picsum.photos/id/100/200/300"
const img3 = "https://picsum.photos/id/700/200/300"
const img4 = "https://picsum.photos/id//200/300"
const link = "https://github.com/ibrarsoomro"


let curreDate = new Date()
curreDate = curreDate.getHours();
let greeting = "";

const cssStyle = {};

if (curreDate >= 1 && curreDate < 12) {

  greeting = "Good Morning";
  cssStyle.color = "Green";
}
else if (curreDate >= 12 && curreDate < 19) {
  greeting = "Good after noon";
  cssStyle.color = "Orange";
}

else {
  greeting = "good night";
  cssStyle.color = "Black";
}

ReactDom.render(<>

  <div className="headings">
    <h1>Hello sir <span style={cssStyle}>{greeting}</span></h1>
  </div>
  <div>

    <h1 className="headings">my name is {name}</h1>

    <div className="image1">
      <img src={img} alt="RandomImages" />
      <img src={img2} alt="RandomImages" />
      <img src={img3} alt="RandomImages" />

      <a href={link} target="_github">
        <img src={img4} alt="RandomImages" />
      </a>
    </div>
  </div>

  
</>,
  document.getElementById("root")
)


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
