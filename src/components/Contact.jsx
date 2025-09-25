
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Contact.css";

export const Contact = () => {
  return (
    <section className="con">
      <h2>Contact Me</h2>
      <div className="contact__container">
        {/* Left Side */}
        <div className="contact__info">
          <h3>Talk to Me</h3>
          <div className="contact__cards">
            <div className="contact__card">
              <i className="bi bi-envelope-arrow-up"></i>
              <h3>E-mail</h3>
              <span>dgjee2000@gmail.com</span>
              <a href="mailto:dgjee2000@gmail.com">Write Me →</a>
            </div>

            <div className="contact__card">
              <i className="bi bi-whatsapp"></i>
              <h3>Whatsapp</h3>
              <span>7690899430</span>
              <a
                href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!"
              >
                Write Me →
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact__form">
          <h3>Write Your Message</h3>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email Address" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="6" placeholder="Write Your Message" />
            </div>
            <button type="submit">Send Message
                 <i className="bi bi-send-fill"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};






