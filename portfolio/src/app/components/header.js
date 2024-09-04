'use client';
import { Grid, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme_context';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
	const { setMode, mode } = useContext(ThemeContext);
	const iconColor = !mode ? '#181c14' : '#ecdfcc'; // Define colors based on the theme

	const handleNavigation = (path) => {
		const targetElement = document.getElementById(path);
		if (targetElement) {
			gsap.to(window, {
				duration: 1.5, // Duration in seconds
				scrollTo: {
					y: targetElement,
				},
				ease: 'power2.out', // Easing function for smoothness
			});
		} else {
			console.warn(`Element with ID ${path} not found.`);
		}
	};
	return (
		<Stack
			justifyContent={'space-between'}
			marginX='2rem'
			marginY='1rem'
			direction='row'
		>
			<Stack direction='row' spacing={2}>
				<Grid item xs={4}>
					<a
						href='https://www.linkedin.com/in/jacopofranciosi'
						target='_blank'
						rel='noopener noreferrer'
					>
						<LinkedInIcon style={{ color: iconColor }} />
					</a>
				</Grid>
				<Grid item xs={4}>
					<a
						href='https://github.com/jacopofranciosiwisc'
						target='_blank'
						rel='noopener noreferrer'
					>
						<GitHubIcon style={{ color: iconColor }} />
					</a>
				</Grid>
				<Grid item xs={4}>
					<DarkModeOutlinedIcon
						onClick={() => setMode(!mode)}
						style={{ color: iconColor }}
					/>
				</Grid>
			</Stack>
			<Grid item xs={2}>
				<button
					style={{
						background: 'none',
						border: 'none',
						color: 'inherit',
						cursor: 'pointer',
						padding: 0,
						font: 'inherit',
					}}
					onClick={() => handleNavigation('home')}
				>
					Home
				</button>
			</Grid>
			<Grid item xs={2}>
				<button
					style={{
						background: 'none',
						border: 'none',
						color: 'inherit',
						cursor: 'pointer',
						padding: 0,
						font: 'inherit',
					}}
					onClick={() => handleNavigation('whoiam')}
				>
					Who I Am
				</button>
			</Grid>
			<Grid item xs={2}>
				<button
					style={{
						background: 'none',
						border: 'none',
						color: 'inherit',
						cursor: 'pointer',
						padding: 0,
						font: 'inherit',
					}}
					onClick={() => handleNavigation('projects')}
				>
					Projects
				</button>
			</Grid>
			<Grid item xs={2}>
				<button
					style={{
						background: 'none',
						border: 'none',
						color: 'inherit',
						cursor: 'pointer',
						padding: 0,
						font: 'inherit',
					}}
					onClick={() => handleNavigation('techandskills')}
				>
					Technologies and Skills
				</button>
			</Grid>
			<Grid item xs={2}>
				<button
					style={{
						background: 'none',
						border: 'none',
						color: 'inherit',
						cursor: 'pointer',
						padding: 0,
						font: 'inherit',
					}}
					onClick={() => handleNavigation('contactme')}
				>
					Contact Me
				</button>
			</Grid>
		</Stack>
	);
};

export default Header;
