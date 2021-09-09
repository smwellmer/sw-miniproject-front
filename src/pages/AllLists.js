import React from 'react'
import Post from '../components/Post'

const AllLists = (props) => {
    return props.lists.map((list) => <Post list={list} key={list.id} />)
}
 
export default AllLists