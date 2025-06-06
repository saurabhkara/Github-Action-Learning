import React from "react";

export default function Contact() {
  return (
    <section className="section-container">
      <h2 className="container-title">Contact us</h2>
      <form action="">
        <input
          name="username"
          placeholder="Enter your name"
          type="text"
          required
          autoCorrect="false"
        />
      </form>
    </section>
  );
}
