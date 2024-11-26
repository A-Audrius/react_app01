
// import React, { useState } from 'react';
// import InputComponent from './InputComponent';
// import DisplayComponent from './DisplayComponent';
// import YoutubeForm from './components/YoutubeForm';
// import ExampleDtata from "./ExampleData";
import FormsData from "./components/forms/FormsData";
import { getAllData } from "./components/helpers/get"
import { useState, useEffect } from "react";
import UsersList from "./components/forms/UsersList"


const App = () => {
  // const [sharedText, setSharedText] = useState('');

  // const handleTextChange = (newText) => {
  //   setSharedText(newText);
  // };

  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(0);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const data = await getAllData();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    }
  }


  useEffect(() => {
    fetchData()
  }, [update]);




  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>


      <FormsData setUpdate = {setUpdate}/>

      {!error && <UsersList  usersList={users}/>}
      {error&&<p>{error}</p>}



      {/* <YoutubeForm/> */}
      {/* <ExampleDtata/> */}
      {/* <h1>React State Lifting Example</h1>
<InputComponent onTextChange={handleTextChange} />
<DisplayComponent text={sharedText} /> */}
    </div>
  );
};

export default App;
