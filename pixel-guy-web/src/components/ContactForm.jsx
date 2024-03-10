import React, { useState } from "react";

export const ContactForm = () => {
  const [state, setState] = useState({
    email: "",
    subject: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-8 text-white">
      <div className="flex flex-row gap-4">
        <label>Email</label>
        <input type="text" name="email" value={state.email} />
      </div>

      <a className="bg-white text-black py-4 px-8" href="">
        Submit
      </a>
    </form>
  );
};

export default ContactForm;
