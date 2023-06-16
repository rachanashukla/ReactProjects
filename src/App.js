import './App.css';
import MouseTracker from './components/MouseTracker';
import ReusableMouseTracker from './components/ReusableMouseTracker';

/* 111 const address = {
 street: "minhang",
 city: "shanghai"
};

const {street: s, city:c} =address;

//result is 
// minhang
//shanghai
console.log(s);
console.log(c);
*/

// 333
//result : Fred Smith Undefined Undefined
/*const name  = (firstName :"Sallay", lastName:"Brown") => {
  return [firstName, lastName];
}

let [firstName, lastName] = name("Fred", "Smith");
console.log(firstName);
console.log(lastName);

[firstName, lastName] = name();
console.log(firstName);
console.log(lastName);
*/


function App() {
  //var v = ["PHP","ES6","JAVA"]
  return (
      /* 222 <div>
        {v.map(it => <p>{it}</p>)}
      </div>
      //result is PHP ES6  JAVA
      */
     <div>
      <h1> This is the result</h1>
      <MouseTracker/>
     <ReusableMouseTracker/>
     </div>
     
  );
}

export default App;
