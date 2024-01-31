import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Button,
} from "semantic-ui-react";
import { Activity } from "../../app/models/activity";

interface Props {
  activity: Activity;
  cancelActivity: () => void;
  openForm : (id:string) => void;
}

export default function ActivityDetails({ activity, cancelActivity, openForm }: Props) {
  return (
    <Card fluid>
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span className="date">{activity.date}</span>
        </CardMeta>
        <CardDescription>{activity.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <Button.Group widths="2">
          <Button basic color="blue" content="Edit" onClick={()=>openForm(activity.id)}></Button>
          <Button onClick={cancelActivity} basic color="blue" content="Cancel"></Button>
        </Button.Group>
      </CardContent>
    </Card>
  );
}
