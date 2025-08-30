// import React from 'react'
// import { useState } from 'react'

import { useState } from "react";

// const App = () => {
//   function handleClick() {
//     alert('you clicked me')
//   }
//   const myname = undefined;
//   let x = 5;
//   let y = 10;
//   const [counter, setCounter] = useState(0);
//   function fruit() {
//     return "mango";
//   }
//   function operation(a, b, op) {
//     if (op == "+") {
//       return a + b;
//     }
//     else if (op == "-") {
//       return a - b;
//     }
//     else {
//       return a * b;
//     }
//   }
//   const userobject = {
//     name: "john",
//     email: "ps@test.com",
//     age: 24,
//   }
//   const userArray = ["sam", "peter", "tom"]
//   const path = "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg";

//   // ------------normal function--------

//   function callme() {
//     alert("you clicked me");
//   }
//   // ------arrow function--------
//   const fruits = () => {
//     return "i m arrow function";
//   }
//   const fruitsName = (whatfruit) => {
//     return alert(whatfruit);
//   }
//   // -------------------
//   return (
//     <div>
//       <h1>this is a cat card</h1>
//       <img src="https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg" alt="cat" />
//       <p>this is a cat</p>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Minus a aut doloribus nihil error, qui ullam ipsam,
//         maxime delectus facilis necessitatibus animi maiores
//         veritatis odio doloremque autem, iure in eaque.</p>
//       <button onClick={handleClick}>click me</button>
//       <h1>my name is {myname}</h1>
//       <h1>the sum of {x} and {y} is : {x * y}</h1>
//       <h2> the counter value is :{counter}</h2>
//       <button onClick={() => {
//         setCounter(counter + 1);
//       }}>increment</button>
//       <button onClick={() => {
//         setCounter(counter - 1);
//       }}>decrement</button>
//       <br />
//       {fruit()}
//       <h2>{operation(10, 7, "/")}</h2>
//       <h2>{myname ? myname : "user not found"}</h2>
//       {userobject.age >= 18 ? <h2>you are eligible to vote</h2> : <h2>you are not eligible to vote</h2>}
//       <h2>{userobject.name}</h2>
//       <h2>{userobject.email}</h2>
//       <h2>{userobject.age}</h2>
//       <h2>{userArray[0]}</h2>
//       <img src={path} alt="cat" />
//       <br />
//       <br />
//       <h2>{fruits()}</h2>
//       <button onClick={callme}>call me</button><br />
//       <button onClick={() => fruitsName('I am bnana')}>Banana</button>
//       <button onClick={() => fruitsName('I am Apple')}>Apple</button>

//     </div>
//   )
// }

// export default App;

const Toggle = () => {

    const [Toggle, setToggle] = useState(true);
    const [countToggle, setcountToggle] = useState(0);
    return (
        <>
            {/* single conditional rendering */}
            <button onClick={() => { setToggle(!Toggle) }}>view toggle</button>
            {Toggle ? <h2>this is a toggle</h2> : null}

            {/* multiple conditional rendering */}
            {countToggle == 0 ? <h2 style={{ color: "red" }}>this is 0</h2> :
                countToggle == 1 ? <h2 style={{ color: "blue" }}>this is 1</h2> :
                    countToggle == 2 ? <h2 style={{ color: "green" }}>this 2 </h2> :
                        countToggle == 3 ? <h2 style={{ color: "green" }}>this is 3 </h2> :
                            countToggle == 4 ? <h2 style={{ color: "green" }}>this is 4 </h2> :
                                <h2>no  found</h2>}
            <button onClick={() => { setcountToggle(countToggle + 1) }}>update counter</button>
        </>
    )
}
export default Toggle;

