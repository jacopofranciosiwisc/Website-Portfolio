'use client';
import { Grid } from '@mui/material';
import { useState } from 'react';
import './projects.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import gsap from 'gsap';

const Projects = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		gsap.to('.arrow', { scale: 1.2, x: 40, duration: 0.2 });
		gsap.to('.text', { scale: 1.1, duration: 0.2 });
	};

	const handleMouseLeave = () => {
		gsap.to('.arrow', { scale: 1, x: 0, duration: 0.5 });
		gsap.to('.text', { scale: 1, duration: 0.5 });
	};

	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			justifyContent='center'
			marginTop='8vw'
			marginBottom='8vw'
			textAlign='center'
			spacing={3}
		>
			<Grid item lg={12} style={{ fontSize: '2.5rem', marginBottom: '1vw' }}>
				Discover My Work
			</Grid>
			<Grid item lg={12} style={{ fontSize: '1.5rem' }}>
				Check out some of my projects. Driven by pure passion, enjoyment, and a
				desire to learn.
			</Grid>

			<Grid
				container
				item
				lg={12}
				direction='row'
				alignItems='center'
				justifyContent='center'
				marginTop='1vw'
			>
				<Grid
					item
					lg='auto'
					className={`text ${isHovered ? 'hovered' : ''}`}
					onMouseEnter={() => {
						setIsHovered(true);
						handleMouseEnter();
					}}
					onMouseLeave={() => {
						setIsHovered(false);
						handleMouseLeave();
					}}
				>
					Get inspired
				</Grid>
				<Grid item lg='auto' className={`arrow ${isHovered ? 'hovered' : ''}`}>
					<KeyboardDoubleArrowRightIcon sx={{ fontSize: '2.5rem' }} />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Projects;
