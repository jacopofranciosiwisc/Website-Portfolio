import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme('dark');
	const [hover, setHover] = useState(false);
	const [mounted, setMounted] = useState(false);

	// Ensure that the theme is correctly applied on mount
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null; // Ensures no flicker during SSR

	return (
		<>
			{hover ? (
				<DarkModeIcon
					style={{ cursor: 'pointer', color: '#ecdfcc' }}
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				/>
			) : (
				<DarkModeOutlinedIcon
					style={{ cursor: 'pointer' }}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				/>
			)}
		</>
	);
}
