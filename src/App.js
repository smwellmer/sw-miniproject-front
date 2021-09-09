import AllLists from "./pages/AllLists";
import SingleList from "./pages/SingleList";
import Form from "./pages/Form";

import React, {useState, useEffect} from 'react'
import {Route, Switch, Link} from 'react-router-dom'

function App(props) {

// State and Other Variables
  // our API URL
  const url = 'https://sw-miniproject-back.herokuapp.com/lists/'

  // state to hold the list of Lists
  const [lists, setLists] = useState([])

  const nullList = {  
    list: "",
    item: ""
  }

  const [targetList, setTargetList] = useState(nullList)

// Functions

// get list of lists from API
  const getLists = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setLists(data)
  }
// make a function to create a list
  const addLists = async (newList) => {
    const response = await fetch(url, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList)
    })
    getLists()
  }

  // function that will select the list to edit

  const getTargetList = (list) => {
    setTargetList(list)
    props.history.push("/edit")
  }

  // function  that will edit list on form submission
  const updateList = async (list) => {
    const response = await fetch(url + list.id + '/', {
      method: 'put',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(list)
    })
    getLists()
  }


  // delete list on form submission
  const deleteList = async (list) => {
    const response = await fetch(url + list.id +'/', {
      method: 'delete',
    })
    getLists()
    props.history.push('/')
  }

// useEffects

  useEffect(() => {
    getLists()
  }, [])

// Returned JSX

  return (
    <div className="App">
      <h1 class='title'>A place for all your lists!</h1>
      <Link to="/new"><button class='newListButton'>Create a New List</button></Link>
    <Switch>
      <Route
        exact path = '/' 
        render={(routerProps) => <AllLists 
          {...routerProps} 
          lists={lists}/>}
      />
      <Route
          path="/lists/:id"
          render={(routerProps) => <SingleList 
            {...routerProps} lists={lists} 
            edit={getTargetList} 
            deleteList={deleteList}
          /> }
        />
      <Route 
        path = '/new' 
        render={(routerProps) => (
        <Form 
          {...routerProps}
          initialList={nullList}
          handleSubmit={addLists}
          buttonLabel='create list'
        />
        )}
      /> 
      <Route
          path="/edit"
          render={(routerProps) =>
             <Form 
            {...routerProps}
            initialList={targetList}
            handleSubmit={updateList}
            buttonLabel="Update List"
            />}
        />
    </Switch>
    </div>
  );
}

export default App;
