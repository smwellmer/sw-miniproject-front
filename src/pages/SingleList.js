import React from 'react'
import {Link} from 'react-router-dom'
//import AllLists from './AllLists'

const SingleList = ({lists, match, edit, deleteList}) => {

    const id = parseInt(match.params.id)
    const list = lists.find((list) => list.id === id)

    return(
         <div className='singleList'>
             <h1>{list.item}</h1>
             <h2>{list.list}</h2>
             <button onClick={(event) => edit(list)}>Edit</button>
             <button onClick={(event) => deleteList(list)}>Delete</button>
             <Link to='/'>
                 <button>Go Back</button>
            </Link>
         </div>
    )
}

export default SingleList