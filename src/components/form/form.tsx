import React, { useEffect, useState } from "react";
import { FormTypes } from "./form.types";

export const Form = () => {
  const [users, setUsers] = useState<FormTypes>({
    FirstName: "",
    LastName: "",
    Gender: "",
    Country: "",
    State: "",
    ZipCode: "",
  });

  const options = [
    { name: "Select", Value: "" },
    { name: "USA", Value: "USA" },
    { name: "India", Value: "India" },
  ];

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [disable, setDisabled] = useState(true);

  useEffect(() => {
    debugger;
    if (!users.FirstName || !users.LastName || !users.Gender) {
      setDisabled(true);
    } else if (users.FirstName && users.LastName && users.Gender) {
      setDisabled(false);
    }
  }, [users]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setUsers((prev) => ({
      ...prev,
      [name]: value, // TS now knows name is keyof FormTypes
    }));
    console.log(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if (
    //   users.FirstName === "" ||
    //   users.LastName === "" ||
    //   users.Gender === ""
    // ) {
    //   setError(true);
    //   return;
    // }
    if (!users.FirstName) {
      // setError(true);
      setError("FirstName is Required");
      return;
    }
    setSubmitted(true);
    setUsers({
      FirstName: "",
      LastName: "",
      Gender: "",
      Country: "",
      State: "",
      ZipCode: "",
    });
    console.log("Submitting:", users);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="FirstName">FirstName</label>
        <input
          id="FirstName"
          type="text"
          name="FirstName"
          value={users.FirstName}
          onChange={handleChange}
        />

        <label htmlFor="LastName">LastName</label>
        <input
          id="LastName"
          type="text"
          name="LastName"
          value={users.LastName}
          onChange={handleChange}
        />

        <div>
          <label>Gender</label>
          <label>
            <input
              type="radio"
              name="Gender"
              value="Male"
              checked={users.Gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="Gender"
              value="Female"
              checked={users.Gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <label htmlFor="country">Choose a Country:</label>

        <select name="Country" id="country" onChange={handleChange}>
          {options.map((item) => (
            <option key={item.Value} value={item.Value}>
              {item.name}
            </option>
          ))}
        </select>

        {users.Country === "India" && (
          <div>
            <label htmlFor="State">State</label>
            <input
              id="State"
              type="text"
              name="State"
              value={users.State}
              onChange={handleChange}
            />
          </div>
        )}

        {users.Country === "USA" && (
          <div>
            <label htmlFor="ZipCode">ZipCode</label>
            <input
              id="ZipCode"
              type="number"
              name="ZipCode"
              value={users.ZipCode}
              onChange={handleChange}
            />
          </div>
        )}

        <button type="submit" disabled={disable ? true : false}>
          Submit
        </button>
      </form>
      {/* {error && <div>All fields are required</div>} */}
      <div>
        {error && <div>{error}</div>}
        {submitted && <div>Form submitted</div>}
      </div>
    </>
  );
};
