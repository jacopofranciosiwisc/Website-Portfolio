const ContactMe = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginTop: '9vw',
				marginBottom: '27.5vw',
				alignItems: 'center',
			}}
		>
			<span
				style={{
					fontSize: '2.5rem',
					fontFamily: 'Helvetica Neue',
					marginBottom: '2vw',
				}}
			>
				Contact Me
			</span>
			<span>{`Let's connect.`}</span>
			<div
				style={{
					display: 'flex',
					marginTop: '10vw',
					flexWrap: 'wrap',
					justifyContent: 'space-between',
					width: '70%',
				}}
			>
				<span style={{ fontSize: '1.2rem' }}>
					Email:{' '}
					<span style={{ fontFamily: 'Times New Roman' }}>
						jacopofranciosi02@gmail.com
					</span>
				</span>
				<span style={{ fontSize: '1.2rem' }}>
					Phone:{' '}
					<span style={{ fontFamily: 'Times New Roman' }}>
						224 - 433 - 4284
					</span>
				</span>
			</div>
		</div>
	);
};

export default ContactMe;
