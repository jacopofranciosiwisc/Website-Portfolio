const DotGrid = ({
	width = 24,
	height = 11,
	space = 50,
	radius = 2.0,
	fill = '#555',
}) => {
	const viewWidth = width * radius * 2 + (width - 1) * (space - radius * 2);
	const viewHeight = height * radius * 2 + (height - 1) * (space - radius * 2);
	let dots = [];

	for (let indexWidth = 0; indexWidth < width; indexWidth++) {
		for (let indexHeight = 0; indexHeight < height; indexHeight++) {
			dots.push(
				<circle
					key={`${indexWidth}-${indexHeight}`}
					cx={radius + indexWidth * space}
					cy={radius + indexHeight * space}
					r={radius}
				/>
			);
		}
	}

	return (
		<svg
			className='dotted-grid'
			width={viewWidth}
			height={viewHeight}
			viewBox={`0 0 ${viewWidth} ${viewHeight}`}
			version='1.1'
			style={{ position: 'absolute', zIndex: 1, top: 350, left: 600 }}
		>
			<g fill={fill}>{dots}</g>
		</svg>
	);
};

export default DotGrid;
