import React from 'react'
import  {MdDelete}  from "react-icons/md";

const List = (props) => {
    console.log(props)
    return (
    <>
    { props.items.map((item, index) => {
        return <div key={item.id} className='item-container'>
                <p className='item-para'>{index + 1 }. {item.itemName}</p>
                <div className="btn-container">
                <button className='btn' onClick={() => {
                    return  props.removeItem(item.id)}} >
                    <MdDelete className='btn-icon' />
                </button>                
                </div>
            </div>
        })
}
    </>
  )
}

export default List
