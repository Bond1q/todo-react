import React from 'react';
import styles from './InputNote.module.css'
import { connect } from 'react-redux';
import { writeNewNote, saveNote } from '../../redux/memory-reducer';

const InputNote = (props) => {
	const writeNewNote = (e) => {
		props.writeNewNote(e.target.value)
	}
	const enterKeyEvent = (e) => {
		if (e.key == 'Enter') props.saveNote()
	}
	return (
		<div>
			<div className={styles.inputElement}>
				<input onKeyDown={enterKeyEvent}
					placeholder='Write your note'
					type="text"
					value={props.inputValue}
					onChange={writeNewNote} />
			</div>
			<div className={styles.buttonElement}><button onClick={props.saveNote}>Add</button></div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		inputValue: state.memory.newNoteText
	}
}

export default connect(mapStateToProps, { writeNewNote, saveNote })(InputNote)