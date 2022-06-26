import './App.css';
import AddTableItem from './components/addTableItem/AddTableItem';
import Table from './components/table/Table';
import TableItem from './components/tableItem/TableItem';

function App() {
  return (
    <div className="App">
      <AddTableItem />
      <TableItem />
      <Table />
    </div>
  );
}

export default App;
