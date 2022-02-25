import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css'
import {useRef} from 'react'


function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const adressInputRef = useRef();
    const descInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();
        const enterTittle = titleInputRef.current.value;
        const enterImage = imageInputRef.current.value;
        const enterAdress = adressInputRef.current.value;
        const enterDesc = descInputRef.current.value;
        const meetupData = {
            title: enterTittle,
            image: enterImage,
            adress: enterAdress,
            description: enterDesc
        };
        props.onAddMeetup(meetupData);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input text='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input text='url' required id='image' ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='adress'>Meetup Adress</label>
                    <input text='text' required id='adress' ref={adressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='desription'>Description</label>
                    <textarea id='description' required rows='5' ref={descInputRef}></textarea>
                </div>
                <div className={classes.control}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;