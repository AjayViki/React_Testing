// export type ButtonProps = {
//   onClick: () => void; // no arguments, returns nothing
// };

export type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // no arguments, returns nothing
};
