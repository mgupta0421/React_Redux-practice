import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
	return (
		<div className="UserOutput">
		<p>Username: {props.username}</p>
		<p>my age is 92</p>
		</div>
	);

};

export default userOutput;