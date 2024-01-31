
import { Dimmer, Loader } from "semantic-ui-react";

interface Props {
    inverted?: boolean;
    content:string;
}
export default function LoadingCompomnent({inverted = true, content = "Loading"}: Props) {
    return (
        <Dimmer active ={true} inverted ={inverted}>
            <Loader content={content}/>
        </Dimmer>
    )
}