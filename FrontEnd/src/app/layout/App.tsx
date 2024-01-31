import { useState, useEffect } from "react";
import {v4 as uuid} from 'uuid'
import { Box } from "@mui/material";
import { Activity } from "../models/activity";
import Navigation from "./Navigation";
import ActivityDashboard from "../../features/Activities/ActivityDashboard";
import agent from "../API/agent";
import LoadingCompomnent from "./LoadingComponents";

function App() {
  const [count, setCount] = useState(0);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  //here usestate can be both of type Activity and/or undefined
  //while usestate is used for state management
  //another hook called side effect is used to perform operations which do not affect the DOM directly
  //like fetching data and directly updating DOM
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  //here we are using axios, a 3rd party lib, to get better results while dealing with the data
  useEffect(() => {
   agent.Activities.list().then(response => {
     const activities: Activity[] = [];
     response.forEach((activity: Activity) => {
       activity.date =activity.date.split('T')[0];
       activities.push(activity);
     });
     setActivities(activities);
     setLoading(false);
   })
  }, []); // the empty brackets in the end are used to create a list or array of all the values we are getting in the side effect
function handleSelectActivity(id:string) {
  setSelectedActivity(activities.find(x=>x.id===id));
}
function handleCancelSelectedActivity(){
  setSelectedActivity(undefined);
}
function handleformOpen(id? :string){
  id ? handleSelectActivity(id) : handleCancelSelectedActivity();
  setEditMode(true);
}
function handleFormClose() {
  setEditMode(false);
}

function handleCreateOrEditActivity(activity : Activity)
{
  setSubmitting(true);
  if (activity.id) {
    agent.Activities.update(activity).then(()=>{
      setActivities([...activities.filter(s=>s.id !== activity.id), activity]) 
      setSelectedActivity(activity);
      setEditMode(false);
      setSubmitting(false);
    })
  }
  else {
    activity.id = uuid();
    agent.Activities.create(activity).then(()=>{
      setActivities([...activities, activity]);
      setSelectedActivity(activity);
      setEditMode(false);
      setSubmitting(false);
    })
  }
}

function deleteActivity(id: string) {
  setSubmitting(true);
  agent.Activities.delete(id).then(()=>{
    setActivities([...activities.filter(x=>x.id !== id)])
  })
  
}
if (loading) {
  return (
    <LoadingCompomnent content="Loading"/>
  )
}
  return (
    <Box sx={{ flexgrow: 1 }}>
      <Navigation openForm = {handleformOpen}></Navigation>
      <ActivityDashboard 
      activities={activities}
      selectedActivity = {selectedActivity}
      selectActivity ={handleSelectActivity}
      cancelActivity = {handleCancelSelectedActivity}
      editMode  = {editMode}
      openForm={handleformOpen}
      closeForm={handleFormClose}
      handleCreateActivity ={handleCreateOrEditActivity}
      deleteActivity = {deleteActivity}
      submitting = {submitting}

       />
       <p>I've rendered {count} times!</p> 
    </Box>
    
  );
}
export default App;
