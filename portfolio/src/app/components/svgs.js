import { Grid } from '@mui/material';
import React from '../data/svgs/react.svg';
import JS from '../data/svgs/js.svg';
import Java from '../data/svgs/java.svg';
import MySQL from '../data/svgs/mysql.svg';
import Git from '../data/svgs/git.svg';
import Python from '../data/svgs/python.svg';

const Svgs = () => {
	return (
		<>
			<Grid container spacing={10}>
				<Grid item lg={2}>
					<Grid
						container
						direction='column'
						justifyContent='center'
						alignItems='center'
					>
						<Grid item>
							<React width='100' height='100' />
						</Grid>
						<Grid item>React</Grid>
					</Grid>
				</Grid>
				<Grid item lg={2}>
					<Grid
						container
						direction='column'
						justifyContent='center'
						alignItems='center'
					>
						<Grid item>
							<JS width='100' height='100' />
						</Grid>
						<Grid item>JavaScript</Grid>
					</Grid>
				</Grid>
				<Grid item lg={2}>
					<Grid
						container
						direction='column'
						justifyContent='center'
						alignItems='center'
					>
						<Grid item>
							<Python width='100' height='100' />
						</Grid>
						<Grid item>Python</Grid>
					</Grid>
				</Grid>
				<Grid item lg={2}>
					<Grid
						container
						direction='column'
						justifyContent='center'
						alignItems='center'
					>
						<Grid item>
							<MySQL width='100' height='100' />
						</Grid>
						<Grid item>MySQL</Grid>
					</Grid>
				</Grid>
				<Grid item lg={2}>
					<Grid
						container
						direction='column'
						justifyContent='center'
						alignItems='center'
					>
						<Grid item>
							<Java width='100' height='100' />
						</Grid>
						<Grid item>Java</Grid>
					</Grid>
				</Grid>
				<Grid item lg={2}>
					<Grid
						container
						direction='column'
						justifyContent='center'
						alignItems='center'
					>
						<Grid item>
							<Git width='100' height='100' />
						</Grid>
						<Grid item>Git</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Svgs;
