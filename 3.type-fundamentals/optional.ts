type User = {
    name: string;
    age?: number
}

const cory: User = {
    name: "Cory"
}

// Many optional fields
type UserManyOptional = {
  name: string;
  city?: string;
  country?: string;
  postalCode?: string;
};

// Prefer
type UserGroupedOptional = {
  name: string;
  address?: {
    city: string;
    country: string;
    postalCode: string;
  };
};

const user1: UserManyOptional = {
  name: "Alice",
  city: "New York",
  country: "USA",
  postalCode: "10001",
};

const user2: UserGroupedOptional = {
  name: "Alice",
  address: {
    city: "New York",
    country: "USA",
    postalCode: "10001",
  },
};


// Define an interface for a User with the following fields:
// - id (number)
// - email (optional string)

type User2 = {
    id: number;
    email?: string
}
