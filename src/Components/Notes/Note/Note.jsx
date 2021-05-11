import React from 'react';
import styles from './Note.module.css'

const Note = ({ noteText, id, deleteNote, toggleCompletedNote, isNoteCompleted }) => {

	return (
		<div className={styles.note}>
			<div onDoubleClick={() => toggleCompletedNote(id)} className={isNoteCompleted ? styles.completed : undefined + " " + styles.noteEffect}>
				{noteText}  <span onClick={() => deleteNote(id)}>×</span>
			</div>
		</div>
	)
}
export default Note