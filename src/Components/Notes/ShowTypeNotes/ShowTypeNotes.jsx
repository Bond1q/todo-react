import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { deleteNote, toggleCompletedNote } from '../../../redux/memory-reducer';
import Note from '../Note/Note';

const ShowTypeNotes = (props) => {
	return (

		<div>
			<div className='typeNotes'>{props.location.pathname == '/active' ? 'Active notes' : 'Completed notes'}</div>
			{props.notes && props.notes.length > 0 && props.notes.map(n => {
				let isActivePath = props.location.pathname == '/active'
				if (n.completed == !isActivePath) {
					return <Note isNoteCompleted={n.completed}
						noteText={n.text}
						id={n.id}
						key={n.id}
						deleteNote={props.deleteNote}
						toggleCompletedNote={props.toggleCompletedNote} />
				}

			})}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		notes: state.memory.notes
	}
}

export default compose(withRouter, connect(mapStateToProps, { deleteNote, toggleCompletedNote }))(ShowTypeNotes)

