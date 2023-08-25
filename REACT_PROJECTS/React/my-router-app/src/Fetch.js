// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export let Fetch = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://jsonplaceholder.typicode.com/todos').then(
//       response => setData(response.data) // Update state with response.data
//     );
//   }, []);

//   return (
//     <div>
//         <center>
//       {data.map(item => (
//         <ul>
//         <li key={item.id}>{item.title}</li>
//         </ul>
//       ))}
//       </center>
//     </div>
//   );
// };
