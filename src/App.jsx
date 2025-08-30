import React from 'react'
import { useState } from 'react'
import FirstSession from './FirstSession'
import User from './User'
import names from './Names'
import Namesvalue from './Names'
import Student from './Student'
import Advprops from './AdvProps'
import Wrapper from '../Wrapper'
import Skills from './assets/Skills'

const App = () => {
  const [fruit, setFruit] = useState("mango");
  const [student, setstudent] = useState();
  const [val, setval] = useState("preeti ji");
  const [Name, setName] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();


  function handlevalue() {
    setFruit("grapes")
  }
  const username = "priya sharma";
  const userage = 20;
  const useremail = "ps@test.com";
  let userObject = {
    name: "john",
    age: 24,
    email: " abc@test.com"
  }
  let userObject2 = {
    name: "peter",
    age: 25,
    email: " abcde@test.com"
  }
  let userarray = ["sam", "peter", "tom"]

  return (
    <div>
      <h1>{fruit}</h1>
      {/* <button onClick={()=>{
        setFruit("banana")
      }}>change fruit</button>  */}
      <button onClick={() => handlevalue()}>change fruit Value</button>
      <FirstSession />
      {/* <User name={"preeti sharma"} age={24} email={"ps@test.com"} /> */}
      {/* <User name={username} age={userage} email={useremail} /> */}
      <User user={userObject} />
      <User user={userObject2} />
      <Namesvalue value={userarray} />
      {/* ----------rendering when we  have two condition------- */}
      {student ? <Student name={student} /> : "no student"}
      {/* ----------rendering when we  have one condition------- */}
      {student && <Student name={student} />}
      <button onClick={() => {
        setstudent("ravi")
      }}>shoe student name</button>


      <Advprops name={"my name is preeti"} />
      <Advprops />
      <Advprops />
      {/*------------------- deault props and pass jsx props-------- */}
      <Wrapper color="orange">
        <h2>Your name is diya</h2>
      </Wrapper>
      <Wrapper>
        <h2>Your name is diya</h2>
        <h3>You are login</h3>
      </Wrapper>

      {/* ----------Get input value -----------------------*/}
      <h2>Get Input Field Value</h2>
      <input type="text" value={val} onChange={(event) => setval(event.target.value)} placeholder='field value' />
      <h2>{val}</h2>
      <button onClick={() => setval("")}>Clear</button>

      {/* ----------Controlled component ------------- */}
      <form action={''} method='get'>
        <input type='text' value={Name} onChange={(event) => setName(event.target.value)} placeholder='enter name' /><br /><br />
        <input type='password' value={password} onChange={(event) => setpassword(event.target.value)} placeholder='enter password' /><br /><br />
        <input type='email' value={email} onChange={(event) => setemail(event.target.value)} placeholder='enter email' /><br /><br />
        <button>submit</button>
      </form>
      <button onClick={() => {
        setName(""); setemail(""); setpassword("")
      }}>clear</button>
      <h2>{Name}</h2>
      <h2>{password}</h2>
      <h2>{email}</h2>
      {/* ---------handle checkbox ---------- */}
      <Skills />
      {/*-------------- Handle Radio and Dropdown------ */}

    </div>
  )
}

export default App
