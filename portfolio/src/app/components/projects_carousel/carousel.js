'use client';
import { Grid } from '@mui/material';
import './carousel.css';
import useEmblaCarousel from 'embla-carousel-react';
import ProjectCard from './project_card';
import content from './../../text.json';

export default function EmblaCarousel() {
	const [emblaRef] = useEmblaCarousel();

	return (
		<Grid
			container
			direction='row'
			marginTop='10vw'
			style={{ justifyContent: 'center', height: '30vw' }}
		>
			<Grid
				item
				lg={6}
				style={{ border: '2px solid #000', overflow: 'hidden' }}
				ref={emblaRef}
			>
				<div
					style={{
						display: 'flex',
					}}
				>
					<div className='slide'>
						{Object.values(content.proj_titles).map((c, index) => (
							<ProjectCard title={c} key={index} />
						))}
					</div>
				</div>
			</Grid>
		</Grid>
	);
}
