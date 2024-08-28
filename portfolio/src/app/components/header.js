import { Grid, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
const Header = () => {
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
						<LinkedInIcon />
					</Grid>
					<Grid item xs={4}>
						<GitHubIcon />
					</Grid>
					<Grid item xs={4}>
						<DarkModeOutlinedIcon />
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
