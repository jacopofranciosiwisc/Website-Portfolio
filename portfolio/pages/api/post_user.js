import sgMail from '@sendgrid/mail';
import prisma from '../../lib/prisma';
import validator from 'validator';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { userEmail } = req.body;
		if (!validator.isEmail(userEmail)) {
			return res.status(400).json({ message: 'Invalid email format' });
		}

		try {
			// Create a new user
			const user = await prisma.user.create({
				data: {
					email: userEmail,
				},
			});

			// Create message
			const msg = {
				to: userEmail,
				from: 'jacoposweekly@gmail.com',
				subject: `Welcome to Jacopo's Weekly`,
				text: `Thanks for signing up! You'll get updates on what I'm doing in life and I'll be sharing some stories, reflections, and experiences.`,
			};

			// Send the email, use await so the promise is resolved before sending a response
			await sgMail.send(msg);

			res.status(200).json(user);
		} catch (error) {
			console.error('Error creating user or sending email:', error); // Shows on the terminal dev since it's server-side logging
			res.status(500).json({ error: 'Unable to create user' }); // Shows on the network response
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' }); // Error message if method != POST. Okay for now.
	}
}
