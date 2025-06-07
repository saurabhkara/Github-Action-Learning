export default function Contact() {
  const handleSubmitForm = (formData) => {
    const entries = Object.fromEntries(formData.entries());

    // const name = formData.get("username");
    // console.log("name&&", name);
    console.log(entries);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact us</h2>
      <div className="contact-wrapper container">
        <form action={handleSubmitForm}>
          <input
            name="username"
            placeholder="Enter your name"
            type="text"
            required
            autoCorrect="false"
            className="form-control"
          />
          <input
            name="email"
            placeholder="Enter your email"
            type="email"
            required
            autoCorrect="false"
            className="form-control"
          />
          <input
            name="message"
            placeholder="Drop your message"
            type="message"
            autoCorrect="false"
            className="form-control"
            rows="10"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
