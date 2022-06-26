import "./TableItem.css"

function TableItem(props) {
    return (
        <div className="TableItem">{ props.name }
        <div>{ props.userName }</div>
        </div>
    )
}

export default TableItem