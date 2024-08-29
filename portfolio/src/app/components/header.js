import { Grid, Stack, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ThemeSwitcher from './theme_switcher';
const Header = () => {
	icon: {
		backgroundColor: 'white';
	}

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
							<LinkedInIcon style={{ color: '#ecdfcc' }} />
						</a>
					</Grid>
					<Grid item xs={4}>
						<a
							href='https://github.com/jacopofranciosiwisc'
							target='_blank'
							rel='noopener noreferrer'
						>
							<GitHubIcon style={{ color: '#ecdfcc' }} />
						</a>
					</Grid>
					<Grid item xs={4}>
						<ThemeSwitcher />
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
