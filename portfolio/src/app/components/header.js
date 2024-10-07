'use client';
import {
	Grid,
	Stack,
	Drawer,
	Box,
	Button,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/theme_context';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Menu } from '@mui/icons-material';

gsap.registerPlugin(ScrollToPlugin);

const Header = (props) => {
	const { setMode, mode } = useContext(ThemeContext);
	const iconColor = !mode ? '#1e201e' : '#ecdfcc';
	const headerCol = !mode ? '#ecdfcc' : '#1e201e';
	const [isDisabled, setisDisabled] = useState(true);
	const [isMobile, setIsMobile] = useState(false);
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const navigationItems = [
		{ text: 'Home', path: 'home' },
		{ text: 'Who I Am', path: 'whoiam' },
		{ text: 'Projects', path: 'projects' },
		{ text: 'Technologies and Skills', path: 'techandskills' },
		{ text: 'Subscribe', path: 'subscribe' },
		{ text: 'Contact Me', path: 'contactme' },
	];

	const DrawerList = (
		<Grid
			container
			direction='row'
			onClick={toggleDrawer(false)}
			style={{ backgroundColor: '#181c14', height: '40vw' }}
		>
			{navigationItems.map((item, index) => (
				<Grid item xs={6} key={index}>
					<button
						style={{
							background: 'none',
							border: 'none',
							color: 'inherit',
							cursor: 'pointer',
							padding: '1rem',
							font: 'inherit',
							fontSize: '1rem',
						}}
						onClick={() => handleNavigation(item.path)}
					>
						{item.text}
					</button>
				</Grid>
			))}
		</Grid>
	);

	useEffect(() => {
		// Start the delay timer when component mounts

		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			setisDisabled(false);
		}, props.delay * 1000);

		return () => clearTimeout(timer);
	}, [props.delay]);

	useEffect(() => {
		const handleResize = () => {
			const mobileCheck = window.innerWidth <= 750;
			setIsMobile(mobileCheck);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleScrollToTop = () => {
		gsap.to(window, {
			duration: 1.5,
			scrollTo: {
				y: 0, // Scroll to the very top
			},
			ease: 'power2.out',
		});
	};

	const offsets = { techandskills: 120, contactme: 60, subscribe: 100 };

	// TODO: need to change navigation offset for some elements
	const handleNavigation = (path) => {
		const targetElement = document.getElementById(path);

		if (targetElement) {
			let offset = 0;
			if (targetElement.id in offsets) {
				offset = offsets[targetElement.id];
			}
			gsap.to(window, {
				duration: 1.5, // Duration in seconds
				scrollTo: {
					y: targetElement,
					offsetY: offset,
				},
				ease: 'power2.out', // Easing function for smoothness
			});
		} else {
			console.warn(`Element with ID ${path} not found.`);
		}
	};
	if (isMobile) {
		return (
			<div
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					background: headerCol,
					zIndex: 1000, // Ensures the header stays above other content
					pointerEvents: isDisabled ? 'none' : 'auto',
				}}
			>
				<Stack
					justifyContent={'space-between'}
					marginX='2rem'
					marginY='1rem'
					direction='row'
					spacing={6}
				>
					<Grid item xs={1}>
						<Button
							onClick={toggleDrawer(true)}
							style={{ padding: '0 0', margin: '0 0' }}
						>
							<Menu style={{ color: iconColor }} />
						</Button>
						<Drawer anchor={'top'} open={open} onClose={toggleDrawer(false)}>
							{DrawerList}
						</Drawer>
					</Grid>
					<Grid item xs={1}>
						<a
							href='https://www.linkedin.com/in/jacopofranciosi'
							target='_blank'
							rel='noopener noreferrer'
						>
							<LinkedInIcon style={{ color: iconColor }} />
						</a>
					</Grid>
					<Grid item xs={1}>
						<a
							href='https://github.com/jacopofranciosiwisc'
							target='_blank'
							rel='noopener noreferrer'
						>
							<GitHubIcon style={{ color: iconColor }} />
						</a>
					</Grid>
					<Grid item xs={1}>
						<DarkModeOutlinedIcon
							onClick={() => setMode(!mode)}
							style={{ color: iconColor, cursor: 'pointer' }}
						/>
					</Grid>
				</Stack>
			</div>
		);
	} else {
		return (
			<div
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					background: headerCol, // Optional: set a background color for the header
					zIndex: 1000, // Ensures the header stays above other content
					pointerEvents: isDisabled ? 'none' : 'auto',
				}}
			>
				<Stack
					justifyContent={'space-between'}
					marginX='2rem'
					marginY='1rem'
					direction='row'
				>
					<Stack direction='row' spacing={2}>
						<Grid item xs={4}>
							<a
								href='https://www.linkedin.com/in/jacopofranciosi'
								target='_blank'
								rel='noopener noreferrer'
							>
								<LinkedInIcon style={{ color: iconColor }} />
							</a>
						</Grid>
						<Grid item xs={4}>
							<a
								href='https://github.com/jacopofranciosiwisc'
								target='_blank'
								rel='noopener noreferrer'
							>
								<GitHubIcon style={{ color: iconColor }} />
							</a>
						</Grid>
						<Grid item xs={4}>
							<DarkModeOutlinedIcon
								onClick={() => setMode(!mode)}
								style={{ color: iconColor, cursor: 'pointer' }}
							/>
						</Grid>
					</Stack>
					<Grid item xs={2}>
						<button
							style={{
								background: 'none',
								border: 'none',
								color: 'inherit',
								cursor: 'pointer',
								padding: 0,
								font: 'inherit',
							}}
							onClick={() => handleScrollToTop()}
						>
							Home
						</button>
					</Grid>
					<Grid item xs={2}>
						<button
							style={{
								background: 'none',
								border: 'none',
								color: 'inherit',
								cursor: 'pointer',
								padding: 0,
								font: 'inherit',
							}}
							onClick={() => handleNavigation('whoiam')}
						>
							Who I Am
						</button>
					</Grid>
					<Grid item xs={2}>
						<button
							style={{
								background: 'none',
								border: 'none',
								color: 'inherit',
								cursor: 'pointer',
								padding: 0,
								font: 'inherit',
							}}
							onClick={() => handleNavigation('projects')}
						>
							Projects
						</button>
					</Grid>
					<Grid item xs={2}>
						<button
							style={{
								background: 'none',
								border: 'none',
								color: 'inherit',
								cursor: 'pointer',
								padding: 0,
								font: 'inherit',
							}}
							onClick={() => handleNavigation('techandskills')}
						>
							Technologies and Skills
						</button>
					</Grid>
					<Grid item xs={2}>
						<button
							style={{
								background: 'none',
								border: 'none',
								color: 'inherit',
								cursor: 'pointer',
								padding: 0,
								font: 'inherit',
							}}
							onClick={() => handleNavigation('subscribe')}
						>
							Subscribe
						</button>
					</Grid>
					<Grid item xs={2}>
						<button
							style={{
								background: 'none',
								border: 'none',
								color: 'inherit',
								cursor: 'pointer',
								padding: 0,
								font: 'inherit',
							}}
							onClick={() => handleNavigation('contactme')}
						>
							Contact Me
						</button>
					</Grid>
				</Stack>
			</div>
		);
	}
};

export default Header;
