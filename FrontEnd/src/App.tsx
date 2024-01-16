import './App.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import Button from '@mui/material/Button'
import { AppBar, List, ListItemText,  Typography } from '@mui/material';
function ThisFunction() {
  console.log("clicked")
}
function App() {
  const [count, setCount] = useState(0);
  const [activities,setActivities] = useState([]);
  //while usestate is used for state management
  //another hook called side effect is used to perform operations which do not affect the DOM directly
  //like fetching data and directly updating DOM 
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
//here we are using axios, a 3rd party lib, to get better results while dealing with the data
  useEffect(()=>{
    axios.get('http://localhost:5000/api/activities').then(response =>{
      setActivities(response.data)
      console.log(response.data)
    })
  },[])// the empty brackets in the end are used to create a list or array of all the values we are getting in the side effect

  return(
    <div>
       <AppBar position="static">
       <Typography variant="h6" component="div" sx={{ flexGrow: 5 }}>
            Reactivities
          </Typography>
    </AppBar>
      <h1>I've rendered {count} times!</h1>
      <List>
        {activities.map((activity : any)=>( 
        <ListItemText key={activity.id}> 
            {activity.title}
        </ListItemText>
        )
         
      )}
      </List>
      <div>
      {/* The expression checks if the activities array is either null or empty. If it is, the h1 element with the text “duh!!!” is rendered. Otherwise, nothing is rendered. */}
      {activities == null || activities.length === 0 ? (
        <h1>duh!!!</h1>
      ) : null}
    </div>
    <Button variant='contained' onClick={ThisFunction}>Yo Check this out</Button>
    </div>
  ) 
}
export default App
