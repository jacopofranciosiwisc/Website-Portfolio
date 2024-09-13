import { Card, CardContent, CardMedia } from '@mui/material';

export default function projectCard(props) {
	return (
		<>
			<Card>
				<CardContent>
					<span>{props.title}</span>
				</CardContent>
			</Card>
		</>
	);
}
