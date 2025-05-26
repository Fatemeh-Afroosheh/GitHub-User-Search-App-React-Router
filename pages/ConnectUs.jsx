const ConnectUs = () => {
  return (
    <div class="contact-container">
      <h1>Connect With Us</h1>
      <p>If you have any questions or feedback, feel free to reach out!</p>

      <div class="contact-content">
        <form class="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div class="contact-info">
          <h2>Contact Info</h2>
          <p>
            <strong>Email:</strong> support@example.com
          </p>
          <p>
            <strong>Phone:</strong> +90 534 250 9878
          </p>
          <p>
            <strong>Address:</strong> 123 Main St, Istanbul, Turkey
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
