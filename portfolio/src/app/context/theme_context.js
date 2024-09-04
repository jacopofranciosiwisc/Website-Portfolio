'use client';
import { createTheme, useMediaQuery } from '@mui/material';
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
	// const prefersMode = useMediaQuery('(prefers-color-scheme: dark)');
	// const [mode, setMode] = useState(prefersMode ? 'dark' : 'light');

	// useEffect(() => {
	// 	setMode(prefersMode);
	// }, [prefersMode]);

	const [mode, setMode] = useState('dark');

	useEffect(() => {
		// Check the user's preferred color scheme once the component mounts
		const prefersDarkMode = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		setMode(prefersDarkMode ? 'dark' : 'light');
	}, []);

	const theme = createTheme({
		palette: {
			mode: mode === 'dark' ? 'dark' : 'light',
			background: {
				default: mode ? '#1E201E' : '#ECDFCC', // Dark mode background
				paper: mode ? '#3C3D37' : '#697565', // Dark mode card background
			},
			text: {
				primary: mode ? '#ECDFCC' : '#1E201E', // Dark mode text color
			},
		},
	});

	return (
		<ThemeContext.Provider value={{ mode, setMode, theme }}>
			{children}
		</ThemeContext.Provider>
	);
}
