import {useState} from 'react';

    const AddNote = () => {
        [noteText, setNoteText] = useState('');

        const handleChange = (event) =>{
            //console.log(event.target.value);
            setNoteText(event.target.value);
        };
    return(
        <div className="note new" >
            <textarea rows='8'
                cols='10'
                placeholder ='Type to add a note...'
                onChange ={handleChange}
               ></textarea>
            <div className='note-footer'>
                <small> 200 Remaining </small>
                <button className="save">Save</button>
            </div>
        </div>
    );
        
    
};

export default AddNote;