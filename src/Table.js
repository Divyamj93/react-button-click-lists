import Row from './Row'

const Table = ({items}) => {
  return (
    <div className='table-container'>
        <table>
            <body>
                {items.map(item => (
                    <Row key={item.id} item={item}/>
                ))}
            </body>
        </table>
    </div>
  )
}

export default Table