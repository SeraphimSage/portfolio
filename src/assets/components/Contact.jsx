import { Button, Row, Form, Container } from "react-bootstrap";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

		const serviceId = "service_q84spmt";
		const templateId = "template_5wa370n";
		const publicKey = "sP_SY3U0rF_amuFWL";

		const templateParams = {
			name: name,
			email: email,
			to_name: "Kenneth Pinkerton",
			message: message,
		};

		emailjs
			.send(serviceId, templateId, templateParams, publicKey)
			.then((res) => {
				console.log("Email sent successfully!", res);
				setName("");
				setEmail("");
				setMessage("");
			})
			.catch((err) => {
				console.log("Error sending email: ", err);
			});
	};
	return (
		<section
			id="contact"
			className="contact "
		>
			<div className="container">
				<div className="section-title">
					<h2>Contact</h2>
					<p className="summary">
						I am available for both web development and business consultation
						roles, as well as freelancing. For any questions please feel free to
						reach out to me through e-mail or the form provided below.
					</p>
				</div>

				<div className="col-lg-5 d-flex align-items-stretch">
					<div className="info">
						<div className="address">
							<i className="bi bi-geo-alt"></i>
							<h4>Location:</h4>
							<p>Tulsa, OK 74135</p>
						</div>

						<div className="email">
							<i className="bi bi-envelope"></i>
							<h4>Email:</h4>
							<p>kenneth.pinkerton90@gmail.com</p>
						</div>

						{/* <iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51580.450089483296!2d-95.96608981062401!3d36.09889615141797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692c1b2d913c1%3A0xe367b5346554cfcc!2sTulsa%2C%20OK%2074135!5e0!3m2!1sen!2sus!4v1701377218511!5m2!1sen!2sus"
								style="border: 0; width: 100%; height: 290px"
								allowFullScreen
							></iframe> */}
					</div>
				</div>

				<Container
					fluid="md"
					className="form-container"
				>
					<Form
						className="contact-form"
						onSubmit={handleSubmit}
					>
						<Row className="row">
							<Form.Group controlId="ControlName">
								<Form.Label>
									<h3>Name:</h3>{" "}
								</Form.Label>
								<Form.Control
									size="lg"
									type="text"
									placeholder="Please enter your name"
									title="Please enter your name"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</Form.Group>
						</Row>
						<Row className="row">
							<Form.Group controlId="ControlEmail">
								<Form.Label>
									<h3>Email:</h3>{" "}
								</Form.Label>
								<Form.Control
									size="lg"
									type="email"
									placeholder="Your Email Address"
									title="Enter Your Email Address"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>
						</Row>

						<Row>
							<Form.Group controlId="ControlTextarea">
								<Form.Label>
									<h3>Message:</h3>{" "}
								</Form.Label>
								<Form.Control
									size="lg"
									as="textarea"
									rows={10}
									placeholder="Write Your Message"
									title="Type your message"
									required
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
							</Form.Group>
						</Row>

						<Row>
							<Form.Group className="btn-row">
								<Button
									type="submit"
									title="Submit Your Message"
								>
									{" "}
									Send
								</Button>
							</Form.Group>
						</Row>
					</Form>
				</Container>
			</div>
		</section>
	);
};

export default Contact;
