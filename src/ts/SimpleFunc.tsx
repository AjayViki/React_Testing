import { SimpleProps } from "./SimpleProp.types";
// const SimpleFunc = (users: SimpleProps[]) => { //There are two options to declare an array. Ex : SimpleProps[], Array<SimpleProps>
const SimpleFunc = (users: Array<SimpleProps>) => {
  const onselect = (
    e: React.MouseEvent<HTMLLIElement>,
    FirstName: string,
    index: number
  ) => {};
  return (
    <div>
      {/* Object Example */}
      {/* Hello {props.FirstName} {props.LastName} Age is {props.Age}. He lived in{" "}
      {props.Address.city} */}

      {/* Array of Object example */}
      {users.map((user, i) => (
        <ul>
          <li onClick={(e) => onselect(e, user.FirstName, i)}>
            {user.FirstName}
          </li>
          <li>{user.LastName}</li>
          <li>{user.Age}</li>
        </ul>
      ))}
    </div>
  );
};

export default SimpleFunc;
