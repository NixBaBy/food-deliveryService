type Food = {
  id: number;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: number;
  createdAt: Date;
  updatedAt: Date;
};

export const foods: Food[] = [
  {
    id: 1,
    foodName: "Finger food",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    foodName: "Cranberry Brie Bites",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    foodName: "Sunshine Stackers",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    foodName: "Brie Crostini Appetizer",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    foodName: "Sunshine Stackers",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    foodName: "Grilled chicken",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 7,
    foodName: "Grilled chicken cobb salad",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 8,
    foodName: "Burrata Caprese",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 9,
    foodName: "Betrood and orange salad",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 10,
    foodName: "Sunshine Stackers",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 11,
    foodName: "Sunshine Stackers",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 12,
    foodName: "Sunshine Stackers",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 13,
    foodName: "Sunshine Stackers",
    price: 12.99,
    image:
      "https://s3-alpha-sig.figma.com/img/4ff5/1a14/c041fc57196ebf52f07e524b5e4cc98c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CXfX5Ub0OBp~L6ZfLA6pmlciGD010SJYaNXToOB9tOyUqVRMzJEbQaS6kAAkXbbidE9A48BQY8L8AUEWGQ1oWacol5UCp5FrOvVjKxFRPOs8Lyzqsua6FpDQ0AOVn1hj65dgmgSBCVyfWuyHBVVBsrRd6CBPDLjotUrzvgxP7seJwqXiQKxFPQu4ue6K1L5SCht~E1KyaLzIxzrSjoQlj1IzUslACWRx4gtpC6ud9mIbPcAv~mJKYyBVC0AhZfiOFQf-R20W~dP5zvc1B49N1DYJdUrNK1hcEJV5-qLlH3BWdmuE7-nJXnvoaCw0nP2dcZW55BNsLbJgtf-1DwYWZA__",
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    category: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
