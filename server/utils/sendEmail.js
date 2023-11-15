const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
		service: process.env.SERVICE,
		port: process.env.EMAIL_PORT,
		secure: false,
		logger: true,
		debug: true,
		secureConnection: false,
		auth: {
			user: process.env.USER_EMAIL,
			pass: process.env.USER_PASS,
		},
		tls: {
			rejectUnauthorized: true
		}
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent successfully");
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }
};
