'use client';
import { Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import content from '../text.json';
import laquila from '../data/laquila_sunset.jpg';
import Image from 'next/image';
const WhoIAm = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 10.5 }}
			>
				<Card
					sx={{
						// color: '#ecdfcc',
						// backgroundColor: '#3C3D37',
						// border: '1px solid #ecdfcc',
						border: '1px solid ',
						borderRadius: 10,
						margin: 0,
						marginTop: '8vw',
						marginBottom: '8vw',
						marginX: '4vw',
						padding: '1vw',
					}}
				>
					<CardContent>
						<Grid container direction='row' justifyContent='space-between'>
							<Grid container item lg={5.5}>
								<Grid
									item
									lg={12}
									style={{ fontSize: '2.5rem', fontFamily: 'Helvetica Neue' }}
								>
									Who I Am
								</Grid>

								<Grid item lg={12} style={{ fontSize: '1.5rem' }}>
									{content.about_text}
								</Grid>
							</Grid>
							<Grid item lg={6}>
								<Image
									src={laquila}
									alt={`Sunset at L'Aquila, Italy`}
									style={{
										borderRadius: 10,
										height: '100%',
										width: '100%',
									}}
								/>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</motion.div>
		</>
	);
};

export default WhoIAm;
