import TableItem from "../tableItem/TableItem"
import "./Table.css"

function Table(props) {

    return (
        <table  className="Table">
            <tbody>
                {
                    props.dataTable.map((item, i) => (
                        <tr key={ i }>
                            <td><TableItem
                                    name={ item.name }
                                    userName={ item.userName }
                                    email={ item.userName }
                                    phone={ item.phone }
                                />
                            </td>
                        </tr>
                    ))    
                }
            </tbody>
        </table>
    )
}

export default Table