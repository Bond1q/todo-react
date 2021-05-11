import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import InputNote from './Components/InputNote/InputNote';
import Notes from './Components/Notes/Notes';
import { Route } from 'react-router';
import ShowTypeNotes from './Components/Notes/ShowTypeNotes/ShowTypeNotes.jsx';


const App = () => {

	return (
		<div className="App">
			<div className='mainTitle'>To do list</div>
			<InputNote />
			<Route exact path='/' render={() => <Notes />} />
			<Route path='/active' render={() => <ShowTypeNotes />} />
			<Route path='/completed' render={() => <ShowTypeNotes />} />
			<Navbar />
			<div className='hint'>Use a double click on the green area <br /> if you want to make your note completed</div>
		</div>
	);
}

export default App;
