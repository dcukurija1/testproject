import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupsPage() {
    function onAddMeetupHandler(meetupData) {
        fetch('https://react-testproject-e2b52-default-rtdb.firebaseio.com/meetups.json' ,
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );
    }
    return (
        <section>
            <h1>New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
        </section>
    );
}

export default NewMeetupsPage;