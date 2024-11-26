// import React, { useState } from 'react';

// function ExampleData() {
//   const [data, setData] = useState({});

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:5000/users', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const result = await response.json();
//     console.log(result);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" onChange={e => setData({...data, name: e.target.value})} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ExampleDtata;
