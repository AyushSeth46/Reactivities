import { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
interface Props {
    activity : Activity | undefined;
    closeForm: ()=> void;
    createOrEdit: (activity: Activity) => void;
    submitting : boolean;
    // closeForm is a function that takes no arguments and returns nothing. 
    //it could also be sepratly written as a diffrent function like function CloseForm() {returns void}
    //then closeForm : closeForm
}
export default function ActivityForms({activity :selectedActivity  , closeForm, createOrEdit, submitting}: Props){
    const initialState = selectedActivity ?? {
        id:'',
        title : '',
        description:'',
        category: '',
        date: '',
        city: '',
        venue:''
    }

    const [activity, setActivity] = useState(initialState)
    function submitHandler() {
        createOrEdit(activity);
    }
    function changeHandler(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity,[name]: value})
        //here setActivity is replacing the name(as given in <Form> element) to the value of the element (aslos defined in <Form>)
    }
    return(
        <Segment clearing>
            <Form onSubmit={submitHandler} autoComplete = 'off'>
               <Form.Input placeholder='Title'value ={activity.title} name='title' onChange={changeHandler}/> 
               <Form.TextArea placeholder='Description'value ={activity.description} name='description' onChange={changeHandler}/> 
               <Form.Input placeholder='Category'value ={activity.category} name='category' onChange={changeHandler}/> 
               <Form.Input type="date" placeholder='Date'value ={activity.date} name='date' onChange={changeHandler}/> 
               <Form.Input placeholder='City'value ={activity.city} name='city' onChange={changeHandler}/> 
               <Form.Input placeholder='Venue'value ={activity.venue} name='venue' onChange={changeHandler}/> 
               <Button loading={submitting} floated='right' positive type="submit" content='Submit'/>
               <Button onClick={closeForm} floated='right'  type="button" content='Cancel'/>

            </Form>
        </Segment>
    )
}

//he setActivity function is called with a new object that is created by spreading the current activity object and replacing the property with the name that matches the name variable with the new value. This updates the activity object with the new value that was typed into the input field.