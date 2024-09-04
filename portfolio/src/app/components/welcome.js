'use client';
import { useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import content from '../text.json';

const Welcome = () => {
	const [text, helper] = useTypewriter({
		words: [content.intro_text],
		loop: 1,
		delaySpeed: 500,
		typeSpeed: 40,
		deleteSpeed: 30,
	});

	const { isDone } = helper;

	useEffect(() => {
		if (isDone) {
			document.body.style.overflow = 'auto';
		} else {
			document.body.style.overflow = 'hidden';
		}
	}, [isDone]);

	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			marginTop='10vw'
			paddingX='4vw'
			justifyContent='center'
		>
			<Grid
				container
				item
				lg={12}
				spacing={3}
				direction='column'
				alignItems='center'
			>
				<Grid item>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.15 }}
						style={{
							fontSize: '3rem',
							fontFamily: 'Helvetica Neue',
						}}
					>
						{'JACOPO FRANCIOSI'}
					</motion.div>
				</Grid>
				<Grid item>
					<span style={{ fontSize: '1.5rem' }}>{text}</span>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Welcome;
