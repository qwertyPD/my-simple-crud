import './App.css';
import { useState, useEffect } from "react"
import AddTableItem from './components/addTableItem/AddTableItem';
import Table from './components/table/Table';

function App() {

  const [data, setData] = useState([])
  const URL = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => { 
      getData()
    }, [])

  const getData = () => {
      fetch(URL)
          .then(response => response.json())
          .then(json => {
               setData(json)
          })
          .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <AddTableItem setDataTable={ setData } />
      <Table dataTable={ data } />
    </div>
  );
}

export default App;
