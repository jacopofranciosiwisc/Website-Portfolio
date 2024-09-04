import { Grid } from '@mui/material';

const ContactMe = () => {
	return (
		<Grid
			container
			direction='row'
			marginTop='8vw'
			marginBottom='27.5vw'
			spacing={3}
			textAlign='center'
		>
			<Grid
				item
				lg={12}
				style={{ fontSize: '2.5rem', fontFamily: 'Helvetica Neue' }}
			>
				Contact Me
			</Grid>
			<Grid item lg={12}>
				{`Let's connect.`}
			</Grid>
			<Grid item container marginTop='10vw'>
				<Grid item lg={6} style={{ fontSize: '1.2rem' }}>
					Email:{' '}
					<span style={{ fontFamily: 'Times New Roman' }}>
						jacopofranciosi02@gmail.com
					</span>
				</Grid>
				<Grid item lg={6} style={{ fontSize: '1.2rem' }}>
					Phone:{' '}
					<span style={{ fontFamily: 'Times New Roman' }}>
						224 - 433 - 4284
					</span>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ContactMe;
