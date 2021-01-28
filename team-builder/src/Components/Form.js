import React from "react";

function Form(props) {
  const { values, update, submit } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    update(name, value);
  };
  const handleSubmit = (e) => {
    // const { name, value } = e.target;
    e.preventDefault();
    submit();
  };

  return (
    <div>
      <h3>FORM</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="enter name"
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="enter email"
          />
        </label>
        <label>
          <select name="role" value={values.role} onChange={handleChange}>
            <option disabled value="">
              -- Select a Role --
            </option>
            <option>Full-Stack Engineer</option>
            <option>Backend Engineer</option>
            <option>Frontend Engineer</option>
            <option>Designer</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
