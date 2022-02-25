import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}
const TableBody = () => {
    const rows = props.CharacterData.map((row,index) =>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}
class Table extends Component {
    render() {
        const {CharacterData} = this.props
        return (
            <table>
                <TableHeader />
                <TableBody CharacterData={CharacterData}/>
            </table>
        )
    }
}

export default Table