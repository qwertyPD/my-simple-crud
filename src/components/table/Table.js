import { useState, useEffect } from "react"
import TableItem from "../tableItem/TableItem"
import "./Table.css"

function Table() {

    const [data, setData] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => { 
        getData()
     }, [])

    const getData = () => {
        fetch(URL)
            .then(response => response.json())
            .then((json) => {
                setData(json)
            })
    }

    return (
        <table  className="Table">
            <tbody>
                {
                    data.map((item, i) => (
                        <tr key={i}>
                            <td><TableItem name={ item.name } /></td>
                        </tr>
                    ))    
                }
            </tbody>
        </table>
    )
}

export default Table