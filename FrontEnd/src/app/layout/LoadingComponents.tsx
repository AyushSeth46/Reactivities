
import { Dimmer, Loader } from "semantic-ui-react";

interface Props {
    inverted?: boolean;
    content:string;
}
/**
 * Loading component is there to replace the blank screen that comes before the API content is retrived
 * @param content 
 * @returns a loader which rotates and shows a loading screen
 */
export default function LoadingCompomnent({inverted = true, content = "Loading"}: Props) {
    return (
        <Dimmer active ={true} inverted ={inverted}>
            <Loader content={content}/>
        </Dimmer>
    )
}