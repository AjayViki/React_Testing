// export type SimpleProps = {
//   FirstName: string;
//   LastName: string;
//   Age: number;
// };

type Address = {
  city: string;
  pincode: number;
};

export type SimpleProps = {
  FirstName: string;
  LastName: string;
  Age: number;
  Address: Address | null;
};
