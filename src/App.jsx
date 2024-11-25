
// import React, { useState } from 'react';
// import InputComponent from './InputComponent';
// import DisplayComponent from './DisplayComponent';
import YoutubeForm from './components/YoutubeForm';
 
const App = () => {
  // const [sharedText, setSharedText] = useState('');
 
  // const handleTextChange = (newText) => {
  //   setSharedText(newText);
  // };
 
  return (
<div>
<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

<YoutubeForm/>


{/* <h1>React State Lifting Example</h1>
<InputComponent onTextChange={handleTextChange} />
<DisplayComponent text={sharedText} /> */}
</div>
  );
};

export default App;
