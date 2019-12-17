import React from 'react'
import Tilt from 'react-tilt'
import  Brain from './logo.png'
import './Logo.css'

const Logo = () => {
	return (
		// <div className="ma4 mt0">
		<div className="center mb2 mt0">		 
			<Tilt className="Tilt br2 shadow-2" options={{ max : 65 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner pa3"> 
					<img style={{ paddingTop: "5px"}} src={Brain} alt="logo" /> 
				</div>
			</Tilt>
		</div>	
	)
}

export default Logo