import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [_data, setData] = useState([{}]);


  useEffect(() => {

    fetch("http://localhost:5000/meow").then(
      res => res.json()
    ).then(
      _data => {
        setData(_data)
        console.log(_data)

      }
    )

  }, [_data]) 

  return (
      <div></div>

  )
}

export default App
