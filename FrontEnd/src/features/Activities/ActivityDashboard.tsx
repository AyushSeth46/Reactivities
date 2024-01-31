import { Grid } from "semantic-ui-react";
import { Activity } from "../../app/models/activity";
import ActivityDetails from "./ActivityDetails";
import ActivityList from "./ActivityList";
import ActivityForms from "./forms/activityForms";
interface Props {
  activities: Activity[];
  selectedActivity : Activity | undefined;
  selectActivity: (id : string) => void;
  cancelActivity: () => void;
  editMode: boolean;
  openForm : (id:string) => void;
  closeForm : ()=> void;
  handleCreateActivity:(activity : Activity) => void;
  deleteActivity : (id: string) => void;
  submitting: boolean
}
//this interface will define the type of every property which will be passing down
export default function ActivityDashboard({ activities, selectActivity, selectedActivity, cancelActivity, editMode, openForm,closeForm, handleCreateActivity, deleteActivity, submitting }: Props) {
  //here we are destructuring Props
  //while we can write props: Props, it will needed to add confusing codes like props.activities, props.selectActivites
  //so we destricture the  interface and make all parameters directly availiable
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList submitting = {submitting} activities={activities} selectActivity ={selectActivity} deleteActivity = {deleteActivity}/>
        <div>
          {/* The expression checks if the activities array is either null or empty. If it is, the h1 element with the text “duh!!!” is rendered. Otherwise, nothing is rendered. */}
          {activities == null || activities.length === 0 ? (
            <h1>duh!!!</h1>
          ) : null}
        </div>
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode &&
        <ActivityDetails activity={selectedActivity} cancelActivity={cancelActivity}
        openForm = {openForm}
        />}
        { editMode && <ActivityForms closeForm = {closeForm} activity = {selectedActivity} createOrEdit = {handleCreateActivity} submitting ={submitting}/>
}</Grid.Column>
    </Grid>
  );
}
