import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({list}) => {
    return <div class='listDiv'>
        <Link to={`/lists/${list.id}`}>
        <h1>{list.item}</h1>
        </Link>
        <h2>{list.list}</h2>
    </div>
}

export default Post