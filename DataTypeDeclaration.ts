type details = { [key: string]: string | boolean | number };
let customerDetails: details = {
  CustomerName: "Balu Naidu",
  CustomerAge: 25,
  CustomerAddres: "Andhra Pradesh",
  Ispurchase: true,
};
console.log(customerDetails);
type restited_datatype = {
  name: string;
  age: number;
  dateofbirth: number;
  mothername: string;
  fathername: string;
  isalive: boolean;
};
let customer2_details: restited_datatype = {
  name: "viggu",
  age: 21,
  dateofbirth: 2004,
  mothername: "rani",
  fathername: "ragava",
  isalive: false,
};
console.log(customer2_details);
