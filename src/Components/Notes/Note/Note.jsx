import React from 'react';
import styles from './Note.module.css'

const Note = ({ noteText, id, deleteNote, toggleCompletedNote, isNoteCompleted }) => {

	return (
		<div className={styles.note}>
			<div onDoubleClick={() => toggleCompletedNote(id)} className={isNoteCompleted ? styles.completed : undefined + " " + styles.noteEffect}>
				<button onClick={() => toggleCompletedNote(id)} className={isNoteCompleted ? styles.toComplete : styles.noDisplay}>✔️</button>
				<button onClick={() => toggleCompletedNote(id)} className={isNoteCompleted ? styles.noDisplay : styles.inviz}> </button> {noteText}
				<span className={styles.toDelete} onClick={() => deleteNote(id)}>×</span>
			</div>

		</div>
	)
}
export default Note