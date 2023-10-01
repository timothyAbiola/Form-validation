import React,{useState} from 'react'

const Index = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [myNumber, setmyNumber] = useState(0)
 
  // const increase = () => {
  //   setmyNumber(myNumber + 1)
  //   console.log(myNumber);
  // }
  return (
    <>
      {/* <h1>This is the test component</h1>
      <h1>{myNumber}</h1>
      <button onClick={() =>setmyNumber(myNumber + 1)}>Increase</button> */}
      <h1>School Portal</h1>
      <input type="text" placeholder="First Name" onChange={firstname}/>
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button>Sign Up</button>
    </>
  );
}

export default Index