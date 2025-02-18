import React from 'react'
import "./Notice.css"
import Notice_List from './Notice_List';
const Notice = ({ noticelist }) => {
    return (
        <>
            <ul className='noticelist'>
                {noticelist.map(expense => {
                    return (<Notice_List
                        key = {expense.id}
                        noticelist = {expense}
                    />)
                })}
            </ul>
        </>
    )
}

export default Notice