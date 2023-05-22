import React from 'react';

const Contact = () => {
return (
<section className="contact" id="contact">
<h1 className="heading">Contact Us</h1>


  <div className="icons-container">
    <div className="icon">
      <i className="fas fa-map-marker-alt"></i>
      <h3>Address</h3>
      <p>Tunis</p>
    </div>

    <div className="icon">
      <i className="fas fa-envelope"></i>
      <h3>Email</h3>
      <p>manaiAhmed@gmail.com</p>
    </div>

    <div className="icon">
      <i className="fas fa-phone"></i>
      <h3>Phone</h3>
      <p>+123-456-7890</p>
      <p>+111-222-3333</p>
    </div>
  </div>

  <div className="row">
    <form>
      <h3>Get In Touch</h3>
      <div className="inputBox">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
      </div>
      <div className="inputBox">
        <input type="number" placeholder="Your Phone Number" />
        <input type="text" placeholder="Your Subject" />
      </div>
      <textarea placeholder="Your Message" cols="30" rows="10"></textarea>
      <input type="submit" value="Send Message" className="btn" />
    </form>

    <iframe
      title="Map"
      className="map"
      src="https://www.google.com/maps/place/Jogeshwari+West,+Mumbai,+Maharashtra+400047"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</section>
);
};

export default Contact;