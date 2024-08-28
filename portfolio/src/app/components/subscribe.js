import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';

const Subscribe = () => {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#ecdfcc',
			},
			text: {
				primary: '#ecdfcc', // Ensure this is applied to text color
			},
		},
		components: {
			MuiTextField: {
				styleOverrides: {
					root: {
						'& .MuiInputBase-input': {
							color: '#697565', // Default text color
						},
						'& .MuiInputLabel-root': {
							color: '#ecdfcc', // Default label color
						},
						'& .MuiInputLabel-root.Mui-focused': {
							color: '#ecdfcc', // Label color when focused
						},
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: '#697565', // Border color when not focused
							},
							'&:hover fieldset': {
								borderColor: '#ecdfcc', // Border color on hover
							},
							'&.Mui-focused fieldset': {
								borderColor: '#ecdfcc', // Border color when focused
							},
						},
					},
				},
			},
		},
	});
	return (
		<>
			<ThemeProvider theme={theme}>
				<TextField label='Email' color='primary' />
			</ThemeProvider>
		</>
	);
};

export default Subscribe;
