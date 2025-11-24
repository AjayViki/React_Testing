import { useState } from "react";

type EventProps = {
  name: string;
  age: number;
  isActive: boolean;
};

const EventForm = () => {
  const [user, setUser] = useState<EventProps>({
    name: "",
    age: 0,
    isActive: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            name="name"
            value={user?.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="Age">Age</label>
          <input
            type="number"
            id="Age"
            name="age"
            value={user?.age}
            onChange={handleChange}
            placeholder="Enter Your Age"
          ></input>
        </div>
        <div>
          <label>IsActive</label>
          <label>
            <input
              type="radio"
              name="isActive"
              id="isActive"
              value="true"
              checked={user.isActive === true}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="isActive"
              id="isActive"
              value="false"
              checked={user.isActive === false}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
