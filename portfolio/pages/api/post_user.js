import sgMail from '@sendgrid/mail';
import prisma from '../../lib/prisma';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Add email sending

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { userEmail } = req.body;

		try {
			// Create a new user
			const user = await prisma.user.create({
				data: {
					email: userEmail, // Pass the email directly
				},
			});
			res.status(200).json(user);
		} catch (error) {
			console.error('Error creating user:', error);
			res.status(500).json({ error: 'Unable to create user' });
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
}
