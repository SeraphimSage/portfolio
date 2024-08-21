const Contact = () => {
	return (
		<section
			id="contact"
			className="contact"
		>
			<div className="container">
				<div className="section-title">
					<h2>Contact</h2>
					<p>
						I am available for both web development and business consultation
						roles, as well as freelancing. For any questions please feel free to
						reach out to me through e-mail or the form provided below.
					</p>
				</div>

				<div
					className="row"
					data-aos="fade-in"
				>
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

					<div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
						<form
							method="post"
							role="form"
							className="php-email-form"
						>
							<div className="row">
								<div className="form-group col-md-6">
									<label htmlFor="name">Your Name</label>
									<input
										type="text"
										name="name"
										className="form-control"
										id="name"
										required
									/>
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="name">Your Email</label>
									<input
										type="email"
										className="form-control"
										name="email"
										id="email"
										required
									/>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="name">Subject</label>
								<input
									type="text"
									className="form-control"
									name="subject"
									id="subject"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="name">Message</label>
								<textarea
									className="form-control"
									name="message"
									rows="10"
									required
								></textarea>
							</div>
							{/* <div className="my-3">
								<div className="loading">Loading</div>
								<div className="error-message"></div>
								<div className="sent-message">
									Your message has been sent. Thank you!
								</div>
							</div> */}
							<div className="text-center">
								<button
									type="submit"
									// onClick="sendMail()"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
