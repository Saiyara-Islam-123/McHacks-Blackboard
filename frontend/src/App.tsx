import { useEffect} from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const fetchAPI =async() => {
  
  const _response = await axios.get("http://localhost:5000");
  console.log(_response)

  };

  useEffect(() => {fetchAPI()}, [])

  return (
      <div></div>

  )
}

export default App
