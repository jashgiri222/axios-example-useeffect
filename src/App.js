import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');

  const fetchData = () => {
    const Url = 'https://jsonplaceholder.typicode.com/users'
    axios
      .get(Url)
      .then((resp) => {
        setResponse(resp.data);
        console.log("Data", response)
      })
      .catch((err) => {
        setError(error);
      })

  };

  useEffect(() => {
    fetchData();
  }, []);



  return (

  
    <>
      {response.map((data) => (
        <div key={data.id}>
          <br></br>
          <br></br>
        <li>{data.name}
        <br></br>
        <br></br>
        {data.email}
        </li>
         
         </div>
      

      ))}


    </>
  );
}

export default App;
