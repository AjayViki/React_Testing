import React, { useState } from "react";
import ButtonProp from "./ButtonProp";

const Parent = () => {
  type User = {
    name: string;
    age: number;
  };
  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Just chk");
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={user.name}></input>
      <input type="number" onChange={handleChange} value={user.age}></input>
      <button onClick={handleClick}></button>
      <ButtonProp onClick={() => console.log("Clicked")} />
    </div>
  );
};

export default Parent;
