import { Grid } from '@mui/material';
import React from '../data/svgs/react.svg';
import JS from '../data/svgs/js.svg';
import Java from '../data/svgs/java.svg';
import MySQL from '../data/svgs/mysql.svg';
import Git from '../data/svgs/git.svg';
import Python from '../data/svgs/python.svg';
import ReactLight from '../data/svgs/react_light.svg';
import JSLight from '../data/svgs/js_light.svg';
import JavaLight from '../data/svgs/java_light.svg';
import MySQLLight from '../data/svgs/mysql_light.svg';
import GitLight from '../data/svgs/git_light.svg';
import PythonLight from '../data/svgs/python_light.svg';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme_context';

const Svgs = () => {
	const { mode } = useContext(ThemeContext);

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
							{mode ? (
								<React width='100' height='100' />
							) : (
								<ReactLight width='100' height='100' />
							)}
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
							{mode ? (
								<JS width='100' height='100' />
							) : (
								<JSLight width='100' height='100' />
							)}
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
							{mode ? (
								<Python width='100' height='100' />
							) : (
								<PythonLight width='100' height='100' />
							)}
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
							{mode ? (
								<MySQL width='100' height='100' />
							) : (
								<MySQLLight width='100' height='100' />
							)}
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
							{mode ? (
								<Java width='100' height='100' />
							) : (
								<JavaLight width='100' height='100' />
							)}
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
							{mode ? (
								<Git width='100' height='100' />
							) : (
								<GitLight width='100' height='100' />
							)}
						</Grid>
						<Grid item>Git</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Svgs;
