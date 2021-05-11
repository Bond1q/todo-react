import React, { Component } from 'react';
import styles from './Navbar.module.css'
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteAllCompletedNotes } from '../../redux/memory-reducer';
import { compose } from 'redux';

const Navbar = (props) => {
	return (
		<div className={styles.mainFlexRow}>
			<div className={styles.activeNotes}>{props.activeNotesCount} active notes</div>
			<div className={styles.flexRow}>
				<div></div>
				<div className={props.location.pathname == '/' ? styles.active : undefined}><NavLink to='/'><button>All</button></NavLink></div>
				<div className={props.location.pathname == '/active' ? styles.active : undefined}><NavLink to='/active'><button>Active</button></NavLink></div>
				<div className={props.location.pathname == '/completed' ? styles.active : undefined}><NavLink to='/completed'><button>Completed</button></NavLink></div>
			</div>
			<div className={styles.clearAllCompleted}><button onClick={props.deleteAllCompletedNotes}>Clear comleted</button></div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		activeNotesCount: state.memory.activeNotesCount
	}
}

export default compose(withRouter,connect(mapStateToProps, { deleteAllCompletedNotes }))(Navbar)

