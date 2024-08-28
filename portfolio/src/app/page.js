'use client';
import './globals.css';
import Header from './components/header';
import Welcome from './components/welcome';
import WhoIAm from './components/who_i_am';
import Projects from './components/projects';
import Skills from './components/tech_and_skills';
import AnimDiv from './components/AnimDiv';

export default function Home() {
	return (
		<>
			<Header />
			<Welcome />
			<AnimDiv delay={9.5} />
			<WhoIAm />
			<AnimDiv delay={0} />
			<Projects />
			<AnimDiv delay={0} />
			<Skills />
		</>
	);
}
