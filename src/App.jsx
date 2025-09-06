import React from 'react'
import { useState } from 'react'
import FirstSession from './FirstSession'
import User from './User'
import names from './Names'
import Namesvalue from './Names'
import Student from './Student'
import Advprops from './AdvProps'
import Wrapper from './Wrapper'
import Skills from './assets/Skills'
import Hradio from './Hradio'
import Arraydata from './Arraydata'
import ReuseCo from './ReuseCo'
import Clock from './Clock'
import College from './College'
import UseEffct from './UseEffct'
import Counter from './Counter'
import Styling from './Styling'
import Dystyle from './Dystyle'
import Exstyling from './Exstyling'
import UserProfile from './UserProfile'
import Styledcom from './Styledcom'

const App = () => {
  const [fruit, setFruit] = useState("mango");
  const [student, setstudent] = useState();
  const [val, setval] = useState("preeti ji");
  const [Name, setName] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [color, setcolor] = useState("yellow");
  const [count, setcount] = useState(0);
  const [data, setdata] = useState(0);
  const [display, setdisplay] = useState(true)


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
  const userData = [
    {
      name: 'sam',
      age: '24',
      email: 'sam@test.com',
      ID: 1,
    },
    {
      name: 'peter',
      age: '44',
      email: 'peter@test.com',
      ID: 2,
    },
    {
      name: 'tom',
      age: '34',
      email: 'tom@test.com',
      ID: 3,
    },
  ]
  const handlecolor = (event) => {
    setcolor(event.target.value)
  };

  const collegedata = [
    {
      name: "IET Alwar",
      city: "alwar",
      website: "www.iet.com",
      student: [
        {
          name: "sam",
          age: 24,
          email: "sam@test.com"
        },
        {
          name: "peter",
          age: 34,
          email: "peter@test.com"
        },
        {
          name: "tom",
          age: 44,
          email: "tom@test.com"
        },
      ]
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.delhi.com",
      student: [
        {
          name: "sam",
          age: 24,
          email: "sam@test.com"
        },
        {
          name: "peter",
          age: 34,
          email: "peter@test.com"
        },
        {
          name: "tom",
          age: 44,
          email: "tom@test.com"
        },
      ]
    },
    {
      name: "NIT delhi",
      city: "Delhi",
      website: "www.nit.com",
      student: [
        {
          name: "sam",
          age: 24,
          email: "sam@test.com"
        },
        {
          name: "peter",
          age: 34,
          email: "peter@test.com"
        },
        {
          name: "tom",
          age: 44,
          email: "tom@test.com"
        },
      ]
    },
  ]

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
      <Hradio />
      {/*------------ Loop in JSX with Map Function ---------- */}
      <Arraydata />
      {/* --------Reuse component in loop --------*/}
      {
        userData.map((user) => (
          <div key={user.ID}>
            <ReuseCo data={user} />
          </div>
        ))
      }

      {/*------------ React JS task for Props----------- */}
      <select defaultValue={"yellow"} onChange={handlecolor}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">yellow</option>
        <option value="white">white</option>
      </select>
      <Clock color={color} />

      {/*------------ Nested Looping with component --------- */}
      <h2>Nested Looping with component </h2>
      {
        collegedata.map((college, index) => (
          <div key={index}>
            <College college={college} />
          </div>
        ))
      }

      {/*------ useEffect hook---------------- */}
      <UseEffct />
      {/* lifcycle method */}
      {display && <Counter count={count} data={data} />}

      <button onClick={() => {
        setcount(count + 1)
      }}>count{count}</button>

      <button onClick={() => {
        setdata(data + 1)
      }}>data{data}</button>

      <button onClick={() => {
        setdisplay(!display)
      }}>Toggle</button>

      {/* ------------ learn css styling ------*/}
      <Styling />
      {/* ------------ Dynamic and conditional styling ------*/}
      <Dystyle />
      {/* -------------External styling ---------*/}
      <Exstyling />

      {/*----------- style with css modules ---------- */}
      <UserProfile />

      {/* ----------styled components---------- */}
      <Styledcom />
    </div>
  )
}

export default App
