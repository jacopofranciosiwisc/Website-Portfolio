import { Grid } from '@mui/material';
import Svgs from './svgs';

const TechAndSkills = () => {
	return (
		<>
			<Grid
				container
				direction='column'
				alignItems='center'
				marginTop='8vw'
				marginBottom='8vw'
				spacing={3}
			>
				<Grid item style={{ fontSize: '2.5rem', fontFamily: 'Helvetica Neue' }}>
					Tech & Skills
				</Grid>
				<Grid item marginTop='5vw'>
					<Svgs />
				</Grid>
			</Grid>
		</>
	);
};

export default TechAndSkills;
