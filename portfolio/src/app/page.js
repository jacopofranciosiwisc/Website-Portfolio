'use client';
import './globals.css';
import Header from './components/header';
import Welcome from './components/welcome';
import WhoIAm from './components/who_i_am';
import Projects from './components/projects';
import Skills from './components/tech_and_skills';
import Contact from './components/contact_me';
import AnimDiv from './components/anim_div';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Welcome />
				<section id='whoiam'>
					<AnimDiv delay={9.5} id='home' />
				</section>
				<WhoIAm />
				<section id='projects'>
					<AnimDiv delay={0} />
				</section>
				<Projects />
				<section id='techandskills'>
					<AnimDiv delay={0} />
				</section>
				<Skills />
				<section id='contactme'>
					<AnimDiv delay={0} />
				</section>
				<Contact />
			</main>
		</>
	);
}
