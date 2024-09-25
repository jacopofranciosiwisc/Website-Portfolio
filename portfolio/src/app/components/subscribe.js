import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/theme_context';
import validator from 'validator';

const Subscribe = () => {
	const [email, setEmail] = useState('');
	const { mode } = useContext(ThemeContext);
	const darkColor = !mode ? '#1e201e' : '#ecdfcc';
	const lightColor = mode ? '#1e201e' : '#ecdfcc';

	// Send email through API route POST request
	const handleEmailSubmit = async () => {
		if (!validator.isEmail(email)) {
			alert('Please enter a valid email address.');
			return;
		}
		try {
			const res = await fetch('/api/post_user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userEmail: email,
				}),
			});
			if (res.ok) {
				const data = await res.json();
				console.log('Response data:', data);
				alert(
					'Submission successful. Make sure to check your spam email, and mark it as non-spam so future mail is in your inbox!'
				);
			} else {
				console.log('Response not ok:', res.status);
			}
		} catch (error) {
			console.error('There was an error calling the API route. Error:', error); // Shows up in the website console since it's client-side logging.
		}
	};

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
							color: darkColor, // Default text color
						},
						'& .MuiInputLabel-root': {
							color: darkColor, // Default label color
						},
						'& .MuiInputLabel-root.Mui-focused': {
							color: darkColor, // Label color when focused
						},
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: darkColor, // Border color when not focused
							},
							'&:hover fieldset': {
								borderColor: darkColor, // Border color on hover
							},
							'&.Mui-focused fieldset': {
								borderColor: darkColor, // Border color when focused
							},
						},
					},
				},
			},
		},
	});

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				marginTop: '8vw',
				marginBottom: '8vw',
			}}
		>
			<span
				style={{
					fontSize: '2.5rem',
					fontFamily: 'Helvetica Neue',
					marginBottom: '2rem',
				}}
			>
				Subscribe to my Mail List
			</span>
			<span
				style={{
					fontSize: '1.2rem',
					fontFamily: 'Times New Roman',
				}}
			>
				Keep updated with what I&apos;m doing!
			</span>
			<div
				style={{
					justifyContent: 'center',
					flexDirection: 'row',
					display: 'flex',
					alignItems: 'center',
					marginTop: '6vw',
				}}
			>
				<span>
					<ThemeProvider theme={theme}>
						<TextField
							label='Email'
							color='primary'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</ThemeProvider>
				</span>
				<span style={{ marginLeft: '1rem' }}></span>
			</div>
			<button
				type='submit'
				style={{
					borderColor: darkColor,
					backgroundColor: lightColor,
					color: darkColor,
					border: `2px solid ${darkColor}`,
					borderRadius: 30,
					marginTop: '4vw',
					padding: '0.5rem',
					paddingRight: '2.5rem',
					paddingLeft: '2.5rem',
					fontSize: '1.2rem',
					fontFamily: 'Helvetica Neue',
					cursor: 'pointer',
				}}
				onClick={() => {
					handleEmailSubmit();
					setEmail('');
				}}
			>
				Send
			</button>
		</div>
	);
};

export default Subscribe;
