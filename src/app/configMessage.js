const nodemailer = require('nodemailer');

module.exports = (form) => {

	 var transporter = nodemailer.createTransport({
	 service: 'gmail',
	 auth: {
	 user: 'rei.vzl@gmail.com', // Cambialo por tu email
	 pass: '2713666027136660' // Cambialo por tu password
 	}
 });

const mailOptions = {

	 from: `"${form.name} ” <${form.email}>`,
	 to: 'rei.vzl@gmail.com',
	 html: `
	 <strong>Nombre:</strong> ${form.name} <br/>
	 <strong>E-mail:</strong> ${form.email} <br/>
	 <strong>Mensaje:</strong> ${form.message}
 `
 };
 
	transporter.sendMail(mailOptions, function (err, info) =>{
	 
	 if(err) console.log(err);

	 console.log(info); 
	 
	});
}