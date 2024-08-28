'use client';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import content from '../text.json';
const WhoIAm = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 10.5 }}
			>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='center'
					marginTop='8vw'
					marginBottom='8vw'
					paddingRight='4vw'
					rowSpacing={3}
				>
					<Grid
						item
						lg={6}
						style={{
							fontSize: '6rem',
							fontFamily: 'Helvetica Neue',
							textAlign: 'center',
							paddingRight: '13rem',
						}}
					>
						Who I Am
					</Grid>
					<Grid
						item
						lg={6}
						style={{
							fontSize: '1.5rem',
						}}
					>
						{content.about_text}
					</Grid>
				</Grid>
			</motion.div>
		</>
	);
};

export default WhoIAm;
