import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';


function NewMeetupsPage() {

    const navigate = useNavigate();
    function onAddMeetupHandler(meetupData) {
        fetch('https://react-testproject-e2b52-default-rtdb.firebaseio.com/meetups.json' ,
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then(() => {
            navigate("/", { replace: true }); 
        });
    }
    return (
        <section>
            <h1>New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
        </section>
    );
}

export default NewMeetupsPage;