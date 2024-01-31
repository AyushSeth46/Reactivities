import { Activity } from "../../app/models/activity";
import { Button, Item, ItemHeader, Label, Segment } from "semantic-ui-react";
import {  useState } from "react";

interface Props {
  activities: Activity[];
  deleteActivity : (id : string) => void;
  selectActivity: (id: string) => void;
  submitting: boolean
}

export default function ActivityList({ activities, selectActivity, deleteActivity, submitting }: Props) {
  const [target, setTarget] = useState('');
  function handleActivityDelete( id: string){
    setTarget(id);
    deleteActivity(id);
  }
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <ItemHeader as="a">{activity.title}</ItemHeader>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectActivity(activity.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                name = {activity.id}
                onClick={()=> handleActivityDelete(activity.id)}
                floated = "right"
                content = "Delete"
                color="red"
                loading={submitting && target===activity.id}
                 />
                
                {/* diractly passsing activityid will get processed as soon as page renders, 
                so we need to wrap it up as a function to prevent that 
                also it is passing the id of selected activity as prop upwards toward the DOM */}
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
