'use client';
import { Grid, Stack, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme_context';

const Header = () => {
	const { setMode, mode } = useContext(ThemeContext);
	const iconColor = !mode ? '#181c14' : '#ecdfcc'; // Define colors based on the theme

	return (
		<>
			<Stack
				justifyContent={'space-between'}
				marginX='2rem'
				marginY='1rem'
				direction='row'
			>
				<Stack direction='row' xs={2} spacing={2}>
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
						{/* <Button
							onClick={() => {
								if (mode) {
									setMode(false);
								} else {
									setMode(true);
								}
							}}
						>
							{mode ? <ToggleOn /> : <ToggleOff />}
						</Button> */}
						<DarkModeOutlinedIcon
							onClick={() => {
								if (mode) {
									setMode(false);
								} else {
									setMode(true);
								}
								// console.log('setting modes');
							}}
						/>
					</Grid>
				</Stack>
				<Grid item xs={2}>
					Home
				</Grid>
				<Grid item xs={2}>
					Who I Am
				</Grid>
				<Grid item xs={2}>
					Projects
				</Grid>
				<Grid item xs={2}>
					Technologies and Skills
				</Grid>
				<Grid item xs={2}>
					Contact Me
				</Grid>
			</Stack>
		</>
	);
};
export default Header;
