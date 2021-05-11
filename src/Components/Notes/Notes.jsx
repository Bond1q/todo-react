import React from 'react';
import { connect } from 'react-redux';
import { deleteNote, toggleCompletedNote } from '../../redux/memory-reducer';
import Note from './Note/Note';
import styles from './Notes.module.css'


const Notes = (props) => {

	return (
		<div className={styles.notes}>
			<div className='typeNotes'>All notes</div>
			{props.notes && props.notes.length > 0 && props.notes.map(n => {
				return <Note isNoteCompleted={n.completed}
					noteText={n.text}
					id={n.id}
					key={n.id}
					deleteNote={props.deleteNote}
					toggleCompletedNote={props.toggleCompletedNote} />
			})}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		notes: state.memory.notes
	}
}

export default connect(mapStateToProps, { deleteNote, toggleCompletedNote })(Notes)