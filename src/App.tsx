import { ChangeEvent, FormEvent, useState } from "react";

import css from "./App.module.css";
interface Field {
  name:string;
  password:string;
}

const initFormField: Field = {
  name:"",
  password:"",
}


function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [fields, setFields] = useState(initFormField);

  const getInputData = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    if(name === "name") {
      setName(value);
    } else if (name === "password") {
      setPassword(value);
    }
    setFields(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });

  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetField();
  }
  const resetField = () => {
    setName("");
    setPassword("");
  }
  return (
    <>
    <div className={css.wrapper}>
      <form onSubmit={submitForm}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={getInputData}/>
        {/* <input type="password"/> */}
        <label>Password</label>

        <input type="password" name="password" value={password} onChange={getInputData}/>
      <button type="submit">Add</button>
      </form>
    </div>
    </>
  )
}

export default App
