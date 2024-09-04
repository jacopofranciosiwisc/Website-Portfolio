import { motion } from 'framer-motion';

const AnimDiv = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: props.delay }}
		>
			<div
				style={{
					// borderTop: '0.5px solid #697565',
					borderTop: '0.5px solid',
					width: '70%',
					margin: '5vw auto',
				}}
			></div>
		</motion.div>
	);
};

export default AnimDiv;
