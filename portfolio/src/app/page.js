'use client';
import './globals.css';
import Header from './components/header';
import Welcome from './components/welcome';
import WhoIAm from './components/who_i_am';
import Projects from './components/projects';
import Skills from './components/tech_and_skills';
import Contact from './components/contact_me';
import AnimDiv from './components/anim_div';
import Subscribe from './components/subscribe';

export default function Home() {
	return (
		<>
			<section id='home' style={{ marginBottom: '3rem' }}>
				<Header delay={9.5} />
			</section>
			<main>
				<Welcome />
				<section id='whoiam'>
					<AnimDiv delay={9.5} />
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
				<section id='subscribe'>
					<AnimDiv delay={0} />
				</section>
				<Subscribe />
				<section id='contactme'>
					<AnimDiv delay={0} />
				</section>
				<Contact />
			</main>
		</>
	);
}
